import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { hopeStudyFive } from "../content/hopeSeriesPoc";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const iconByKind = {
  scripture: "▣",
  context: "▤",
  teaching: "◇",
  application: "→",
  questions: "?",
  truth: "✦",
  prayer: "◇",
} as const;

const toneByKind = {
  scripture: "scripture",
  truth: "highlight",
} as const;

export function HopeStudyFiveContent() {
  return (
    <>
      {hopeStudyFive.sections.map((section) => {
        const tone =
          section.kind === "scripture"
            ? toneByKind.scripture
            : section.kind === "truth"
              ? toneByKind.truth
              : undefined;

        return (
          <LessonBlock
            key={section.id}
            title={`${section.id} ${section.title}`}
            icon={iconByKind[section.kind]}
            tone={tone}
          >
            <div className={fixes.lessonSectionActions}>
              <JourneyListenFromHere
                playerId="1c-study-5"
                seconds={section.audioStartSeconds}
              />
            </div>

            {"scripture" in section ? (
              <blockquote className={sequence9.scriptureQuote}>
                {section.scripture.text}
                <strong>{section.scripture.reference}</strong>
              </blockquote>
            ) : null}

            {"paragraphs" in section
              ? section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
                ))
              : null}

            {"items" in section ? (
              <ul className={fixes.reflectionQuestions}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </LessonBlock>
        );
      })}
    </>
  );
}
