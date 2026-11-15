import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { timeToReflect } from "../content/timeToReflect";
import fixes from "../journey-fixes.module.css";

const iconByKind = {
  intro: "◇",
  teaching: "▤",
  action: "→",
  final: "✦",
} as const;

export function TimeToReflectContent() {
  return (
    <>
      {timeToReflect.sections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={iconByKind[section.kind]}
          tone={section.kind === "action" || section.kind === "final" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="1d-time-to-reflect"
              seconds={section.audioStartSeconds}
            />
          </div>

          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
          ))}

          {"items" in section ? (
            <ul className={fixes.reflectionQuestions}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </LessonBlock>
      ))}
    </>
  );
}
