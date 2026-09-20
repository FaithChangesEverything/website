"use client";

import styles from "../../page.module.css";
import type { JournalFieldName, JournalFields } from "../../lib/journalModel";

type StudyBodyProps = {
  values?: JournalFields;
  onFieldChange?: (field: JournalFieldName, value: string) => void;
};

export default function StudyPageThreeBody({
  values,
  onFieldChange,
}: StudyBodyProps) {
  const bind = (field: JournalFieldName) => ({
    value: values?.[field],
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      onFieldChange?.(field, event.target.value),
  });

  return (
    <section className={styles.studyPageBody}>
      <h2 className={styles.studySectionHeading}>
        Meditation &amp; Additional Notes
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
          {...bind("additionalNotes")}
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
          {...bind("relatedStudy")}
        />
      </div>
    </section>
  );
}
