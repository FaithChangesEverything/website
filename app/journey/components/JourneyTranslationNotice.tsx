import styles from "../step-overview-sequence9.module.css";

export function JourneyTranslationNotice() {
  return (
    <aside className={styles.translationNotice} aria-labelledby="journey-translation-title">
      <strong id="journey-translation-title">About Scripture Translations</strong>
      <p>
        Throughout Journey to Hope, we use Scripture quotations from the New
        International Version (NIV) and the King James Version (KJV). When you
        select a Scripture reference, it opens in our FCE Bible Reader, which
        uses the KJV. The wording may differ between translations, but you
        can read the passage and explore its surrounding chapter.
      </p>
    </aside>
  );
}
