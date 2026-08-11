import styles from "../../page.module.css";

export default function StudyPageThreeBody() {
  return (
    <section className={styles.studyPageBody}>
      <h2 className={styles.studySectionHeading}>
        Meditation & Additional Notes
      </h2>

      <p className={styles.studyIntro}>
        Use this page for deeper study, reflections, prayers, or sermon notes.
      </p>

      <div className={styles.studyNotesField}>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          className={styles.studyNotesArea}
          aria-label="Meditation and Additional Notes"
        />
      </div>

      <div className={styles.relatedStudySection}>
        <label className={styles.studyLabel} htmlFor="relatedStudy">
          Related Study
        </label>

        <textarea
          id="relatedStudy"
          name="relatedStudy"
          className={styles.studyTextArea}
          rows={3}
        />
      </div>
    </section>
  );
}