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
  paragraphs: string[];
  audioUrl?: string;
};

const pastorMessageVideos: Partial<Record<number, { title: string; embedUrl: string }>> = {
  1: {
    title: "Step 1: Before We Begin — A Message from Pastor Richard",
    embedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/1170e21c10b941ac5b7024ad7860c4e7/iframe",
  },
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
        audioUrl:
          "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1f-audio-2026-00011-prayer.mp3",
        paragraphs: [
          "No matter what has brought you here today, God knows your heart. He sees your joys, your fears, your questions, and your struggles. You do not need perfect words or a polished prayer. He simply invites you to come to Him with honesty and faith. If you would like, make this prayer your own.",
          "Heavenly Father,",
          "Thank You for reminding me that true hope is found in You alone. There are times when life feels uncertain, and I don't always understand the circumstances I face. Yet today I choose to place my trust in You rather than in my fears.",
          "Thank You for Your unfailing love, your faithfulness, and the promises You have given through Your Word. Thank You for sending Jesus Christ so that I can know the hope of forgiveness, new life, and the assurance of Your presence every day.",
          "Please strengthen my faith when I am weak. Fill my heart with Your peace when I am anxious. Help me to remember that You are always working, even when I cannot see what You are doing.",
          "Guide my steps as I continue this journey. Help me to grow in my relationship with You, to trust You more each day, and to become a reflection of Your love to those around me.",
          "Thank You for never leaving me and for being the source of a hope that never fails.",
          "In the name of Jesus Christ, I pray.",
          "Amen.",
        ],
      },
      {
        id: "1.g",
        title: "Continue Your Journey",
        audioUrl:
          "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1g-audio-2026-00012-continue-journey.mp3",
        paragraphs: [
          "Congratulations for completing the Step 1, Journey to Hope. Thank you for spending this time exploring what the Bible says about hope.",
          "My prayer is that you leave here encouraged, knowing that no matter what you are facing today, you do not have to face it alone. God sees you, loves you, and invites you to place your hope in Him.",
          "If this is your first time exploring the Christian faith, remember that every journey begins with a single step. You do not need to have all the answers today. Continue seeking God, reading His Word, and asking Him to reveal Himself to you.",
          "If you already know Jesus Christ as your Savior, I encourage you to keep growing in your faith. Spend time with God each day through prayer and Bible reading. Become part of a Bible-believing church where you can worship, learn, and serve alongside other believers.",
          "Wherever you are on your spiritual journey, there is always another step to take.",
          "I’ll leave you at the end of your step one journey with this message, \"Wherever God is leading you next, don't feel pressured to do everything today. Simply take the next step He places before you.\" – From Pastor Richard at Faith Changes Everything, congratulations for completing Step 1, and I hope to see you on Step 2.",
        ],
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
          {stepNumber === 1 ? (
            <>
              <p><em>Dear Friend, welcome to step 1 in the journey to hope series, I&apos;m so glad you&apos;re here.</em></p>
              <p>
                If you&apos;ve found your way to this page, there&apos;s a good chance life
                isn&apos;t unfolding the way you had hoped. I&apos;m honored that you&apos;ve
                trusted me with a few moments of your time, and I pray they&apos;ll point
                you toward the One who never leaves you alone. Perhaps you&apos;re carrying
                a burden that feels too heavy to bear. Maybe you&apos;re grieving the loss
                of someone you love, facing uncertainty about the future, struggling with
                loneliness, or simply feeling worn down by the weight of life. Whatever
                brought you here today, I want you to know that you are not alone.
              </p>
              <p>
                There are moments in life when hope feels distant. Questions begin to fill
                our minds. We wonder if things will ever get better, if anyone truly
                understands what we&apos;re going through, or if God even sees our pain.
                If you&apos;ve asked those questions, you&apos;re not the first—and you
                certainly won&apos;t be the last. Many of God&apos;s people in Scripture
                walked through seasons of fear, sorrow, disappointment, and uncertainty.
                Yet time and again, they discovered that God was faithful, even when they
                couldn&apos;t see what He was doing.
              </p>
              <p>
                One of the greatest misconceptions about hope is that it depends on our
                circumstances. The Bible teaches something different. Biblical hope is not
                wishful thinking or blind optimism. It is a confident trust in the
                character and promises of God. It is the quiet assurance that even in our
                darkest moments, God is present, He is working, and He has not abandoned
                His children.
              </p>
              <p>
                I don&apos;t know exactly what you&apos;re facing today, and I won&apos;t
                pretend to have simple answers for every difficult situation. But I do
                know this: God invites us to come to Him just as we are. We don&apos;t
                have to hide our fears, our doubts, or our tears. He already knows our
                hearts, and He lovingly meets us in our greatest moments of need.
              </p>
              <p>
                As you continue through this journey, my prayer is that you&apos;ll
                discover more than encouraging words. I pray you&apos;ll discover the hope
                that is found in Jesus Christ—a hope that remains steady even when life
                feels uncertain.
              </p>
              <p>
                Along the way, you&apos;ll find biblical encouragement, practical
                guidance, and opportunities to pray and reflect. Take your time. There is
                no rush. Healing and hope are often found one step at a time. Before we
                take this next step together, I&apos;d like to leave you with one of my
                favorite verses about hope. It reminds us that true hope doesn&apos;t
                come from our circumstances—it comes from God Himself.
              </p>
              <p>
                Before we continue, I&apos;d like to share one passage of Scripture that
                has carried me through difficult seasons of life.
              </p>
              <p>
                <span className={sequence9.stepPastorScripture}>
                  &quot;May the God of hope fill you with all joy and peace as you trust in
                  Him, so that you may overflow with hope by the power of the Holy
                  Spirit.&quot;
                </span>{" "}
                — <strong>Romans 15:13 (NIV)</strong>
              </p>
              <p>
                Thank you for spending this time with me today. I&apos;m Pastor Richard.
                My prayer is that every visit to Faith Changes Everything brings you one
                step closer to Jesus, because faith in Him truly changes everything. And
                remember... God loves you so very much... and so do I.
              </p>
              <p>
                <small>
                  Scripture quotations taken from The Holy Bible, New International
                  Version® NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™
                  Used by permission. All rights reserved worldwide.
                </small>
              </p>
            </>
          ) : stepNumber === 4 ? (
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
        <div className={sequence9.windowContent}>
          <span className={sequence9.windowBadge}>{window.id}</span>
          <div className={sequence9.windowBody}>
            <h2>{window.title}</h2>
            {window.audioUrl && (
              <div className={sequence9.windowAudio}>
                <strong>Listen to this section</strong>
                <audio controls preload="metadata" controlsList="nodownload" aria-label={`Listen to ${window.title}`}>
                  <source src={window.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            <div className={sequence9.windowManuscript}>
              {window.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </div>
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
