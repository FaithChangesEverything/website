import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { salvationJourneySections } from "../content/salvationJourney";
import { step2AudioTimestamps } from "../timestamps/step2";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step2AudioTimestamps["audio-2026-00016"];

export function SalvationJourneyContent() {
  return (
    <>
      {salvationJourneySections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={section.id === "2.e.6" ? "✦" : section.id === "2.e.4" ? "→" : "▤"}
          tone={section.id === "2.e.6" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="2e-salvation-journey"
              seconds={cues[section.id].seconds}
            />
          </div>
          {section.blocks.map((block, index) =>
            block.type === "scripture" ? (
              <blockquote
                className={sequence9.scriptureQuote}
                key={`${section.id}-scripture-${index}`}
              >
                {block.text} <strong>{block.reference}</strong>
              </blockquote>
            ) : (
              <p key={`${section.id}-paragraph-${index}`}>{block.text}</p>
            ),
          )}
          {section.id === "2.e.4" ? (
            <p>
              <Link href="/find-a-church" className={fixes.readableButton}>
                ▶ Find a Church Home
              </Link>
            </p>
          ) : null}
        </LessonBlock>
      ))}
    </>
  );
}
