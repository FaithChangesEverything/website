import { SeriesOverview } from "../../components/PageStructures";
import { hopeSeries, journeySteps } from "../../data";

export default function HopeSeriesPage(){
  const sections = hopeSeries.map((title,index)=>({id:`1.c.${index*7+1}`,title,href:`/journey/step-1/biblical-study-of-hope/study-${index+1}`}));
  return <SeriesOverview stepNumber={1} parentId="1.c" title="A Biblical Study of Hope" intro="This lesson is a seven-part Scripture study. Each study is presented as its own continuous teaching page while 1.c remains one parent lesson in your Journey." sections={sections} lessons={journeySteps[0].lessons} />;
}
