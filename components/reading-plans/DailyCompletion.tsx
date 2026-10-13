"use client";
import Link from "next/link";
import {useReadingProgress,PrivacyNotice} from "./Progress";
import styles from "@/app/reading-plans/reading-plans.module.css";
export default function DailyCompletion({slug,day,total,nextDay}:{slug:string;day:number;total:number;nextDay:number|null}){
  const {days,ready,toggle,count,percent}=useReadingProgress(slug,total);
  const done=days.includes(day);
  return <div className={styles.dailySidebar}>
    <section className={styles.progressCard} aria-label="Your reading progress">
      <div className={styles.progressHeading}><h2>Your Progress</h2><strong>{ready?`${percent}%`:"—"}</strong></div>
      <progress max={total} value={count} aria-label="Reading plan completion"/><p>{count} of {total} days complete</p>
      <PrivacyNotice/>
    </section>
    <section className={styles.completion} aria-labelledby="finish-reading">
      <h2 id="finish-reading">Finish Today&apos;s Reading</h2>
      <p>When you have finished reading and reflecting, mark this day complete. You can revisit it at any time.</p>
      <button disabled={!ready} type="button" className={done?styles.doneButton:styles.primaryButton} aria-pressed={done} onClick={()=>toggle(day)}>{done?"✓ Day Complete — Undo":`Mark Day ${day} Complete`}</button>
      {done&&<p role="status">Day {day} is complete. Your progress is saved on this device.</p>}
      {nextDay&&<Link className={styles.cardLink} href={`/reading-plans/${slug}/day/${nextDay}`}>Next Day →</Link>}
    </section>
  </div>;
}
