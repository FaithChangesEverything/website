import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bibleBooks,findBibleBook,bibleHref } from "@/lib/bible/books";
import styles from "../../reader.module.css";

type RouteProps={params:Promise<{book:string;chapter:string}>};
export function generateStaticParams(){
 return bibleBooks.flatMap(book=>Array.from({length:book.chapters},(_,i)=>({book:book.slug,chapter:String(i+1)})));
}
export async function generateMetadata({params}:RouteProps){
 const {book,chapter}=await params; const found=findBibleBook(book);
 return {title:found?`${found.name} ${chapter} (KJV) | FCE Bible`:"FCE Bible"};
}
export default async function ChapterPage({params}:RouteProps){
 const {book:slug,chapter:raw}=await params;
 const book=findBibleBook(slug), chapter=Number(raw);
 if(!book|| !/^[1-9]\d*$/.test(raw)||!Number.isSafeInteger(chapter)||chapter>book.chapters)notFound();
 const index=bibleBooks.findIndex(b=>b.slug===slug);
 const prev=chapter>1?bibleHref(slug,chapter-1):index>0?bibleHref(bibleBooks[index-1].slug,bibleBooks[index-1].chapters):null;
 const next=chapter<book.chapters?bibleHref(slug,chapter+1):index<bibleBooks.length-1?bibleHref(bibleBooks[index+1].slug,1):null;
 return <><Header/><main className={styles.layout}>
 <div className={styles.titleRow}><div><p>FCE BIBLE READER</p><h1>King James Version (KJV)</h1></div><Link href="/bible">← Back to Bible Home</Link></div>
 <nav aria-label="Bible navigation" className={styles.topNav}>
 <Link className={styles.allBooks} href="/bible#books">▤ All 66 Books</Link>
 <label>Book <select aria-label="Book" defaultValue={slug} disabled title="Book jump selection will be enabled during data integration">{bibleBooks.map(b=><option value={b.slug} key={b.slug}>{b.name}</option>)}</select></label>
 <label>Chapter <select aria-label="Chapter" defaultValue={chapter} disabled title="Chapter jump selection will be enabled during data integration">{Array.from({length:book.chapters},(_,i)=><option value={i+1} key={i}>{i+1}</option>)}</select></label>
 </nav>
 <div className={styles.columns}>
 <aside className={styles.sidebar}><h2>{book.name}</h2><p>Select a chapter or choose a different book.</p><h3>Chapters</h3><nav aria-label={`${book.name} chapters`} className={styles.chapterGrid}>{Array.from({length:book.chapters},(_,i)=><Link className={chapter===i+1?styles.current:""} aria-current={chapter===i+1?"page":undefined} key={i} href={bibleHref(slug,i+1)}>{i+1}</Link>)}</nav><Link className={styles.allBooks} href="/bible#books">Choose a Different Book →</Link></aside>
 <article className={styles.paper}><p className={styles.bookHeading}>{book.name.toUpperCase()}</p><h2>Chapter {chapter}</h2><div className={styles.rule}/>
 <p className={styles.pending}>The KJV Scripture text is being integrated and verified for accuracy. This development page is not ready for public reading yet.</p>
 <nav className={styles.chapterLinks} aria-label="Adjacent chapters">{prev?<Link href={prev}>← Previous Chapter</Link>:<span/>}{next?<Link href={next}>Next Chapter →</Link>:<span/>}</nav></article>
 </div></main><Footer/></>;
}
