import Image from "next/image";
import Link from "next/link";
import { JourneyFrame, LessonSidebar, ProgressSavePrompt, StepBanner } from "./JourneyShell";
import { JourneyCompletionControl } from "./JourneyCompletionControl";
import { JourneyEngagementEvaluator } from "./JourneyEngagementEvaluator";
import { getJourneyProgressSummary, getJourneySeriesProgress, getJourneyStepDisplayStates, type JourneyDisplayState } from "../progress/operations";
import { journeySteps, type JourneyLesson } from "../data";
import styles from "../journey.module.css";
import refined from "../journey-refinements.module.css";
import fixes from "../journey-fixes.module.css";

type Card = { id: string; title: string; summary?: string; href: string };
type NavItem = { href: string; label: string; detail?: string };
type LessonBlockTone = "default" | "highlight" | "scripture";

function ContextNav({ previous, center, next }: { previous?: NavItem; center: NavItem; next?: NavItem }) {
  return <nav className={styles.contextNav} aria-label="Journey navigation"><div>{previous ? <Link href={previous.href}>← <span><strong>{previous.label}</strong>{previous.detail && <small>{previous.detail}</small>}</span></Link> : <span />}</div><Link className={styles.contextNavCenter} href={center.href}><strong>{center.label}</strong>{center.detail && <small>{center.detail}</small>}</Link><div>{next ? <Link href={next.href}><span><strong>{next.label}</strong>{next.detail && <small>{next.detail}</small>}</span> →</Link> : <span />}</div></nav>;
}

function lessonNeighbors(stepNumber: number, lessonId: string) {
  const step = journeySteps[stepNumber - 1];
  const navigableLessons = step.lessons.filter((lesson) => lesson.kind !== "pastor-letter");
  const index = navigableLessons.findIndex((lesson) => lesson.id === lessonId);
  return {
    previous: index > 0 ? navigableLessons[index - 1] : undefined,
    next: index >= 0 && index < navigableLessons.length - 1 ? navigableLessons[index + 1] : undefined,
  };
}

function displayState(state: JourneyDisplayState | undefined, saving: boolean) {
  if (!saving) return { icon: "○", label: "Available", action: "Start" };
  if (state === "completed") return { icon: "✓", label: "Completed", action: "Review" };
  if (state === "in_progress") return { icon: "●", label: "In Progress", action: "Continue" };
  if (state === "supporting") return { icon: "◇", label: "Supporting", action: "View" };
  return { icon: "○", label: "Not Started", action: "Start" };
}

