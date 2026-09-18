-- Sequence 9: allow the server-only Supabase service role to read J2H catalog/progress
-- for saved-Journey rendering. Browser roles remain without direct table access.
grant select on table public.j2h_content_items to service_role;
grant select on table public.j2h_progress to service_role;
