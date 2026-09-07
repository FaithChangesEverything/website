import Link from "next/link";
import { JourneyFrame, LessonSidebar, ProgressSavePrompt, StepBanner } from "./JourneyShell";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";

type Card = { id: string; title: string; summary?: string; href: string };

export function StepOverview({ stepNumber, lessons }: { stepNumber: number; lessons: Card[] }) {
  const step = journeySteps[stepNumber - 1];
  return (
    <JourneyFrame>
      <main>
        <section className={styles.interiorHero}><p>Journey to Hope · Step {step.number}</p><h1>{step.title}</h1><p>{step.summary}</p></section>
        <StepBanner currentStep={step.number} />
        <div className={styles.overviewGrid}>
          <aside className={styles.yourJourney}><h2>Your Journey</h2>{journeySteps.map((item) => <Link key={item.id} href={item.href} className={item.id === step.id ? styles.currentJourneyItem : ""}>Step {item.number}<span>{item.title}</span></Link>)}</aside>
          <section className={styles.lessonCards} aria-labelledby="lessons-title"><p className={styles.eyebrow}>Step {step.number}</p><h2 id="lessons-title">Lessons in This Step</h2><div className={styles.cardGrid}>{lessons.map((lesson) => <article className={styles.card} key={lesson.id}><small>{lesson.id}</small><h3>{lesson.title}</h3>{lesson.summary && <p>{lesson.summary}</p>}<Link href={lesson.href}>Begin Lesson →</Link></article>)}</div><ProgressSavePrompt /></section>
        </div>
      </main>
    </JourneyFrame>
  );
}

export function SeriesOverview({ stepNumber, parentId, title, intro, sections, lessons }: { stepNumber: number; parentId: string; title: string; intro: string; sections: Card[]; lessons: JourneyLesson[] }) {
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={parentId} /><article className={styles.lessonContent}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><p className={styles.eyebrow}>{parentId} · Series Overview</p><h1>{title}</h1><p className={styles.lead}>{intro}</p><div className={styles.cardGrid}>{sections.map((section, index) => <article className={styles.card} key={section.id}><small>Study {index + 1}</small><h2>{section.title}</h2>{section.summary && <p>{section.summary}</p>}<Link href={section.href}>Begin Study →</Link></article>)}</div></article></div></main></JourneyFrame>;
}

export function IndividualLesson({ stepNumber, lessonId, title, intro, lessons, children }: { stepNumber: number; lessonId: string; title: string; intro?: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={lessonId} /><article className={styles.lessonContent}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><p className={styles.eyebrow}>Lesson {lessonId}</p><h1>{title}</h1>{intro && <p className={styles.lead}>{intro}</p>}<section className={styles.audioBlock} aria-label="Listen to this lesson"><strong>Listen to This Lesson</strong><p>Lesson audio will appear here when the approved recording is published.</p></section><div className={styles.manuscript}>{children}</div><button className={styles.completeButton} type="button" disabled title="Progress persistence is implemented in Sequence 8">Mark Lesson Complete</button><p className={styles.progressNote}>Completion controls are architected here; secure anonymous Journey ID persistence is implemented in Sequence #8.</p></article></div></main></JourneyFrame>;
}

export function PastorLetter({ stepNumber, lessonId, title, lessons, children }: { stepNumber: number; lessonId: string; title: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={lessonId} /><article className={styles.letterPanel}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><p className={styles.eyebrow}>Before We Begin · A Message from Pastor Richard</p><h1>{title}</h1><section className={styles.mediaPlaceholder}><strong>Listen / Watch</strong><p>The approved Pastor Letter recording will be presented here with the complete written letter remaining on this page.</p></section><div className={styles.manuscript}>{children}</div></article></div></main></JourneyFrame>;
}
