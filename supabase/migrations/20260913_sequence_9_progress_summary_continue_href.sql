-- Faith Changes Everything
-- Journey to Hope - Sequence 9 progress summary continue destination

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
), continue_row as (
  select c.href
  from public.j2h_progress p
  join public.j2h_content_items c on c.content_key = p.content_key
  where p.journey_id = p_journey
    and p.status = 'in_progress'
    and c.active
    and c.completion_tracked
    and c.href is not null
    and c.href like '/journey%'
  order by greatest(coalesce(p.last_viewed_at, p.first_started_at), p.updated_at) desc
  limit 1
)
select jsonb_build_object(
  'completed', totals.journey_completed,
  'total', totals.journey_total,
  'percent', case when totals.journey_total = 0 then 0
    else round((totals.journey_completed::numeric / totals.journey_total::numeric) * 100, 1) end,
  'continue_href', coalesce((select href from continue_row), '/journey'),
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
