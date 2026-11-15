-- Faith Changes Everything
-- Journey to Hope - Rev 1.7 / 1.c Study 1 proof-of-concept completion policy
--
-- The visitor becomes eligible to manually mark this study complete after either:
--   * reading at least 50% of the study, or
--   * genuinely listening to at least 90% of its recording.
--
-- This migration does NOT auto-complete the study. The existing manual
-- "Mark Study Complete" action remains authoritative.

update public.j2h_completion_policies
set enabled = true,
    written_percent_required = 50,
    minimum_active_seconds = null,
    audio_percent_required = 90,
    video_percent_required = null,
    policy_note = 'Rev 1.7 proof of concept: 50% written OR 90% actual audio playback; completion remains manual',
    updated_at = now()
where content_key = '1.c.study-1';
