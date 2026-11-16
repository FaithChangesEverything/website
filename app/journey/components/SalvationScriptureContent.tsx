import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { salvationScriptureSections } from "../content/salvationScripture";
import { step2AudioTimestamps } from "../timestamps/step2";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step2AudioTimestamps["audio-2026-00014"];

export function SalvationScriptureContent() {
  return (
    <>
      {salvationScriptureSections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={section.id === "2.c.10" ? "✦" : "▤"}
          tone={section.id === "2.c.10" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="2c-salvation-scripture"
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
                {block.reference ? <JourneyScriptureReference reference={block.reference} /> : null}
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
