import Link from "next/link";
import { JourneyFrame, ProgressSavePrompt } from "./components/JourneyShell";
import { journeySteps } from "./data";
import styles from "./journey.module.css";

export const metadata = { title: "Journey to Hope | Faith Changes Everything", description: "A Scripture-centered journey of hope, salvation, faith, encouragement, and next steps with Jesus Christ." };

export default function JourneyPage() {
  return <JourneyFrame><main>
    <section className={styles.landingHero}><div><p className={styles.eyebrow}>Faith Changes Everything</p><h1>Journey to Hope</h1><p>You don’t have to walk through life’s questions and struggles alone. Journey to Hope is here to guide you with truth, encouragement, and practical steps to grow closer to Jesus.</p></div></section>
    <section className={styles.pastorWelcome}><p className={styles.eyebrow}>Before We Begin</p><h2>A Message from Pastor Richard</h2><p>The complete Journey-wide Pastor Letter and its approved recording will live together here. The final Doctrine copy is integrated during content implementation rather than duplicated inside the page architecture.</p><div className={styles.welcomeActions}><span>Read</span><span>Listen / Watch</span></div></section>
    <section className={styles.stepsSection}><p className={styles.eyebrow}>Your Journey</p><h2>Six Steps. One Journey.</h2><p className={styles.sectionIntro}>Begin with the need that brought you here, or move through the Journey in order. Every Step remains available to you.</p><div className={styles.stepCards}>{journeySteps.map(step => <article key={step.id} className={styles.stepCard}><span>Step {step.number}</span><h3>{step.title}</h3><p>{step.summary}</p><Link href={step.href}>Start This Step →</Link></article>)}</div><ProgressSavePrompt /></section>
    <section className={styles.notAlone}><div><p className={styles.eyebrow}>You Are Not Alone</p><h2>Prayer and help are here when you need them.</h2><p>Faith Changes Everything is here to point you toward Christ, Scripture, prayer, and trustworthy help.</p></div><div className={styles.notAloneActions}><Link href="/prayer">Request Prayer</Link><a className={styles.crisisButton} href="https://988lifeline.org/" rel="noreferrer">Need Help Right Now</a></div></section>
    <section className={styles.resources}><p className={styles.eyebrow}>Continue Growing</p><h2>FCE Resources</h2><div className={styles.resourceLinks}><Link href="/music">Music Library</Link><Link href="/sermons">Sermon Library</Link><Link href="/resources">Bible Study</Link><Link href="/resources">Walking with Christ</Link><Link href="/journal">Bible Journal</Link></div></section>
  </main></JourneyFrame>;
}
