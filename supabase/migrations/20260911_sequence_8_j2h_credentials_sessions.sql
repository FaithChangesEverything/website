-- Faith Changes Everything
-- Journey to Hope - Sequence 8 credential/session layer
-- Keeps Journey credentials and session state server/database authoritative.

-- Server callers supply a server-computed Journey ID digest. Raw Journey IDs and
-- passcodes are never stored. pgcrypto crypt() hashes the 4-digit passcode.

create or replace function public.j2h_create_journey(
  p_journey_id_digest bytea,
  p_passcode text
)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_journey uuid;
begin
  if p_journey_id_digest is null or octet_length(p_journey_id_digest) < 32 then
    raise exception 'invalid_journey_digest';
  end if;
  if p_passcode !~ '^[0-9]{4}$' then
    raise exception 'invalid_passcode';
  end if;

  insert into public.j2h_journeys (journey_id_digest, passcode_hash)
  values (p_journey_id_digest, crypt(p_passcode, gen_salt('bf', 12)))
  returning id into v_journey;

  return v_journey;
exception
  when unique_violation then
    raise exception 'journey_id_unavailable';
end;
$$;

create or replace function public.j2h_verify_credentials(
  p_journey_id_digest bytea,
  p_passcode text
)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_now timestamptz := now();
  v_journey public.j2h_journeys%rowtype;
  v_attempt public.j2h_access_attempts%rowtype;
  v_failures smallint;
begin
  if p_journey_id_digest is null or p_passcode !~ '^[0-9]{4}$' then
    return null;
  end if;

  select * into v_attempt
  from public.j2h_access_attempts
  where journey_id_digest = p_journey_id_digest;

  if found and v_attempt.blocked_until is not null and v_attempt.blocked_until > v_now then
    return null;
  end if;

  select * into v_journey
  from public.j2h_journeys
  where journey_id_digest = p_journey_id_digest;

  if found and v_journey.passcode_hash = crypt(p_passcode, v_journey.passcode_hash) then
    delete from public.j2h_access_attempts
    where journey_id_digest = p_journey_id_digest;
    return v_journey.id;
  end if;

  v_failures := coalesce(v_attempt.consecutive_failures, 0) + 1;
  insert into public.j2h_access_attempts (
    journey_id_digest, consecutive_failures, last_failure_at, blocked_until, updated_at
  ) values (
    p_journey_id_digest,
    v_failures,
    v_now,
    case when v_failures >= 5 then v_now + interval '15 minutes' else null end,
    v_now
  )
  on conflict (journey_id_digest) do update set
    consecutive_failures = excluded.consecutive_failures,
    last_failure_at = excluded.last_failure_at,
    blocked_until = excluded.blocked_until,
    updated_at = excluded.updated_at;

  return null;
end;
$$;

create or replace function public.j2h_create_session(
  p_journey uuid,
  p_token_digest bytea,
  p_remember boolean default false
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_session uuid;
begin
  if p_token_digest is null or octet_length(p_token_digest) < 32 then
    raise exception 'invalid_session_digest';
  end if;

  insert into public.j2h_sessions (
    journey_id, token_digest, remember_on_device, absolute_expires_at
  ) values (
    p_journey,
    p_token_digest,
    coalesce(p_remember, false),
    case when coalesce(p_remember, false) then now() + interval '30 days' else null end
  )
  returning id into v_session;

  return v_session;
end;
$$;

create or replace function public.j2h_resolve_session(p_token_digest bytea)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_now timestamptz := now();
  v_session public.j2h_sessions%rowtype;
begin
  select * into v_session
  from public.j2h_sessions
  where token_digest = p_token_digest
    and invalidated_at is null;

  if not found then
    return null;
  end if;

  if v_session.remember_on_device then
    if v_session.last_active_at < v_now - interval '30 days' then
      update public.j2h_sessions set invalidated_at = v_now where id = v_session.id;
      return null;
    end if;
  elsif v_session.absolute_expires_at is not null and v_session.absolute_expires_at <= v_now then
    update public.j2h_sessions set invalidated_at = v_now where id = v_session.id;
    return null;
  end if;

  update public.j2h_sessions
  set last_active_at = v_now,
      absolute_expires_at = case
        when remember_on_device then v_now + interval '30 days'
        else absolute_expires_at
      end
  where id = v_session.id;

  return v_session.journey_id;
end;
$$;

create or replace function public.j2h_invalidate_session(p_token_digest bytea)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.j2h_sessions
  set invalidated_at = coalesce(invalidated_at, now())
  where token_digest = p_token_digest;
  return found;
end;
$$;

create or replace function public.j2h_change_passcode(
  p_journey uuid,
  p_current_passcode text,
  p_new_passcode text
)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_hash text;
begin
  if p_new_passcode !~ '^[0-9]{4}$' then
    return false;
  end if;

  select passcode_hash into v_hash
  from public.j2h_journeys
  where id = p_journey;

  if not found or v_hash <> crypt(p_current_passcode, v_hash) then
    return false;
  end if;

  update public.j2h_journeys
  set passcode_hash = crypt(p_new_passcode, gen_salt('bf', 12)),
      credentials_updated_at = now()
  where id = p_journey;

  -- Changing credentials invalidates every existing Journey session.
  update public.j2h_sessions
  set invalidated_at = coalesce(invalidated_at, now())
  where journey_id = p_journey;

  return true;
end;
$$;

create or replace function public.j2h_change_journey_id(
  p_journey uuid,
  p_new_journey_id_digest bytea
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_new_journey_id_digest is null or octet_length(p_new_journey_id_digest) < 32 then
    return false;
  end if;

  update public.j2h_journeys
  set journey_id_digest = p_new_journey_id_digest,
      credentials_updated_at = now()
  where id = p_journey;

  if not found then return false; end if;

  update public.j2h_sessions
  set invalidated_at = coalesce(invalidated_at, now())
  where journey_id = p_journey;

  return true;
exception
  when unique_violation then return false;
end;
$$;

-- No browser role may invoke these privileged functions directly. They are for
-- controlled server-side use only.
revoke all on function public.j2h_create_journey(bytea, text) from public, anon, authenticated;
revoke all on function public.j2h_verify_credentials(bytea, text) from public, anon, authenticated;
revoke all on function public.j2h_create_session(uuid, bytea, boolean) from public, anon, authenticated;
revoke all on function public.j2h_resolve_session(bytea) from public, anon, authenticated;
revoke all on function public.j2h_invalidate_session(bytea) from public, anon, authenticated;
revoke all on function public.j2h_change_passcode(uuid, text, text) from public, anon, authenticated;
revoke all on function public.j2h_change_journey_id(uuid, bytea) from public, anon, authenticated;

grant execute on function public.j2h_create_journey(bytea, text) to service_role;
grant execute on function public.j2h_verify_credentials(bytea, text) to service_role;
grant execute on function public.j2h_create_session(uuid, bytea, boolean) to service_role;
grant execute on function public.j2h_resolve_session(bytea) to service_role;
grant execute on function public.j2h_invalidate_session(bytea) to service_role;
grant execute on function public.j2h_change_passcode(uuid, text, text) to service_role;
grant execute on function public.j2h_change_journey_id(uuid, bytea) to service_role;
