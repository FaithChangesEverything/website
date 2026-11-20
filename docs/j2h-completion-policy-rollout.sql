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
-- Guard against accidentally applying a rollout to a changed inventory.
DO $
DECLARE
  v_expected integer;
  v_missing integer;
BEGIN
  SELECT COUNT(*), COUNT(*) FILTER (WHERE p.content_key IS NULL)
  INTO v_expected, v_missing
  FROM public.j2h_content_items AS c
  LEFT JOIN public.j2h_completion_policies AS p USING (content_key)
  WHERE c.active AND c.completion_tracked AND c.step_number BETWEEN 1 AND 5;

  IF v_expected <> 33 OR v_missing <> 0 THEN
    RAISE EXCEPTION 'J2H policy rollout stopped: expected 33 tracked items, found % (% missing policies)', v_expected, v_missing;
  END IF;
END $;

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

-- All 33 tracked Step 1–5 items must meet the approved rule.
DO $
DECLARE
  v_valid integer;
BEGIN
  SELECT COUNT(*) INTO v_valid
  FROM public.j2h_content_items AS c
  JOIN public.j2h_completion_policies AS p USING (content_key)
  WHERE c.active AND c.completion_tracked AND c.step_number BETWEEN 1 AND 5
    AND p.enabled
    AND p.written_percent_required = 50
    AND p.audio_percent_required = 90
    AND p.minimum_active_seconds IS NULL;
  IF v_valid <> 33 THEN
    RAISE EXCEPTION 'J2H policy rollout failed validation: % of 33 policies valid', v_valid;
  END IF;
END $;
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

-- ROLLBACK NOTES:
-- Before activation export the current policy rows (including policy_note)
-- to retain an exact restoration point. Rolling back the website alone does
-- not undo a database configuration change. Do not overwrite saved progress.
-- For the original 2026-11-20 baseline only: 1.f and 1.g enabled (written
-- 50%, audio 90%, no time); all other tracked items disabled, with nullable
-- thresholds unset. Restore from the actual export instead of assuming this
-- baseline still applies in the future.
