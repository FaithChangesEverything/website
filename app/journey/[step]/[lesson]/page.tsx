import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { IndividualLesson, LessonBlock, PastorLetter, SeriesOverview } from "../../components/PageStructures";
import { UnderstandingHopeContent } from "../../components/UnderstandingHopeContent";
import { TimeToReflectContent } from "../../components/TimeToReflectContent";
import { HelpfulResourcesContent } from "../../components/HelpfulResourcesContent";
import { PrayerForTodayContent } from "../../components/PrayerForTodayContent";
import { ContinueYourJourneyContent } from "../../components/ContinueYourJourneyContent";
import { UnderstandingSalvationContent } from "../../components/UnderstandingSalvationContent";
import { SalvationScriptureContent } from "../../components/SalvationScriptureContent";
import { SalvationReflectionContent } from "../../components/SalvationReflectionContent";
import { SalvationJourneyContent } from "../../components/SalvationJourneyContent";
import { BibleStudyOnlineResourcesContent } from "../../components/BibleStudyOnlineResourcesContent";
import { SalvationFinalEncouragementContent } from "../../components/SalvationFinalEncouragementContent";
import { SalvationContinueJourneyContent } from "../../components/SalvationContinueJourneyContent";
import { Step3HeartOfGodContent } from "../../components/Step3HeartOfGodContent";
import { Step4SpiritualGrowthContent } from "../../components/Step4SpiritualGrowthContent";
import { Step4ReadingGodsWordContent } from "../../components/Step4ReadingGodsWordContent";
import { Step5OverwhelmingContent } from "../../components/Step5OverwhelmingContent";
import { Step5GrievingContent } from "../../components/Step5GrievingContent";
import { Step5GodFeelsSilentContent } from "../../components/Step5GodFeelsSilentContent";
import { Step5WhenYouHaveFailedContent } from "../../components/Step5WhenYouHaveFailedContent";
import { Step5AfraidOfFutureContent } from "../../components/Step5AfraidOfFutureContent";
import { step5AudioTimestamps } from "../../timestamps/step5";
import { step3AudioTimestamps } from "../../timestamps/step3";
import { step4AudioTimestamps } from "../../timestamps/step4";
import { salvationJourneyIntro } from "../../content/salvationJourney";
import { salvationReflectionIntro } from "../../content/salvationReflection";
import { understandingSalvationIntro } from "../../content/understandingSalvation";
import { salvationScriptureIntro } from "../../content/salvationScripture";
import { bibleStudySeries, getJourneyLesson, getJourneyStep, journeySteps } from "../../data";
import { hopeSeriesIntro, hopeSeriesOverviewAudio, hopeStudyManifests } from "../../content/hopeSeriesPoc";
import { getJourneyItemProgress, startJourneyItem } from "../../progress/operations";
import fixes from "../../journey-fixes.module.css";

const bibleStudySectionIds = [1, 8, 15, 23, 31, 39, 48, 57];

function resolveLesson(stepSlug: string, lessonSlug: string) {
  const match = /^step-(\d+)$/.exec(stepSlug);
  const stepNumber = match ? Number(match[1]) : Number.NaN;
  const step = getJourneyStep(stepNumber);
  const lesson = getJourneyLesson(stepNumber, lessonSlug);
  return { stepNumber, step, lesson };
}

export function generateStaticParams() {
  return journeySteps.flatMap((step) =>
    step.lessons
      .filter((lesson) => lesson.href.startsWith(`/journey/step-${step.number}/`))
      .map((lesson) => ({
        step: `step-${step.number}`,
        lesson: lesson.href.split("/").filter(Boolean).at(-1)!,
      })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ step: string; lesson: string }> }): Promise<Metadata> {
  const { step: stepSlug, lesson: lessonSlug } = await params;
  const { step, lesson } = resolveLesson(stepSlug, lessonSlug);

  if (!step || !lesson) return { title: "Journey to Hope | Faith Changes Everything" };

  return {
    title: `${lesson.title} | Step ${step.number} | Journey to Hope`,
    description: `${lesson.title}, part of Step ${step.number}: ${step.title} in Faith Changes Everything's Journey to Hope.`,
  };
}

