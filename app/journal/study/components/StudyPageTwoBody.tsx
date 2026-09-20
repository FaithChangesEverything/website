"use client";

import styles from "../../page.module.css";
import type { JournalFieldName, JournalFields } from "../../lib/journalModel";

type StudyBodyProps = {
  values?: JournalFields;
  onFieldChange?: (field: JournalFieldName, value: string) => void;
};

export default function StudyPageTwoBody({
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
        Reflection, Prayer &amp; Application
      </h2>

      <div className={styles.studyTextAreaFieldLarge}>
        <label className={styles.studyLabel} htmlFor="godTeaching">
          What is God teaching me?
        </label>
        <textarea
          id="godTeaching"
          name="godTeaching"
          className={styles.studyTextAreaLarge}
          rows={5}
          {...bind("godTeaching")}
        />
      </div>

      <div className={styles.studyTextAreaFieldLarge}>
        <label className={styles.studyLabel} htmlFor="application">
          How can I apply this passage?
        </label>
        <textarea
          id="application"
          name="application"
          className={styles.studyTextAreaLarge}
          rows={5}
          {...bind("application")}
        />
      </div>

      <div className={styles.studyTextAreaFieldLarge}>
        <label className={styles.studyLabel} htmlFor="prayer">
          Prayer
        </label>
        <textarea
          id="prayer"
          name="prayer"
          className={styles.studyTextAreaLarge}
          rows={5}
          {...bind("prayer")}
        />
      </div>

      <div className={styles.studyTextAreaField}>
        <label className={styles.studyLabel} htmlFor="fceMoment">
          Faith Changes Everything Moment
        </label>
        <textarea
          id="fceMoment"
          name="fceMoment"
          className={styles.studyTextArea}
          rows={3}
          {...bind("fceMoment")}
        />
      </div>

      <div className={styles.studyTextAreaField}>
        <label className={styles.studyLabel} htmlFor="actionStep">
          Action Step
        </label>
        <textarea
          id="actionStep"
          name="actionStep"
          className={styles.studyTextArea}
          rows={3}
          {...bind("actionStep")}
        />
      </div>
    </section>
  );
}
