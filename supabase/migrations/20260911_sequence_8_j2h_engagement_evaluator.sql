-- Faith Changes Everything
-- Journey to Hope - Sequence 8 completion engagement evaluator
-- Source of truth: J2H Sequence 8 Handbook Rev 1.0
--
-- This keeps the database authoritative while minimizing surveillance. The browser
-- may report coarse engagement evidence; the database decides whether that evidence
-- satisfies Meaningful View and, once enabled, lesson-specific completion eligibility.
-- Exact completion thresholds remain intentionally disabled until real lesson/audio
-- lengths are reviewed during Sequence 8 testing.

create table if not exists public.j2h_completion_policies (
  content_key text primary key references public.j2h_content_items(content_key) on update cascade on delete cascade,
  enabled boolean not null default false,
  written_percent_required smallint check (written_percent_required between 1 and 100),
  minimum_active_seconds integer check (minimum_active_seconds is null or minimum_active_seconds >= 0),
  audio_percent_required smallint check (audio_percent_required between 1 and 100),
  video_percent_required smallint check (video_percent_required between 1 and 100),
  policy_note text not null default 'Pending review of real lesson length and media duration',
  updated_at timestamptz not null default now()
);

comment on table public.j2h_completion_policies is
  'Per-unit completion-eligibility policy. Policies remain disabled until real content/media are reviewed. This is intentionally separate from the locked 50% Meaningful View definition.';

-- Seed one disabled policy for every active completion-tracked unit. This makes the
-- 39-unit catalog explicit without inventing final eligibility thresholds.
insert into public.j2h_completion_policies (content_key)
select content_key
from public.j2h_content_items
where active and completion_tracked
on conflict (content_key) do nothing;

create or replace function public.j2h_record_engagement(
  p_journey uuid,
  p_content_key text,
  p_channel text,
  p_percent smallint default null,
  p_active_seconds integer default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_now timestamptz := now();
  v_meaningful boolean := false;
  v_eligible boolean := false;
  v_policy public.j2h_completion_policies%rowtype;
  v_status text;
begin
  if p_channel not in ('written', 'audio', 'video') then
    return jsonb_build_object('accepted', false, 'reason', 'invalid_channel');
  end if;

  if p_percent is null or p_percent < 0 or p_percent > 100 then
    return jsonb_build_object('accepted', false, 'reason', 'invalid_percent');
  end if;

  if p_active_seconds is not null and (p_active_seconds < 0 or p_active_seconds > 86400) then
    return jsonb_build_object('accepted', false, 'reason', 'invalid_active_seconds');
  end if;

  if not exists (
    select 1
    from public.j2h_content_items
    where content_key = p_content_key
      and active
      and completion_tracked
  ) then
    return jsonb_build_object('accepted', false, 'reason', 'not_tracked');
  end if;

  -- Ensure authenticated engagement has an In Progress row without disturbing a
  -- previously Completed state or its protected timestamps.
  insert into public.j2h_progress (
    journey_id, content_key, status, first_started_at, updated_at
  ) values (
    p_journey, p_content_key, 'in_progress', v_now, v_now
  )
  on conflict (journey_id, content_key) do nothing;

  -- Handbook Meaningful View definition:
  -- written = 50% of actual lesson content; audio/video = genuine playback begins.
  -- Client media evaluators report a positive playback percentage only after a play
  -- event, so >0 represents genuine playback having begun.
  v_meaningful := case
    when p_channel = 'written' then p_percent >= 50
    when p_channel in ('audio', 'video') then p_percent > 0
    else false
  end;

  if v_meaningful then
    update public.j2h_progress
    set last_viewed_at = v_now,
        updated_at = v_now
    where journey_id = p_journey
      and content_key = p_content_key;
  end if;

  select * into v_policy
  from public.j2h_completion_policies
  where content_key = p_content_key;

  -- Completion eligibility is deliberately inactive until the unit's policy has
  -- been reviewed and enabled. When enabled, a visitor may qualify through one
  -- configured channel. Written policies may optionally require a small active-time
  -- floor in addition to content coverage. No second-by-second history is stored.
  if found and v_policy.enabled then
    if p_channel = 'written'
       and v_policy.written_percent_required is not null
       and p_percent >= v_policy.written_percent_required
       and (v_policy.minimum_active_seconds is null
            or coalesce(p_active_seconds, 0) >= v_policy.minimum_active_seconds) then
      v_eligible := true;
    elsif p_channel = 'audio'
       and v_policy.audio_percent_required is not null
       and p_percent >= v_policy.audio_percent_required then
      v_eligible := true;
    elsif p_channel = 'video'
       and v_policy.video_percent_required is not null
       and p_percent >= v_policy.video_percent_required then
      v_eligible := true;
    end if;
  end if;

  if v_eligible then
    update public.j2h_progress
    set completion_eligible_at = coalesce(completion_eligible_at, v_now),
        updated_at = v_now
    where journey_id = p_journey
      and content_key = p_content_key;
  end if;

  select status into v_status
  from public.j2h_progress
  where journey_id = p_journey
    and content_key = p_content_key;

  return jsonb_build_object(
    'accepted', true,
    'meaningful_view', v_meaningful,
    'completion_eligible', v_eligible or exists (
      select 1 from public.j2h_progress
      where journey_id = p_journey
        and content_key = p_content_key
        and completion_eligible_at is not null
    ),
    'status', v_status
  );
end;
$$;

revoke all on table public.j2h_completion_policies from public, anon, authenticated;
alter table public.j2h_completion_policies enable row level security;

revoke all on function public.j2h_record_engagement(uuid,text,text,smallint,integer) from public, anon, authenticated;
grant execute on function public.j2h_record_engagement(uuid,text,text,smallint,integer) to service_role;
