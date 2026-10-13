"use client";
import { useEffect, useState } from "react";
import type { BibleParagraph } from "@/lib/bible/data";
import styles from "./ScriptureText.module.css";

export default function ScriptureText({paragraphs, highlight=[]}:{paragraphs:BibleParagraph[];highlight?:number[]}){
const [targetVerse,setTargetVerse]=useState<number|null>(null);
useEffect(()=>{
  const syncTarget=()=>{const match=window.location.hash.match(/^#v([1-9]\d*)$/);setTargetVerse(match?Number(match[1]):null);};
  syncTarget();
  window.addEventListener("hashchange",syncTarget);
  return ()=>window.removeEventListener("hashchange",syncTarget);
},[]);
return <div className={styles.scripture}>
{paragraphs.map((p,i)=>p.kind==="blank"?<div key={i} className={styles.break} aria-hidden="true"/>:p.kind==="heading"?<p key={i} className={styles.psalmHeading}>{p.heading}</p>:<p key={i} className={p.kind==="poetry"?styles.poetry:styles.paragraph} style={p.kind==="poetry"?{paddingLeft:`${p.indent*1.25}em`}:undefined}>
{p.verses.map(v=><span id={`v${v.verse}`} key={v.verse} className={highlight.includes(v.verse)||targetVerse===v.verse?`${styles.verse} ${styles.highlight}`:styles.verse}><sup className={styles.number}>{v.verse}</sup>{" "}{v.runs.map((r,index)=><span key={index} className={r.italic?styles.supplied:undefined}>{r.text}</span>)}{" "}</span>)}</p>)}
</div>
}
