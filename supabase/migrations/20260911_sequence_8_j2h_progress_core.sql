-- Faith Changes Everything
-- Journey to Hope - Sequence 8 core progress schema
-- Source of truth: J2H Sequence 8 Handbook Rev 1.0
-- This migration creates the protected data model only. Public/client access is
-- intentionally denied until the server/RPC authorization layer is added.

create extension if not exists pgcrypto;

create table if not exists public.j2h_journeys (
  id uuid primary key default gen_random_uuid(),
  journey_id_digest bytea not null unique,
  passcode_hash text not null,
  created_at timestamptz not null default now(),
  credentials_updated_at timestamptz not null default now()
);

comment on table public.j2h_journeys is
  'Anonymous J2H saved-progress identities. Stores a one-way Journey ID digest and passcode hash; no name/email/phone identity fields.';

create table if not exists public.j2h_sessions (
  id uuid primary key default gen_random_uuid(),
  journey_id uuid not null references public.j2h_journeys(id) on delete cascade,
  token_digest bytea not null unique,
  remember_on_device boolean not null default false,
  created_at timestamptz not null default now(),
  last_active_at timestamptz not null default now(),
  absolute_expires_at timestamptz,
  invalidated_at timestamptz
);

create index if not exists j2h_sessions_journey_id_idx
  on public.j2h_sessions(journey_id);
create index if not exists j2h_sessions_last_active_idx
  on public.j2h_sessions(last_active_at);

comment on table public.j2h_sessions is
  'Opaque J2H Journey sessions. Only token digests are stored; raw session tokens are never persisted.';

create table if not exists public.j2h_access_attempts (
  journey_id_digest bytea primary key,
  consecutive_failures smallint not null default 0 check (consecutive_failures >= 0),
  last_failure_at timestamptz,
  blocked_until timestamptz,
  updated_at timestamptz not null default now()
);

comment on table public.j2h_access_attempts is
  'Credential-attempt protection keyed by one-way Journey ID digest, including nonexistent IDs, to support neutral responses and enumeration resistance.';

