import Link from "next/link";
import styles from "../page.module.css";
import type { BibleStudySeriesSummary } from "../data";

const artworkClassBySlug: Record<string, string> = {
  "character-of-god": styles.artCharacterOfGod,
  "all-about-creation": styles.artAllAboutCreation,
  "how-to-read-the-bible": styles.artHowToReadTheBible,
  "how-to-study-the-bible": styles.artHowToStudyTheBible,
  "sermon-on-the-mount": styles.artSermonOnTheMount,
  "sermon-on-the-mount-visual-commentaries": styles.artSermonOnTheMountVisualCommentaries,
  "biblical-themes": styles.artBiblicalThemes,
  "ten-commandments": styles.artTenCommandments,
  "old-testament": styles.artOldTestament,
  "new-testament": styles.artNewTestament,
  "fce-beginner": styles.artFceBeginner,
  "fce-intermediate": styles.artFceIntermediate,
  "fce-advanced": styles.artFceAdvanced,
};

export default function SeriesCard({ series }: { series: BibleStudySeriesSummary }) {
  const artworkClass = artworkClassBySlug[series.slug];

  return (
    <article className={styles.seriesCard}>
      {artworkClass ? (
        <div
          className={`${styles.seriesArtwork} ${artworkClass}`}
          role="img"
          aria-label={series.imageAlt ?? `${series.title} Bible study series artwork`}
        />
      ) : (
        <div className={styles.seriesArtworkPlaceholder} aria-hidden="true">
          <span>Approved series image will appear here</span>
        </div>
      )}

      <div className={styles.seriesCardBody}>
        <h3>{series.title}</h3>
        <p>{series.summary}</p>

        {series.href ? (
          <Link className={styles.seriesAction} href={series.href}>
            Explore Series <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className={`${styles.seriesAction} ${styles.seriesActionDisabled}`} aria-disabled="true">
            Explore Series <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </article>
  );
}
