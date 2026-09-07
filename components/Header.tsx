"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isActiveSection(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

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
        {navItems.map(([label, href]) => {
          const active = isActiveSection(pathname, href);
          return (
            <Link
              key={label}
              href={href}
              className={active ? styles.active : undefined}
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
