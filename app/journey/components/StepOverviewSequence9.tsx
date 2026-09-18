import Link from "next/link";

import { JourneyFrame, ProgressSavePrompt } from "./JourneyShell";
import { getJourneyProgressSummary, getJourneyStepDisplayStates, type JourneyDisplayState } from "../progress/operations";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";
import refined from "../journey-refinements.module.css";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

type NavItem = { href: string; label: string; detail?: string };

type LowerWindow = {
  id: string;
  title: string;
  body: string;
};

function ContextNav({ previous, center, next }: { previous?: NavItem; center: NavItem; next?: NavItem }) {
  return <nav className={styles.contextNav} aria-label="Journey navigation"><div>{previous ? <Link href={previous.href}>← <span><strong>{previous.label}</strong>{previous.detail && <small>{previous.detail}</small>}</span></Link> : <span />}</div><Link className={styles.contextNavCenter} href={center.href}><strong>{center.label}</strong>{center.detail && <small>{center.detail}</small>}</Link><div>{next ? <Link href={next.href}><span><strong>{next.label}</strong>{next.detail && <small>{next.detail}</small>}</span> →</Link> : <span />}</div></nav>;
}

function displayState(state: JourneyDisplayState | undefined, saving: boolean) {
  if (!saving) return { icon: "○", label: "Available", action: "Start" };
  if (state === "completed") return { icon: "✓", label: "Completed", action: "Review" };
  if (state === "in_progress") return { icon: "●", label: "In Progress", action: "Continue" };
  if (state === "supporting") return { icon: "◇", label: "Supporting", action: "View" };
  return { icon: "○", label: "Not Started", action: "Start" };
}

function LessonCard({ lesson, state, saving }: { lesson: JourneyLesson; state?: JourneyDisplayState; saving: boolean }) {
  const presentation = displayState(state, saving);
  return <article className={styles.card}><div className={styles.cardImageSlot} aria-hidden="true"><span>Approved lesson image</span></div><span className={styles.lessonBadge}>{lesson.id}</span><div className={styles.cardBody}><h3>{lesson.title}</h3><div className={styles.cardStatus}><span aria-hidden="true">{presentation.icon}</span> {presentation.label}</div><Link href={lesson.href}>{presentation.action} {state === "supporting" ? "Resource" : "Lesson"} <span aria-hidden="true">→</span></Link></div></article>;
}

function cardsForStep(stepNumber: number, lessons: JourneyLesson[]) {
  const excluded = new Set<string>(lessons.filter((lesson) => lesson.kind === "pastor-letter").map((lesson) => lesson.id));
  if (stepNumber === 1) {
    excluded.add("1.f");
    excluded.add("1.g");
  }
  if (stepNumber === 2) {
    excluded.add("2.f");
    excluded.add("2.g");
    excluded.add("2.h");
  }
  return lessons.filter((lesson) => !excluded.has(lesson.id));
}

function lowerWindowsForStep(stepNumber: number): LowerWindow[] {
  if (stepNumber === 1) {
    return [
      {
        id: "1.f",
        title: "A Prayer for Today",
        body: "The approved Journey to Hope manuscript text for A Prayer for Today will appear here during final content integration.",
      },
      {
        id: "1.g",
        title: "Continue Your Journey",
        body: "The approved Journey to Hope manuscript text for Continue Your Journey will appear here during final content integration.",
      },
    ];
  }

  if (stepNumber === 2) {
    return [
      {
        id: "2.f",
        title: "Bible Study Resources",
        body: "The approved Journey to Hope manuscript text and Bible study resource guidance will appear here during final content integration.",
      },
      {
        id: "2.g",
        title: "Final Encouragement",
        body: "The approved Journey to Hope Final Encouragement manuscript text will appear here during final content integration.",
      },
      {
        id: "2.h",
        title: "Continue Your Journey",
        body: "The approved Journey to Hope manuscript text for Continue Your Journey will appear here during final content integration.",
      },
    ];
  }

  return [];
}

