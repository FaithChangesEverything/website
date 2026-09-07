import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StepOverview } from "../components/PageStructures";
import { journeySteps } from "../data";

function resolveStep(stepSlug: string) {
  const match = /^step-(\d+)$/.exec(stepSlug);
  const stepNumber = match ? Number(match[1]) : Number.NaN;
  return journeySteps.find((item) => item.number === stepNumber);
}

export function generateStaticParams() {
  return journeySteps.map((step) => ({ step: `step-${step.number}` }));
}

export async function generateMetadata({ params }: { params: Promise<{ step: string }> }): Promise<Metadata> {
  const { step: stepSlug } = await params;
  const step = resolveStep(stepSlug);

  if (!step) return { title: "Journey to Hope | Faith Changes Everything" };

  return {
    title: `Step ${step.number}: ${step.title} | Journey to Hope`,
    description: step.summary,
  };
}

export default async function JourneyStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step: stepSlug } = await params;
  const step = resolveStep(stepSlug);

  if (!step) notFound();

  return <StepOverview stepNumber={step.number} lessons={step.lessons} />;
}
