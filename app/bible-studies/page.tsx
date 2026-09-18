import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeriesCard from "./components/SeriesCard";
import { bibleStudyGroups, bibleStudySeries } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bible Study Resources | Faith Changes Everything",
  description: "Explore Faith Changes Everything Bible study series and resources designed to help you understand Scripture and grow in your knowledge of God.",
};

export default function BibleStudiesPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="bible-study-library-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FAITH CHANGES EVERYTHING</p>
          <h1 id="bible-study-library-title">FCE Bible Study Library</h1>
          <p className={styles.heroLead}>
            Explore Bible studies designed to help you understand Scripture, know God more deeply, and continue growing in your walk with Christ.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.intro} aria-labelledby="explore-studies-title">
          <h2 id="explore-studies-title">Explore Bible Studies</h2>
          <p>
            Choose a series below to begin. Each series has its own introduction, study path, and supporting resources so you can move through the material at a pace that works for you.
          </p>
        </section>

        <div className={styles.groupList}>
          {bibleStudyGroups.map((group) => {
            const seriesInGroup = bibleStudySeries.filter((series) => series.group === group.id);
            if (seriesInGroup.length === 0) return null;

            return (
              <section className={styles.groupSection} key={group.id} aria-labelledby={`group-${group.id}`}>
                <div className={styles.groupHeading}>
                  <h2 id={`group-${group.id}`}>{group.label}</h2>
                  <p>{group.description}</p>
                </div>

                <div className={styles.seriesGrid}>
                  {seriesInGroup.map((series) => (
                    <SeriesCard key={series.slug} series={series} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
