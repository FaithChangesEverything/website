import Link from "next/link";
import { JourneyFrame } from "../components/JourneyShell";
import styles from "./save-progress.module.css";

export const metadata = {
  title: "Save Your Journey Progress | Journey to Hope",
  description: "Learn how the private Journey ID will save Journey to Hope progress without creating an FCE account or collecting identifying information.",
};

export default function SaveProgressPage() {
  return (
    <JourneyFrame>
      <main className={styles.page}>
        <div className={styles.shell}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Journey to Hope</p>
            <h1>Save Your Journey Progress</h1>
            <p className={styles.lead}>A Journey ID will let you save completed Journey to Hope lessons without creating an FCE account or giving us your name, email address, or phone number.</p>
          </header>

          <section className={styles.privacyCard} aria-labelledby="privacy-title">
            <div className={styles.privacyHeader}>
              <span className={styles.privacyIcon} aria-hidden="true">✓</span>
              <div>
                <h2 id="privacy-title">Private by design</h2>
                <p>Your Journey remains fully available whether or not you choose to save progress.</p>
              </div>
            </div>

            <div className={styles.points}>
              <article className={styles.point}>
                <strong>No FCE account</strong>
                <p>A Journey ID is not a login, membership, or ministry account.</p>
              </article>
              <article className={styles.point}>
                <strong>No identifying details required</strong>
                <p>Your name, email address, and phone number are not required to save Journey progress.</p>
              </article>
              <article className={styles.point}>
                <strong>You keep your Journey ID</strong>
                <p>Because the ID is not tied to identifying information, FCE will not be able to recover it if it is lost.</p>
              </article>
            </div>

            <div className={styles.actions} aria-label="Journey ID actions">
              <article className={styles.actionCard}>
                <h3>Create My Journey ID</h3>
                <p>A secure, randomly generated Journey ID will be created for you when progress persistence is enabled.</p>
                <button type="button" disabled title="Journey ID creation is implemented in Sequence 8">Create My Journey ID</button>
              </article>
              <article className={styles.actionCard}>
                <h3>I Already Have a Journey ID</h3>
                <p>You will be able to restore your saved Journey progress on another browser or device using the ID you kept.</p>
                <button type="button" disabled title="Journey ID restoration is implemented in Sequence 8">Use My Journey ID</button>
              </article>
            </div>

            <p className={styles.sequenceNote}>Sequence #6 establishes this approved page structure only. Secure Journey ID creation, browser remembrance, and Supabase progress persistence remain intentionally deferred to Sequence #8 so no visitor data is collected prematurely.</p>
          </section>

          <div className={styles.backRow}><Link href="/journey">← Back to Journey to Hope</Link></div>
        </div>
      </main>
    </JourneyFrame>
  );
}
