import { step1AudioTimestamps } from "./step1";
import { step2AudioTimestamps } from "./step2";
import { step3AudioTimestamps } from "./step3";
import { step4AudioTimestamps } from "./step4";
import { step5AudioTimestamps } from "./step5";
import { step6AudioTimestamps } from "./step6";

// Timestamp confidence:
 // verified    = manually reviewed against the VTT and manuscript
 // high        = explicit section ID or recording-start match in the VTT
 // matched     = ordered section-title match in the VTT
 // estimated   = boundary inferred where Buzz omitted the spoken heading
 // needs-review = no safe timestamp; do not render "Listen from here"
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
  const registry = journeyAudioTimestampMap as Record<
    string,
    Record<string, JourneyTimestampEntry>
  >;
  return registry[recordingId]?.[sectionId];
}
