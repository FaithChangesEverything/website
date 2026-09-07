import { notFound } from "next/navigation";
import { StepOverview } from "../components/PageStructures";
import { journeySteps } from "../data";

export function generateStaticParams() {
  return journeySteps.map((step) => ({ step: `step-${step.number}` }));
}

export default async function JourneyStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step: stepSlug } = await params;
  const match = /^step-(\d+)$/.exec(stepSlug);
  const stepNumber = match ? Number(match[1]) : Number.NaN;
  const step = journeySteps.find((item) => item.number === stepNumber);

  if (!step) notFound();

  return <StepOverview stepNumber={step.number} lessons={step.lessons} />;
}
