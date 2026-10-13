"use client";
import Link from "next/link";
import { useMemo,useState } from "react";
import styles from "@/app/reading-plans/reading-plans.module.css";
type PlanSummary={slug:string;title:string;subtitle:string;days:number;available:boolean};
export default function LibraryBrowser({plans}:{plans:PlanSummary[]}) {
  const [duration,setDuration]=useState(0);
  const [search,setSearch]=useState("");
  const [showAll,setShowAll]=useState(false);
  const visible=useMemo(()=>plans.filter(p=>(!duration||p.days===duration)&&(p.title+" "+p.subtitle).toLowerCase().includes(search.trim().toLowerCase())),[plans,duration,search]);
  const items=showAll?visible:visible.slice(0,6);
  return <section className={styles.section} aria-labelledby="browse-title">
    <p className={styles.eyebrow}>EXPLORE THE COLLECTION</p>
    <h2 id="browse-title">Browse Reading Plans</h2>
    <p>Choose a reading length, or search for a subject you would like to explore.</p>
    <div className={styles.filters} role="group" aria-label="Filter plans by length">
      {[0,7,10,30].map(n=><button type="button" key={n} aria-pressed={duration===n} className={duration===n?styles.filterActive:styles.filter} onClick={()=>{setDuration(n);setShowAll(false);}}>{n===0?"All 22 Plans":n+"-Day Plans"}</button>)}
    </div>
    <label className={styles.searchLabel} htmlFor="reading-plan-search">Search by plan title or subject</label>
    <input id="reading-plan-search" type="search" className={styles.search} value={search} onChange={e=>{setSearch(e.target.value);setShowAll(false)}} placeholder="Try prayer, Jesus, hope, or wisdom"/>
    <p className={styles.count}>{visible.length} plan{visible.length===1?"":"s"} found</p>
    {visible.length===0?<p role="status">No plans match your search. Try another topic.</p>:
      <div className={styles.planGrid}>{items.map(p=><article className={styles.planCard} key={p.slug}>
        <span className={styles.cardKicker}>{p.days} DAYS {p.available?"· PILOT READY":"· COMING AFTER PILOT"}</span>
        <h3>{p.title}</h3><p>{p.subtitle}</p>
        {p.available?<Link className={styles.cardLink} href={"/reading-plans/"+p.slug}>Explore This Plan →</Link>:<span className={styles.cardMuted}>Available after pilot review</span>}
      </article>)}</div>}
    {visible.length>6&&<button type="button" className={styles.secondaryButton} onClick={()=>setShowAll(v=>!v)}>{showAll?"Show Fewer Plans":`View All ${visible.length} Plans`}</button>}
  </section>;
}
