import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { bibleStudySeriesDetails, getBibleStudySeriesDetail } from "../../data";
import styles from "../../lesson-page.module.css";

export function generateStaticParams() {
  return bibleStudySeriesDetails.flatMap((series) =>
    series.lessons.map((lesson) => ({
      series: series.slug,
      lesson: lesson.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string; lesson: string }>;
}): Promise<Metadata> {
  const { series: seriesSlug, lesson: lessonSlug } = await params;
  const series = getBibleStudySeriesDetail(seriesSlug);
  const lesson = series?.lessons.find((item) => item.slug === lessonSlug);

  if (!series || !lesson) {
    return { title: "Bible Study | Faith Changes Everything" };
  }

  return {
    title: `${lesson.title} | ${series.title} Bible Study | Faith Changes Everything`,
    description: lesson.summary,
  };
}

export default async function BibleStudyLessonPage({
  params,
}: {
  params: Promise<{ series: string; lesson: string }>;
}) {
  const { series: seriesSlug, lesson: lessonSlug } = await params;
  const series = getBibleStudySeriesDetail(seriesSlug);

  if (!series) notFound();

  const lessonIndex = series.lessons.findIndex((item) => item.slug === lessonSlug);
  if (lessonIndex === -1) notFound();

  const lesson = series.lessons[lessonIndex];
  const previousLesson = lessonIndex > 0 ? series.lessons[lessonIndex - 1] : undefined;
  const nextLesson =
    lessonIndex < series.lessons.length - 1 ? series.lessons[lessonIndex + 1] : undefined;

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.lessonHero} aria-labelledby="lesson-title">
        <div className={styles.lessonHeroInner}>
          <div className={styles.lessonHeroCopy}>
            <p className={styles.eyebrow}>{series.title.toUpperCase()} BIBLE STUDY SERIES</p>
            <h1 id="lesson-title">{lesson.title}</h1>
            <p className={styles.lessonSummary}>{lesson.summary}</p>
            <p className={styles.primaryScripture}>
              <span>Primary Scripture</span>
              <strong>Exodus 34:6–7</strong>
            </p>
          </div>

          {lesson.imageSrc && (
            <div className={styles.lessonHeroArtwork}>
              <Image
                src={lesson.imageSrc}
                alt={lesson.imageAlt ?? ""}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 44vw"
              />
            </div>
          )}
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.videoSection} aria-labelledby="teaching-video-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>PRIMARY TEACHING</p>
            <h2 id="teaching-video-title">{lesson.video?.title ?? lesson.title}</h2>
            <p>{lesson.video?.description ?? "The primary teaching video for this lesson will appear here."}</p>
          </div>

          <div className={styles.videoPanel}>
            {lesson.imageSrc && (
              <Image
                src={lesson.imageSrc}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 900px"
                className={styles.videoBackdrop}
              />
            )}
            <div className={styles.videoOverlay} />
            <div className={styles.videoAction}>
              <span className={styles.playIcon} aria-hidden="true">▶</span>
              <strong>{lesson.video?.href ? "Watch Teaching Video" : "Teaching Video Link Coming Next"}</strong>
              <span>
                {lesson.video?.href
                  ? "Open the official teaching video."
                  : "The approved official video source will be connected here."}
              </span>
            </div>
          </div>

          {lesson.video?.href ? (
            <a className={styles.primaryButton} href={lesson.video.href} target="_blank" rel="noreferrer">
              Watch Video <span aria-hidden="true">→</span>
            </a>
          ) : (
            <span className={`${styles.primaryButton} ${styles.disabledButton}`} aria-disabled="true">
              Watch Video <span aria-hidden="true">→</span>
            </span>
          )}

          {lesson.video?.attribution && (
            <aside className={styles.attribution} aria-label="Video ownership information">
              <strong>{lesson.video.ownerName ?? "Resource ownership"}</strong>
              <p>{lesson.video.attribution}</p>
            </aside>
          )}
        </section>

        <section className={styles.resourcesSection} aria-labelledby="additional-resources-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>GO DEEPER</p>
            <h2 id="additional-resources-title">Additional Study Resources</h2>
            <p>
              Use the companion resources below to read, review, and continue studying the teaching at your own pace.
            </p>
          </div>

          <div className={styles.resourceGrid}>
            {(lesson.resources ?? []).map((resource) => (
              <article className={styles.resourceCard} key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                {resource.href ? (
                  <a href={resource.href} className={styles.resourceAction}>
                    {resource.actionLabel ?? "Open Resource"} <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className={`${styles.resourceAction} ${styles.disabledResource}`} aria-disabled="true">
                    {resource.actionLabel ?? "Open Resource"} <span aria-hidden="true">→</span>
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <nav className={styles.lessonNavigation} aria-label="Bible study lesson navigation">
          <div className={styles.navSlot}>
            {previousLesson &&
              (previousLesson.href ? (
                <Link href={previousLesson.href}>← {previousLesson.title}</Link>
              ) : (
                <span className={styles.navDisabled} aria-disabled="true">
                  ← {previousLesson.title}
                </span>
              ))}
          </div>

          <Link className={styles.backToSeries} href={`/bible-studies/${series.slug}`}>
            Back to {series.title}
          </Link>

          <div className={`${styles.navSlot} ${styles.navSlotRight}`}>
            {nextLesson &&
              (nextLesson.href ? (
                <Link href={nextLesson.href}>{nextLesson.title} →</Link>
              ) : (
                <span className={styles.navDisabled} aria-disabled="true">
                  {nextLesson.title} →
                </span>
              ))}
          </div>
        </nav>
      </div>

      <Footer />
    </main>
  );
}
