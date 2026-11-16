import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { understandingSalvationSections } from "../content/understandingSalvation";
import { step2AudioTimestamps } from "../timestamps/step2";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step2AudioTimestamps["audio-2026-00013"];

export function UnderstandingSalvationContent() {
  return (
    <>
      {understandingSalvationSections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={section.id === "2.b.9" ? "✦" : "▤"}
          tone={section.id === "2.b.9" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="2b-understanding-salvation"
              seconds={cues[section.id].seconds}
            />
          </div>

          {section.blocks.map((block, index) =>
            block.type === "scripture" ? (
              <blockquote
                className={sequence9.scriptureQuote}
                key={`${section.id}-scripture-${index}`}
              >
                {block.text}
                <strong>{block.reference}</strong>
              </blockquote>
            ) : (
              <p key={`${section.id}-paragraph-${index}`}>{block.text}</p>
            ),
          )}
        </LessonBlock>
      ))}
    </>
  );
}
