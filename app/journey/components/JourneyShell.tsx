import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { journeySteps, type JourneyLesson } from "../data";
import { getJourneyStepDisplayStates, type JourneyDisplayState } from "../progress/operations";
import { getCurrentJourneyUuid } from "../progress/server";
import { exitJourneyAction } from "../save-progress/actions";
import styles from "../journey.module.css";
import fixes from "../journey-fixes.module.css";

export function NeedHelpRightNow() {
  return (
    <aside className={`${styles.crisisBar} ${fixes.crisisBarSafe}`} aria-label="Need help right now">
      <span className={fixes.crisisIcon} aria-hidden="true">!</span>
      <strong className={fixes.crisisTitle}>Need Help Right Now?</strong>
      <span className={fixes.crisisCopy}>
        <span>If you are in immediate danger, call <span className={fixes.crisisEmphasis}>911</span>. If you are in crisis, you are not alone.</span>
        <span>Call or text <span className={fixes.crisisEmphasis}>988 (24/7)</span> or visit <span className={fixes.crisisEmphasis}>988lifeline.org</span>.</span>
      </span>
      <a className={fixes.crisisAction} href="https://988lifeline.org/" rel="noreferrer">Get Help Now →</a>
    </aside>
  );
}

export async function JourneyFrame({ children }: { children: React.ReactNode }) {
  const activeJourney = Boolean(await getCurrentJourneyUuid());
  return <><Header /><NeedHelpRightNow />{activeJourney && <aside className={fixes.savedJourneyBar} aria-label="Saved Journey status"><span><strong>Saved Journey active</strong> — your progress can be remembered on this device.</span><div><Link href="/journey/save-progress">Manage My Journey</Link><form action={exitJourneyAction}><button type="submit">Exit My Journey</button></form></div></aside>}{children}<Footer /></>;
}

export function StepBanner({ currentStep }: { currentStep: number }) {
  return (
    <nav className={styles.stepBanner} aria-label="Journey to Hope steps">
      <Link className={styles.stepBannerBrand} href="/journey" aria-label="Back to Journey to Hope">
        <span className={styles.miniLighthouse} aria-hidden="true">◆</span>
        <strong>Journey<br />to Hope</strong>
      </Link>
      <div className={styles.stepBannerSteps}>
        {journeySteps.map((step) => (
          <Link key={step.id} href={step.href} className={step.number === currentStep ? styles.currentStep : ""} aria-current={step.number === currentStep ? "step" : undefined}>
            <span className={styles.stepCircle}>{step.number}</span>
            <strong>{step.title}</strong>
          </Link>
        ))}
      </div>
      <Link className={styles.backToOverview} href={`/journey/step-${currentStep}`}>← Back to<br />Step {currentStep} Overview</Link>
    </nav>
  );
}

function statePresentation(state: JourneyDisplayState | undefined, current: boolean, saving: boolean) {
  if (!saving) return { icon: current ? "●" : "○", label: current ? "Current" : "Available" };
  if (state === "completed") return { icon: "✓", label: "Completed" };
  if (state === "in_progress") return { icon: "●", label: "In Progress" };
  if (state === "supporting") return { icon: "◇", label: "Supporting" };
  return { icon: "○", label: "Not Started" };
}

export async function LessonSidebar({ stepNumber, lessons, currentId }: { stepNumber: number; lessons: JourneyLesson[]; currentId?: string }) {
  const step = journeySteps[stepNumber - 1];
  const states = await getJourneyStepDisplayStates(stepNumber);
  const saving = Boolean(states);
  const sidebarLessons = lessons.filter((lesson) => lesson.kind !== "pastor-letter");

  return (
    <nav className={styles.lessonSidebar} aria-label={`Lessons in Step ${stepNumber}`}>
      <div className={styles.lessonSidebarHeader}>
        <p>Step {stepNumber}</p>
        <strong>{step.title}</strong>
        <div className={styles.stepIdentityImage} role="img" aria-label={`Approved Step ${stepNumber} identity image position`}><span>Step {stepNumber} image</span></div>
      </div>
      <h2>Lessons in Step {stepNumber}</h2>
      {sidebarLessons.map((lesson) => {
        const current = lesson.id === currentId;
        const presentation = statePresentation(states?.[lesson.id]?.state, current, saving);
        return (
          <Link key={lesson.id} href={lesson.href} className={current ? styles.currentLesson : ""} aria-current={current ? "page" : undefined}>
            <span className={styles.lessonState} aria-hidden="true">{presentation.icon}</span>
            <span><small>{lesson.id}</small>{lesson.title}<small>{presentation.label}</small></span>
            <span aria-hidden="true">›</span>
          </Link>
        );
      })}
      <div className={styles.sidebarLegend} aria-label="Lesson status legend">
        {saving ? <><span>✓ Completed</span><span>● In Progress</span><span>○ Not Started</span><span>◇ Supporting</span></> : <><span>● Current</span><span>○ Available</span></>}
      </div>
    </nav>
  );
}

export function ProgressSavePrompt() {
  return (
    <aside className={`${styles.progressPrompt} ${fixes.readablePanel}`}>
      <div><strong>Want to save your progress?</strong><p>Your Journey remains fully available whether or not you save progress.</p></div>
      <Link href="/journey/save-progress">Save Your Journey Progress</Link>
    </aside>
  );
}
