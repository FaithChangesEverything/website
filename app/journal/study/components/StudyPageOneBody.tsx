import styles from "../../page.module.css";

export default function StudyPageOneBody() {
  return (
    <section className={styles.studyPageBody}>
      <h2 className={styles.studySectionHeading}>
        Scripture, Observation & Context
      </h2>

      <div className={styles.studyBasicsRow}>
        <div className={styles.studyField}>
          <label className={styles.studyLabel} htmlFor="book">
            Book
          </label>
          <input
            id="book"
            name="book"
            type="text"
            className={styles.studyInput}
          />
        </div>

        <div className={styles.studyFieldSmall}>
          <label className={styles.studyLabel} htmlFor="chapter">
            Chapter
          </label>
          <input
            id="chapter"
            name="chapter"
            type="text"
            className={styles.studyInput}
          />
        </div>

        <div className={styles.studyFieldSmall}>
          <label className={styles.studyLabel} htmlFor="verses">
            Verses
          </label>
          <input
            id="verses"
            name="verses"
            type="text"
            className={styles.studyInput}
          />
        </div>
      </div>

      <div className={styles.studyFieldFull}>
        <label className={styles.studyLabel} htmlFor="theme">
          Theme
        </label>
        <input
          id="theme"
          name="theme"
          type="text"
          className={styles.studyInput}
        />
      </div>

      <div className={styles.studyTextAreaField}>
        <label className={styles.studyLabel} htmlFor="keyVerse">
          Key Verse
        </label>
        <textarea
          id="keyVerse"
          name="keyVerse"
          className={styles.studyTextArea}
          rows={3}
        />
      </div>

      <div className={styles.studyTextAreaField}>
        <label className={styles.studyLabel} htmlFor="memoryVerse">
          Memory Verse
        </label>
        <textarea
          id="memoryVerse"
          name="memoryVerse"
          className={styles.studyTextArea}
          rows={3}
        />
      </div>
      <div className={styles.studyTextAreaFieldLarge}>
  <label className={styles.studyLabel} htmlFor="historicalContext">
    Historical & Cultural Context
  </label>

  <textarea
    id="historicalContext"
    name="historicalContext"
    className={styles.studyTextAreaLarge}
    rows={5}
  />
</div>

<div className={styles.studyTextAreaField}>
  <label className={styles.studyLabel} htmlFor="wordStudy">
    Hebrew / Greek Word Study
  </label>

  <textarea
    id="wordStudy"
    name="wordStudy"
    className={styles.studyTextArea}
    rows={3}
  />
</div>

<div className={styles.studyTextAreaField}>
  <label className={styles.studyLabel} htmlFor="crossReferences">
    Cross References
  </label>

  <textarea
    id="crossReferences"
    name="crossReferences"
    className={styles.studyTextArea}
    rows={3}
  />
</div>
    </section>
  );
}