import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bibleBooks, bibleHref } from "@/lib/bible/books";
import styles from "./bible.module.css";
import BibleJump from "@/components/bible/BibleJump";
import BibleIcon from "@/components/bible/BibleIcon";

export const metadata = {
  title:"Read the Bible | Faith Changes Everything",
  description:"Explore all 66 books of the King James Bible and find a passage by book, chapter, and verse."
};
const resources = [
 {title:"Read the Bible",desc:"Open God's Word in a calm, comfortable reading experience.",href:bibleHref("john",1),icon:"read",cta:"Start Reading"},
 {title:"Browse All 66 Books",desc:"Explore the Old and New Testaments, book by book.",href:"#books",icon:"browse",cta:"Browse Books"},
 {title:"How to Use the Bible",desc:"A beginner-friendly guide to finding and reading Scripture.",href:"https://resources.faithchangeseverything.org/documents/bible-studies/bible-project/doc-2026-00212-how-to-read-the-bible.docx",icon:"guide",cta:"Open Guide"},
 {title:"FCE Bible Journal",desc:"Reflect on what you read and apply God's Word.",href:"https://resources.faithchangeseverything.org/documents/doc-2026-00003-fce-three-page-bible-study.pdf",icon:"journal",cta:"Open Journal"},
 {title:"How to Study the Bible",desc:"Practical guidance for studying Scripture with care.",href:"/resources",icon:"study",cta:"Study Resources"}
];
export default function BibleHome(){
return <><Header/><main className={styles.page}>
<section className={styles.hero}>
<p className={styles.eyebrow}>GOD'S WORD LIGHTS THE WAY</p>
<h1>Find Light in God's Word</h1>
<p>Read the King James Bible, explore every book of Scripture, and go directly to the passage you want to read.</p>
<BibleJump initialBook="john" initialChapter={3}/>
<div className={styles.jump}><a className={styles.secondary} href="#books">Browse All Books</a><a className={styles.secondary} href={bibleHref("john",1)}>Open Bible Reader</a></div>
<small>King James Version (KJV)</small>
</section>
<section className={styles.intro}><p className={styles.eyebrow}>WELCOME TO THE FCE BIBLE</p><h2>The Faith Changes Everything Bible</h2><p>Explore Scripture clearly and comfortably, and find encouragement and hope in God's Word.</p></section>
<section className={styles.cards} aria-label="Bible resources">
{resources.map(r=><a key={r.title} className={styles.card} href={r.href}><span className={styles.icon}><BibleIcon name={r.icon as "read" | "browse" | "guide" | "journal" | "study"} size={54}/></span><h3>{r.title}</h3><p>{r.desc}</p><span className={styles.cardLink}>{r.cta} →</span></a>)}
</section>
<section className={styles.books} id="books"><p className={styles.eyebrow}>ALL 66 BOOKS OF SCRIPTURE</p><h2>Choose a Book of the Bible</h2><p>Select a book to open its chapter navigation in the dedicated FCE Bible reader.</p>
<div className={styles.testaments}>{(["old","new"] as const).map(t=><section className={styles.testament} key={t}><span className={styles.testamentIcon}><BibleIcon name={t==="old"?"old":"new"} size={48}/></span><h3>{t==="old"?"Old Testament":"New Testament"}</h3><small>{t==="old"?"39":"27"} books</small><div className={styles.bookGrid}>{bibleBooks.filter(b=>b.testament===t).map(b=><Link key={b.slug} href={bibleHref(b.slug,1)}>{b.name}</Link>)}</div></section>)}</div></section>
<section className={styles.hope}><p className={styles.eyebrow}>TAKE THE NEXT STEP</p><h2>Looking for Hope or a Place to Begin?</h2><p>Journey to Hope offers Scripture-based guidance to help you explore faith, understand salvation, and grow in your relationship with God.</p><Link className={styles.primary} href="/journey">Explore Journey to Hope →</Link></section>
</main><Footer/></>;
}
