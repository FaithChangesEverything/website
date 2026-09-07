import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";

export function NeedHelpRightNow() {
  return (
    <aside className={styles.crisisBar} aria-label="Need help right now">
      <strong>Need Help Right Now?</strong>
      <span>If you are in immediate danger, call 911. In the U.S., call or text 988 for crisis support.</span>
      <a href="https://988lifeline.org/" rel="noreferrer">Get Help Now →</a>
    </aside>
  );
}

export function JourneyFrame({ children }: { children: React.ReactNode }) {
  return <><Header /><NeedHelpRightNow />{children}<Footer /></>;
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

export function LessonSidebar({ stepNumber, lessons, currentId }: { stepNumber: number; lessons: JourneyLesson[]; currentId?: string }) {
  const step = journeySteps[stepNumber - 1];
  return (
    <nav className={styles.lessonSidebar} aria-label={`Lessons in Step ${stepNumber}`}>
      <div className={styles.lessonSidebarHeader}>
        <p>Step {stepNumber}</p>
        <strong>{step.title}</strong>
        <div className={styles.stepIdentityImage} role="img" aria-label={`Approved Step ${stepNumber} identity image position`}><span>Step {stepNumber} image</span></div>
      </div>
      <h2>Lessons in Step {stepNumber}</h2>
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={lesson.href} className={lesson.id === currentId ? styles.currentLesson : ""} aria-current={lesson.id === currentId ? "page" : undefined}>
          <span className={styles.lessonState} aria-hidden="true">{lesson.id === currentId ? "●" : "○"}</span>
          <span><small>{lesson.id}</small>{lesson.title}</span>
          <span aria-hidden="true">›</span>
        </Link>
      ))}
      <div className={styles.sidebarLegend} aria-label="Lesson status legend"><span>● Current</span><span>○ Not Started</span></div>
    </nav>
  );
}

export function ProgressSavePrompt() {
  return (
    <aside className={styles.progressPrompt}>
      <div><strong>Want to save your progress?</strong><p>Your Journey remains fully available whether or not you save progress.</p></div>
      <Link href="/journey/save-progress">Save Your Journey Progress</Link>
    </aside>
  );
}
