import Image from "next/image";
import Link from "next/link";
import { JourneyFrame, ProgressSavePrompt } from "./components/JourneyShell";
import { PastorMessageVideo } from "./components/PastorMessageVideo";
import { getJourneyProgressSummary } from "./progress/operations";
import { journeySteps } from "./data";
import styles from "./journey.module.css";
import refined from "./journey-refinements.module.css";
import fixes from "./journey-fixes.module.css";

export const metadata = { title: "Journey to Hope | Faith Changes Everything", description: "A Scripture-centered journey of hope, salvation, faith, encouragement, and next steps with Jesus Christ." };

const journeyWidePastorLetter = [
  "Dear Friend, first, let me say how grateful I am that you're here. I don't know what brought you to this page today. Perhaps someone shared this website with you, or maybe you found it while searching for answers. Whatever your story may be, I want you to know that your visit is not an interruption—it's an opportunity. An opportunity to pause, to breathe, and to take one small step toward hope.",
  "Life has a way of leading us down roads we never expected to travel. Some seasons are filled with joy, while others leave us carrying burdens that seem too heavy to bear. You may be grieving, struggling with anxiety, searching for purpose, questioning your faith, or simply wondering if anyone truly understands what you're going through. Wherever you find yourself today, you are welcome here.",
  "This journey isn't about having all the answers. It's not about pretending everything is okay or trying to fix your life in a single moment. Instead, it's about taking one step at a time and allowing God to meet you exactly where you are.",
  "As you move through these pages, you'll find biblical encouragement, practical guidance, thoughtful resources, and opportunities for prayer. More than anything, my hope is that you'll come to know the One who said, \"Come to Me, all who labor and are heavy laden, and I will give you rest.\" No matter what you've experienced, your story isn't over. There is hope because there is Christ.",
  "Faith Changes Everything. \"You may not believe it today, and that's okay. My prayer is that as you continue this journey, you'll discover something I've found to be true in my own life—that faith in Jesus Christ truly changes everything.\" Thank you for allowing us to walk with you. Let's take this next step together. And don’t forget, God loves you so very much, and so do I!!"
] as const;

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
      <div className={styles.pastorWelcomeCopy}>
        <p className={styles.eyebrow}>A Letter from Pastor Richard</p>
        <h2>Before We Begin...A Message from Pastor Richard</h2>
        <span className={styles.goldRule} aria-hidden="true" />
        <div className={styles.welcomeActions}>
          <PastorMessageVideo
            title="Journey to Hope — Before We Begin: A Message from Pastor Richard"
            embedUrl="https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/3f27167dcdde6231821b35bb10ca9cc7/iframe"
          />
        </div>
        <div id="pastor-letter-text" className={`${styles.manuscript} ${fixes.readablePanel}`}>
          {journeyWidePastorLetter.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <p>In Christ,<br />In His Service<br /><strong>Pastor Richard</strong><br />Founder - Faith Changes Everything</p>
        </div>
      </div>
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
