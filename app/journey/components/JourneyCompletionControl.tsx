import Link from "next/link";
import { completeJourneyItemAction, reverseJourneyItemAction } from "../progress/actions";
import { getJourneyItemProgress, startJourneyItem } from "../progress/operations";
import styles from "../journey.module.css";
import fixes from "../journey-fixes.module.css";

export async function JourneyCompletionControl({ contentKey, path, itemLabel = "Lesson" }: { contentKey: string; path: string; itemLabel?: "Lesson" | "Study" }) {
  // Handbook rule: the first authenticated opening moves a tracked unit to In Progress.
  const started = await startJourneyItem(contentKey);

  if (!started.saved && started.reason === "no_journey") {
    return (
      <div className={`${styles.completionBar} ${fixes.lessonCompletionConcept}`}>
        <Link className={styles.completeButton} href={`/journey/save-progress?returnTo=${encodeURIComponent(path)}`}>Save My Journey</Link>
        <p className={styles.progressNote}>You can continue without saving. A Journey ID is only needed if you want this progress remembered.</p>
      </div>
    );
  }

  if (!started.saved) {
    return (
      <div className={`${styles.completionBar} ${fixes.lessonCompletionConcept}`} role="status">
        <button className={styles.completeButton} type="button" disabled>Progress unavailable</button>
        <p className={styles.progressNote}>Your {itemLabel.toLowerCase()} remains fully available, but progress could not be saved right now.</p>
      </div>
    );
  }

  const progress = await getJourneyItemProgress(contentKey);
  if (!progress) return null;

  if (progress.status === "completed") {
    const reverse = reverseJourneyItemAction.bind(null, contentKey, path);
    return (
      <div className={`${styles.completionBar} ${fixes.lessonCompletionConcept}`} role="status">
        <strong>✓ {itemLabel} Completed</strong>
        <form action={reverse}><button className={styles.completeButton} type="submit">Mark In Progress</button></form>
        <p className={styles.progressNote}>Your completion is saved. You may change it back to In Progress at any time.</p>
      </div>
    );
  }

  if (!progress.completionEligible) {
    return (
      <div className={`${styles.completionBar} ${fixes.lessonCompletionConcept}`} role="status">
        <button className={styles.completeButton} type="button" disabled>Mark {itemLabel} Complete</button>
        <p className={styles.progressNote}>In Progress — completion becomes available after reasonable engagement with this {itemLabel.toLowerCase()}. The final engagement threshold will be set during Sequence 8 testing.</p>
      </div>
    );
  }

  const complete = completeJourneyItemAction.bind(null, contentKey, path);
  return (
    <div className={`${styles.completionBar} ${fixes.lessonCompletionConcept}`}>
      <form action={complete}><button className={styles.completeButton} type="submit">✓ Mark {itemLabel} Complete</button></form>
      <p className={styles.progressNote}>In Progress — choose completion only when you are ready. Your Journey remains fully available either way.</p>
    </div>
  );
}
