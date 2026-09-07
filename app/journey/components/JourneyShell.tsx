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
      <a href="https://988lifeline.org/" rel="noreferrer">988 Lifeline</a>
    </aside>
  );
}

export function JourneyFrame({ children }: { children: React.ReactNode }) {
  return <><Header /><NeedHelpRightNow />{children}<Footer /></>;
}

export function StepBanner({ currentStep }: { currentStep: number }) {
  return (
    <nav className={styles.stepBanner} aria-label="Journey to Hope steps">
      {journeySteps.map((step) => (
        <Link key={step.id} href={step.href} className={step.number === currentStep ? styles.currentStep : ""} aria-current={step.number === currentStep ? "step" : undefined}>
          <span>Step {step.number}</span><strong>{step.title}</strong>
        </Link>
      ))}
    </nav>
  );
}

export function LessonSidebar({ lessons, currentId }: { lessons: JourneyLesson[]; currentId?: string }) {
  return (
    <nav className={styles.lessonSidebar} aria-label="Lessons in this step">
      <h2>In This Step</h2>
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={lesson.href} className={lesson.id === currentId ? styles.currentLesson : ""} aria-current={lesson.id === currentId ? "page" : undefined}>
          <span aria-hidden="true">{lesson.id === currentId ? "●" : "○"}</span>
          <span><small>{lesson.id}</small>{lesson.title}</span>
        </Link>
      ))}
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
