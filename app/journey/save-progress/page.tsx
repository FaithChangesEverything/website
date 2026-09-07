import Link from "next/link";
import { JourneyFrame } from "../components/JourneyShell";
import styles from "../journey.module.css";

export default function SaveProgressPage(){
  return <JourneyFrame><main className={styles.lessonContent}><p className={styles.eyebrow}>Journey to Hope</p><h1>Save Your Journey Progress</h1><p className={styles.lead}>A Journey ID will let you save completed Journey to Hope lessons without creating an FCE account or giving us your name, email address, or phone number.</p><div className={styles.mediaPlaceholder}><strong>Privacy-first by design</strong><p>Your Journey remains fully available without a Journey ID. FCE will not be able to recover a lost Journey ID because it is not tied to identifying information.</p></div><p>The secure Journey ID creation and restoration controls will be implemented with the approved Supabase persistence model in Sequence #8. This Sequence #6 page reserves the approved architecture without introducing premature data collection.</p><Link href="/journey" className={styles.backLink}>← Back to Journey to Hope</Link></main></JourneyFrame>;
}
