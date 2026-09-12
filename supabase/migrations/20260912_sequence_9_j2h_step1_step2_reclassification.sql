-- Sequence 9 correction approved during browser review.
-- 1.f A Prayer for Today and 2.g Final Encouragement are standalone Step-level
-- content windows, not completion-tracked lessons.

update public.j2h_content_items
set item_kind = 'content_section',
    completion_tracked = false,
    updated_at = now()
where content_key in ('1.f', '2.g');

delete from public.j2h_completion_policies
where content_key in ('1.f', '2.g');