function engagementTargetId(contentKey: string) {
  return `j2h-engagement-${contentKey.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

export function LessonBlock({ title, icon, tone = "default", children }: { title: string; icon?: string; tone?: LessonBlockTone; children: React.ReactNode }) {
  const toneClass = tone === "highlight" ? refined.lessonBlockHighlight : tone === "scripture" ? refined.lessonBlockScripture : "";
  return <section className={`${refined.lessonBlock} ${toneClass}`}><span className={refined.lessonBlockIcon} aria-hidden="true">{icon ?? "◇"}</span><div className={refined.lessonBlockContent}><h2>{title}</h2>{children}</div></section>;
}

function LessonCard({ lesson, state, saving }: { lesson: Card; state?: JourneyDisplayState; saving: boolean }) {
  const presentation = displayState(state, saving);
  return <article className={styles.card}><div className={styles.cardImageSlot} aria-hidden="true"><span>Approved lesson image</span></div><span className={styles.lessonBadge}>{lesson.id}</span><div className={styles.cardBody}><h3>{lesson.title}</h3>{lesson.summary && <p>{lesson.summary}</p>}<div className={styles.cardStatus}><span aria-hidden="true">{presentation.icon}</span> {presentation.label}</div><Link href={lesson.href}>{presentation.action} {state === "supporting" ? "Resource" : "Lesson"} <span aria-hidden="true">→</span></Link></div></article>;
}

export async function StepOverview({ stepNumber, lessons }: { stepNumber: number; lessons: Card[] }) {
  const step = journeySteps[stepNumber - 1];
  const previousStep = journeySteps[stepNumber - 2];
  const nextStep = journeySteps[stepNumber];
  const [summary, lessonStates] = await Promise.all([getJourneyProgressSummary(), getJourneyStepDisplayStates(stepNumber)]);
  const stepProgress = summary?.steps.find((item) => item.step === stepNumber);
  const percent = stepProgress && stepProgress.total > 0 ? Math.round((stepProgress.completed / stepProgress.total) * 100) : 0;
  const progressLabel = stepProgress ? `${stepProgress.completed} of ${stepProgress.total} complete · ${percent}%` : "Not tracking yet";
  const saving = Boolean(summary && lessonStates);
  return <JourneyFrame><main className={styles.stepOverviewPage}>
    <section className={`${styles.interiorHero} ${fixes.interiorHeroCalm}`}><div className={styles.heroCopy}><p className={styles.crumb}>Journey to Hope <span>›</span> Step {step.number}</p><h1>Step {step.number}: {step.title}</h1><span className={styles.goldRule} aria-hidden="true" /><p>{step.summary}</p></div><aside className={styles.progressCard} aria-label={`Step ${step.number} progress`}><strong>Step Progress</strong><span>{stepProgress ? "Your saved progress in this Step." : "Progress will appear here after you choose to save your Journey."}</span><div className={styles.progressTrack}><span style={{ width: `${percent}%` }} /></div><b>{progressLabel}</b></aside></section>
    <div className={styles.overviewPanel}><aside className={styles.yourJourney}><h2>Your Journey</h2>{journeySteps.map((item) => { const state = summary?.steps.find((s) => s.step === item.number); const marker = state?.status === "completed" ? "✓" : state?.status === "in_progress" ? "●" : "○"; const label = state ? state.status.replace("_", " ") : "not tracking"; return <Link key={item.id} href={item.href} className={item.id === step.id ? styles.currentJourneyItem : ""} aria-current={item.id === step.id ? "page" : undefined}><span className={`${styles.journeyNumber} ${item.id === step.id ? "" : refined.journeyNumberNeutral}`}>{item.number}</span><span>{item.title}<small>{state ? `${state.completed} of ${state.total} complete` : ""}</small></span><span className={`${refined.journeyState} ${item.id === step.id ? refined.journeyStateCurrent : ""}`} aria-label={label}>{marker}</span></Link>; })}<div className={styles.sidebarSupport}><span className={styles.supportIcon} aria-hidden="true">♡</span><strong>You Are Not Alone</strong><p>Whatever you’re facing, we’re here to walk with you and point you to hope.</p><a href="https://988lifeline.org/" rel="noreferrer">Need Help Right Now →</a></div></aside><section className={styles.lessonCards} aria-labelledby="lessons-title"><div className={styles.lessonHeading}><span className={styles.lessonHeadingIcon} aria-hidden="true">▣</span><div><h2 id="lessons-title">Your Lessons in This Step</h2><p>Complete any lesson in any order. Supporting resources remain available without affecting your completion percentage.</p></div></div><div className={styles.cardGrid}>{lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} state={lessonStates?.[lesson.id]?.state} saving={saving} />)}</div>{!summary && <ProgressSavePrompt />}</section></div>
    <ContextNav previous={previousStep ? { href: previousStep.href, label: "Previous Step", detail: previousStep.title } : undefined} center={{ href: "/journey", label: "You’re on your Journey", detail: "Keep going, stay encouraged, and continue with Christ." }} next={nextStep ? { href: nextStep.href, label: "Next Step", detail: nextStep.title } : undefined} />
  </main></JourneyFrame>;
}

export async function SeriesOverview({ stepNumber, parentId, title, intro, sections, lessons }: { stepNumber: number; parentId: string; title: string; intro: string; sections: Card[]; lessons: JourneyLesson[] }) {
  const { previous, next } = lessonNeighbors(stepNumber, parentId);
  const series = await getJourneySeriesProgress(parentId);
  const saving = Boolean(series);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar stepNumber={stepNumber} lessons={lessons} currentId={parentId} /><article className={`${styles.lessonContent} ${refined.seriesPageContent} ${fixes.readablePanel}`}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><header className={`${styles.lessonHeader} ${fixes.seriesHeader}`}><div><p className={styles.eyebrow}>Step {stepNumber} <span>›</span> {parentId}</p><h1>{parentId} &nbsp; {title}</h1><p className={styles.lead}>{intro}</p></div><button className={`${styles.listenButton} ${fixes.readableButton}`} type="button" disabled>◖ Listen to the Series Overview</button></header><section className={refined.seriesProgress} aria-label={`${title} progress`}><div><span className={refined.seriesProgressIcon} aria-hidden="true">▤</span><div><strong>Your Progress in This Series</strong><p>{series ? `${series.completed} of ${series.total} studies complete.` : "Progress begins when you choose to save your Journey."} Each study is its own completion unit; the parent series adds no extra weight.</p></div></div><b>{series ? `${series.percent}%` : "Not tracking yet"}</b><div className={refined.seriesProgressTrack}><span style={{ width: `${series?.percent ?? 0}%` }} /></div></section><div className={refined.seriesIntroGrid}><div className={refined.seriesMain}><div className={refined.seriesSectionHeading}><span aria-hidden="true">▤</span><div><h2>The {sections.length} Studies in This Series</h2><p>Each study can be completed on its own. The manuscript determines the study order and content.</p></div></div><div className={styles.cardGrid}>{sections.map((section, index) => { const state = series?.items[index]?.state; const presentation = displayState(state, saving); return <article className={styles.card} key={section.id}><div className={styles.cardImageSlot} aria-hidden="true"><span>Approved study image</span></div><span className={styles.lessonBadge}>{index + 1}</span><div className={styles.cardBody}><small>{section.id}</small><h2>{section.title}</h2>{section.summary && <p>{section.summary}</p>}<div className={styles.cardStatus}><span aria-hidden="true">{presentation.icon}</span> {presentation.label}</div><Link href={section.href}>{presentation.action} Study →</Link></div></article>; })}</div><aside className={refined.seriesCompletion}><span aria-hidden="true">{series?.status === "completed" ? "✓" : "☆"}</span><div><strong>{series?.status === "completed" ? "Series Completed" : "Series Completion"}</strong><p>The parent series is complete when every completion-tracked study in it is complete.</p></div></aside></div><aside className={refined.seriesRail}><section className={refined.seriesRailCard}><p className={styles.eyebrow}>About This Series</p><p>The authoritative manuscript determines the content and order inside each study. This overview keeps the parent lesson together while making each substantial study easier to read and return to.</p></section><section className={refined.seriesRailCard}><p className={styles.eyebrow}>Series Resources</p><p>Contextual resources can be connected here during content implementation without changing the page structure.</p></section><section className={`${refined.seriesRailCard} ${refined.seriesPrayerCard}`}><p className={styles.eyebrow}>Need Prayer?</p><p>We are here for you. Share only what you are comfortable sharing.</p><Link href="/prayer">Request Prayer</Link></section></aside></div><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}

export async function IndividualLesson({ stepNumber, lessonId, title, intro, lessons, children }: { stepNumber: number; lessonId: string; title: string; intro?: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  const { previous, next } = lessonNeighbors(stepNumber, lessonId);
  const lesson = lessons.find((item) => item.id === lessonId);
  const path = lesson?.href ?? `/journey/step-${stepNumber}`;
  const targetId = engagementTargetId(lessonId);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar stepNumber={stepNumber} lessons={lessons} currentId={lessonId} /><article className={`${styles.lessonContent} ${fixes.individualLessonContent} ${fixes.readablePanel}`}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><header className={`${styles.lessonHeader} ${fixes.individualLessonHeader}`}><div><p className={styles.eyebrow}>Step {stepNumber} <span>›</span> {lessonId}</p><h1>{lessonId} &nbsp; {title}</h1>{intro && <p className={styles.lead}>{intro}</p>}</div><button className={`${styles.listenButton} ${fixes.readableButton}`} type="button" disabled>◖ Listen to This Lesson</button></header><section className={`${styles.audioBlock} ${fixes.lessonAudioNotice}`} aria-label="Listen to this lesson"><strong>Listen to This Lesson</strong><p>The approved audio will appear here with the complete readable lesson on the same page.</p></section><div id={targetId} className={`${styles.manuscript} ${fixes.lessonBlocks}`}>{children}</div><JourneyEngagementEvaluator contentKey={lessonId} targetId={targetId} path={path} /><JourneyCompletionControl contentKey={lessonId} path={path} itemLabel="Lesson" /><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}

export async function SeriesStudy({ stepNumber, parentId, sectionId, progressKey, title, parentTitle, lessons, previousSection, nextSection, children }: { stepNumber: number; parentId: string; sectionId: string; progressKey: string; title: string; parentTitle: string; lessons: JourneyLesson[]; previousSection?: NavItem; nextSection?: NavItem; children: React.ReactNode }) {
  const parent = lessons.find((lesson) => lesson.id === parentId);
  const path = progressKey.startsWith("1.c.study-") ? `/journey/step-1/what-does-the-bible-say-about-hope/study-${progressKey.split("-").at(-1)}` : `/journey/step-4/how-to-study-the-bible/study-${bibleStudyProgressIndex(progressKey)}`;
  const targetId = engagementTargetId(progressKey);
  return <JourneyFrame><main><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar stepNumber={stepNumber} lessons={lessons} currentId={parentId} /><article className={`${styles.lessonContent} ${fixes.individualLessonContent} ${fixes.readablePanel}`}><Link href={parent?.href ?? `/journey/step-${stepNumber}`} className={styles.backLink}>← Back to {parentTitle}</Link><header className={`${styles.lessonHeader} ${fixes.individualLessonHeader}`}><div><p className={`${styles.eyebrow} ${fixes.seriesStudyKicker}`}>Step {stepNumber} <span>›</span> {parentId} <span>›</span> {sectionId}</p><h1>{title}</h1></div><button className={`${styles.listenButton} ${fixes.readableButton}`} type="button" disabled>◖ Listen to This Study</button></header><section className={`${styles.audioBlock} ${fixes.lessonAudioNotice}`} aria-label="Listen to this study"><strong>Listen to This Study</strong><p>The approved audio for this study will appear here with the complete readable study.</p></section><div id={targetId} className={`${styles.manuscript} ${fixes.lessonBlocks}`}>{children}</div><JourneyEngagementEvaluator contentKey={progressKey} targetId={targetId} path={path} /><JourneyCompletionControl contentKey={progressKey} path={path} itemLabel="Study" /><ContextNav previous={previousSection} center={{ href: parent?.href ?? `/journey/step-${stepNumber}`, label: `Back to ${parentTitle}` }} next={nextSection} /></article></div></main></JourneyFrame>;
}

function bibleStudyProgressIndex(key: string) {
  const starts = [1, 8, 15, 23, 31, 39, 48, 57];
  const id = Number(key.split(".").at(-1));
  const index = starts.indexOf(id);
  return index >= 0 ? index + 1 : 1;
}

export function PastorLetter({ stepNumber, lessonId, title, lessons, children }: { stepNumber: number; lessonId: string; title: string; lessons: JourneyLesson[]; children: React.ReactNode }) {
  const step = journeySteps[stepNumber - 1];
  const { previous, next } = lessonNeighbors(stepNumber, lessonId);
  return <JourneyFrame><main><section className={`${styles.pastorLetterHero} ${fixes.pastorLetterHeroCalm}`}><div><p className={styles.eyebrow}>Journey to Hope · Step {stepNumber}</p><h1>{step.title}</h1><p>Before We Begin</p></div></section><StepBanner currentStep={stepNumber} /><div className={styles.lessonLayout}><LessonSidebar stepNumber={stepNumber} lessons={lessons} currentId={lessonId} /><article className={`${styles.letterPanel} ${fixes.readablePanel}`}><Link href={`/journey/step-${stepNumber}`} className={styles.backLink}>← Back to Step Overview</Link><div className={styles.letterIntro}><div className={refined.letterIdentity}><div className={styles.letterPortrait}><Image src="/images/pastor-richard.png" alt="Pastor Richard" width={220} height={220} sizes="(max-width: 720px) 140px, 180px" /></div><Image className={`${refined.letterSignature} ${fixes.signatureBlend}`} src="/journal/assets/signature.png" alt="Pastor Richard signature" width={190} height={76} /></div><div><p className={styles.eyebrow}>Before We Begin · A Message from Pastor Richard</p><h1>{title}</h1><p className={styles.signatureLine}>Pastor Richard Ball · Founder, Faith Changes Everything</p></div></div><div className={styles.welcomeActions}><button className={fixes.readableButton} type="button" disabled>▶ Watch Pastor Richard’s Message</button></div><div className={styles.manuscript}>{children}</div><ContextNav previous={previous ? { href: previous.href, label: "Previous Lesson", detail: previous.title } : undefined} center={{ href: `/journey/step-${stepNumber}`, label: "Back to Step Overview" }} next={next ? { href: next.href, label: "Next Lesson", detail: next.title } : undefined} /></article></div></main></JourneyFrame>;
}
