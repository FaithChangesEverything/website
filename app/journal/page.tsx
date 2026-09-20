import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";
import JournalHeader from "./components/JournalHeader";
import SectionTitle from "./components/SectionTitle";
import GoldDivider from "./components/GoldDivider";

const printablePdfUrl =
  "https://resources.faithchangeseverything.org/documents/doc-2026-00003-fce-three-page-bible-study.pdf";

export const metadata: Metadata = {
  title: "Bible Journal | Faith Changes Everything",
  description:
    "A free three-page Bible study journal from Faith Changes Everything for Scripture study, reflection, prayer, application, and notes.",
};

export default function JournalPage() {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        <JournalHeader />

        <SectionTitle title="Faith Changes Everything Bible Journal" />

        <GoldDivider />

        <section className={styles.journalLanding} aria-labelledby="journal-resource-title">
          <p className={styles.journalLead}>
            The Faith Changes Everything Bible Journal is a simple place to slow
            down, study God&apos;s Word, record what you are learning, pray, and
            reflect on how Scripture applies to your life.
          </p>

          <article className={styles.journalResourceCard}>
            <p className={styles.journalEyebrow}>Free Bible Study Resource</p>
            <h2 id="journal-resource-title">Three-Page Bible Study Set</h2>
            <p>
              Use the three pages together as you study Scripture: begin with the
              passage and its context, move into reflection and application, and
              finish with space for meditation and additional notes.
            </p>

            <div className={styles.journalActions}>
              <a
                href={printablePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.journalPrimaryAction}
              >
                Open Printable PDF
              </a>
              <Link href="/journal/printable" className={styles.journalSecondaryAction}>
                View the Pages Online
              </Link>
            </div>

            <p className={styles.journalFileNote}>Free PDF • 3 Pages • US Letter</p>
          </article>

          <section className={styles.journalUse} aria-labelledby="journal-use-title">
            <h2 id="journal-use-title">Use it as you study</h2>
            <p>
              Record the passage you are reading, what stands out, what you are
              learning about God, how you can respond, and the prayers you want
              to remember. There is no required pace and no account is needed to
              use the printable journal.
            </p>
            <p>
              Faith Changes Everything does not collect the notes or prayers you
              write in this printable resource.
            </p>
          </section>

          <div className={styles.journalFooterLinks}>
            <Link href="/journey">Return to Journey to Hope</Link>
            <Link href="/downloads">Explore Free Ministry Resources</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
