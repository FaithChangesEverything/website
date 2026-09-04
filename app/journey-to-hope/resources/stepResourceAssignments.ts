import type { JourneyResourceReference } from "./types";

export type JourneyStepId =
  | "step-1"
  | "step-2"
  | "step-3"
  | "step-4"
  | "step-5"
  | "step-6";

/**
 * Journey to Hope resource assignments.
 *
 * Keep this file limited to placement/category information and authoritative
 * FCE IDs. Titles, artwork, descriptions, and public destinations belong in
 * the resource registry, not here.
 */
export const stepResourceAssignments: Record<
  JourneyStepId,
  JourneyResourceReference[]
> = {
  "step-1": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0008", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "ser-2026-0003", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0007", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0001", type: "testimony", category: "testimony" },
    { id: "vid-2026-00027", type: "video", category: "related-video" },
    { id: "vid-2026-00044", type: "video", category: "related-video" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
  ],

  "step-2": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0007", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "ser-2026-0009", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0008", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0006", type: "sermon", category: "related-sermon" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
    { id: "vid-2026-00019", type: "video", category: "companion-resource" },
    { id: "vid-2026-00023", type: "video", category: "companion-resource" },
    { id: "vid-2026-00038", type: "video", category: "companion-resource" },
    { id: "vid-2026-00196", type: "video", category: "prayer" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
    { id: "vid-2026-00190", type: "video", category: "additional-resource" },
  ],

  "step-3": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "ser-2026-0017", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0018", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0019", type: "sermon", category: "related-sermon" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
    { id: "doc-2026-00068", type: "document", category: "bible-study" },
    { id: "doc-2026-00069", type: "document", category: "bible-study" },
    { id: "doc-2026-00070", type: "document", category: "bible-study" },
    { id: "doc-2026-00071", type: "document", category: "bible-study" },
    { id: "doc-2026-00072", type: "document", category: "bible-study" },
    { id: "doc-2026-00073", type: "document", category: "bible-study" },
    { id: "doc-2026-00074", type: "document", category: "bible-study" },
  ],

  "step-4": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "song-2026-0018", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "ser-2026-0016", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0010", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0012", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0008", type: "sermon", category: "related-sermon" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
    { id: "vid-2026-00026", type: "video", category: "related-video" },
    { id: "vid-2026-00050", type: "video", category: "related-video" },
    { id: "vid-2026-00056", type: "video", category: "related-video" },
    { id: "vid-2026-00057", type: "video", category: "related-video" },
    { id: "vid-2026-00164", type: "video", category: "related-video" },
  ],

  "step-5": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0008", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "song-2026-0005", type: "song", category: "related-song" },
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "ser-2026-0007", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0015", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0001", type: "testimony", category: "testimony" },
    { id: "vid-2026-00027", type: "video", category: "related-video" },
    { id: "vid-2026-00044", type: "video", category: "related-video" },
    { id: "vid-2026-00184", type: "video", category: "related-video" },
    { id: "vid-2026-00133", type: "video", category: "related-video" },
    { id: "vid-2026-00134", type: "video", category: "related-video" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
  ],

  "step-6": [
    { id: "song-2026-0018", type: "song", category: "related-song" },
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "song-2026-0005", type: "song", category: "related-song" },
    { id: "ser-2026-0016", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0010", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0008", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0012", type: "sermon", category: "related-sermon" },
    { id: "ser-2026-0005", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00056", type: "video", category: "related-video" },
    { id: "vid-2026-00057", type: "video", category: "related-video" },
    { id: "vid-2026-00026", type: "video", category: "related-video" },
    { id: "vid-2026-00164", type: "video", category: "related-video" },
    { id: "vid-2026-00019", type: "video", category: "related-video" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
    // Alaska is intentionally not assigned here yet. The dependency audit
    // still requires choosing whether Step 6 should present the sermon
    // (ser-2026-0001) or testimony video (vid-2026-00182).
  ],
};

export function getStepResourceAssignments(
  stepId: JourneyStepId,
): JourneyResourceReference[] {
  return stepResourceAssignments[stepId];
}
