import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bibleBooks,findBibleBook,bibleHref } from "@/lib/bible/books";
import styles from "../../reader.module.css";
import { getBibleChapter } from "@/lib/bible/data";
import ScriptureText from "@/components/bible/ScriptureText";
import BibleJump from "@/components/bible/BibleJump";
import AllBooksChooser from "@/components/bible/AllBooksChooser";
import ReadingSurface from "@/components/bible/ReadingSurface";
import BibleIcon from "@/components/bible/BibleIcon";

type RouteProps={params:Promise<{book:string;chapter:string}>};
export const revalidate = 86400;
export async function generateMetadata({params}:RouteProps){
 const {book,chapter}=await params; const found=findBibleBook(book);
 return {title:found?`${found.name} ${chapter} (KJV) | FCE Bible`:"FCE Bible"};
}
export default async function ChapterPage({params}:RouteProps){
 const {book:slug,chapter:raw}=await params;
 const book=findBibleBook(slug), chapter=Number(raw);
 if(!book|| !/^[1-9]\d*$/.test(raw)||!Number.isSafeInteger(chapter)||chapter>book.chapters)notFound();
 const scripture=await getBibleChapter(slug,chapter);
 const index=bibleBooks.findIndex(b=>b.slug===slug);
 const prev=chapter>1?bibleHref(slug,chapter-1):index>0?bibleHref(bibleBooks[index-1].slug,bibleBooks[index-1].chapters):null;
 const next=chapter<book.chapters?bibleHref(slug,chapter+1):index<bibleBooks.length-1?bibleHref(bibleBooks[index+1].slug,1):null;
 return <><Header/><main className={styles.layout}>
 <div className={styles.titleRow}><div><p>FAITH CHANGES EVERYTHING</p><h1>FCE Bible Reader</h1><span>King James Version (KJV)</span></div></div>
 <div className={styles.topNav}><Link className={styles.backHome} href="/bible">← Back to Bible Home</Link><AllBooksChooser/><BibleJump initialBook={slug} initialChapter={chapter} compact /></div>
 <div className={styles.columns}>
 <aside className={styles.sidebar}><span className={styles.sidebarIcon}><BibleIcon name="old" size={43}/></span><h2>{book.name}</h2><p>Select a chapter or choose a different book.</p><h3>Chapters</h3><nav aria-label={`${book.name} chapters`} className={styles.chapterGrid}>{Array.from({length:book.chapters},(_,i)=><Link className={chapter===i+1?styles.current:""} aria-current={chapter===i+1?"page":undefined} key={i} href={bibleHref(slug,i+1)}>{i+1}</Link>)}</nav><div className={styles.chooseCard}><BibleIcon name="old" size={46}/><h3>Choose a Different Book</h3><p>Browse all 66 books without leaving the Bible reader.</p><AllBooksChooser/></div></aside>
 <article className={styles.paper}><p className={styles.bookHeading}>{book.name.toUpperCase()}</p><h2>{book.name}</h2><h3 className={styles.chapterTitle}>Chapter {chapter}</h3><div className={styles.rule}/>
 {scripture?<ReadingSurface><ScriptureText paragraphs={scripture.paragraphs}/></ReadingSurface>:<p className={styles.pending}>The verified KJV source has not yet been imported into this development deployment. Scripture will appear here after the import completes.</p>}
 <nav className={styles.chapterLinks} aria-label="Adjacent chapters">{prev?<Link href={prev}>← Previous Chapter</Link>:<span/>}{next?<Link href={next}>Next Chapter →</Link>:<span/>}</nav></article>
 </div></main><Footer/></>;
}
