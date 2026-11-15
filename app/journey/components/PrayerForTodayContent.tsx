import { LessonBlock } from "./PageStructures";
import { prayerForToday } from "../content/prayerForToday";

export function PrayerForTodayContent() {
  return (
    <>
      <LessonBlock title="A Prayer for Today" icon="◇" tone="highlight">
        {prayerForToday.introduction.map((paragraph, index) => (
          <p key={`intro-${index}`}>{paragraph}</p>
        ))}
      </LessonBlock>

      <LessonBlock title="Prayer" icon="♡">
        {prayerForToday.prayer.map((paragraph, index) => (
          <p key={`prayer-${index}`}>{paragraph}</p>
        ))}
      </LessonBlock>
    </>
  );
}
