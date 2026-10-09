import type { BibleParagraph } from "@/lib/bible/data";
import styles from "./ScriptureText.module.css";

export default function ScriptureText({paragraphs, highlight=[]}:{paragraphs:BibleParagraph[];highlight?:number[]}){
return <div className={styles.scripture}>
{paragraphs.map((p,i)=>p.kind==="blank"?<div key={i} className={styles.break} aria-hidden="true"/>:<p key={i} className={p.kind==="poetry"?styles.poetry:styles.paragraph} style={p.kind==="poetry"?{paddingLeft:`${p.indent*1.25}em`}:undefined}>
{p.verses.map(v=><span id={`v${v.verse}`} key={v.verse} className={highlight.includes(v.verse)?styles.highlight:styles.verse}><sup className={styles.number}>{v.verse}</sup>{" "}{v.runs.map((r,index)=><span key={index} className={r.italic?styles.supplied:undefined}>{r.text}</span>)}{" "}</span>)}</p>)}
</div>
}
