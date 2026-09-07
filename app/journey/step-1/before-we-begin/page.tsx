import { PastorLetter } from "../../components/PageStructures";
import { journeySteps } from "../../data";

export default function BeforeWeBeginPage(){
  return <PastorLetter stepNumber={1} lessonId="1.a" title="Before We Begin" lessons={journeySteps[0].lessons}><p>The complete approved Step 1 Pastor Letter from Doctrine Rev. 1.5 will appear here during content integration. This page establishes the reusable presentation: full written letter, flexible page height, and the appropriate Pastor Letter recording together on the same page.</p><p>Nothing in this structure replaces or shortens the authoritative written letter.</p></PastorLetter>;
}
