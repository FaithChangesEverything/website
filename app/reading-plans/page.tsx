import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LibraryBrowser from "@/components/reading-plans/LibraryBrowser";
import {listReadingPlans} from "@/lib/reading-plans";
import styles from "./reading-plans.module.css";
export const metadata={title:"Bible Reading Plans | Faith Changes Everything",description:"Explore 22 Scripture-based reading plans with guided KJV readings and reflections."};
export default function ReadingPlansPage(){
  const plans=listReadingPlans().map(p=>({slug:p.slug,title:p.title,subtitle:p.subtitle,days:p.days,available:true}));
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.wrap}><p className={styles.heroEyebrow}>GROW IN GOD&apos;S WORD</p><h1>Bible Reading Plans</h1><p>Every journey of faith begins with a step. Discover Scripture-guided plans to help you know Jesus, grow in faith, and find encouragement in God&apos;s Word.</p><span className={styles.heroNote}>22 Scripture-based plans · King James Version (KJV)</span></div></section>
    <div className={styles.wrap}>
      <section className={styles.sectionCenter}><p className={styles.eyebrow}>START WHERE YOU ARE</p><h2>A Reading Plan for Every Season</h2><p>Whether you are opening the Bible for the first time or seeking a deeper understanding, there is a place for you here.</p>
        <div className={styles.threeGrid}>{[[7,"Getting Started","Six shorter plans for a gentle beginning."],[10,"Growing Deeper","Ten focused studies of biblical truths."],[30,"Building Habits","Six month-long journeys through Scripture."]].map(([days,name,description])=><div className={styles.infoCard} key={days}><span className={styles.infoBig}>{days}-Day Plans</span><h3>{name}</h3><p>{description}</p></div>)}</div>
      </section>
      <section className={styles.featured}><p className={styles.eyebrow}>FEATURED READING PLAN</p><h2>Begin with 30 Days with Jesus</h2><p>Explore the life, teachings, death, and resurrection of Jesus in thirty carefully prepared daily readings. This is one of 22 complete Bible Reading Plans available to explore.</p><Link className={styles.primaryButton} href="/reading-plans/30-days-with-jesus">Explore This Plan →</Link></section>
      <LibraryBrowser plans={plans}/>
      <section className={styles.sectionCenter}><p className={styles.eyebrow}>SIMPLE AND GUIDED</p><h2>How Reading Plans Work</h2><div className={styles.threeGrid}><div className={styles.infoCard}><h3>1. Choose a Plan</h3><p>Select a subject and reading length.</p></div><div className={styles.infoCard}><h3>2. Read &amp; Reflect</h3><p>Read Scripture in the FCE Bible Reader and consider the approved lesson.</p></div><div className={styles.infoCard}><h3>3. Continue Your Journey</h3><p>Mark each day complete, at your own pace, without creating an account.</p></div></div></section>
      <section className={styles.featured}><h2>Looking for Hope?</h2><p>Journey to Hope offers Scripture-based guidance and encouragement.</p><Link className={styles.secondaryButton} href="/journey">Explore Journey to Hope →</Link></section>
    </div></main><Footer/></>;
}
