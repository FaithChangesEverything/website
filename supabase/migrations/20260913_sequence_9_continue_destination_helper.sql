-- Faith Changes Everything
-- Journey to Hope - Sequence 9 Continue My Journey destination helper

create or replace function public.j2h_get_continue_destination(p_journey uuid)
returns text
language sql
as $$
  select coalesce((
    select c.href
    from public.j2h_progress p
    join public.j2h_content_items c on c.content_key = p.content_key
    where p.journey_id = p_journey
      and p.status = 'in_progress'
      and c.active
      and c.completion_tracked
      and c.href is not null
    order by greatest(coalesce(p.last_viewed_at, p.first_started_at), p.updated_at) desc
    limit 1
  ), '/journey');
$$;

revoke all on function public.j2h_get_continue_destination(uuid) from public, anon, authenticated;
grant execute on function public.j2h_get_continue_destination(uuid) to service_role;
