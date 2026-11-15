import { LessonBlock } from "./PageStructures";
import { continueYourJourney } from "../content/continueYourJourney";

export function ContinueYourJourneyContent() {
  return (
    <>
      <LessonBlock title="Continue Your Journey" icon="→">
        {continueYourJourney.body.map((paragraph, index) => (
          <p key={`body-${index}`}>{paragraph}</p>
        ))}
      </LessonBlock>

      <LessonBlock title="One Last Thought" icon="✦" tone="highlight">
        <p>{continueYourJourney.closingIntro}</p>
        <p>{continueYourJourney.closingMessage}</p>
      </LessonBlock>
    </>
  );
}
