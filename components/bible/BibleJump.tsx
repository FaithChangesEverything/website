"use client";
import { useState } from "react";
import { bibleBooks } from "@/lib/bible/books";
import styles from "./BibleJump.module.css";

export default function BibleJump({initialBook="john",initialChapter=1,compact=false}:{initialBook?:string;initialChapter?:number;compact?:boolean}){
 const [book,setBook]=useState(initialBook);
 const [chapter,setChapter]=useState(initialChapter);
 const [verse,setVerse]=useState("");
 const [error,setError]=useState("");
 const meta=bibleBooks.find(b=>b.slug===book)??bibleBooks[0];
 const go=async()=>{
  setError("");
  if(verse){
    const selected=Number(verse);
    if(!Number.isSafeInteger(selected)||selected<1){setError("Please enter a valid verse number.");return;}
    try{
      const response=await fetch(`/api/bible/${book}/${chapter}`);
      if(!response.ok){setError("Unable to verify the verse right now. Please try again.");return;}
      const data=await response.json() as {paragraphs?:{verses?:{verse:number}[]}[]};
      const available=data.paragraphs?.some(p=>p.verses?.some(v=>v.verse===selected));
      if(!available){setError(`Verse ${selected} does not exist in this chapter. Please enter a valid verse.`);return;}
    }catch{setError("Unable to verify the verse right now. Please try again.");return;}
  }
  const targetPath=`/bible/${book}/${chapter}`;
  const fragment=verse?`#v${verse}`:"";
  // Native hash navigation fires hashchange reliably when staying on the same chapter.
  // Next.js soft navigation does not always fire that event for hash-only changes.
  if(window.location.pathname===targetPath&&fragment){
    if(window.location.hash===fragment){
      document.getElementById(`v${verse}`)?.scrollIntoView();
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }else{
      window.location.hash=fragment;
    }
    return;
  }
  // A full navigation guarantees the new chapter initializes with its target hash.
  // Preserve a full navigation so the verse hash initializes and highlights reliably.
  window.location.assign(targetPath+fragment);
 };
 return <form className={compact?styles.compact:styles.jump} onSubmit={e=>{e.preventDefault();go()}}>
 <label>Book<select value={book} onChange={e=>{setBook(e.target.value);setChapter(1);setVerse("");setError("");}} aria-label="Choose Bible book">{bibleBooks.map(b=><option value={b.slug} key={b.slug}>{b.name}</option>)}</select></label>
 <label>Chapter<select value={chapter} onChange={e=>{setChapter(Number(e.target.value));setVerse("");setError("");}} aria-label="Choose chapter">{Array.from({length:meta.chapters},(_,i)=><option value={i+1} key={i}>{i+1}</option>)}</select></label>
 <label>Verse <input aria-label="Verse number (optional)" type="number" min="1" step="1" value={verse} placeholder="Optional" onChange={e=>setVerse(e.target.value)} /></label>
 <button type="submit">Go to Passage →</button>
 {error&&<p className={styles.error} role="alert">{error}</p>}
 </form>
}
