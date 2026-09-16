import styles from "../series-page.module.css";

export default function BibleStudySeriesHeader({ title }: { title: string }) {
  return (
    <section className={styles.seriesHero} aria-labelledby="bible-study-series-title">
      <div className={styles.seriesHeroInner}>
        <div className={styles.seriesHeroCopy}>
          <p className={styles.seriesEyebrow}>FCE BIBLE STUDY</p>
          <h1 id="bible-study-series-title">{title}</h1>
        </div>

        <div className={styles.seriesHeroArtwork} aria-label="Open Bible and lighthouse artwork placeholder">
          <span>Approved open Bible + lighthouse artwork will appear here</span>
        </div>
      </div>
    </section>
  );
}
