import Image from "next/image";
import Link from "next/link";
import { JourneyFrame, ProgressSavePrompt } from "./components/JourneyShell";
import { journeySteps } from "./data";
import styles from "./journey.module.css";
import refined from "./journey-refinements.module.css";
import fixes from "./journey-fixes.module.css";

export const metadata = { title: "Journey to Hope | Faith Changes Everything", description: "A Scripture-centered journey of hope, salvation, faith, encouragement, and next steps with Jesus Christ." };

export default function JourneyPage() {
  return <JourneyFrame><main className={styles.journeyLanding}>
    <section className={styles.landingHero}><div><p className={styles.eyebrow}>Welcome to</p><h1>Journey to Hope</h1><span className={styles.goldRule} aria-hidden="true" /><p>You don’t have to walk through life’s questions and struggles alone. Journey to Hope is here to guide you with truth, encouragement, and practical steps to grow closer to Jesus.</p></div></section>

    <section id="pastor-letter" className={styles.pastorWelcome}>
      <div className={styles.pastorIdentity}><div className={styles.pastorPortrait}><Image src="/images/pastor-richard.png" alt="Pastor Richard" width={260} height={260} sizes="(max-width: 720px) 160px, 220px" priority /></div><Image className={`${refined.pastorSignatureImage} ${fixes.signatureBlend}`} src="/journal/assets/signature.png" alt="Pastor Richard signature" width={205} height={82} /><span>Founder &amp; Pastor</span></div>
      <div className={styles.pastorWelcomeCopy}><p className={styles.eyebrow}>A Letter from Pastor Richard</p><h2>Welcome to Your<br />Journey to Hope</h2><span className={styles.goldRule} aria-hidden="true" /><p>The complete Journey-wide Pastor Letter will remain here in written form, together with the approved video. Final Doctrine copy is integrated during content implementation.</p><div className={styles.welcomeActions}><button className={fixes.readableButton} type="button" disabled>▶ Watch Pastor Richard’s Message</button></div><div id="pastor-letter-text" className={`${styles.manuscript} ${fixes.readablePanel}`}><p><strong>Journey-wide Pastor Letter</strong></p><p>The approved “Before We Begin...A Message from Pastor Richard” letter from Website Doctrine Rev. 1.5 will be presented here in full during content implementation. This is the Journey-wide welcome letter and is separate from the Pastor Letter that begins each individual Step.</p></div></div>
    </section>

    <section className={styles.stepsSection}>
      <div className={styles.stepsHeading}><h2>Where Are You in Your Journey?</h2><p>Choose a Step below to begin. Each Step is here to help you take the next right step.</p></div>
      <div className={styles.stepCards}>{journeySteps.map(step => <article key={step.id} className={styles.stepCard}><div className={styles.stepImageSlot} role="img" aria-label={`Approved Step ${step.number} image position`}><span>Step {step.number} image</span></div><span className={styles.stepNumberBadge}>{step.number}</span><div className={styles.stepCardBody}><h3>{step.title}</h3><p>{step.summary}</p><Link href={step.href}>Start This Step <span aria-hidden="true">→</span></Link></div></article>)}</div>
      <ProgressSavePrompt />
    </section>

    <section className={styles.landingSupportStrip}>
      <div className={styles.supportLead}><span className={styles.supportRoundIcon} aria-hidden="true">♡</span><div><strong>You Are Not Alone</strong><p>Whether you’re hurting, searching, or ready to grow, we’re here to walk with you.</p></div></div>
      <div><strong>Prayer</strong><p>We would love to pray with you.</p><Link href="/prayer">Request Prayer →</Link></div>
      <div><strong>Resources</strong><p>Helpful tools to support your Journey.</p><Link href="/resources">Explore Resources →</Link></div>
    </section>

    <section className={styles.resources}><p className={styles.eyebrow}>Continue Growing</p><h2>FCE Resources</h2><div className={styles.resourceLinks}><Link href="/music">Music Library</Link><Link href="/sermons">Sermon Library</Link><Link href="/resources">Bible Study</Link><Link href="/resources">Walking with Christ</Link><Link href="/journal">Bible Journal</Link></div></section>
  </main></JourneyFrame>;
}