create table if not exists public.j2h_content_items (
  content_key text primary key,
  step_number smallint not null check (step_number between 1 and 6),
  parent_key text references public.j2h_content_items(content_key) on update cascade on delete restrict,
  title text not null,
  href text,
  item_kind text not null check (item_kind in (
    'step',
    'lesson',
    'series',
    'series_lesson',
    'pastor_letter',
    'supporting_resource',
    'navigation'
  )),
  completion_tracked boolean not null default false,
  active boolean not null default true,
  sort_order integer not null check (sort_order >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists j2h_content_items_step_sort_idx
  on public.j2h_content_items(step_number, sort_order);
create index if not exists j2h_content_items_parent_idx
  on public.j2h_content_items(parent_key);
create index if not exists j2h_content_items_completion_idx
  on public.j2h_content_items(step_number, active, completion_tracked);

comment on table public.j2h_content_items is
  'Authoritative database catalog for J2H structural items. Only active lowest-level items marked completion_tracked contribute to current progress percentages.';

create table if not exists public.j2h_progress (
  journey_id uuid not null references public.j2h_journeys(id) on delete cascade,
  content_key text not null references public.j2h_content_items(content_key) on update cascade on delete restrict,
  status text not null check (status in ('in_progress', 'completed')),
  first_started_at timestamptz not null,
  last_viewed_at timestamptz,
  first_completed_at timestamptz,
  last_completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (journey_id, content_key),
  constraint j2h_progress_completion_timestamps_chk check (
    (status = 'in_progress')
    or
    (status = 'completed' and first_completed_at is not null and last_completed_at is not null)
  )
);

create index if not exists j2h_progress_journey_status_idx
  on public.j2h_progress(journey_id, status);
create index if not exists j2h_progress_last_viewed_idx
  on public.j2h_progress(journey_id, last_viewed_at desc nulls last);

comment on table public.j2h_progress is
  'Per-Journey lesson progress. Absence of a row means Not Started. Reversal returns Completed to In Progress while retaining First Completed At.';

create table if not exists public.j2h_earned_milestones (
  journey_id uuid not null references public.j2h_journeys(id) on delete cascade,
  milestone_key text not null,
  milestone_kind text not null check (milestone_kind in ('step', 'journey')),
  step_number smallint check (step_number between 1 and 6),
  first_earned_at timestamptz not null default now(),
  last_earned_at timestamptz not null default now(),
  primary key (journey_id, milestone_key),
  constraint j2h_earned_milestones_shape_chk check (
    (milestone_kind = 'step' and step_number is not null)
    or
    (milestone_kind = 'journey' and step_number is null)
  )
);

comment on table public.j2h_earned_milestones is
  'Preserved earned Step/Journey completion state, separate from current-content coverage so later content additions do not revoke legitimate earned completion.';

create table if not exists public.j2h_system_health_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  event_type text not null,
  severity text not null check (severity in ('info', 'warning', 'error', 'critical')),
  component text not null,
  detail_code text,
  detail jsonb not null default '{}'::jsonb
);

create index if not exists j2h_system_health_events_occurred_idx
  on public.j2h_system_health_events(occurred_at desc);

comment on table public.j2h_system_health_events is
  'Technical J2H system-health records. Do not store Journey IDs, passcodes, personal Journey histories, or unnecessary visitor information. Normal retention is 90 days.';

create table if not exists public.fce_site_operating_state (
  singleton boolean primary key default true check (singleton),
  mode text not null default 'normal' check (mode in ('normal', 'restricted', 'full_lockdown')),
  public_message text,
  changed_at timestamptz not null default now(),
  changed_by uuid references auth.users(id) on delete set null
);

insert into public.fce_site_operating_state (singleton, mode)
values (true, 'normal')
on conflict (singleton) do nothing;

comment on table public.fce_site_operating_state is
  'Site-wide FCE emergency operating state: normal, restricted/read-only, or full lockdown.';

create table if not exists public.fce_security_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  actor_user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  operating_mode text check (operating_mode in ('normal', 'restricted', 'full_lockdown')),
  detail jsonb not null default '{}'::jsonb
);

create index if not exists fce_security_events_occurred_idx
  on public.fce_security_events(occurred_at desc);

comment on table public.fce_security_events is
  'Protected administrator security-event record, including emergency lockdown activation/restoration. Avoid unnecessary visitor information.';

-- Direct client access is intentionally closed. Future Sequence 8 migrations will
-- expose only narrowly scoped, server-authorized operations.
alter table public.j2h_journeys enable row level security;
alter table public.j2h_sessions enable row level security;
alter table public.j2h_access_attempts enable row level security;
alter table public.j2h_content_items enable row level security;
alter table public.j2h_progress enable row level security;
alter table public.j2h_earned_milestones enable row level security;
alter table public.j2h_system_health_events enable row level security;
alter table public.fce_site_operating_state enable row level security;
alter table public.fce_security_events enable row level security;

revoke all on table public.j2h_journeys from anon, authenticated;
revoke all on table public.j2h_sessions from anon, authenticated;
revoke all on table public.j2h_access_attempts from anon, authenticated;
revoke all on table public.j2h_content_items from anon, authenticated;
revoke all on table public.j2h_progress from anon, authenticated;
revoke all on table public.j2h_earned_milestones from anon, authenticated;
revoke all on table public.j2h_system_health_events from anon, authenticated;
revoke all on table public.fce_site_operating_state from anon, authenticated;
revoke all on table public.fce_security_events from anon, authenticated;

-- Identity sequences are also not client-writable.
revoke all on sequence public.j2h_system_health_events_id_seq from anon, authenticated;
revoke all on sequence public.fce_security_events_id_seq from anon, authenticated;
