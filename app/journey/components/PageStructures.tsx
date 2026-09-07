import Image from "next/image";
import Link from "next/link";
import { JourneyFrame, LessonSidebar, ProgressSavePrompt, StepBanner } from "./JourneyShell";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";

type Card = { id: string; title: string; summary?: string; href: string };

type NavItem = { href: string; label: string; detail?: string };

function ContextNav({ previous, center, next }: { previous?: NavItem; center: NavItem; next?: NavItem }) {
  return (
    <nav className={styles.contextNav} aria-label="Journey navigation">
      <div>{previous ? <Link href={previous.href}>← <span><strong>{previous.label}</strong>{previous.detail && <small>{previous.detail}</small>}</span></Link> : <span />}</div>
      <Link className={styles.contextNavCenter} href={center.href}><strong>{center.label}</strong>{center.detail && <small>{center.detail}</small>}</Link>
      <div>{next ? <Link href={next.href}><span><strong>{next.label}</strong>{next.detail && <small>{next.detail}</small>}</span> →</Link> : <span />}</div>
    </nav>
  );
}

function lessonNeighbors(stepNumber: number, lessonId: string) {
  const step = journeySteps[stepNumber - 1];
  const index = step.lessons.findIndex((lesson) => lesson.id === lessonId);
  return { previous: index > 0 ? step.lessons[index - 1] : undefined, next: index >= 0 && index < step.lessons.length - 1 ? step.lessons[index + 1] : undefined };
}

function PrayerSupportPanel() {
  return <aside className={styles.prayerSupport}><div><p className={styles.eyebrow}>Prayer Support</p><h2>We would be honored to pray with you.</h2><p>Prayer is separate from crisis support. Share only what you are comfortable sharing.</p></div><Link href="/prayer">Request Prayer →</Link></aside>;
}

export function StepOverview({ stepNumber, lessons }: { stepNumber: number; lessons: Card[] }) {
  const step = journeySteps[stepNumber - 1];
  const previousStep = journeySteps[stepNumber - 2];
  const nextStep = journeySteps[stepNumber];
  return (
    <JourneyFrame>
      <main>
        <section className={styles.interiorHero}><div><p className={styles.eyebrow}>Journey to Hope · Step {step.number}</p><h1>{step.title}</h1><p>{step.summary}</p><aside className={styles.progressCard}><strong>Step Progress</strong><span>Progress will appear here when Journey progress is enabled.</span></aside></div></section>
        <StepBanner currentStep={step.number} />
        <div className={styles.overviewGrid}>
          <aside className={styles.yourJourney}><h2>Your Journey</h2>{journeySteps.map((item) => <Link key={item.id} href={item.href} className={item.id === step.id ? styles.currentJourneyItem : ""}>Step {item.number}<span>{item.title}</span></Link>)}<div className={styles.sidebarSupport}><strong>You Are Not Alone</strong><p>Whatever you’re facing, we’re here to point you toward Christ, Scripture, prayer, and trustworthy help.</p><a href="https://988lifeline.org/" rel="noreferrer">Need Help Right Now →</a></div></aside>
          <section className={styles.lessonCards} aria-labelledby="lessons-title"><p className={styles.eyebrow}>Step {step.number}</p><h2 id="lessons-title">Your Lessons in This Step</h2><p className={styles.sectionIntro}>Choose any lesson in this Step. Journey to Hope is sequentially organized, but no lesson is locked.</p><div className={styles.cardGrid}>{lessons.map((lesson) => <article className={styles.card} key={lesson.id}><div className={styles.cardImageSlot} aria-hidden="true"><span>Approved lesson image</span></div><small>{lesson.id}</small><h3>{lesson.title}</h3>{lesson.summary && <p>{lesson.summary}</p>}<Link href={lesson.href}>Begin Lesson →</Link></article>)}</div><ProgressSavePrompt /></section>
        </div>
        <ContextNav
          previous={previousStep ? { href: previousStep.href, label: "Previous Step", detail: previousStep.title } : undefined}
          center={{ href: "/journey", label: "You’re on your Journey", detail: "Keep going, stay encouraged, and continue with Christ." }}
          next={nextStep ? { href: nextStep.href, label: "Next Step", detail: nextStep.title } : undefined}
        />
      </main>
    </JourneyFrame>
  );
}

