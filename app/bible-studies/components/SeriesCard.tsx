import Link from "next/link";
import styles from "../page.module.css";
import type { BibleStudySeriesSummary } from "../data";

export default function SeriesCard({ series }: { series: BibleStudySeriesSummary }) {
  return (
    <article className={styles.seriesCard}>
      <div className={styles.seriesArtwork} aria-label={`${series.title} artwork placeholder`}>
        <span>{series.imageSrc ? "Series artwork" : "Approved series image will appear here"}</span>
      </div>

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
