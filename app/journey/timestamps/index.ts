import { step1AudioTimestamps } from "./step1";
import { step2AudioTimestamps } from "./step2";
import { step3AudioTimestamps } from "./step3";
import { step4AudioTimestamps } from "./step4";
import { step5AudioTimestamps } from "./step5";
import { step6AudioTimestamps } from "./step6";

export type JourneyTimestampConfidence =
  | "verified"
  | "high"
  | "matched"
  | "estimated"
  | "needs-review";

export type JourneyTimestampEntry = {
  seconds: number | null;
  confidence: JourneyTimestampConfidence;
};

export const journeyAudioTimestampMap = {
  ...step1AudioTimestamps,
  ...step2AudioTimestamps,
  ...step3AudioTimestamps,
  ...step4AudioTimestamps,
  ...step5AudioTimestamps,
  ...step6AudioTimestamps,
} satisfies Record<string, Record<string, JourneyTimestampEntry>>;

export function getJourneyAudioTimestamp(recordingId: string, sectionId: string) {
  return journeyAudioTimestampMap[recordingId]?.[sectionId];
}
