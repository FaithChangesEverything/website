import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./guide.module.css";

const documentUrl = "https://resources.faithchangeseverything.org/documents/bible-studies/bible-project/doc-2026-00212-how-to-use-the-bible.docx";
const previewUrl = "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(documentUrl);

export const metadata = {
  title: "How to Use the Bible | Faith Changes Everything",
  description: "Read the FCE beginner's guide to using the Bible online or download a copy."
};

export default function HowToUseBible() {
  return <><Header/><main className={styles.main}>
    <nav className={styles.back}><Link href="/bible">← Back to FCE Bible</Link></nav>
    <header className={styles.heading}>
      <p>FCE BIBLE RESOURCE</p>
      <h1>How to Read the Bible</h1>
      <span>A Beginner’s Guide to Finding, Reading, and Navigating God’s Word</span>
    </header>
    <section className={styles.viewer} aria-label="How to Read the Bible document viewer">
      <iframe title="How to Read the Bible — FCE guide" src={previewUrl} loading="lazy" referrerPolicy="no-referrer" />
    </section>
    <p className={styles.note}>This document is previewed using Microsoft’s online Word viewer. If the preview cannot display, please try a different browser. The preview service receives the public document address.</p>
  </main><Footer/></>;
}
