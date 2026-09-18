-- Faith Changes Everything
-- Journey to Hope - remembered-session refresh support

create or replace function public.j2h_resolve_session_info(p_token_digest bytea)
returns jsonb
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

  return jsonb_build_object(
    'journey_id', v_session.journey_id,
    'remember_on_device', v_session.remember_on_device
  );
end;
$$;

revoke all on function public.j2h_resolve_session_info(bytea) from public, anon, authenticated;
grant execute on function public.j2h_resolve_session_info(bytea) to service_role;
