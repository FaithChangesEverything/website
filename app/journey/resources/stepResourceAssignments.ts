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

    { id: "vid-2026-00184", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00188", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00205", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00183", type: "sermon", category: "related-sermon" },

    { id: "vid-2026-00027", type: "video", category: "companion-resource" },
    { id: "vid-2026-00044", type: "video", category: "companion-resource" },

    { id: "doc-2026-00212", type: "document", category: "companion-resource" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource" },

    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],

  // Authoritative Step 2 assignments: J2H_Step_ResourcesRev1.2.xlsx, rows 18–34.
  "step-2": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0007", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "vid-2026-00190", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00189", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00187", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00206", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00185", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-0019", type: "video", category: "companion-resource", label: "Biblical Themes" },
    { id: "vid-2026-0023", type: "video", category: "companion-resource", label: "Biblical Themes" },
    { id: "vid-2026-0038", type: "video", category: "companion-resource", label: "Biblical Themes" },
    { id: "doc-2026-00212", type: "document", category: "companion-resource", label: "How to Read the Bible" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource", label: "Bible Study Journal" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource", label: "How to Study the Bible" },
    { id: "vid-2026-00196", type: "video", category: "prayer" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],

  // Authoritative Step 3 assignments: J2H_Step_ResourcesRev1.2.xlsx, rows 35–43.
  // Include only these nine IDs; the Character of God series remains linked
  // within lesson 3.b.4 and is not an extra resource row in Rev1.2.
  "step-3": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "vid-2026-00206", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00207", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00208", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },
    { id: "doc-2026-00212", type: "document", category: "companion-resource", label: "How to Read the Bible" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource", label: "Bible Study Journal" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource", label: "How to Study the Bible" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],

  // Authoritative Step 4 assignments: J2H_Step_ResourcesRev1.2.xlsx, rows 44–59.
  // BibleProject topics open the corresponding FCE Bible Studies, not external videos.
  // Alaska Testimony is the standalone sermon-library video resource.
  "step-4": [
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "song-2026-0018", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },

    { id: "vid-2026-00205", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00191", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00193", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00189", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },

    { id: "vid-2026-00026", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00056", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00057", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00164", type: "video", category: "companion-resource", label: "Related Bible Studies" },

    { id: "doc-2026-00212", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],

  // Authoritative Step 5 assignments: J2H_Step_ResourcesRev1.2.xlsx, rows 60–77.
  // Keep the five specified sermons in the Resource Area even if broader
  // sermon metadata has a different placement; do not add unlisted extras.
  // BibleProject entries route to their matching FCE Bible Studies.
  "step-5": [
    { id: "song-2026-0009", type: "song", category: "related-song" },
    { id: "song-2026-0008", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "song-2026-0005", type: "song", category: "related-song" },
    { id: "song-2026-0014", type: "song", category: "related-song" },

    { id: "vid-2026-00188", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00204", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00184", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00194", type: "sermon", category: "related-sermon" },

    { id: "vid-2026-00027", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00044", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00133", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00134", type: "video", category: "companion-resource", label: "Related Bible Studies" },

    { id: "doc-2026-00212", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },

    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],

  // Authoritative Step 6 assignments: J2H_Step_ResourcesRev1.2.xlsx, rows 78–96.
  // Five BibleProject topics open the corresponding FCE Bible Study lessons.
  // Alaska Testimony remains a standalone Sermon Library video.
  "step-6": [
    { id: "song-2026-0018", type: "song", category: "related-song" },
    { id: "song-2026-0014", type: "song", category: "related-song" },
    { id: "song-2026-0012", type: "song", category: "related-song" },
    { id: "song-2026-0005", type: "song", category: "related-song" },

    { id: "vid-2026-00205", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00191", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00189", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00193", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00186", type: "sermon", category: "related-sermon" },
    { id: "vid-2026-00192", type: "sermon", category: "related-sermon" },

    { id: "vid-2026-00056", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00057", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00026", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-00164", type: "video", category: "companion-resource", label: "Related Bible Studies" },
    { id: "vid-2026-0019", type: "video", category: "companion-resource", label: "Related Bible Studies" },

    { id: "doc-2026-00212", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00003", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },
    { id: "doc-2026-00017", type: "document", category: "companion-resource", label: "Printable Guides and Journal" },

    { id: "vid-2026-00182", type: "testimony", category: "testimony" },
  ],
};

export function getStepResourceAssignments(
  stepId: JourneyStepId,
): JourneyResourceReference[] {
  // All six Steps are reconciled directly to J2H_Step_ResourcesRev1.2.xlsx.
  // Do not supplement it from broader Sermon Library step metadata, which can
  // contain valid cross-site placements that are not part of the final J2H list.
  return [...stepResourceAssignments[stepId]];


};

export function getStepResourceAssignments(
  stepId: JourneyStepId,
): JourneyResourceReference[] {
  // All six Steps are reconciled directly to J2H_Step_ResourcesRev1.2.xlsx.
  // Do not supplement it from broader Sermon Library step metadata, which can
  // contain valid cross-site placements that are not part of the final J2H list.
  return [...stepResourceAssignments[stepId]];

  // Column J of the sermon spreadsheet is authoritative for J2H sermon placements.
  // Keep other curated J2H resources intact, but remove legacy references to
  // these same 19 sermons so each appears once, and only in its assigned steps.
  const nonSermonResources = stepResourceAssignments[stepId].filter(
    (reference) => !getSermonById(reference.id),
  );
  const stepNumber = Number(stepId.slice(-1));
  const stepSermons: JourneyResourceReference[] = getSermonsForStep(stepNumber).map(
    (sermon) => ({
      id: sermon.id,
      type: sermon.series === "Testimony" ? "testimony" : "sermon",
      category: sermon.series === "Testimony" ? "testimony" : "related-sermon",
    }),
  );
  const songs = nonSermonResources.filter((resource) => resource.category === "related-song");
  const otherResources = nonSermonResources.filter((resource) => resource.category !== "related-song");
  return [...songs, ...stepSermons, ...otherResources];
}