export default async function JourneyLessonPage({ params }: { params: Promise<{ step: string; lesson: string }> }) {
  const { step: stepSlug, lesson: lessonSlug } = await params;
  const { stepNumber, step, lesson } = resolveLesson(stepSlug, lessonSlug);

  if (!step || !lesson) notFound();

  // Step 4 Pastor welcome is already presented in full on the Step overview.
  // Avoid the obsolete standalone Pastor Letter placeholder for this route.
  if (stepNumber === 4 && lesson.id === "4.a") {
    permanentRedirect("/journey/step-4");
  }

  // Sequence 9 first-render synchronization:
  // if this route represents an active completion-tracked item for the current
  // saved Journey, record the start before any sidebar/progress UI renders.
  // Supporting content, Pastor Letters, series parents, and anonymous visitors
  // return null here and are left untouched.
  const trackedProgress = await getJourneyItemProgress(lesson.id);
  if (trackedProgress) {
    await startJourneyItem(lesson.id);
  }

  if (lesson.id === "1.c") {
    const sections = hopeStudyManifests.map((study) => ({
      id: study.sectionId,
      title: study.title,
      href: study.href,
    }));

    return (
      <SeriesOverview
        stepNumber={1}
        parentId="1.c"
        title="What Does the Bible Say About Hope"
        intro=""
        introParagraphs={hopeSeriesIntro}
        audio={{
          src: hopeSeriesOverviewAudio.src,
          title: "What Does the Bible Say About Hope",
          playerId: "1c-overview",
          resumeKey: "1.c.overview",
          startAtSeconds: hopeSeriesOverviewAudio.startAtSeconds,
        }}
        sections={sections}
        lessons={step.lessons}
      />
    );
  }

  if (lesson.id === "4.d") {
    const sections = bibleStudySeries.map((title, index) => ({
      id: `4.d.${bibleStudySectionIds[index]}`,
      title,
      href: `/journey/step-4/how-to-study-the-bible/study-${index + 1}`,
    }));

    return (
      <SeriesOverview
        stepNumber={4}
        parentId="4.d"
        title="How to Study the Bible"
        intro=""
        introParagraphs={[
          "Prefer a Printable Version?",
          "We have created a free downloadable PDF of this Bible study for those who would like a convenient guide to print, save, or refer back to throughout their personal study time.",
          "Please note that the downloadable guide is an abridged version of this course. While it covers the essential principles of Bible study, the lessons below provide a much richer learning experience with additional Scripture, expanded teaching, reflection questions, practical application, and prayer. If you're looking for the deepest experience, we encourage you to continue through the interactive lessons below. If you'd like a handy reference to keep with your Bible or use during your daily devotions, the PDF is a wonderful companion resource.",
        ]}
        resourceLink={{
          href: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-study-bible/doc-2026-00017-How%20to%20Study%20the%20Bible.pdf",
          label: 'Download the Abridged "How to Study the Bible" Guide (PDF)',
        }}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-4/4d-audio-2026-00023.mp3",
          title: "How to Study the Bible — Introduction",
          playerId: "4d-overview",
          resumeKey: "4.d.overview",
          startAtSeconds: step4AudioTimestamps["audio-2026-00023"]["4.d"].seconds,
        }}
        sections={sections}
        lessons={step.lessons}
      />
    );
  }

  if (lesson.kind === "pastor-letter") {
    return (
      <PastorLetter stepNumber={stepNumber} lessonId={lesson.id} title={lesson.title} lessons={step.lessons}>
        <p>The approved Pastor Letter manuscript for this Step will be integrated here from the authoritative Doctrine during content implementation.</p>
      </PastorLetter>
    );
  }

  if (lesson.id === "1.b") {
    return (
      <IndividualLesson
        stepNumber={1}
        lessonId="1.b"
        title="Understanding Hope"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1b-1c-audio-2026-00001-bible-say-hope.mp3",
          title: "Understanding Hope",
          playerId: "1b-understanding-hope",
          resumeKey: "1.b",
          contentKey: "1.b",
          path: "/journey/step-1/understanding-hope",
          startAtSeconds: 0,
          endAtSeconds: 184.08,
        }}
      >
        <UnderstandingHopeContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "1.d") {
    return (
      <IndividualLesson
        stepNumber={1}
        lessonId="1.d"
        title="Time to Reflect"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1d-1d12-audio-2026-00009-time-2-reflect.mp3",
          title: "Time to Reflect",
          playerId: "1d-time-to-reflect",
          resumeKey: "1.d",
          contentKey: "1.d",
          path: "/journey/step-1/time-to-reflect",
          startAtSeconds: 0,
        }}
      >
        <TimeToReflectContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "1.e") {
    return (
      <IndividualLesson
        stepNumber={1}
        lessonId="1.e"
        title="Helpful Resources"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1e-1e7-audio-2026-00010-resources.mp3",
          title: "Helpful Resources",
          playerId: "1e-helpful-resources",
          resumeKey: "1.e",
          contentKey: "1.e",
          path: "/journey/step-1/helpful-resources",
          startAtSeconds: 0,
        }}
      >
        <HelpfulResourcesContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "1.f") {
    return (
      <IndividualLesson
        stepNumber={1}
        lessonId="1.f"
        title="A Prayer for Today"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1f-audio-2026-00011-prayer.mp3",
          title: "A Prayer for Today",
          playerId: "1f-prayer-for-today",
          resumeKey: "1.f",
          contentKey: "1.f",
          path: "/journey/step-1/a-prayer-for-today",
          startAtSeconds: 0,
        }}
      >
        <PrayerForTodayContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "1.g") {
    return (
      <IndividualLesson
        stepNumber={1}
        lessonId="1.g"
        title="Continue Your Journey"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-1/1g-audio-2026-00012-continue-journey.mp3",
          title: "Continue Your Journey",
          playerId: "1g-continue-your-journey",
          resumeKey: "1.g",
          contentKey: "1.g",
          path: "/journey/step-1/continue-your-journey",
          startAtSeconds: 0,
        }}
      >
        <ContinueYourJourneyContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.b") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.b"
        title="Understanding Salvation"
        lessons={step.lessons}
        intro={understandingSalvationIntro}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2b-2b9-audio-2026-00013.mp3",
          title: "Understanding Salvation",
          playerId: "2b-understanding-salvation",
          resumeKey: "2.b",
          contentKey: "2.b",
          path: "/journey/step-2/understanding-salvation",
          startAtSeconds: 0,
        }}
      >
        <UnderstandingSalvationContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.c") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.c"
        title="What Does the Bible Say About Salvation"
        lessons={step.lessons}
        intro={salvationScriptureIntro}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2c-2c10-audio-2026-00014.mp3",
          title: "What Does the Bible Say About Salvation",
          playerId: "2c-salvation-scripture",
          resumeKey: "2.c",
          contentKey: "2.c",
          path: "/journey/step-2/what-does-the-bible-say-about-salvation",
          startAtSeconds: 0,
        }}
      >
        <SalvationScriptureContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.d") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.d"
        title="Time to Reflect"
        lessons={step.lessons}
        intro={salvationReflectionIntro}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2d-2d3-audio-2026-00015.mp3",
          title: "Time to Reflect",
          playerId: "2d-time-to-reflect",
          resumeKey: "2.d",
          contentKey: "2.d",
          path: "/journey/step-2/time-to-reflect",
          startAtSeconds: 0,
        }}
      >
        <SalvationReflectionContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.e") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.e"
        title="Continue Your Salvation Journey"
        lessons={step.lessons}
        intro={salvationJourneyIntro}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2e-2e6-audio-2026-00016.mp3",
          title: "Continue Your Salvation Journey",
          playerId: "2e-salvation-journey",
          resumeKey: "2.e",
          contentKey: "2.e",
          path: "/journey/step-2/continue-your-salvation-journey",
          startAtSeconds: 0,
        }}
      >
        <SalvationJourneyContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.f") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.f"
        title="Bible Study Online Resources"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2f-audio-2026-00017-resources.mp3",
          title: "Bible Study Online Resources",
          playerId: "2f-online-resources",
          resumeKey: "2.f",
          contentKey: "2.f",
          path: "/journey/step-2/bible-study-online-resources",
          startAtSeconds: 0,
        }}
      >
        <BibleStudyOnlineResourcesContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.g") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.g"
        title="Final Encouragement"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2g-audio-2026-00018-final-encouragement.mp3",
          title: "Final Encouragement",
          playerId: "2g-final-encouragement",
          resumeKey: "2.g",
          contentKey: "2.g",
          path: "/journey/step-2/final-encouragement",
          startAtSeconds: 0,
        }}
      >
        <SalvationFinalEncouragementContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "2.h") {
    return (
      <IndividualLesson
        stepNumber={2}
        lessonId="2.h"
        title="Continue Your Journey"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-2/2h-audio-2026-00019-continue-journey.mp3",
          title: "Continue Your Journey",
          playerId: "2h-continue-journey",
          resumeKey: "2.h",
          contentKey: "2.h",
          path: "/journey/step-2/continue-your-journey",
          startAtSeconds: 0,
        }}
      >
        <SalvationContinueJourneyContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "3.b") {
    return (
      <IndividualLesson
        stepNumber={3}
        lessonId="3.b"
        title="Knowing the Heart of God"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-3/3b-3b7-audio-2026-00020.mp3",
          title: "Knowing the Heart of God",
          playerId: "3b-knowing-heart-of-god",
          resumeKey: "3.b",
          contentKey: "3.b",
          path: "/journey/step-3/knowing-the-heart-of-god",
          startAtSeconds: step3AudioTimestamps["audio-2026-00020"]["3.b"].seconds,
        }}
      >
        <Step3HeartOfGodContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "4.b") {
    return (
      <IndividualLesson
        stepNumber={4}
        lessonId="4.b"
        title="Understanding Spiritual Growth"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-4/4b-audio-2026-00021.mp3",
          title: "Understanding Spiritual Growth",
          playerId: "4b-spiritual-growth",
          resumeKey: "4.b",
          contentKey: "4.b",
          path: "/journey/step-4/understanding-spiritual-growth",
          startAtSeconds: step4AudioTimestamps["audio-2026-00021"]["4.b"].seconds,
        }}
      >
        <Step4SpiritualGrowthContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "4.c") {
    return (
      <IndividualLesson
        stepNumber={4}
        lessonId="4.c"
        title="The Importance of Reading God’s Word"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-4/4c-4c2-audio-2026-00022.mp3",
          title: "The Importance of Reading God’s Word",
          playerId: "4c-reading-gods-word",
          resumeKey: "4.c",
          contentKey: "4.c",
          path: "/journey/step-4/the-importance-of-reading-gods-word",
          startAtSeconds: step4AudioTimestamps["audio-2026-00022"]["4.c"].seconds,
        }}
      >
        <Step4ReadingGodsWordContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "5.b") {
    return (
      <IndividualLesson
        stepNumber={5}
        lessonId="5.b"
        title="When Life Feels Overwhelming"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-5/5b-5b10-audio-2026-00032.mp3",
          title: "When Life Feels Overwhelming",
          playerId: "5b-when-life-feels-overwhelming",
          resumeKey: "5.b",
          contentKey: "5.b",
          path: "/journey/step-5/when-life-feels-overwhelming",
          startAtSeconds: step5AudioTimestamps["audio-2026-00032"]["5.b"].seconds,
        }}
      >
        <Step5OverwhelmingContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "5.c") {
    return (
      <IndividualLesson
        stepNumber={5}
        lessonId="5.c"
        title="When You’re Grieving"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-5/5c-5c10-audio-2026-00033.mp3",
          title: "When You’re Grieving",
          playerId: "5c-when-youre-grieving",
          resumeKey: "5.c",
          contentKey: "5.c",
          path: "/journey/step-5/when-youre-grieving",
          startAtSeconds: step5AudioTimestamps["audio-2026-00033"]["5.c"].seconds,
        }}
      >
        <Step5GrievingContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "5.d") {
    return (
      <IndividualLesson
        stepNumber={5}
        lessonId="5.d"
        title="When God Feels Silent"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-5/5d-5d10-audio-2026-00034.mp3",
          title: "When God Feels Silent",
          playerId: "5d-when-god-feels-silent",
          resumeKey: "5.d",
          contentKey: "5.d",
          path: "/journey/step-5/when-god-feels-silent",
          startAtSeconds: step5AudioTimestamps["audio-2026-00034"]["5.d"].seconds,
        }}
      >
        <Step5GodFeelsSilentContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "5.e") {
    return (
      <IndividualLesson
        stepNumber={5}
        lessonId="5.e"
        title="When You Think You Have Failed"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-5/5e-5e9-audio-2026-00035.mp3",
          title: "When You Think You Have Failed",
          playerId: "5e-when-you-think-you-have-failed",
          resumeKey: "5.e",
          contentKey: "5.e",
          path: "/journey/step-5/when-you-think-you-have-failed",
          startAtSeconds: step5AudioTimestamps["audio-2026-00035"]["5.e"].seconds,
        }}
      >
        <Step5WhenYouHaveFailedContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "5.f") {
    return (
      <IndividualLesson
        stepNumber={5}
        lessonId="5.f"
        title="When You’re Afraid of the Future"
        lessons={step.lessons}
        audio={{
          src: "https://resources.faithchangeseverything.org/audio/journey-to-hope/step-5/5f-5f9-audio-2026-00036.mp3",
          title: "When You’re Afraid of the Future",
          playerId: "5f-when-youre-afraid-of-the-future",
          resumeKey: "5.f",
          contentKey: "5.f",
          path: "/journey/step-5/when-youre-afraid-of-the-future",
          startAtSeconds: step5AudioTimestamps["audio-2026-00036"]["5.f"].seconds,
        }}
      >
        <Step5AfraidOfFutureContent />
      </IndividualLesson>
    );
  }

  if (lesson.id === "6.b") {
    return (
      <IndividualLesson
        stepNumber={6}
        lessonId="6.b"
        title="Read God’s Word"
        lessons={step.lessons}
        intro="Continue growing in God’s Word with the Faith Changes Everything Bible Studies."
      >
        <LessonBlock title="Faith Changes Everything Bible Studies" icon="▣" tone="highlight">
          <p>Explore beginner, intermediate, and advanced Bible studies designed to help you understand Scripture and continue growing in your relationship with Christ.</p>
          <div className={fixes.lessonResourceLinks}>
            <Link href="/bible-studies">Begin Reading</Link>
          </div>
        </LessonBlock>
      </IndividualLesson>
    );
  }

  if (lesson.id === "6.d") {
    return (
      <IndividualLesson
        stepNumber={6}
        lessonId="6.d"
        title="Reflect on Your Journey"
        lessons={step.lessons}
        intro="Take time to reflect on what God has been teaching you and record the Scriptures, prayers, and lessons you want to remember."
      >
        <LessonBlock title="Faith Changes Everything Bible Journal" icon="▣" tone="highlight">
          <p>
            Use the shared Faith Changes Everything Bible Journal as a simple
            place to record what you are learning, reflect on Scripture, write
            your prayers, and remember how God has been faithful along the way.
          </p>
          <div className={fixes.lessonResourceLinks}>
            <Link href="/journal">Open the FCE Bible Journal</Link>
          </div>
        </LessonBlock>
      </IndividualLesson>
    );
  }

  if (lesson.id === "6.e") {
    return (
      <IndividualLesson
        stepNumber={6}
        lessonId="6.e"
        title="Find a Church Home"
        lessons={step.lessons}
        intro="Walking with Christ includes growing alongside other believers. Faith Changes Everything provides biblical guidance and a practical church search to help you begin looking for a healthy local church."
      >
        <LessonBlock title="Find a Healthy Church Home" icon="◇" tone="highlight">
          <p>Use the shared FCE Find a Church Home destination to learn what to look for in a healthy, Bible-believing church and search for churches near a ZIP code, city, or address.</p>
          <div className={fixes.lessonResourceLinks}>
            <Link href="/find-a-church">Find a Church Home</Link>
          </div>
        </LessonBlock>
      </IndividualLesson>
    );
  }

  if (lesson.id === "6.f") {
    return (
      <IndividualLesson
        stepNumber={6}
        lessonId="6.f"
        title="We Would Love to Pray for You"
        lessons={step.lessons}
        intro="This Journey lesson keeps prayer support inside Step 6 while giving visitors a clear path to the existing Prayer Request page. Final wording remains governed by the authoritative Doctrine manuscript."
      >
        <LessonBlock title="Prayer Support" icon="♡" tone="highlight">
          <p>The approved Step 6.f prayer invitation will be integrated here from the authoritative Doctrine during content implementation.</p>
          <div className={fixes.lessonResourceLinks}>
            <Link href="/prayer">Submit a Prayer Request</Link>
          </div>
        </LessonBlock>
      </IndividualLesson>
    );
  }

  return (
    <IndividualLesson
      stepNumber={stepNumber}
      lessonId={lesson.id}
      title={lesson.title}
      lessons={step.lessons}
      intro="This page now uses the approved continuous-flow Individual Lesson architecture. Final wording and section content remain governed by the authoritative Doctrine manuscript."
    >
      <LessonBlock title="Scripture" icon="▣" tone="scripture">
        <p>The approved KJV Scripture for this lesson will appear here during content integration.</p>
      </LessonBlock>
      <LessonBlock title="The Heart of the Matter" icon="▤">
        <p>The approved teaching from the Doctrine manuscript will appear here in a readable, continuous section.</p>
      </LessonBlock>
      <LessonBlock title="Remember This" icon="✦" tone="highlight">
        <p>The manuscript’s approved key truth or takeaway will be presented here when that lesson calls for one.</p>
      </LessonBlock>
      <LessonBlock title="Bible Study Tip" icon="▣">
        <p>This block reserves the approved concept position for a practical Bible-study note when the manuscript includes one.</p>
      </LessonBlock>
      <LessonBlock title="Something to Think About" icon="?">
        <ul>
          <li>Approved reflection questions will be placed here when they are part of the lesson.</li>
          <li>The final number and wording of questions will come from the authoritative content.</li>
        </ul>
      </LessonBlock>
      <LessonBlock title="Today’s Challenge" icon="→">
        <p>This area supports the lesson’s approved practical application without forcing an application block where the manuscript does not call for one.</p>
      </LessonBlock>
      <LessonBlock title="A Prayer for Today" icon="◇">
        <p>The approved lesson prayer will appear here during content integration.</p>
      </LessonBlock>
    </IndividualLesson>
  );
}
