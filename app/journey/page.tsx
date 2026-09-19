import Image from "next/image";
import Link from "next/link";
import { JourneyFrame, ProgressSavePrompt } from "./components/JourneyShell";
import { getJourneyProgressSummary } from "./progress/operations";
import { journeySteps } from "./data";
import styles from "./journey.module.css";
import refined from "./journey-refinements.module.css";
import fixes from "./journey-fixes.module.css";

export const metadata = { title: "Journey to Hope | Faith Changes Everything", description: "A Scripture-centered journey of hope, salvation, faith, encouragement, and next steps with Jesus Christ." };

const stepCardImages: Record<number, { src: string; alt: string }> = {
  1: { src: "/images/journey/step-cards/golden_sunrise_over_mountain_valley.png", alt: "A person looking across a sunlit mountain valley" },
  2: { src: "/images/journey/step-cards/golden_path_through_the_mountain_valley.png", alt: "A path winding through a mountain valley toward sunrise" },
  3: { src: "/images/journey/step-cards/cross_of_light_over_mountain_valley.png", alt: "A wooden cross overlooking a mountain valley at sunrise" },
  4: { src: "/images/journey/step-cards/sunlit_seedling_in_rich_soil.png", alt: "A green seedling growing in sunlit soil" },
  5: { src: "/images/journey/step-cards/golden_compass_at_sunset.png", alt: "Hands holding a compass at sunset" },
  6: { src: "/images/journey/step-cards/reaching_hands_at_golden_sunset.png", alt: "Two hands reaching toward each other in golden light" },
};

const resourceCards = [
  { title: "Music Library", href: "/music", image: "/images/journey/resource-cards/music_library_bible_and_headphones.png", alt: "Headphones beside an open Bible" },
  { title: "Sermon Library", href: "/sermons", image: "/images/journey/resource-cards/sermon_library_open_bible_at_pulpit.png", alt: "An open Bible at a church pulpit" },
  { title: "Bible Study", href: "/resources", image: "/images/journey/resource-cards/bible_study_open_bible_notebook_notes.png", alt: "An open Bible with a notebook and study notes" },
  { title: "Walking with Christ", href: "/resources", image: "/images/journey/resource-cards/walking_with_christ_golden_path.png", alt: "A peaceful golden walking path" },
  { title: "Bible Journal", href: "/journal", image: "/images/journey/resource-cards/bible_journal_open_bible_and_journal.png", alt: "An open Bible beside a journal and pen" },
];

