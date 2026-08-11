import styles from "../../page.module.css";

import JournalHeader from "../../components/JournalHeader";
import SectionTitle from "../../components/SectionTitle";
import GoldDivider from "../../components/GoldDivider";
import StudyPageTwoBody from "../components/StudyPageTwoBody";

export default function StudyPageTwo() {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        <JournalHeader />

        <SectionTitle title="Bible Study – Page 2" />

        <GoldDivider />

        <StudyPageTwoBody />
      </div>
    </main>
  );
}