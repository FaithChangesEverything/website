import { bibleStudySeries, hopeSeries, journeySteps } from "./data";
import { journeyAudioRecordings } from "./audioManifest";
import { hopeSeriesPoc } from "./content/hopeSeriesPoc";
import { journeyAudioTimestampMap } from "./timestamps";

export const J2H_SOURCE_REVISION = "FCE Website Doctrine Rev 1.7";
export const J2H_RECORDING_AUDIT_REVISION = "J2H V1 Launch Dependency Audit Rev 1.7";
export const J2H_STEP_RESOURCE_REVISION = "J2H Step Resources Rev 1.2";

export const j2hManifest = {
  sourceRevision: J2H_SOURCE_REVISION,
  recordingAuditRevision: J2H_RECORDING_AUDIT_REVISION,
  stepResourceRevision: J2H_STEP_RESOURCE_REVISION,
  steps: journeySteps,
  series: {
    hope: {
      structure: hopeSeries,
      implementation: hopeSeriesPoc,
    },
    bibleStudy: {
      structure: bibleStudySeries,
    },
  },
  audio: journeyAudioRecordings,
  timestamps: journeyAudioTimestampMap,
} as const;
