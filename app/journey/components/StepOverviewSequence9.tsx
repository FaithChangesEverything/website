import Image from "next/image";
import Link from "next/link";

import { JourneyFrame, ProgressSavePrompt } from "./JourneyShell";
import { PastorMessageVideo } from "./PastorMessageVideo";
import { JourneyStepResourceArea } from "./ResourceArea";
import { getJourneyProgressSummary, getJourneyStepDisplayStates, type JourneyDisplayState } from "../progress/operations";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";
import refined from "../journey-refinements.module.css";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

type NavItem = { href: string; label: string; detail?: string };

type LowerWindow = {
  id: string;
  title: string;
  body: string;
};

const pastorMessageVideos: Partial<Record<number, { title: string; embedUrl: string }>> = {
  4: {
    title: "Step 4: Before We Begin — A Message from Pastor Richard",
    embedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/b575a6593cd36a290fe8f3be5c577fd6/iframe",
  },
};

const lessonCardImages: Partial<Record<string, string>> = {
  "1.b": "/images/journey/lesson-cards/journey_toward_the_sunrise_cross.png",
  "1.c": "/images/journey/lesson-cards/open_bible_at_golden_valley_sunrise.png",
  "1.d": "/images/journey/lesson-cards/golden_reflection_by_the_mountain_lake.png",
  "1.e": "/images/journey/lesson-cards/golden_hour_devotional_study_nook.png",
  "2.b": "/images/journey/lesson-cards/kneeling_before_the_sunrise_cross.png",
  "2.c": "/images/journey/lesson-cards/bible_and_cross_at_golden_sunrise.png",
  "2.d": "/images/journey/lesson-cards/golden_reflection_by_the_mountain_lake.png",
  "2.e": "/images/journey/lesson-cards/sunrise_journey_across_the_valley.png",
  "3.b": "/images/journey/lesson-cards/golden_hour_prayer_overlook.png",
  "4.b": "/images/journey/lesson-cards/step-4/sunlit_seedling_in_rich_soil.png",
  "4.c": "/images/journey/lesson-cards/step-4/all-about-creation.jpg",
  "4.d": "/images/journey/lesson-cards/step-4/bible_journal_open_bible_and_journal copy.png",
};

function ContextNav({ previous, center, next }: { previous?: NavItem; center: NavItem; next?: NavItem }) {
  return <nav className={styles.contextNav} aria-label="Journey navigation"><div>{previous ? <Link href={previous.href}>← <span><strong>{previous.label}</strong>{previous.detail && <small>{previous.detail}</small>}</span></Link> : <span />}</div><Link className={styles.contextNavCenter} href={center.href}><strong>{center.label}</strong>{center.detail && <small>{center.detail}</small>}</Link><div>{next ? <Link href={next.href}><span><strong>{next.label}</strong>{next.detail && <small>{next.detail}</small>}</span> →</Link> : <span />}</div></nav>;
}

function displayState(state: JourneyDisplayState | undefined, saving: boolean) {
  if (!saving) return { icon: "○", label: "Available", action: "Start" };
  if (state === "completed") return { icon: "✓", label: "Completed", action: "Review" };
  if (state === "in_progress") return { icon: "●", label: "In Progress", action: "Continue" };
  if (state === "supporting") return { icon: "◇", label: "Supporting", action: "View" };
  return { icon: "○", label: "Not Started", action: "Start" };
}

