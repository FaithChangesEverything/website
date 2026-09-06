import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  ["Home", "/"],
  ["Journey to Hope", "/journey"],
  ["Music", "/music"],
  ["Sermons", "/sermons"],
  ["Prayer", "/prayer"],
  ["Resources", "/resources"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Faith Changes Everything home">
        <Image
          src="/images/fce-main-logo.png"
          alt="Faith Changes Everything"
          width={320}
          height={190}
          priority
        />
      </Link>
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={label} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