export async function StepOverviewSequence9({ stepNumber, lessons }: { stepNumber: number; lessons: JourneyLesson[] }) {
  const step = journeySteps[stepNumber - 1];
  const previousStep = journeySteps[stepNumber - 2];
  const nextStep = journeySteps[stepNumber];
  const [summary, lessonStates] = await Promise.all([getJourneyProgressSummary(), getJourneyStepDisplayStates(stepNumber)]);
  const stepProgress = summary?.steps.find((item) => item.step === stepNumber);
  const percent = stepProgress && stepProgress.total > 0 ? Math.round((stepProgress.completed / stepProgress.total) * 100) : 0;
  const progressLabel = stepProgress ? `${stepProgress.completed} of ${stepProgress.total} complete · ${percent}%` : "Not tracking yet";
  const saving = Boolean(summary && lessonStates);
  const cardLessons = cardsForStep(stepNumber, lessons);
  const lowerWindows = lowerWindowsForStep(stepNumber);

  return <JourneyFrame><main className={styles.stepOverviewPage}>
    <section className={`${styles.interiorHero} ${fixes.interiorHeroCalm}`}><div className={styles.heroCopy}><p className={styles.crumb}>Journey to Hope <span>›</span> Step {step.number}</p><h1>Step {step.number}: {step.title}</h1><span className={styles.goldRule} aria-hidden="true" /><p>{step.summary}</p></div><aside className={styles.progressCard} aria-label={`Step ${step.number} progress`}><strong>Step Progress</strong><span>{stepProgress ? "Your saved progress in this Step." : "Progress will appear here after you choose to save your Journey."}</span><div className={styles.progressTrack}><span style={{ width: `${percent}%` }} /></div><b>{progressLabel}</b></aside></section>

    <div className={styles.overviewPanel}>
      <aside className={styles.yourJourney}><h2>Your Journey</h2>{journeySteps.map((item) => { const state = summary?.steps.find((s) => s.step === item.number); const marker = state?.status === "completed" ? "✓" : state?.status === "in_progress" ? "●" : "○"; const label = state ? state.status.replace("_", " ") : "not tracking"; return <Link key={item.id} href={item.href} className={item.id === step.id ? styles.currentJourneyItem : ""} aria-current={item.id === step.id ? "page" : undefined}><span className={`${styles.journeyNumber} ${item.id === step.id ? "" : refined.journeyNumberNeutral}`}>{item.number}</span><span>{item.title}<small className={fixes.journeyCompletionCount}>{state ? `${state.completed} of ${state.total} complete` : ""}</small></span><span className={`${refined.journeyState} ${item.id === step.id ? refined.journeyStateCurrent : ""}`} aria-label={label}>{marker}</span></Link>; })}<div className={styles.sidebarSupport}><span className={styles.supportIcon} aria-hidden="true">♡</span><strong>You Are Not Alone</strong><p>Whatever you’re facing, we’re here to walk with you and point you to hope.</p><a href="https://988lifeline.org/" rel="noreferrer">Need Help Right Now →</a></div></aside>

      <section className={styles.lessonCards} aria-labelledby="lessons-title"><div className={styles.lessonHeading}><span className={styles.lessonHeadingIcon} aria-hidden="true">▣</span><div><h2 id="lessons-title">Your Lessons in This Step</h2><p>Complete any lesson in any order. Supporting resources remain available without affecting your completion percentage.</p></div></div><div className={styles.cardGrid}>{cardLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} state={lessonStates?.[lesson.id]?.state} saving={saving} />)}</div>{!summary && <ProgressSavePrompt />}</section>
    </div>

    {lowerWindows.length > 0 && <section className={sequence9.lowerWindows} aria-label={`Step ${stepNumber} closing content`}>
      {lowerWindows.map((window) => <article className={sequence9.lowerWindow} key={window.id}>
        <div><span className={sequence9.windowId}>{window.id}</span><h2>{window.title}</h2><p>{window.body}</p></div>
        <button type="button" disabled aria-label={`Listen to ${window.title}`}>◖ Listen</button>
      </article>)}
    </section>}

    <ContextNav previous={previousStep ? { href: previousStep.href, label: "Previous Step", detail: previousStep.title } : undefined} center={{ href: "/journey", label: "You’re on your Journey", detail: "Keep going, stay encouraged, and continue with Christ." }} next={nextStep ? { href: nextStep.href, label: "Next Step", detail: nextStep.title } : undefined} />
  </main></JourneyFrame>;
}
