import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import type { BibleStudySeriesSummary } from "../data";

export default function SeriesCard({ series }: { series: BibleStudySeriesSummary }) {
  const imageSrc = series.imageSrc ?? `/images/bible-studies/page1/${series.slug}.jpg`;

  return (
    <article className={styles.seriesCard}>
      <div className={styles.seriesArtwork}>
        <Image
          src={imageSrc}
          alt={series.imageAlt ?? `${series.title} Bible study series artwork`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
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
