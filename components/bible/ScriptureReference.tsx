"use client";
import Link from "next/link";
import { useRef,useState } from "react";
import type { BibleChapter } from "@/lib/bible/data";
import { bibleBooks } from "@/lib/bible/books";
import styles from "./ScriptureReference.module.css";

type Props={book:string;chapter:number;startVerse:number;endVerse?:number;label?:string};
export default function ScriptureReference({book,chapter,startVerse,endVerse,label}:Props){
 const dialog=useRef<HTMLDialogElement>(null);
 const [data,setData]=useState<BibleChapter|null>(null);
 const [error,setError]=useState("");
 const found=bibleBooks.find(b=>b.slug===book);
 const title=label??`${found?.name??book} ${chapter}:${startVerse}${endVerse&&endVerse!==startVerse?`–${endVerse}`:""}`;
 const close=()=>dialog.current?.close();
 async function open(){
  setError("");setData(null);dialog.current?.showModal();
  try{
   const response=await fetch(`/api/bible/${encodeURIComponent(book)}/${chapter}`);
   if(!response.ok)throw Error("This passage is currently unavailable.");
   setData(await response.json());
  }catch{setError("Unable to load Scripture at the moment. Please try again.");}
 }
 const verses=data?.paragraphs.flatMap(p=>p.verses).filter(v=>v.verse>=startVerse&&v.verse<=(endVerse??startVerse));
 return <><button type="button" className={styles.reference} onClick={open}>{title} <span aria-hidden="true">↗</span></button>
 <dialog ref={dialog} className={styles.dialog} aria-label={`Scripture: ${title}`} onClick={e=>{if(e.target===dialog.current)close();}}>
  <div className={styles.panel}>
   <header><div><span className={styles.eyebrow}>FCE BIBLE · KING JAMES VERSION</span><h2>{title}</h2></div><button type="button" className={styles.close} onClick={close} aria-label="Close Scripture">×</button></header>
   <div className={styles.content} aria-live="polite">
    {!data&&!error&&<p>Loading Scripture…</p>}
    {error&&<p role="alert">{error}</p>}
    {verses?.map(v=><p key={v.verse} className={styles.verse}><sup>{v.verse}</sup> {v.runs.map((r,i)=><span key={i} className={r.italic?styles.italic:undefined}>{r.text}</span>)}</p>)}
   </div>
   <footer><Link target="_blank" rel="noopener noreferrer" href={`/bible/${book}/${chapter}#v${startVerse}`}>Read Full Chapter ↗</Link><button type="button" onClick={close}>Return to Lesson</button></footer>
  </div>
 </dialog></>;
}