export default async function JourneyPage() {
  const summary = await getJourneyProgressSummary();

  return <JourneyFrame><main className={styles.journeyLanding}>
    <section className={styles.landingHero}><div><p className={styles.eyebrow}>Welcome to</p><h1>Journey to Hope</h1><span className={styles.goldRule} aria-hidden="true" /><p>You don’t have to walk through life’s questions and struggles alone. Journey to Hope is here to guide you with truth, encouragement, and practical steps to grow closer to Jesus.</p></div></section>

    {summary && <section className={`${styles.stepsSection} ${fixes.overallProgressSection}`} aria-label="Your overall Journey progress">
      <div className={`${styles.progressCard} ${fixes.overallProgressCard}`}>
        <strong>Your Journey Progress</strong>
        <span>{summary.earned_journey_completion ? "You have earned completion of the Journey to Hope." : "Your saved progress across all six Steps."}</span>
        <div className={styles.progressTrack}><span style={{ width: `${summary.percent}%` }} /></div>
        <b>{summary.completed} of {summary.total} lessons and studies complete · {summary.percent}%</b>
      </div>
    </section>}

    <section id="pastor-letter" className={styles.pastorWelcome}>
      <div className={styles.pastorIdentity}><div className={styles.pastorPortrait}><Image src="/images/pastor-richard.png" alt="Pastor Richard" width={260} height={260} sizes="(max-width: 720px) 160px, 220px" priority /></div><Image className={`${refined.pastorSignatureImage} ${fixes.signatureBlend}`} src="/journal/assets/signature.png" alt="Pastor Richard signature" width={205} height={82} /><span>Founder &amp; Pastor</span></div>
      <div className={styles.pastorWelcomeCopy}><p className={styles.eyebrow}>A Letter from Pastor Richard</p><h2>Welcome to Your<br />Journey to Hope</h2><span className={styles.goldRule} aria-hidden="true" /><p>The complete Journey-wide Pastor Letter will remain here in written form, together with the approved video. Final Doctrine copy is integrated during content implementation.</p><div className={styles.welcomeActions}><button className={fixes.readableButton} type="button" disabled>▶ Watch Pastor Richard’s Message</button></div><div id="pastor-letter-text" className={`${styles.manuscript} ${fixes.readablePanel}`}><p><strong>Journey-wide Pastor Letter</strong></p><p>The approved “Before We Begin...A Message from Pastor Richard” letter from the authoritative Website Doctrine will be presented here in full during content implementation. This is the Journey-wide welcome letter and is separate from the Pastor Letter that begins each individual Step.</p></div></div>
    </section>

    <section className={styles.stepsSection}>
      <div className={styles.stepsHeading}><h2>Where Are You in Your Journey?</h2><p>Choose a Step below to begin. The Journey is fully open, so you may start wherever you need today.</p></div>
      <div className={styles.stepCards}>{journeySteps.map(step => {
        const progress = summary?.steps.find((item) => item.step === step.number);
        const icon = progress?.status === "completed" ? "✓" : progress?.status === "in_progress" ? "●" : "○";
        const label = progress?.status === "completed" ? "Completed" : progress?.status === "in_progress" ? "In Progress" : summary ? "Not Started" : "Available";
        const action = progress?.status === "completed" ? "Review This Step" : progress?.status === "in_progress" ? "Continue This Step" : "Start This Step";
        const image = stepCardImages[step.number];
        return <article key={step.id} className={styles.stepCard}><div className={styles.stepImageSlot}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, (max-width: 1100px) 33vw, 17vw" className={styles.stepCardImage} /></div><span className={styles.stepNumberBadge}>{step.number}</span><div className={styles.stepCardBody}><h3>{step.title}</h3><p>{step.summary}</p><div className={styles.cardStatus}><span aria-hidden="true">{icon}</span> {label}{progress ? ` · ${progress.completed} of ${progress.total} complete` : ""}</div><Link href={step.href}>{action} <span aria-hidden="true">→</span></Link></div></article>;
      })}</div>
      {!summary && <ProgressSavePrompt />}
    </section>

    <section className={styles.landingSupportStrip}>
      <div className={styles.supportLead}><span className={styles.supportRoundIcon} aria-hidden="true">♡</span><div><strong>You Are Not Alone</strong><p>Whether you’re hurting, searching, or ready to grow, we’re here to walk with you.</p></div></div>
      <div><strong>Prayer</strong><p>We would love to pray with you.</p><Link href="/prayer">Request Prayer →</Link></div>
      <div><strong>Resources</strong><p>Helpful tools to support your Journey.</p><Link href="/resources">Explore Resources →</Link></div>
    </section>

    <section className={styles.resources}>
      <p className={styles.eyebrow}>Continue Growing</p>
      <h2>FCE Resources</h2>
      <div className={styles.resourceLinks}>
        {resourceCards.map((resource) => (
          <Link key={resource.title} href={resource.href} className={styles.resourceCard}>
            <div className={styles.resourceImageSlot}>
              <Image src={resource.image} alt={resource.alt} fill sizes="(max-width: 480px) 100vw, (max-width: 760px) 50vw, (max-width: 1100px) 33vw, 20vw" className={styles.resourceCardImage} />
            </div>
            <div className={styles.resourceCardBody}>
              <h3>{resource.title}</h3>
              <span className={styles.resourceCardAction}>Explore <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </main></JourneyFrame>;
}
