import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { PrayerOfSalvationVideo } from "./PrayerOfSalvationVideo";
import { LessonBlock } from "./PageStructures";
import { salvationReflectionSections } from "../content/salvationReflection";
import { step2AudioTimestamps } from "../timestamps/step2";
import fixes from "../journey-fixes.module.css";

const cues = step2AudioTimestamps["audio-2026-00015"];

export function SalvationReflectionContent() {
  return (
    <>
      {salvationReflectionSections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={section.id === "2.d.3" ? "→" : "▤"}
          tone={section.id === "2.d.3" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="2d-time-to-reflect"
              seconds={cues[section.id].seconds}
            />
          </div>
          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
          ))}
          {section.id === "2.d.3" ? <PrayerOfSalvationVideo /> : null}
          {"questions" in section ? (
            <ol className={fixes.reflectionQuestions}>
              {section.questions.map((question) => <li key={question}>{question}</li>)}
            </ol>
          ) : null}
        </LessonBlock>
      ))}
    </>
  );
}
