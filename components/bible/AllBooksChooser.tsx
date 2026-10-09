"use client";
import {useRef} from "react";
import Link from "next/link";
import { bibleBooks,bibleHref } from "@/lib/bible/books";
import styles from "./AllBooksChooser.module.css";

export default function AllBooksChooser(){
 const ref=useRef<HTMLDialogElement>(null);
 return <><button className={styles.open} onClick={()=>ref.current?.showModal()} type="button">▤ All 66 Books</button>
 <dialog ref={ref} className={styles.dialog} aria-label="Choose a Bible book">
 <header><div><p>FCE BIBLE READER</p><h2>Choose a Book of the Bible</h2></div><button aria-label="Close book chooser" onClick={()=>ref.current?.close()} type="button">×</button></header>
 <div className={styles.panels}>{(["old","new"] as const).map(t=><section key={t}><h3>{t==="old"?"Old Testament":"New Testament"}</h3><p>{t==="old"?"39":"27"} books</p><div className={styles.grid}>{bibleBooks.filter(b=>b.testament===t).map(book=><Link key={book.slug} href={bibleHref(book.slug,1)} onClick={()=>ref.current?.close()}>{book.name}</Link>)}</div></section>)}</div>
 </dialog></>;
}
