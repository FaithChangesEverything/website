"use server";

import { revalidatePath } from "next/cache";
import { recordJourneyEngagement, type JourneyEngagementChannel } from "./operations";

export async function recordJourneyEngagementAction(
  contentKey: string,
  channel: JourneyEngagementChannel,
  percent: number,
  activeSeconds: number | undefined,
  path: string,
) {
  const result = await recordJourneyEngagement(contentKey, channel, percent, activeSeconds);

  // Only refresh progress UI when the server/database has actually made completion
  // eligible. Meaningful-view recording itself should remain quiet and unobtrusive.
  if (result.saved && result.result?.completion_eligible) {
    revalidatePath(path);
  }

  return {
    saved: result.saved,
    completionEligible: Boolean(result.result?.completion_eligible),
  };
}
