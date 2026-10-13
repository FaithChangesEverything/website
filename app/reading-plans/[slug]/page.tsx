import Link from "next/link";
import {notFound} from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanJourney from "@/components/reading-plans/PlanJourney";
import {findReadingPlan} from "@/lib/reading-plans";
import styles from "../reading-plans.module.css";
const pilotSlug="30-days-with-jesus";
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props){const {slug}=await params;const p=slug===pilotSlug?findReadingPlan(slug):undefined;return {title:p?`${p.title} | FCE Bible Reading Plans`:"Reading Plan Not Found"};}
export default async function PlanPage({params}:Props){
 const {slug}=await params;const plan=slug===pilotSlug?findReadingPlan(slug):undefined;
 if(!plan)notFound();
 return <><Header/><main className={styles.page}>
   <section className={styles.hero}><div className={styles.wrap}><Link className={styles.breadcrumb} href="/reading-plans">← Back to Bible Reading Plans</Link><p className={styles.heroEyebrow}>FCE BIBLE READING PLAN · {plan.days} DAYS</p><h1>{plan.title}</h1><p>{plan.subtitle}</p><span className={styles.heroNote}>King James Version (KJV) · Self-paced</span></div></section>
   <div className={styles.wrap}>
     <section className={styles.section}><p className={styles.eyebrow}>ABOUT THIS PLAN</p><h2>Walking Through the Life of Jesus</h2><p>Follow the life, teachings, saving death, resurrection, and commission of Jesus Christ through thirty guided readings. Each day includes an assigned Scripture passage, an approved Key Verse, and a Reading Focus. There is no deadline to finish.</p></section>
     <PlanJourney slug={plan.slug} lessons={plan.lessons.map(d=>({day:d.day,title:d.title,primaryReading:d.primaryReading}))}/>
     <section className={styles.featured}><h2>Continue Growing in Faith</h2><p>Explore other Scripture-based resources and our Journey to Hope.</p><Link className={styles.secondaryButton} href="/reading-plans">All Reading Plans →</Link></section>
   </div></main><Footer/></>;
}
