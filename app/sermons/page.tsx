import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SermonLibrary from "./SermonLibrary";
import { sermons } from "./data";
import styles from "./sermons.module.css";

export const metadata: Metadata = {
  title: "Sermon Library | Faith Changes Everything",
  description:
    "Watch Scripture-centered sermons and read written messages from Faith Changes Everything. Explore hope, salvation, faith, and the heart of God.",
};

export default function SermonsPage() {
  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.hero} aria-labelledby="sermons-heading">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FAITH CHANGES EVERYTHING</p>
          <h1 id="sermons-heading">FCE Sermon Library</h1>
          <span className={styles.goldRule} aria-hidden="true" />
          <p className={styles.heroLead}>
            Messages of hope, truth, and encouragement rooted in God&apos;s Word.
            Browse the collection, watch a message, or read the written sermon.
          </p>
        </div>
      </section>
      <SermonLibrary sermons={sermons} />
      <Footer />
    </main>
  );
}
