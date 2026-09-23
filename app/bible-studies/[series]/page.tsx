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
          <h2 id="about-series-title">{series.overviewTitle ?? series.title}</h2>
          <p>{series.introduction}</p>
        </section>

        <PastorIntroductionCard
          title={series.pastorIntroduction.title}
          excerpt={series.pastorIntroduction.excerpt}
          imageSrc={series.pastorIntroduction.imageSrc}
          videoEmbedUrl={series.pastorIntroduction.videoEmbedUrl}
          compactLayout={Boolean(series.lessonGroups)}
        />

        <section className={styles.studiesSection} aria-labelledby="series-studies-title">
          <div className={styles.studiesHeading}>
            <p className={styles.sectionEyebrow}>CONTINUE THE SERIES</p>
            <h2 id="series-studies-title">{series.lessonsTitle ?? `Explore ${series.title}`}</h2>
            <p>
              {series.lessonsDescription ??
                "Choose a study below and continue through the series at your own pace."}
            </p>
          </div>

          {series.lessonGroups ? (
            <div className={styles.lessonGroups}>
              {series.lessonGroups.map((group, index) => (
                <details className={styles.lessonGroup} key={group.id}>
                  <summary className={styles.lessonGroupSummary}>
                    <div>
                      <span className={styles.groupNumber}>GROUP {index + 1}</span>
                      <h3>{group.label}</h3>
                      {group.description && <p>{group.description}</p>}
                    </div>
                    <span className={styles.groupMeta}>
                      {group.lessonSlugs.length} {group.lessonSlugs.length === 1 ? "theme" : "themes"}
                      <span className={styles.groupChevron} aria-hidden="true">⌄</span>
                    </span>
                  </summary>

                  <div className={styles.lessonGroupBody}>
                    <div className={styles.studyGrid}>
                      {group.lessonSlugs.map((slug) => {
                        const lesson = series.lessons.find((item) => item.slug === slug);
                        return lesson ? <BibleStudyLessonCard key={lesson.slug} lesson={lesson} compact /> : null;
                      })}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <div className={styles.studyGrid}>
              {series.lessons.map((lesson) => (
                <BibleStudyLessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          )}
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
