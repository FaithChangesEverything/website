import styles from "./page.module.css";

import JournalHeader from "./components/JournalHeader";
import SectionTitle from "./components/SectionTitle";
import GoldDivider from "./components/GoldDivider";
import LetterBody from "./components/LetterBody";
import Signature from "./components/Signature";

export default function JournalPage() {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        <JournalHeader />

        <SectionTitle title="A Letter from the Pastor" />

        <GoldDivider />

        <LetterBody />

        <Signature />
      </div>
    </main>
  );
}