import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeriesStudy } from "../../../components/PageStructures";
import { bibleStudySeries, getJourneyStep, hopeSeries } from "../../../data";

const hopeSectionIds = [1, 8, 15, 22, 29, 36, 43];
const bibleStudySectionIds = [1, 8, 15, 23, 31, 39, 48, 57];

function buildSectionNav(baseHref: string, titles: string[], index: number) {
  const previous = index > 0 ? { href: `${baseHref}/study-${index}`, label: "Previous Study", detail: titles[index - 1] } : undefined;
  const next = index < titles.length - 1 ? { href: `${baseHref}/study-${index + 2}`, label: "Next Study", detail: titles[index + 1] } : undefined;
  return { previous, next };
}

function resolveStudy(stepSlug: string, lessonSlug: string, sectionSlug: string) {
  const stepMatch = /^step-(\d+)$/.exec(stepSlug);
  const sectionMatch = /^study-(\d+)$/.exec(sectionSlug);
  const stepNumber = stepMatch ? Number(stepMatch[1]) : Number.NaN;
  const studyNumber = sectionMatch ? Number(sectionMatch[1]) : Number.NaN;
  const step = getJourneyStep(stepNumber);

  if (!step || !Number.isInteger(studyNumber) || studyNumber < 1) return null;

  if (stepNumber === 1 && lessonSlug === "biblical-study-of-hope" && studyNumber <= hopeSeries.length) {
    return {
      step,
      stepNumber,
      studyNumber,
      title: hopeSeries[studyNumber - 1],
      parentTitle: "What Does the Bible Say About Hope",
    };
  }

  if (stepNumber === 4 && lessonSlug === "how-to-study-the-bible" && studyNumber <= bibleStudySeries.length) {
    return {
      step,
      stepNumber,
      studyNumber,
      title: bibleStudySeries[studyNumber - 1],
      parentTitle: "How to Study the Bible",
    };
  }

  return null;
}

export function generateStaticParams() {
  const hopeStudies = hopeSeries.map((_, index) => ({
    step: "step-1",
    lesson: "biblical-study-of-hope",
    section: `study-${index + 1}`,
  }));

  const bibleStudies = bibleStudySeries.map((_, index) => ({
    step: "step-4",
    lesson: "how-to-study-the-bible",
    section: `study-${index + 1}`,
  }));

  return [...hopeStudies, ...bibleStudies];
}

export async function generateMetadata({ params }: { params: Promise<{ step: string; lesson: string; section: string }> }): Promise<Metadata> {
  const { step, lesson, section } = await params;
  const study = resolveStudy(step, lesson, section);

  if (!study) return { title: "Journey to Hope | Faith Changes Everything" };

  return {
    title: `${study.title} | ${study.parentTitle} | Journey to Hope`,
    description: `${study.title}, part of ${study.parentTitle} in Faith Changes Everything's Journey to Hope.`,
  };
}

export default async function JourneySeriesStudyPage({ params }: { params: Promise<{ step: string; lesson: string; section: string }> }) {
  const { step: stepSlug, lesson: lessonSlug, section: sectionSlug } = await params;
  const study = resolveStudy(stepSlug, lessonSlug, sectionSlug);

  if (!study) notFound();

  if (study.stepNumber === 1) {
    const index = study.studyNumber - 1;
    const baseHref = "/journey/step-1/biblical-study-of-hope";
    const nav = buildSectionNav(baseHref, hopeSeries, index);
    return (
      <SeriesStudy
        stepNumber={1}
        parentId="1.c"
        sectionId={`1.c.${hopeSectionIds[index]}`}
        title={hopeSeries[index]}
        parentTitle="What Does the Bible Say About Hope"
        lessons={study.step.lessons}
        previousSection={nav.previous}
        nextSection={nav.next}
      >
        <p>The approved Doctrine content for this seven-part hope study will be integrated here without changing its authoritative order or teaching structure.</p>
      </SeriesStudy>
    );
  }

  const index = study.studyNumber - 1;
  const baseHref = "/journey/step-4/how-to-study-the-bible";
  const nav = buildSectionNav(baseHref, bibleStudySeries, index);
  return (
    <SeriesStudy
      stepNumber={4}
      parentId="4.d"
      sectionId={`4.d.${bibleStudySectionIds[index]}`}
      title={bibleStudySeries[index]}
      parentTitle="How to Study the Bible"
      lessons={study.step.lessons}
      previousSection={nav.previous}
      nextSection={nav.next}
    >
      <p>The approved Doctrine content for this study will be integrated here. The architecture intentionally supports the different internal block patterns used across 4.d.1 through 4.d.65.</p>
    </SeriesStudy>
  );
}
