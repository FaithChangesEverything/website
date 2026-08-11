import styles from "../../page.module.css";

import JournalHeader from "../../components/JournalHeader";
import SectionTitle from "../../components/SectionTitle";
import GoldDivider from "../../components/GoldDivider";
import StudyPageThreeBody from "../components/StudyPageThreeBody";

export default function StudyPageThree() {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        <JournalHeader />

        <SectionTitle title="Bible Study – Page 3" />

        <GoldDivider />

        <StudyPageThreeBody />
      </div>
    </main>
  );
}