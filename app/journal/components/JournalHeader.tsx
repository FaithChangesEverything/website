import Image from "next/image";
import styles from "../page.module.css";

export default function JournalHeader() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.banner}
        src="/journal/assets/fce-banner.png"
        alt="Faith Changes Everything"
        width={320}
        height={160}
        priority
      />
    </header>
  );
}