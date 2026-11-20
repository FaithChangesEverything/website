-- Journey to Hope completion eligibility — staged rollout
-- Approved: written progress >= 50%; audio progress >= 90%;
-- no minimum active-time requirement.
-- This file is NOT executed by deployment. Review/test before applying to shared production Supabase.
-- Scope: active completion-tracked lessons and studies from Steps 1–5.
-- Step 6 is a set of resource invitations, not lesson-completion requirements.
--
-- Read-only PRECHECK:
-- SELECT c.content_key, c.step_number, c.completion_tracked, p.enabled,
--        p.written_percent_required, p.audio_percent_required, p.minimum_active_seconds
-- FROM public.j2h_content_items c
-- LEFT JOIN public.j2h_completion_policies p USING (content_key)
-- WHERE c.active AND c.completion_tracked
-- ORDER BY c.step_number,c.sort_order;
--
-- APPLY ONLY AFTER PREVIEW QA AND EXPLICIT APPROVAL:
BEGIN;
UPDATE public.j2h_completion_policies AS p
SET enabled = TRUE,
    written_percent_required = 50,
    audio_percent_required = 90,
    minimum_active_seconds = NULL,
    video_percent_required = NULL,
    policy_note = 'J2H V1: written >=50% OR audio >=90%; no minimum time. Steps 1–5 tracked lessons/studies.',
    updated_at = NOW()
FROM public.j2h_content_items AS c
WHERE p.content_key = c.content_key
  AND c.active = TRUE
  AND c.completion_tracked = TRUE
  AND c.step_number BETWEEN 1 AND 5;
COMMIT;
--
-- VERIFY AFTER APPLY:
-- SELECT c.content_key, p.enabled, p.written_percent_required, p.audio_percent_required,
--        p.minimum_active_seconds
-- FROM public.j2h_content_items AS c
-- JOIN public.j2h_completion_policies AS p USING (content_key)
-- WHERE c.active AND c.completion_tracked AND c.step_number BETWEEN 1 AND 5
-- ORDER BY c.step_number, c.sort_order;
--
-- NOTE: Separate review needed to decide how best to retire legacy
-- Step 6 completion_tracking without changing already earned progress.
