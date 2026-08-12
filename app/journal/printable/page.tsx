import styles from "../page.module.css";

import JournalHeader from "../components/JournalHeader";
import SectionTitle from "../components/SectionTitle";
import GoldDivider from "../components/GoldDivider";

import StudyPageOneBody from "../study/components/StudyPageOneBody";
import StudyPageTwoBody from "../study/components/StudyPageTwoBody";
import StudyPageThreeBody from "../study/components/StudyPageThreeBody";

export default function PrintableJournalPage() {
  return (
    <main className={styles.printableDocument}>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 1" />
        <GoldDivider />
        <StudyPageOneBody />
      </section>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 2" />
        <GoldDivider />
        <StudyPageTwoBody />
      </section>

      <section className={styles.printablePage}>
        <JournalHeader />
        <SectionTitle title="Bible Study – Page 3" />
        <GoldDivider />
        <StudyPageThreeBody />
      </section>

    </main>
  );
}