export function SeriesOverview({ stepNumber, parentId, title, intro, sections, lessons }: { stepNumber: number; parentId: string; title: string; intro: string; sections: Card[]; lessons: JourneyLesson[] }) {
  const { previous, next } = lessonNeighbors(stepNumber, parentId);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={parentId} /><article className={styles.lessonContent}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><p className={styles.eyebrow}>{parentId} · Series Overview</p><h1>{title}</h1><p className={styles.lead}>{intro}</p><aside className={styles.seriesAbout}><strong>About This Series</strong><p>The authoritative manuscript determines the content and order inside each study. This overview keeps the parent lesson together while making each substantial study easier to read and return to.</p></aside><div className={styles.cardGrid}>{sections.map((section, index) => <article className={styles.card} key={section.id}><div className={styles.cardImageSlot} aria-hidden="true"><span>Approved study image</span></div><small>Study {index + 1} · {section.id}</small><h2>{section.title}</h2>{section.summary && <p>{section.summary}</p>}<Link href={section.href}>Begin Study →</Link></article>)}</div><PrayerSupportPanel /><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}

export function IndividualLesson({ stepNumber, lessonId, title, intro, lessons, children }: { stepNumber: number; lessonId: string; title: string; intro?: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  const { previous, next } = lessonNeighbors(stepNumber, lessonId);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={lessonId} /><article className={styles.lessonContent}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><p className={styles.eyebrow}>Lesson {lessonId}</p><h1>{title}</h1>{intro && <p className={styles.lead}>{intro}</p>}<section className={styles.audioBlock} aria-label="Listen to this lesson"><strong>Listen to This Lesson</strong><p>Journey teaching uses audio with the readable lesson on the same page. The approved recording will appear here when published.</p></section><div className={styles.manuscript}>{children}</div><button className={styles.completeButton} type="button" disabled title="Progress persistence is implemented in Sequence 8">Mark Lesson Complete</button><p className={styles.progressNote}>Completion is always intentional; it is never inferred from scrolling or audio playback. Secure Journey progress is implemented in Sequence #8.</p><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}

export function SeriesStudy({ stepNumber, parentId, sectionId, title, parentTitle, lessons, previousSection, nextSection, children }: { stepNumber: number; parentId: string; sectionId: string; title: string; parentTitle: string; lessons: JourneyLesson[]; previousSection?: NavItem; nextSection?: NavItem; children: React.ReactNode }) {
  const parent = lessons.find((lesson) => lesson.id === parentId);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={parentId} /><article className={styles.lessonContent}><Link href={parent?.href ?? `/journey/step-${stepNumber}`} className={styles.backLink}>← Back to {parentTitle}</Link><p className={styles.eyebrow}>{sectionId} · {parentId}</p><h1>{title}</h1><section className={styles.audioBlock} aria-label="Listen to this study"><strong>Listen to This Study</strong><p>The approved audio for this study will appear here with the complete readable study.</p></section><div className={styles.manuscript}>{children}</div><button className={styles.completeButton} type="button" disabled title="Progress persistence is implemented in Sequence 8">Mark Study Complete</button><p className={styles.progressNote}>Each study is a completion unit. The parent lesson is complete only after all of its studies are complete.</p><ContextNav previous={previousSection} center={{ href: parent?.href ?? `/journey/step-${stepNumber}`, label: `Back to ${parentTitle}` }} next={nextSection} /></article></div></main></JourneyFrame>;
}

export function PastorLetter({ stepNumber, lessonId, title, lessons, children }: { stepNumber: number; lessonId: string; title: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  const step = journeySteps[stepNumber - 1];
  const { previous, next } = lessonNeighbors(stepNumber, lessonId);
  return <JourneyFrame><main><section className={styles.pastorLetterHero}><div><p className={styles.eyebrow}>Journey to Hope · Step {stepNumber}</p><h1>{step.title}</h1><p>Before We Begin</p></div></section><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar lessons={lessons} currentId={lessonId} /><article className={styles.letterPanel}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><div className={styles.letterIntro}><div className={styles.letterPortrait}><Image src="/images/pastor-richard.png" alt="Pastor Richard" width={220} height={220} sizes="(max-width: 720px) 140px, 180px" /></div><div><p className={styles.eyebrow}>Before We Begin · A Message from Pastor Richard</p><h1>{title}</h1><p className={styles.signatureLine}>Pastor Richard Ball · Founder, Faith Changes Everything</p></div></div><section className={styles.mediaPlaceholder}><strong>Listen / Watch</strong><p>The approved Pastor Letter recording will be presented here with the complete written letter remaining on this page.</p></section><div className={styles.manuscript}>{children}</div><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}
