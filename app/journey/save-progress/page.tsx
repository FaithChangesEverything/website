import Link from "next/link";
import { JourneyFrame } from "../components/JourneyShell";
import { SaveProgressClient } from "./SaveProgressClient";
import styles from "./save-progress.module.css";

export const metadata = {
  title: "Save Your Journey Progress | Journey to Hope",
  description: "Save Journey to Hope progress privately with a Journey ID without creating an FCE account or providing identifying information.",
};

export default async function SaveProgressPage({ searchParams }: { searchParams: Promise<{ returnTo?: string }> }) {
  const { returnTo } = await searchParams;

  return (
    <JourneyFrame>
      <main className={styles.page}>
        <div className={styles.shell}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Journey to Hope</p>
            <h1>Save Your Journey Progress</h1>
            <p className={styles.lead}>A Journey ID lets you save your Journey to Hope progress without creating an FCE account or giving us your name, email address, or phone number.</p>
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
                <p>Because the ID is not tied to identifying information, FCE cannot recover it if it is lost.</p>
              </article>
            </div>

            <SaveProgressClient returnTo={returnTo} />
          </section>

          <div className={styles.backRow}><Link href={returnTo?.startsWith("/journey") ? returnTo : "/journey"}>← Continue without saving</Link></div>
        </div>
      </main>
    </JourneyFrame>
  );
}
