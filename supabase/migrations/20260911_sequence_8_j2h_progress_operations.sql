-- Faith Changes Everything
-- Journey to Hope - Sequence 8 controlled progress operations
-- Completion eligibility is stored separately from the final completion action so
-- implementation testing can tune eligibility thresholds without weakening the
-- locked rule that completion must be deliberate and engagement-based.

alter table public.j2h_progress
  add column if not exists completion_eligible_at timestamptz;

create or replace function public.j2h_start_item(
  p_journey uuid,
  p_content_key text
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_status text;
begin
  if not exists (
    select 1 from public.j2h_content_items
    where content_key = p_content_key and active
  ) then
    return null;
  end if;

  insert into public.j2h_progress (
    journey_id, content_key, status, first_started_at, updated_at
  ) values (
    p_journey, p_content_key, 'in_progress', now(), now()
  )
  on conflict (journey_id, content_key) do update set
    updated_at = case
      when public.j2h_progress.status = 'in_progress' then public.j2h_progress.updated_at
      else public.j2h_progress.updated_at
    end;

  select status into v_status
  from public.j2h_progress
  where journey_id = p_journey and content_key = p_content_key;

  return v_status;
end;
$$;

create or replace function public.j2h_mark_meaningful_view(
  p_journey uuid,
  p_content_key text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.j2h_content_items
    where content_key = p_content_key and active
  ) then
    return false;
  end if;

  insert into public.j2h_progress (
    journey_id, content_key, status, first_started_at, last_viewed_at, updated_at
  ) values (
    p_journey, p_content_key, 'in_progress', now(), now(), now()
  )
  on conflict (journey_id, content_key) do update set
    last_viewed_at = now(),
    updated_at = now();

  return true;
end;
$$;

create or replace function public.j2h_mark_completion_eligible(
  p_journey uuid,
  p_content_key text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.j2h_progress p
  set completion_eligible_at = coalesce(p.completion_eligible_at, now()),
      updated_at = now()
  from public.j2h_content_items c
  where p.journey_id = p_journey
    and p.content_key = p_content_key
    and c.content_key = p.content_key
    and c.active
    and c.completion_tracked;

  return found;
end;
$$;

create or replace function public.j2h_award_earned_milestones(p_journey uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_step smallint;
  v_total integer;
  v_completed integer;
begin
  for v_step in 1..6 loop
    select count(*) into v_total
    from public.j2h_content_items
    where step_number = v_step
      and active
      and completion_tracked;

    select count(*) into v_completed
    from public.j2h_content_items c
    join public.j2h_progress p
      on p.content_key = c.content_key
     and p.journey_id = p_journey
     and p.status = 'completed'
    where c.step_number = v_step
      and c.active
      and c.completion_tracked;

    if v_total > 0 and v_completed = v_total then
      insert into public.j2h_earned_milestones (
        journey_id, milestone_key, milestone_kind, step_number
      ) values (
        p_journey, 'step-' || v_step::text, 'step', v_step
      ) on conflict (journey_id, milestone_key) do nothing;
    end if;
  end loop;

  select count(*) into v_total
  from public.j2h_content_items
  where active and completion_tracked;

  select count(*) into v_completed
  from public.j2h_content_items c
  join public.j2h_progress p
    on p.content_key = c.content_key
   and p.journey_id = p_journey
   and p.status = 'completed'
  where c.active and c.completion_tracked;

  if v_total > 0 and v_completed = v_total then
    insert into public.j2h_earned_milestones (
      journey_id, milestone_key, milestone_kind, step_number
    ) values (
      p_journey, 'journey-complete', 'journey', null
    ) on conflict (journey_id, milestone_key) do nothing;
  end if;
end;
$$;

create or replace function public.j2h_mark_completed(
  p_journey uuid,
  p_content_key text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_now timestamptz := now();
  v_existing public.j2h_progress%rowtype;
begin
  select p.* into v_existing
  from public.j2h_progress p
  join public.j2h_content_items c on c.content_key = p.content_key
  where p.journey_id = p_journey
    and p.content_key = p_content_key
    and c.active
    and c.completion_tracked
  for update;

  if not found or v_existing.completion_eligible_at is null then
    return false;
  end if;

  if v_existing.status = 'completed' then
    return true;
  end if;

  update public.j2h_progress
  set status = 'completed',
      first_completed_at = coalesce(first_completed_at, v_now),
      last_completed_at = v_now,
      updated_at = v_now
  where journey_id = p_journey and content_key = p_content_key;

  perform public.j2h_award_earned_milestones(p_journey);
  return true;
end;
$$;

create or replace function public.j2h_reverse_completion(
  p_journey uuid,
  p_content_key text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.j2h_progress
  set status = 'in_progress',
      updated_at = now()
  where journey_id = p_journey
    and content_key = p_content_key
    and status = 'completed';

  return found;
end;
$$;

create or replace function public.j2h_get_progress_summary(p_journey uuid)
returns jsonb
language sql
security definer
set search_path = public
as $$
with totals as (
  select
    count(*) filter (where active and completion_tracked) as journey_total,
    count(*) filter (
      where active and completion_tracked and exists (
        select 1 from public.j2h_progress p
        where p.journey_id = p_journey
          and p.content_key = c.content_key
          and p.status = 'completed'
      )
    ) as journey_completed
  from public.j2h_content_items c
), step_rows as (
  select
    s.step_number,
    count(*) filter (where c.active and c.completion_tracked) as total,
    count(*) filter (
      where c.active and c.completion_tracked and exists (
        select 1 from public.j2h_progress p
        where p.journey_id = p_journey
          and p.content_key = c.content_key
          and p.status = 'completed'
      )
    ) as completed,
    count(*) filter (
      where c.active and c.completion_tracked and exists (
        select 1 from public.j2h_progress p
        where p.journey_id = p_journey
          and p.content_key = c.content_key
      )
    ) as started
  from generate_series(1,6) as s(step_number)
  left join public.j2h_content_items c on c.step_number = s.step_number
  group by s.step_number
)
select jsonb_build_object(
  'completed', totals.journey_completed,
  'total', totals.journey_total,
  'percent', case when totals.journey_total = 0 then 0
    else round((totals.journey_completed::numeric / totals.journey_total::numeric) * 100, 1) end,
  'earned_journey_completion', exists (
    select 1 from public.j2h_earned_milestones
    where journey_id = p_journey and milestone_key = 'journey-complete'
  ),
  'steps', (
    select jsonb_agg(jsonb_build_object(
      'step', sr.step_number,
      'completed', sr.completed,
      'total', sr.total,
      'status', case
        when sr.total > 0 and sr.completed = sr.total then 'completed'
        when sr.started > 0 then 'in_progress'
        else 'not_started'
      end,
      'earned_completion', exists (
        select 1 from public.j2h_earned_milestones em
        where em.journey_id = p_journey
          and em.milestone_key = 'step-' || sr.step_number::text
      )
    ) order by sr.step_number)
    from step_rows sr
  )
)
from totals;
$$;

-- Privileged progress operations are callable only by the service role.
revoke all on function public.j2h_start_item(uuid,text) from public, anon, authenticated;
revoke all on function public.j2h_mark_meaningful_view(uuid,text) from public, anon, authenticated;
revoke all on function public.j2h_mark_completion_eligible(uuid,text) from public, anon, authenticated;
revoke all on function public.j2h_award_earned_milestones(uuid) from public, anon, authenticated;
revoke all on function public.j2h_mark_completed(uuid,text) from public, anon, authenticated;
revoke all on function public.j2h_reverse_completion(uuid,text) from public, anon, authenticated;
revoke all on function public.j2h_get_progress_summary(uuid) from public, anon, authenticated;

grant execute on function public.j2h_start_item(uuid,text) to service_role;
grant execute on function public.j2h_mark_meaningful_view(uuid,text) to service_role;
grant execute on function public.j2h_mark_completion_eligible(uuid,text) to service_role;
grant execute on function public.j2h_award_earned_milestones(uuid) to service_role;
grant execute on function public.j2h_mark_completed(uuid,text) to service_role;
grant execute on function public.j2h_reverse_completion(uuid,text) to service_role;
grant execute on function public.j2h_get_progress_summary(uuid) to service_role;
