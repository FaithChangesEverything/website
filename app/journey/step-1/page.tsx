import { StepOverview } from "../components/PageStructures";
import { journeySteps } from "../data";

export default function StepOnePage() {
  return <StepOverview stepNumber={1} lessons={journeySteps[0].lessons} />;
}
