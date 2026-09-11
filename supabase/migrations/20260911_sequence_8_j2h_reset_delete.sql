-- Faith Changes Everything
-- Journey to Hope - Sequence 8 reset and deletion operations

create or replace function public.j2h_reset_journey(p_journey uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.j2h_journeys where id = p_journey) then
    return false;
  end if;

  delete from public.j2h_progress where journey_id = p_journey;
  delete from public.j2h_earned_milestones where journey_id = p_journey;
  return true;
end;
$$;

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
begin
  select passcode_hash into v_hash
  from public.j2h_journeys
  where id = p_journey
  for update;

  if not found or p_passcode !~ '^[0-9]{4}$' or v_hash <> crypt(p_passcode, v_hash) then
    return false;
  end if;

  -- Cascading foreign keys remove all reconnectable personal progress and sessions.
  -- Aggregate non-identifying ministry analytics are intentionally separate and are
  -- not deleted by this function.
  delete from public.j2h_journeys where id = p_journey;
  return found;
end;
$$;

revoke all on function public.j2h_reset_journey(uuid) from public, anon, authenticated;
revoke all on function public.j2h_delete_journey(uuid,text) from public, anon, authenticated;
grant execute on function public.j2h_reset_journey(uuid) to service_role;
grant execute on function public.j2h_delete_journey(uuid,text) to service_role;
