-- Faith Changes Everything
-- Launch privacy hardening for Journey to Hope permanent deletion
-- Removes the anonymous Journey record, all cascade-linked progress/session data,
-- and any credential-attempt state derived from the deleted Journey ID.

create or replace function public.j2h_delete_journey(
  p_journey uuid,
  p_passcode text
)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_hash text;
  v_journey_id_digest bytea;
begin
  select passcode_hash, journey_id_digest
  into v_hash, v_journey_id_digest
  from public.j2h_journeys
  where id = p_journey
  for update;

  if not found or p_passcode !~ '^[0-9]{4}$' or v_hash <> crypt(p_passcode, v_hash) then
    return false;
  end if;

  -- Remove security-throttle state derived from this Journey ID so no reconnectable
  -- or credential-derived Journey record remains after a visitor chooses deletion.
  delete from public.j2h_access_attempts
  where journey_id_digest = v_journey_id_digest;

  -- Foreign keys with ON DELETE CASCADE remove Journey sessions, progress rows,
  -- and earned milestones. Aggregate non-identifying ministry analytics are kept
  -- separate and are not keyed to the Journey ID.
  delete from public.j2h_journeys
  where id = p_journey;

  return found;
end;
$$;

revoke all on function public.j2h_delete_journey(uuid,text) from public, anon, authenticated;
grant execute on function public.j2h_delete_journey(uuid,text) to service_role;
