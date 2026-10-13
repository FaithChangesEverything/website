"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  ["Home", "/"],
  ["Journey to Hope", "/journey"],
  ["Bible", "/bible"],
  ["Music", "/music"],
  ["Sermons", "/sermons"],
  ["Prayer", "/prayer"],
  ["Resources", "/resources"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const bibleMenuLinks = [
  ["Read the Bible", "/bible"],
  ["Bible Reading Plans", "/reading-plans"],
  ["Bible Study Library", "/bible-studies"],
];

function isActiveSection(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isBibleSection(pathname: string) {
  return bibleMenuLinks.some(([, href]) => isActiveSection(pathname, href));
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Faith Changes Everything home">
        <Image src="/images/fce-main-logo.png" alt="Faith Changes Everything"
          width={320} height={190} priority />
      </Link>
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map(([label, href]) => {
          const active = label === "Bible" ? isBibleSection(pathname) : isActiveSection(pathname, href);
          const current = pathname === href ? "page" : active ? "location" : undefined;
          if (label === "Bible") {
            return (
              <div className={styles.bibleNavGroup} key={label}>
                <Link href="/bible" className={active ? styles.active : undefined} aria-current={current}>Bible</Link>
                <details className={styles.bibleDropdown} key={pathname}>
                  <summary aria-label="Open Bible navigation options" title="Bible sections">▾</summary>
                  <div className={styles.bibleDropdownPanel}>
                    {bibleMenuLinks.map(([item, destination]) =>
                      <Link key={destination} href={destination} aria-current={pathname === destination ? "page" : undefined}>{item}</Link>
                    )}
                  </div>
                </details>
              </div>
            );
          }
          return (
            <Link key={label} href={href} className={active ? styles.active : undefined} aria-current={current}>
              {label}
            </Link>
          );
        })}
      </nav>
      <details className={styles.mobileMenu} key={pathname}>
        <summary aria-label="Open website navigation">Menu <span aria-hidden="true">☰</span></summary>
        <nav className={styles.mobileLinks} aria-label="Mobile primary navigation">
          {navItems.map(([label, href]) => label === "Bible" ? (
            <details className={styles.mobileBibleGroup} key={label}>
              <summary className={isBibleSection(pathname) ? styles.active : undefined}>Bible <span aria-hidden="true">▾</span></summary>
              <div className={styles.mobileBibleLinks}>
                {bibleMenuLinks.map(([item,destination]) =>
                  <Link key={destination} href={destination} aria-current={pathname===destination?"page":undefined} className={isActiveSection(pathname,destination)?styles.active:undefined}>{item}</Link>
                )}
              </div>
            </details>
          ) : (
            <Link key={label} href={href} aria-current={isActiveSection(pathname, href) ? "page" : undefined} className={isActiveSection(pathname,href) ? styles.active : undefined}>{label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
