import Image from "next/image";
import Link from "next/link";
import styles from "../series-page.module.css";
import type { BibleStudyLessonSummary } from "../data";

export default function OldTestamentLessonRow({
  lesson,
}: {
  lesson: BibleStudyLessonSummary;
}) {
  return (
    <article className={styles.studyRow}>
      {lesson.imageSrc ? (
        <div className={styles.studyRowArtwork}>
          <Image
            src={lesson.imageSrc}
            alt={lesson.imageAlt ?? ""}
            width={720}
            height={405}
            className={styles.studyRowImage}
          />
        </div>
      ) : (
        <div
          className={styles.studyRowArtworkPlaceholder}
          aria-label={`${lesson.title} artwork placeholder`}
        >
          <span>Approved lesson image will appear here</span>
        </div>
      )}

      <div className={styles.studyRowBody}>
        <h3>{lesson.title}</h3>
        <p>{lesson.summary}</p>
      </div>

      <div className={styles.studyRowAction}>
        {lesson.href ? (
          <Link className={styles.studyButton} href={`${lesson.href}#primary-teaching`}>
            Begin Study <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span
            className={`${styles.studyButton} ${styles.disabledButton}`}
            aria-disabled="true"
          >
            Begin Study <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </article>
  );
}
