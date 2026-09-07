import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndividualLesson, PastorLetter, SeriesOverview } from "../../components/PageStructures";
import { bibleStudySeries, getJourneyLesson, getJourneyStep, journeySteps } from "../../data";

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

  return (
    <IndividualLesson
      stepNumber={stepNumber}
      lessonId={lesson.id}
      title={lesson.title}
      lessons={step.lessons}
      intro="The approved Doctrine content for this lesson will be integrated into this reusable lesson structure during content implementation."
    >
      <p>This page intentionally reserves the complete continuous-flow lesson area without inventing or replacing authoritative ministry content.</p>
    </IndividualLesson>
  );
}
