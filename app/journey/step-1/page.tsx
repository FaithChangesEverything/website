import { StepOverview } from "../components/PageStructures";

const lessons = [
  { id: "1.a", title: "Before We Begin", summary: "A message from Pastor Richard before you begin this Step.", href: "/journey/step-1/before-we-begin" },
  { id: "1.b", title: "Hope for Today", summary: "Begin with Scripture-centered encouragement about lasting hope.", href: "/journey/step-1/hope-for-today" },
  { id: "1.c", title: "A Biblical Study of Hope", summary: "Seven connected studies exploring biblical hope.", href: "/journey/step-1/biblical-study-of-hope" },
];

export default function StepOnePage(){ return <StepOverview stepNumber={1} lessons={lessons} />; }
