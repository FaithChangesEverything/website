import Image from "next/image";
import styles from "./page.module.css";

export default function DownloadsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <header className={styles.header}>
          <Image
            src="/journal/assets/fce-banner-transparent-v2.png"
            alt="Faith Changes Everything"
            width={320}
            height={140}
            className={styles.logo}
            priority
          />

          <h1 className={styles.heading}>
            Free Ministry Resources
          </h1>

          <div className={styles.goldLine}></div>

          <p className={styles.intro}>
            Download free Faith Changes Everything resources created to
            help you study God&apos;s Word, strengthen your faith, and
            continue growing in your walk with Christ.
          </p>
        </header>

        <section className={styles.resourceGrid}>
          <article className={styles.resourceCard}>
            <div className={styles.cardHeading}>
              <span className={styles.resourceType}>
                Bible Study Resource
              </span>

              <h2>
                Faith Changes Everything Bible Journal
              </h2>

              <p className={styles.subtitle}>
                3-Page Printable Bible Study Set
              </p>
            </div>

            <p>
              Prefer to write by hand? This free printable set contains
              the same three study, reflection, prayer, application, and
              notes pages used in the Faith Changes Everything online
              Bible Journal.
            </p>

            <p>
              Print as many copies as you need and use them as you study
              Scripture, record what God is teaching you, write your
              prayers, and remember the moments when faith changes
              everything.
            </p>

            <div className={styles.buttonArea}>
              <a
                href="/downloads/faith-changes-everything-bible-journal-pages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                Open Printable Bible Journal
              </a>

              <span className={styles.fileNote}>
                Free PDF • 3 Pages • US Letter
              </span>
            </div>
          </article>
        </section>

        <section className={styles.appNotice}>
          <h2>Faith Changes Everything Bible Journal App</h2>

          <p>
            A dedicated Bible Journal app is planned for the future,
            allowing you to continue your journal experience wherever
            you go.
          </p>

          <span>Coming Soon</span>
        </section>

        <footer className={styles.footer}>
          <p>
            More free Faith Changes Everything resources will be added
            here as they become available.
          </p>
        </footer>
      </section>
    </main>
  );
}