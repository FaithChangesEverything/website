import Image from "next/image";
import styles from "../series-page.module.css";

export default function BibleStudySeriesHeader({ title }: { title: string }) {
  return (
    <section className={styles.seriesHero} aria-labelledby="bible-study-series-title">
      <div className={styles.seriesHeroInner}>
        <div className={styles.seriesIdentity} aria-label="FCE Bible Study">
          <span>FCE</span>
          <strong>Bible Study</strong>
        </div>

        <div className={styles.seriesHeroCopy}>
          <p className={styles.seriesEyebrow}>BIBLE STUDY SERIES</p>
          <h1 id="bible-study-series-title">{title}</h1>
        </div>

        <div className={styles.seriesHeroArtwork}>
          <Image
            src="/images/bible-studies/character-of-god/character-of-god-series-header.jpg"
            alt="Open Bible beside the sea with a lighthouse shining in the distance"
            fill
            priority
            sizes="(max-width: 720px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
