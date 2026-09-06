import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainRow}>
        <div className={styles.brandBlock}>
          <Image
            src="/images/fce-main-logo.png"
            alt="Faith Changes Everything"
            width={320}
            height={190}
            className={styles.logo}
          />
        </div>

        <div className={styles.scriptureBlock}>
          <p className={styles.verse}>
            “If ye have faith as a grain of mustard seed… nothing shall be impossible unto you.”
          </p>
          <p className={styles.reference}>Matthew 17:20 (KJV)</p>
          <p className={styles.ministryLine}>HOPE · TRUTH · LOVE · FOUND IN JESUS</p>
        </div>

        <div className={styles.homeBlock}>
          <Link href="/" className={styles.homeLink}>← Back to Home</Link>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>© {new Date().getFullYear()} Faith Changes Everything. All Rights Reserved.</p>
        <nav className={styles.utilityNav} aria-label="Footer navigation">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">|</span>
          <Link href="/terms">Terms</Link>
          <span aria-hidden="true">|</span>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
