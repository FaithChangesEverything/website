"use client";
import Link from "next/link";
import { useState } from "react";
import {PrivacyNotice,useReadingProgress} from "./Progress";
import styles from "@/app/reading-plans/reading-plans.module.css";
type Lesson={day:number;title:string;primaryReading:string};
export default function PlanJourney({slug,lessons}:{slug:string;lessons:Lesson[]}) {
  const {days,ready,percent,count,reset}=useReadingProgress(slug,lessons.length);
  const [group,setGroup]=useState(0);
  const [confirmReset,setConfirmReset]=useState(false);
  const next=lessons.find(l=>!days.includes(l.day))?.day??lessons.length;
  const sections=Math.ceil(lessons.length/10);
  return <>
    <section className={styles.progressCard} aria-labelledby="progress-title">
      <div className={styles.progressHeading}><h2 id="progress-title">Your Progress</h2><strong aria-live="polite">{ready?`${percent}%`:"—"}</strong></div>
      <progress max={lessons.length} value={count} aria-label="Reading plan completion">{count} of {lessons.length}</progress>
      <p>{ready?`${count} of ${lessons.length} days complete. Read at your own pace.`:"Loading progress saved on this device…"}</p>
      {ready&&<Link className={styles.primaryButton} href={`/reading-plans/${slug}/day/${next}`}>{count===lessons.length?"Review Final Reading":count?"Continue Reading":"Begin This Plan"} →</Link>}
      {count>0&&(!confirmReset?<button className={styles.resetButton} type="button" onClick={()=>setConfirmReset(true)}>Reset progress</button>:<div className={styles.confirm}><strong>Erase all completed days for this plan on this device?</strong><button type="button" onClick={()=>{reset();setConfirmReset(false)}}>Yes, erase</button><button type="button" onClick={()=>setConfirmReset(false)}>Cancel</button></div>)}
      <PrivacyNotice/>
    </section>
    <section className={styles.section} aria-labelledby="journey-title"><p className={styles.eyebrow}>YOUR DAILY READING SCHEDULE</p><h2 id="journey-title">Explore the {lessons.length} Days</h2>
      <div className={styles.filters} role="group" aria-label="Choose a reading section">
        {Array.from({length:sections},(_,i)=><button className={group===i?styles.filterActive:styles.filter} aria-pressed={group===i} key={i} onClick={()=>setGroup(i)} type="button">Days {i*10+1}–{Math.min(lessons.length,(i+1)*10)}</button>)}
      </div>
      <div className={styles.lessonGrid}>{lessons.slice(group*10,group*10+10).map(lesson=><Link href={`/reading-plans/${slug}/day/${lesson.day}`} className={styles.lessonLink} key={lesson.day}>
        <span className={days.includes(lesson.day)?styles.dayDone:styles.dayNumber}>{days.includes(lesson.day)?"✓":lesson.day}</span>
        <span><strong>{lesson.title}</strong><small>{lesson.primaryReading}</small></span><span aria-hidden="true">→</span>
      </Link>)}</div>
    </section>
  </>;
}
