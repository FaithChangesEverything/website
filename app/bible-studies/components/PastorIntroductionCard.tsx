import Image from "next/image";
import Link from "next/link";
import styles from "../series-page.module.css";

type PastorIntroductionCardProps = {
  title: string;
  excerpt: string;
  imageSrc: string;
  videoHref?: string;
};

export default function PastorIntroductionCard({
  title,
  excerpt,
  imageSrc,
  videoHref,
}: PastorIntroductionCardProps) {
  return (
    <section className={styles.pastorCard} aria-labelledby="pastor-series-introduction">
      <div className={styles.pastorPortraitWrap}>
        <Image
          src={imageSrc}
          alt="Pastor Richard"
          width={720}
          height={720}
          className={styles.pastorPortrait}
        />
      </div>

      <div className={styles.pastorCardBody}>
        <p className={styles.cardEyebrow}>SERIES INTRODUCTION</p>
        <h2 id="pastor-series-introduction">{title}</h2>
        <p>{excerpt}</p>

        {videoHref ? (
          <Link className={styles.primaryButton} href={videoHref}>
            Watch Introduction <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className={`${styles.primaryButton} ${styles.disabledButton}`} aria-disabled="true">
            Watch Introduction <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </section>
  );
}
