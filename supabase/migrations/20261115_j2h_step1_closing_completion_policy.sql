-- Faith Changes Everything
-- Journey to Hope - Step 1 closing completion policy
--
-- 1.f and 1.g are visually presented as closing actions rather than normal
-- lesson cards, but both are required completion units for Step 1.
--
-- Eligibility remains deliberate and engagement-based:
--   * reading at least 50% of the closing content, OR
--   * genuinely listening to at least 90% of its recording.
--
-- Eligibility does not auto-complete either item. The visitor still chooses
-- the existing manual "Mark Lesson Complete" action.

update public.j2h_content_items
set item_kind = 'lesson',
    completion_tracked = true,
    updated_at = now()
where content_key in ('1.f', '1.g');

insert into public.j2h_completion_policies (
  content_key,
  enabled,
  written_percent_required,
  minimum_active_seconds,
  audio_percent_required,
  video_percent_required,
  policy_note,
  updated_at
)
values
  (
    '1.f',
    true,
    50,
    null,
    90,
    null,
    'Step 1 closing prayer: 50% written OR 90% actual audio playback; completion remains manual',
    now()
  ),
  (
    '1.g',
    true,
    50,
    null,
    90,
    null,
    'Step 1 closing encouragement: 50% written OR 90% actual audio playback; completion remains manual',
    now()
  )
on conflict (content_key) do update
set enabled = excluded.enabled,
    written_percent_required = excluded.written_percent_required,
    minimum_active_seconds = excluded.minimum_active_seconds,
    audio_percent_required = excluded.audio_percent_required,
    video_percent_required = excluded.video_percent_required,
    policy_note = excluded.policy_note,
    updated_at = excluded.updated_at;
