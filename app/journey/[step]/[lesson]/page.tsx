import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndividualLesson, LessonBlock, PastorLetter, SeriesOverview } from "../../components/PageStructures";
import { bibleStudySeries, getJourneyLesson, getJourneyStep, hopeSeries, journeySteps } from "../../data";
import fixes from "../../journey-fixes.module.css";

const hopeSectionIds = [1, 8, 15, 22, 29, 36, 43];
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

  if (lesson.id === "1.c") {
    const sections = hopeSeries.map((title, index) => ({
      id: `1.c.${hopeSectionIds[index]}`,
      title,
      href: `/journey/step-1/what-does-the-bible-say-about-hope/study-${index + 1}`,
    }));

    return (
      <SeriesOverview
        stepNumber={1}
        parentId="1.c"
        title="What Does the Bible Say About Hope"
        intro="This lesson is a seven-part Scripture study. Each study is presented as its own continuous teaching page while 1.c remains one parent lesson in your Journey."
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
        intro="This lesson is an eight-part study. Each study is presented as its own continuous teaching page while 4.d remains one parent lesson in your Journey."
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

  if (lesson.id === "3.b") {
    return (
      <IndividualLesson
        stepNumber={3}
        lessonId="3.b"
        title="Knowing the Heart of God"
        lessons={step.lessons}
        intro="The complete Step 3 teaching remains one continuous lesson. The authoritative Doctrine now places reflection, final encouragement, and Continue Your Journey inside 3.b rather than as separate Step-level lessons."
      >
        <LessonBlock title="3.b.1 God Reveals His Own Character" icon="▤">
          <p>The approved Doctrine teaching for God’s revealed character will appear here during content implementation.</p>
        </LessonBlock>
        <LessonBlock title="3.b.2 Jesus Is the Perfect Revelation of God" icon="◇">
          <p>The approved Doctrine teaching about Jesus revealing the Father will appear here during content implementation.</p>
        </LessonBlock>
        <LessonBlock title="3.b.3 Knowing God Personally" icon="✦" tone="highlight">
          <p>The approved Doctrine teaching about knowing God personally will appear here during content implementation.</p>
        </LessonBlock>
        <LessonBlock title="3.b.4 Go Deeper in Your Understanding of God" icon="▣">
          <p>The approved Character of God Bible Study Series invitation and supporting content will appear here during content implementation.</p>
        </LessonBlock>
        <LessonBlock title="3.b.5 Time to Reflect" icon="?">
          <p>The approved reflection questions and Scripture will remain inside this lesson as established by Doctrine Rev. 1.6.</p>
        </LessonBlock>
        <LessonBlock title="3.b.6 Final Encouragement" icon="✦" tone="highlight">
          <p>The approved final encouragement will appear here as part of the same 3.b lesson.</p>
        </LessonBlock>
        <LessonBlock title="3.b.7 Continue Your Journey" icon="→">
          <p>The approved Continue Your Journey content and Step 3 resources will close this lesson during content implementation.</p>
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
      <LessonBlock title="Related Resources" icon="↗">
        <div className={fixes.lessonResourceLinks}>
          <Link href="/sermons">Sermons</Link>
          <Link href="/resources">Bible Study</Link>
          <Link href="/music">Music</Link>
          <Link href="/prayer">Prayer Support</Link>
        </div>
      </LessonBlock>
    </IndividualLesson>
  );
}
