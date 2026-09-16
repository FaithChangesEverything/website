import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BibleStudyLessonCard from "../components/BibleStudyLessonCard";
import BibleStudySeriesHeader from "../components/BibleStudySeriesHeader";
import PastorIntroductionCard from "../components/PastorIntroductionCard";
import { bibleStudySeriesDetails, getBibleStudySeriesDetail } from "../data";
import styles from "../series-page.module.css";

export function generateStaticParams() {
  return bibleStudySeriesDetails.map((series) => ({ series: series.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string }>;
}): Promise<Metadata> {
  const { series: seriesSlug } = await params;
  const series = getBibleStudySeriesDetail(seriesSlug);

  if (!series) {
    return { title: "Bible Study | Faith Changes Everything" };
  }

  return {
    title: `${series.title} Bible Study | Faith Changes Everything`,
    description: series.introduction,
  };
}

export default async function BibleStudySeriesPage({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const { series: seriesSlug } = await params;
  const series = getBibleStudySeriesDetail(seriesSlug);

  if (!series) notFound();

  return (
    <main className={styles.page}>
      <Header />
      <BibleStudySeriesHeader title={series.title} />

      <div className={styles.content}>
        <section className={styles.seriesIntro} aria-labelledby="about-series-title">
          <p className={styles.sectionEyebrow}>ABOUT THIS SERIES</p>
          <h2 id="about-series-title">Knowing the Character of God</h2>
          <p>{series.introduction}</p>
        </section>

        <PastorIntroductionCard
          title={series.pastorIntroduction.title}
          excerpt={series.pastorIntroduction.excerpt}
          imageSrc={series.pastorIntroduction.imageSrc}
          videoEmbedUrl={series.pastorIntroduction.videoEmbedUrl}
        />

        <section className={styles.studiesSection} aria-labelledby="series-studies-title">
          <div className={styles.studiesHeading}>
            <p className={styles.sectionEyebrow}>CONTINUE THE SERIES</p>
            <h2 id="series-studies-title">Explore the Character of God</h2>
            <p>
              Begin with the foundation in Exodus, then continue through the characteristics God reveals about Himself.
            </p>
          </div>

          <div className={styles.studyGrid}>
            {series.lessons.map((lesson) => (
              <BibleStudyLessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        </section>

        {series.sourceNote && (
          <aside className={styles.sourceNote} aria-label="Series source information">
            <strong>About the teaching resources</strong>
            <p>{series.sourceNote}</p>
          </aside>
        )}

        <div className={styles.backRow}>
          <Link href="/bible-studies">← Back to FCE Bible Study Library</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