function LessonCard({ lesson, state, saving }: { lesson: JourneyLesson; state?: JourneyDisplayState; saving: boolean }) {
  const presentation = displayState(state, saving);
  const image = lessonCardImages[lesson.id];
  return <article className={styles.card}><div className={styles.cardImageSlot} aria-hidden="true">{image ? <Image src={image} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" className={styles.cardImage} /> : <span>Approved lesson image</span>}</div><span className={styles.lessonBadge}>{lesson.id}</span><div className={styles.cardBody}><h3>{lesson.title}</h3><div className={styles.cardStatus}><span aria-hidden="true">{presentation.icon}</span> {presentation.label}</div><Link href={lesson.href}>{presentation.action} {state === "supporting" ? "Resource" : "Lesson"} <span aria-hidden="true">→</span></Link></div></article>;
}

function cardsForStep(stepNumber: number, lessons: JourneyLesson[]) {
  const excluded = new Set<string>(lessons.filter((lesson) => lesson.kind === "pastor-letter").map((lesson) => lesson.id));
  if (stepNumber === 1) {
    excluded.add("1.f");
    excluded.add("1.g");
  }
  if (stepNumber === 2) {
    excluded.add("2.f");
    excluded.add("2.g");
    excluded.add("2.h");
  }
  return lessons.filter((lesson) => !excluded.has(lesson.id));
}

function lowerWindowsForStep(stepNumber: number): LowerWindow[] {
  if (stepNumber === 1) {
    return [
      {
        id: "1.f",
        title: "A Prayer for Today",
        body: "The approved Journey to Hope manuscript text for A Prayer for Today will appear here during final content integration.",
      },
      {
        id: "1.g",
        title: "Continue Your Journey",
        body: "The approved Journey to Hope manuscript text for Continue Your Journey will appear here during final content integration.",
      },
    ];
  }

  return [];
}

function StepPastorWelcome({ stepNumber, lessons }: { stepNumber: number; lessons: JourneyLesson[] }) {
  const introLesson = lessons.find((lesson) => lesson.kind === "pastor-letter");
  if (!introLesson) return null;

  const title = introLesson.title === "Before We Begin" ? "Before We Begin" : introLesson.title;
  const pastorVideo = pastorMessageVideos[stepNumber];

  return (
    <section className={sequence9.stepPastorWelcome} aria-labelledby={`step-${stepNumber}-pastor-message`}>
      <div className={sequence9.stepPastorIdentity}>
        <div className={sequence9.stepPastorPortrait}>
          <Image
            src="/images/pastor-richard.png"
            alt="Pastor Richard"
            width={220}
            height={220}
            sizes="(max-width: 720px) 150px, 210px"
          />
        </div>
        <Image
          className={`${sequence9.stepPastorSignature} ${fixes.signatureBlend}`}
          src="/journal/assets/signature.png"
          alt="Pastor Richard signature"
          width={190}
          height={76}
        />
        <span>Founder &amp; Pastor</span>
      </div>
      <div className={sequence9.stepPastorCopy}>
        <p className={styles.eyebrow}>A Message from Pastor Richard</p>
        <h2 id={`step-${stepNumber}-pastor-message`}>{title}</h2>
        <span className={styles.goldRule} aria-hidden="true" />
        <div className={sequence9.stepPastorActions}>
          {pastorVideo ? (
            <PastorMessageVideo title={pastorVideo.title} embedUrl={pastorVideo.embedUrl} />
          ) : (
            <button className={sequence9.stepPastorVideoButton} type="button" disabled>
              ▶ Watch Pastor Richard&apos;s Message
            </button>
          )}
        </div>
        <div className={sequence9.stepPastorManuscript}>
          {stepNumber === 4 ? (
            <>
              <p><em>Dear Friend,</em></p>
              <p>
                Welcome to step 4 in your journey of faith. I&apos;m honored that you&apos;ve
                chosen to continue growing in your relationship with Jesus Christ. No
                matter where you are in your walk—whether you&apos;re a new believer or
                have followed Christ for many years—God is always inviting us to know Him
                more deeply. Growing in faith isn&apos;t about becoming perfect; it&apos;s
                about learning to trust Him more each day and allowing Him to transform
                our hearts.
              </p>
              <p>
                As you explore this section, my prayer is that you&apos;ll not only learn
                more about God&apos;s Word but also experience His presence in a deeper
                way. Take your time, pray as you read, and let the Holy Spirit guide you.
                Remember, you don&apos;t have to walk this journey alone. I&apos;m grateful
                to walk alongside you, and I pray that your faith will continue to grow as
                you discover that with God, all things are possible.
              </p>
              <p>
                Thank you for spending this time with me today. My prayer is that every
                visit to Faith Changes Everything brings you one step closer to Jesus,
                because faith in Him truly changes everything. And remember... God loves
                you so very much... and so do I.
              </p>
              <p>
                In His Service<br />
                <strong>Pastor Richard</strong><br />
                Faith Changes Everything
              </p>
            </>
          ) : (
            <p>
              The approved Step {stepNumber} introduction from Pastor Richard will appear
              here in full. This area is intentionally allowed to grow with the message
              so longer Step introductions remain readable without being truncated.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Step2ClosingWindows() {
  return (
    <section className={sequence9.lowerWindows} aria-label="Step 2 closing content">
      <article className={sequence9.lowerWindow}>
        <div className={sequence9.windowContent}>
          <span className={sequence9.windowBadge}>2.f</span>
          <div className={sequence9.windowBody}>
            <h2>Bible Study Online Resources</h2>
            <p>
              As you continue growing in your faith, you'll discover that there are many helpful resources available to deepen your understanding of God's Word. We've created a collection of carefully selected Bible study resources to help you continue growing in your knowledge of God's Word. Explore our collection of Faith Changes Everything Bible study resources.
            </p>
            <Link className={sequence9.resourceButton} href="/bible-studies">
              FCE Bible Study Resources
            </Link>
          </div>
        </div>
        <button type="button" disabled aria-label="Listen to Bible Study Online Resources">◖ Listen</button>
      </article>

      <article className={sequence9.lowerWindow}>
        <div className={sequence9.windowContent}>
          <span className={sequence9.windowBadge}>2.g</span>
          <div className={sequence9.windowBody}>
            <h2>Final Encouragement</h2>
            <p>As you continue your journey of faith, may this prayer from the Apostle Paul encourage your heart.</p>
            <blockquote className={sequence9.scriptureQuote}>
              “I pray that out of his glorious riches he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love, may have power, together with all the Lord's holy people, to grasp how wide and long and high and deep is the love of Christ, and to know this love that surpasses knowledge—that you may be filled to the measure of all the fullness of God. Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen.”
              <strong>Ephesians 3:16–21 (NIV)</strong>
            </blockquote>
            <p className={sequence9.copyrightNotice}>
              Scripture quotations taken from The Holy Bible, New International Version® NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.® Used by permission. All rights reserved worldwide.
            </p>
          </div>
        </div>
        <button type="button" disabled aria-label="Listen to Final Encouragement">◖ Listen</button>
      </article>

      <article className={sequence9.lowerWindow}>
        <div className={sequence9.windowContent}>
          <span className={sequence9.windowBadge}>2.h</span>
          <div className={sequence9.windowBody}>
            <h2>Continue Your Journey - Congratulations on completing this part of your journey!!</h2>
            <p>
              Whether you have recently placed your faith in Jesus Christ or are still seeking to know Him better, I hope this chapter has helped you take another step toward a deeper understanding of God's love and His plan for your life. Remember, following Jesus is not a destination—it is a lifelong journey of growing in faith, trusting God's promises, and becoming more like Christ each day. When you're ready, return to the Journey Hub to continue your journey. There you'll find additional paths designed to help you grow, answer questions you may still have, and encourage you wherever you are in your walk with God. As you continue growing in your faith, you may find these additional resources helpful.
            </p>
          </div>
        </div>
        <button type="button" disabled aria-label="Listen to Continue Your Journey">◖ Listen</button>
      </article>
    </section>
  );
}

export async function StepOverviewSequence9({ stepNumber, lessons }: { stepNumber: number; lessons: JourneyLesson[] }) {
  const step = journeySteps[stepNumber - 1];
  const previousStep = journeySteps[stepNumber - 2];
  const nextStep = journeySteps[stepNumber];
  const [summary, lessonStates] = await Promise.all([getJourneyProgressSummary(), getJourneyStepDisplayStates(stepNumber)]);
  const stepProgress = summary?.steps.find((item) => item.step === stepNumber);
  const percent = stepProgress && stepProgress.total > 0 ? Math.round((stepProgress.completed / stepProgress.total) * 100) : 0;
  const progressLabel = stepProgress ? `${stepProgress.completed} of ${stepProgress.total} complete · ${percent}%` : "Not tracking yet";
  const saving = Boolean(summary && lessonStates);
  const cardLessons = cardsForStep(stepNumber, lessons);
  const lowerWindows = lowerWindowsForStep(stepNumber);

  return <JourneyFrame><main className={styles.stepOverviewPage}>
    <section className={`${styles.interiorHero} ${fixes.interiorHeroCalm}`}><div className={styles.heroCopy}><p className={styles.crumb}>Journey to Hope <span>›</span> Step {step.number}</p><h1>Step {step.number}: {step.title}</h1><span className={styles.goldRule} aria-hidden="true" /><p>{step.summary}</p></div><aside className={styles.progressCard} aria-label={`Step ${step.number} progress`}><strong>Step Progress</strong><span>{stepProgress ? "Your saved progress in this Step." : "Progress will appear here after you choose to save your Journey."}</span><div className={styles.progressTrack}><span style={{ width: `${percent}%` }} /></div><b>{progressLabel}</b></aside></section>

    <StepPastorWelcome stepNumber={stepNumber} lessons={lessons} />

    <div className={`${styles.overviewPanel} ${sequence9.overviewAfterPastorWelcome}`}>
      <aside className={styles.yourJourney}><h2>Your Journey</h2>{journeySteps.map((item) => { const state = summary?.steps.find((s) => s.step === item.number); const marker = state?.status === "completed" ? "✓" : state?.status === "in_progress" ? "●" : "○"; const label = state ? state.status.replace("_", " ") : "not tracking"; return <Link key={item.id} href={item.href} className={item.id === step.id ? styles.currentJourneyItem : ""} aria-current={item.id === step.id ? "page" : undefined}><span className={`${styles.journeyNumber} ${item.id === step.id ? "" : refined.journeyNumberNeutral}`}>{item.number}</span><span>{item.title}<small className={fixes.journeyCompletionCount}>{state ? `${state.completed} of ${state.total} complete` : ""}</small></span><span className={`${refined.journeyState} ${item.id === step.id ? refined.journeyStateCurrent : ""}`} aria-label={label}>{marker}</span></Link>; })}<div className={styles.sidebarSupport}><span className={styles.supportIcon} aria-hidden="true">♡</span><strong>You Are Not Alone</strong><p>Whatever you’re facing, we’re here to walk with you and point you to hope.</p><a href="https://988lifeline.org/" rel="noreferrer">Need Help Right Now →</a></div></aside>

      <section className={styles.lessonCards} aria-labelledby="lessons-title"><div className={styles.lessonHeading}><span className={styles.lessonHeadingIcon} aria-hidden="true">▣</span><div><h2 id="lessons-title">Your Lessons in This Step</h2><p>Complete any lesson in any order. Supporting resources remain available without affecting your completion percentage.</p></div></div><div className={styles.cardGrid}>{cardLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} state={lessonStates?.[lesson.id]?.state} saving={saving} />)}</div>{!summary && <ProgressSavePrompt />}</section>
    </div>

    {stepNumber === 2 && <Step2ClosingWindows />}

    {lowerWindows.length > 0 && <section className={sequence9.lowerWindows} aria-label={`Step ${stepNumber} closing content`}>
      {lowerWindows.map((window) => <article className={sequence9.lowerWindow} key={window.id}>
        <div className={sequence9.windowContent}><span className={sequence9.windowBadge}>{window.id}</span><div className={sequence9.windowBody}><h2>{window.title}</h2><p>{window.body}</p></div></div>
        <button type="button" disabled aria-label={`Listen to ${window.title}`}>◖ Listen</button>
      </article>)}
    </section>}

    <JourneyStepResourceArea
      stepId={`step-${stepNumber}` as "step-1" | "step-2" | "step-3" | "step-4" | "step-5" | "step-6"}
      heading="Resources to Help You Keep Going"
      introduction="These resources are connected to this Step and are available to support you as you continue your Journey."
    />

    <ContextNav previous={previousStep ? { href: previousStep.href, label: "Previous Step", detail: previousStep.title } : undefined} center={{ href: "/journey", label: "You’re on your Journey", detail: "Keep going, stay encouraged, and continue with Christ." }} next={nextStep ? { href: nextStep.href, label: "Next Step", detail: nextStep.title } : undefined} />
  </main></JourneyFrame>;
}
