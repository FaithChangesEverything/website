"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { bibleBooks } from "@/lib/bible/books";
import styles from "./BibleJump.module.css";

export default function BibleJump({initialBook="john",initialChapter=1,compact=false}:{initialBook?:string;initialChapter?:number;compact?:boolean}){
 const router=useRouter();
 const [book,setBook]=useState(initialBook);
 const [chapter,setChapter]=useState(initialChapter);
 const [verse,setVerse]=useState("");
 const meta=bibleBooks.find(b=>b.slug===book)??bibleBooks[0];
 const go=()=>router.push(`/bible/${book}/${chapter}${verse?`#v${verse}`:""}`);
 return <form className={compact?styles.compact:styles.jump} onSubmit={e=>{e.preventDefault();go()}}>
 <label>Book<select value={book} onChange={e=>{setBook(e.target.value);setChapter(1);setVerse("");}} aria-label="Choose Bible book">{bibleBooks.map(b=><option value={b.slug} key={b.slug}>{b.name}</option>)}</select></label>
 <label>Chapter<select value={chapter} onChange={e=>{setChapter(Number(e.target.value));setVerse("");}} aria-label="Choose chapter">{Array.from({length:meta.chapters},(_,i)=><option value={i+1} key={i}>{i+1}</option>)}</select></label>
 <label>Verse <input aria-label="Verse number (optional)" type="number" min="1" step="1" value={verse} placeholder="Optional" onChange={e=>setVerse(e.target.value)} /></label>
 <button type="submit">Go to Passage →</button>
 </form>
}
