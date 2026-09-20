import type { JourneyResourceReference } from "./types";

export type JourneyStepId =
  | "step-1"
  | "step-2"
  | "step-3"
  | "step-4"
  | "step-5"
  | "step-6";

/**
 * Reconciled Sequence 1 resource assignments.
 *
 * These references preserve the authoritative FCE IDs from the original
 * Resource Area work. They do not create visitor-facing links by themselves.
 * A resource becomes visible only after its current destination is verified
 * and added to resourceRegistry.ts.
 */
export const stepResourceAssignments: Record<
  JourneyStepId,
  JourneyResourceReference[]
> = {
  "step-1": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0008", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "vid-2026-00184", type: "video", category: "related-sermon" },
    { id: "vid-2026-00188", type: "video", category: "related-sermon" },
    { id: "vid-2026-00182", type: "video", category: "related-sermon" },
    { id: "vid-2026-00027", type: "video", category: "companion-resource" },
    { id: "vid-2026-00044", type: "video", category: "companion-resource" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "companion-resource",
      label: "How to Study the Bible",
    },
    {
      id: "external-tim-mackie-living-hope",
      type: "ministry",
      category: "additional-resource",
    },
    { id: "j2h-prayer-support", type: "prayer", category: "prayer" },
    {
      id: "j2h-find-a-church",
      type: "ministry",
      category: "additional-resource",
      label: "Find a Church Home",
    },
  ],

  "step-2": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0007", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "vid-2026-00190", type: "video", category: "related-sermon" },
    { id: "vid-2026-00189", type: "video", category: "related-sermon" },
    { id: "vid-2026-00187", type: "video", category: "related-sermon" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "bible-study",
      label: "Related Bible Study",
    },
    { id: "vid-2026-00019", type: "video", category: "companion-resource" },
    { id: "vid-2026-00023", type: "video", category: "companion-resource" },
    { id: "vid-2026-00038", type: "video", category: "companion-resource" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "companion-resource",
      label: "How to Study the Bible",
    },
    { id: "vid-2026-00182", type: "video", category: "testimony" },
    { id: "vid-2026-00190", type: "video", category: "additional-resource" },
    { id: "j2h-prayer-support", type: "prayer", category: "prayer" },
    {
      id: "j2h-find-a-church",
      type: "ministry",
      category: "additional-resource",
      label: "Find a Church Home",
    },
  ],

  "step-3": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "vid-2026-00206", type: "video", category: "related-sermon" },
    { id: "vid-2026-00207", type: "video", category: "related-sermon" },
    { id: "vid-2026-00208", type: "video", category: "related-sermon" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "bible-study",
      label: "Related Bible Study",
    },
    { id: "vid-2026-00182", type: "video", category: "testimony" },
    {
      id: "doc-2026-00068",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00069",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00070",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00071",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00072",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00073",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    {
      id: "doc-2026-00074",
      type: "document",
      category: "additional-resource",
      label: "Character of God Bible Study Series",
    },
    { id: "j2h-prayer-support", type: "prayer", category: "prayer" },
    {
      id: "j2h-find-a-church",
      type: "ministry",
      category: "additional-resource",
      label: "Find a Church Home",
    },
  ],

  "step-4": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "song-2026-0018", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "vid-2026-00205", type: "video", category: "related-sermon" },
    { id: "vid-2026-00191", type: "video", category: "related-sermon" },
    { id: "vid-2026-00193", type: "video", category: "related-sermon" },
    { id: "vid-2026-00189", type: "video", category: "related-sermon" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "bible-study",
      label: "Related Bible Study",
    },
    { id: "vid-2026-00182", type: "video", category: "testimony" },
    { id: "vid-2026-00026", type: "video", category: "related-video" },
    { id: "vid-2026-00050", type: "video", category: "related-video" },
    { id: "vid-2026-00056", type: "video", category: "related-video" },
    { id: "vid-2026-00057", type: "video", category: "related-video" },
    { id: "vid-2026-00165", type: "video", category: "related-video" },
    {
      id: "external-tim-mackie-what-is-faith",
      type: "ministry",
      category: "additional-resource",
      label: "Additional Resources",
    },
    { id: "j2h-prayer-support", type: "prayer", category: "prayer" },
    {
      id: "j2h-find-a-church",
      type: "ministry",
      category: "additional-resource",
      label: "Find a Church Home",
    },
  ],

  "step-5": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0008", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "song-2026-0005", type: "song", category: "related-song" },
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "vid-2026-00188", type: "video", category: "related-sermon" },
    { id: "vid-2026-00204", type: "video", category: "related-sermon" },
    { id: "vid-2026-00182", type: "video", category: "related-sermon" },
    { id: "vid-2026-00027", type: "video", category: "related-video" },
    { id: "vid-2026-00044", type: "video", category: "related-video" },
    { id: "vid-2026-00184", type: "video", category: "related-video" },
    { id: "vid-2026-00133", type: "video", category: "related-video" },
    { id: "vid-2026-00134", type: "video", category: "related-video" },
    {
      id: "doc-2026-00017",
      type: "document",
      category: "bible-study",
      label: "Related Bible Study",
    },
    {
      id: "external-tim-mackie-what-is-hope",
      type: "ministry",
      category: "additional-resource",
      label: "Additional Resources",
    },
    { id: "j2h-prayer-support", type: "prayer", category: "prayer" },
    {
      id: "j2h-find-a-church",
      type: "ministry",
      category: "additional-resource",
      label: "Find a Church Home",
    },
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
    { id: "vid-2026-00186", type: "video", category: "related-sermon" },
    { id: "vid-2026-00056", type: "video", category: "related-video" },
    { id: "vid-2026-00057", type: "video", category: "related-video" },
    { id: "vid-2026-00026", type: "video", category: "related-video" },
    { id: "vid-2026-00164", type: "video", category: "related-video" },
    { id: "vid-2026-00019", type: "video", category: "related-video" },
    { id: "doc-2026-00017", type: "document", category: "bible-study" },
    { id: "vid-2026-00182", type: "video", category: "testimony" },
  ],
};

export function getStepResourceAssignments(
  stepId: JourneyStepId,
): JourneyResourceReference[] {
  return stepResourceAssignments[stepId];
}
