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

export default async function JourneySeriesStudyPage({ params }: { params: Promise<{ step: string; lesson: string; section: string }> }) {
  const { step: stepSlug, lesson: lessonSlug, section: sectionSlug } = await params;
  const stepMatch = /^step-(\d+)$/.exec(stepSlug);
  const sectionMatch = /^study-(\d+)$/.exec(sectionSlug);
  const stepNumber = stepMatch ? Number(stepMatch[1]) : Number.NaN;
  const studyNumber = sectionMatch ? Number(sectionMatch[1]) : Number.NaN;
  const step = getJourneyStep(stepNumber);

  if (!step || !Number.isInteger(studyNumber) || studyNumber < 1) notFound();

  if (stepNumber === 1 && lessonSlug === "biblical-study-of-hope" && studyNumber <= hopeSeries.length) {
    const index = studyNumber - 1;
    const baseHref = "/journey/step-1/biblical-study-of-hope";
    const nav = buildSectionNav(baseHref, hopeSeries, index);
    return <SeriesStudy stepNumber={1} parentId="1.c" sectionId={`1.c.${hopeSectionIds[index]}`} title={hopeSeries[index]} parentTitle="A Biblical Study of Hope" lessons={step.lessons} previousSection={nav.previous} nextSection={nav.next}><p>The approved Doctrine content for this seven-part hope study will be integrated here without changing its authoritative order or teaching structure.</p></SeriesStudy>;
  }

  if (stepNumber === 4 && lessonSlug === "how-to-study-the-bible" && studyNumber <= bibleStudySeries.length) {
    const index = studyNumber - 1;
    const baseHref = "/journey/step-4/how-to-study-the-bible";
    const nav = buildSectionNav(baseHref, bibleStudySeries, index);
    return <SeriesStudy stepNumber={4} parentId="4.d" sectionId={`4.d.${bibleStudySectionIds[index]}`} title={bibleStudySeries[index]} parentTitle="How to Study the Bible" lessons={step.lessons} previousSection={nav.previous} nextSection={nav.next}><p>The approved Doctrine content for this study will be integrated here. The architecture intentionally supports the different internal block patterns used across 4.d.1 through 4.d.65.</p></SeriesStudy>;
  }

  notFound();
}
