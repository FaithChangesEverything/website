import styles from "../../page.module.css";

import JournalHeader from "../../components/JournalHeader";
import SectionTitle from "../../components/SectionTitle";
import GoldDivider from "../../components/GoldDivider";
import StudyPageOneBody from "../components/StudyPageOneBody";

export default function StudyPageOne() {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        <JournalHeader />

        <SectionTitle title="Bible Study – Page 1" />

        <GoldDivider />

        <StudyPageOneBody />
      </div>
    </main>
  );
}