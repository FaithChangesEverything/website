import Image from "next/image";
import Link from "next/link";
import styles from "../series-page.module.css";
import type { BibleStudyLessonSummary } from "../data";

export default function BibleStudyLessonCard({ lesson }: { lesson: BibleStudyLessonSummary }) {
  return (
    <article className={styles.studyCard}>
      {lesson.imageSrc ? (
        <div className={styles.studyArtworkImageWrap}>
          <Image
            src={lesson.imageSrc}
            alt={lesson.imageAlt ?? ""}
            width={900}
            height={560}
            className={styles.studyArtworkImage}
          />
        </div>
      ) : (
        <div className={styles.studyArtworkPlaceholder} aria-label={`${lesson.title} artwork placeholder`}>
          <span>Approved lesson image will appear here</span>
        </div>
      )}

      <div className={styles.studyCardBody}>
        <h3>{lesson.title}</h3>
        <p>{lesson.summary}</p>

        {lesson.href ? (
          <Link className={styles.studyButton} href={lesson.href}>
            Begin Study <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className={`${styles.studyButton} ${styles.disabledButton}`} aria-disabled="true">
            Begin Study <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </article>
  );
}
