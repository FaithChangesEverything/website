import Link from "next/link";
import {notFound} from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanJourney from "@/components/reading-plans/PlanJourney";
import {findReadingPlan} from "@/lib/reading-plans";
import styles from "../reading-plans.module.css";
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props){const {slug}=await params;const p=findReadingPlan(slug);return {title:p?`${p.title} | FCE Bible Reading Plans`:"Reading Plan Not Found"};}
export default async function PlanPage({params}:Props){
 const {slug}=await params;const plan=findReadingPlan(slug);
 if(!plan)notFound();
 return <><Header/><main className={styles.page}>
   <section className={styles.hero}><div className={styles.wrap}><Link className={styles.breadcrumb} href="/reading-plans">← Back to Bible Reading Plans</Link><p className={styles.heroEyebrow}>FCE BIBLE READING PLAN · {plan.days} DAYS</p><h1>{plan.title}</h1><p>{plan.subtitle}</p><span className={styles.heroNote}>King James Version (KJV) · Self-paced</span></div></section>
   <div className={styles.wrap}>
     <section className={styles.section}><p className={styles.eyebrow}>ABOUT THIS PLAN</p><h2>About This Reading Plan</h2>{plan.purpose.length?plan.purpose.map((paragraph,i)=><p key={i}>{paragraph}</p>):<p>Each day includes an assigned Scripture passage, a Key Verse, and guidance for reflection. Read at your own pace.</p>}</section>
     <PlanJourney slug={plan.slug} lessons={plan.lessons.map(d=>({day:d.day,title:d.title,primaryReading:d.primaryReading}))}/>
     {plan.closing?<section className={styles.section}><h2>{plan.closing.heading}</h2>{plan.closing.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}</section>:null}
     <section className={styles.featured}><h2>Continue Growing in Faith</h2><p>Explore other Scripture-based resources and our Journey to Hope.</p><Link className={styles.secondaryButton} href="/reading-plans">All Reading Plans →</Link></section>
   </div></main><Footer/></>;
}
