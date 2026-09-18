import "server-only";

import { getJourneyProgressSummary } from "./operations";

export async function getJourneyContinueDestination() {
  const summary = await getJourneyProgressSummary();
  const value = (summary as unknown as { continue_href?: unknown } | null)?.continue_href;
  return typeof value === "string" && value.startsWith("/journey") ? value : "/journey";
}
