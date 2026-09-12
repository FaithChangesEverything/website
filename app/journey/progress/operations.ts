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

export type JourneyItemProgress = {
  status: "not_started" | "in_progress" | "completed";
  completionEligible: boolean;
};

export type JourneyDisplayState = "not_started" | "in_progress" | "completed" | "supporting";

export type JourneyDisplayItem = {
  state: JourneyDisplayState;
  tracked: boolean;
  completed?: number;
  total?: number;
};

export type JourneyEngagementChannel = "written" | "audio" | "video";

export type JourneyEngagementResult = {
  accepted: boolean;
  meaningful_view?: boolean;
  completion_eligible?: boolean;
  status?: "in_progress" | "completed";
  reason?: string;
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

export async function recordJourneyEngagement(
  contentKey: string,
  channel: JourneyEngagementChannel,
  percent: number,
  activeSeconds?: number,
): Promise<{ saved: boolean; result?: JourneyEngagementResult; reason?: "no_journey" | "save_failed" }> {
  const journey = await currentJourney();
  if (!journey) return { saved: false, reason: "no_journey" };

  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    return { saved: false, reason: "save_failed" };
  }

  if (activeSeconds !== undefined && (!Number.isFinite(activeSeconds) || activeSeconds < 0 || activeSeconds > 86400)) {
    return { saved: false, reason: "save_failed" };
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("j2h_record_engagement", {
    p_journey: journey,
    p_content_key: contentKey,
    p_channel: channel,
    p_percent: Math.round(percent),
    p_active_seconds: activeSeconds === undefined ? null : Math.round(activeSeconds),
  });

  if (error || !data || typeof data !== "object") {
    return { saved: false, reason: "save_failed" };
  }

  return { saved: true, result: data as JourneyEngagementResult };
}

/** Internal Sequence 8 hook retained for controlled testing only. Do not expose directly to the browser. */
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

export async function getJourneyItemProgress(contentKey: string): Promise<JourneyItemProgress | null> {
  const journey = await currentJourney();
  if (!journey) return null;

  const supabase = createServiceClient();
  const { data: item, error: itemError } = await supabase
    .from("j2h_content_items")
    .select("content_key, completion_tracked, active")
    .eq("content_key", contentKey)
    .maybeSingle();

  if (itemError || !item || !item.completion_tracked || !item.active) return null;

  const { data: progress, error: progressError } = await supabase
    .from("j2h_progress")
    .select("status, completion_eligible_at")
    .eq("journey_id", journey)
    .eq("content_key", contentKey)
    .maybeSingle();

  if (progressError) return null;
  if (!progress) return { status: "not_started", completionEligible: false };

  const status = progress.status;
  if (status !== "in_progress" && status !== "completed") return null;
  return { status, completionEligible: Boolean(progress.completion_eligible_at) };
}

export async function getJourneyStepDisplayStates(stepNumber: number): Promise<Record<string, JourneyDisplayItem> | null> {
  const journey = await currentJourney();
  if (!journey) {
    console.warn("[J2H_STEP_STATES]", { stepNumber, stage: "no_journey" });
    return null;
  }

  const supabase = createServiceClient();
  const { data: items, error: itemError } = await supabase
    .from("j2h_content_items")
    .select("content_key, parent_key, item_kind, completion_tracked, active")
    .eq("step_number", stepNumber)
    .eq("active", true);

  if (itemError || !items) {
    console.error("[J2H_STEP_STATES]", {
      stepNumber,
      stage: "items_query",
      code: itemError?.code ?? null,
      message: itemError?.message ?? "No items returned",
    });
    return null;
  }

  const keys = items.map((item) => item.content_key);
  const { data: progress, error: progressError } = keys.length
    ? await supabase.from("j2h_progress").select("content_key, status").eq("journey_id", journey).in("content_key", keys)
    : { data: [], error: null };

  if (progressError) {
    console.error("[J2H_STEP_STATES]", {
      stepNumber,
      stage: "progress_query",
      code: progressError.code ?? null,
      message: progressError.message,
      itemCount: keys.length,
    });
    return null;
  }
  const progressMap = new Map((progress ?? []).map((row) => [row.content_key, row.status]));
  const result: Record<string, JourneyDisplayItem> = {};

  for (const item of items) {
    if (item.completion_tracked) {
      const status = progressMap.get(item.content_key);
      result[item.content_key] = {
        tracked: true,
        state: status === "completed" ? "completed" : status === "in_progress" ? "in_progress" : "not_started",
      };
      continue;
    }

    if (item.item_kind === "series") {
      const children = items.filter((child) => child.parent_key === item.content_key && child.completion_tracked);
      const completed = children.filter((child) => progressMap.get(child.content_key) === "completed").length;
      const started = children.filter((child) => progressMap.has(child.content_key)).length;
      result[item.content_key] = {
        tracked: false,
        state: children.length > 0 && completed === children.length ? "completed" : started > 0 ? "in_progress" : "not_started",
        completed,
        total: children.length,
      };
      continue;
    }

    result[item.content_key] = { tracked: false, state: "supporting" };
  }

  console.info("[J2H_STEP_STATES]", {
    stepNumber,
    stage: "success",
    itemCount: items.length,
    progressCount: progress?.length ?? 0,
    trackedCount: items.filter((item) => item.completion_tracked).length,
  });
  return result;
}

export async function getJourneySeriesProgress(parentKey: string) {
  const stepNumber = Number(parentKey.split(".")[0]);
  const states = await getJourneyStepDisplayStates(stepNumber);
  if (!states) return null;

  const supabase = createServiceClient();
  const { data: children, error } = await supabase
    .from("j2h_content_items")
    .select("content_key, title, href, sort_order")
    .eq("parent_key", parentKey)
    .eq("completion_tracked", true)
    .eq("active", true)
    .order("sort_order");

  if (error || !children) return null;
  const items = children.map((child) => ({ ...child, state: states[child.content_key]?.state ?? "not_started" as JourneyDisplayState }));
  const completed = items.filter((item) => item.state === "completed").length;
  const started = items.filter((item) => item.state !== "not_started").length;
  const total = items.length;
  return {
    items,
    completed,
    total,
    percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    status: total > 0 && completed === total ? "completed" as const : started > 0 ? "in_progress" as const : "not_started" as const,
  };
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
