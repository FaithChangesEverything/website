import "server-only";

import { createServiceClient } from "@/utils/supabase/service";
import { getCurrentJourneyUuid } from "./server";

export type JourneyProgressSummary = {
  completed: number;
  total: number;
  percent: number;
  earned_journey_completion: boolean;
  steps: Array<{
    step: number;
    completed: number;
    total: number;
    status: "not_started" | "in_progress" | "completed";
    earned_completion: boolean;
  }>;
};

async function currentJourney() {
  return getCurrentJourneyUuid();
}

export async function startJourneyItem(contentKey: string) {
  const journey = await currentJourney();
  if (!journey) return { saved: false as const, reason: "no_journey" as const };

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_start_item", {
    p_journey: journey,
    p_content_key: contentKey,
  });

  if (error || (data !== "in_progress" && data !== "completed")) {
    return { saved: false as const, reason: "save_failed" as const };
  }

  return { saved: true as const, status: data };
}

export async function recordMeaningfulJourneyView(contentKey: string) {
  const journey = await currentJourney();
  if (!journey) return { saved: false as const, reason: "no_journey" as const };

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_mark_meaningful_view", {
    p_journey: journey,
    p_content_key: contentKey,
  });

  if (error || data !== true) {
    return { saved: false as const, reason: "save_failed" as const };
  }

  return { saved: true as const };
}

/**
 * Internal Sequence 8 hook. Do not expose this directly to the browser.
 * The lesson engagement evaluator will call it only after the lesson-specific
 * completion-eligibility rule has been satisfied.
 */
export async function markJourneyCompletionEligible(contentKey: string) {
  const journey = await currentJourney();
  if (!journey) return false;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_mark_completion_eligible", {
    p_journey: journey,
    p_content_key: contentKey,
  });

  return !error && data === true;
}

export async function completeJourneyItem(contentKey: string) {
  const journey = await currentJourney();
  if (!journey) return { saved: false as const, reason: "no_journey" as const };

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_mark_completed", {
    p_journey: journey,
    p_content_key: contentKey,
  });

  if (error || data !== true) {
    return { saved: false as const, reason: "not_eligible_or_failed" as const };
  }

  return { saved: true as const };
}

export async function reverseJourneyItemCompletion(contentKey: string) {
  const journey = await currentJourney();
  if (!journey) return { saved: false as const, reason: "no_journey" as const };

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_reverse_completion", {
    p_journey: journey,
    p_content_key: contentKey,
  });

  if (error || data !== true) {
    return { saved: false as const, reason: "save_failed" as const };
  }

  return { saved: true as const };
}

export async function getJourneyProgressSummary(): Promise<JourneyProgressSummary | null> {
  const journey = await currentJourney();
  if (!journey) return null;

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_get_progress_summary", {
    p_journey: journey,
  });

  if (error || !data || typeof data !== "object") return null;
  return data as JourneyProgressSummary;
}
