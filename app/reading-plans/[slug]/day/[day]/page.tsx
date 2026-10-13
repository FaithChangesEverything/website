import Link from "next/link";
import {notFound} from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailyCompletion from "@/components/reading-plans/DailyCompletion";
import {findReadingPlan,findReadingPlanDay,primaryReadingBibleLinks,keyVerseBibleHref} from "@/lib/reading-plans";
import styles from "../../../reading-plans.module.css";
type Props={params:Promise<{slug:string;day:string}>};
export async function generateMetadata({params}:Props){const {slug,day}=await params;const d=findReadingPlanDay(slug,Number(day));return {title:d?`Day ${day}: ${d.title} | FCE Bible Reading Plans`:"Reading Not Found"};}
export default async function DailyPage({params}:Props){
  const {slug,day:raw}=await params;
  const plan=findReadingPlan(slug);
  const day=/^[1-9]\d*$/.test(raw)?Number(raw):NaN;
  const lesson=plan?findReadingPlanDay(slug,day):undefined;
  if(!plan||!lesson)notFound();
  const passages=primaryReadingBibleLinks(lesson.primaryReading);
  const keyVerseHref=keyVerseBibleHref(lesson.keyVerse.reference);
  const returnTo=`/reading-plans/${slug}/day/${lesson.day}`;
  const withReturn=(href:string)=>{const [pathname,fragment]=href.split("#");return `${pathname}?returnTo=${encodeURIComponent(returnTo)}${fragment?"#"+fragment:""}`;};
  const sections=[
    ["Devotional Thought",lesson.devotionalThought],
    ["Reading Focus",lesson.readingFocus],
    ["Reflection Question",lesson.reflectionQuestion],
    ["Prayer Prompt",lesson.prayerPrompt],
    ["Practical Step",lesson.practicalStep],
  ].filter((entry):entry is [string,string]=>Boolean(entry[1]));
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.wrap}><Link className={styles.breadcrumb} href={`/reading-plans/${slug}`}>← Back to {plan.title}</Link><p className={styles.heroEyebrow}>{plan.title.toUpperCase()} · DAY {lesson.day} OF {plan.days}</p><h1>{lesson.title}</h1><p>Take time to read, reflect, and grow in your understanding of Jesus Christ.</p></div></section>
    <div className={styles.wrap}>
      <div className={styles.dailyColumns}>
        <article className={styles.dailyMain}>
          <section className={styles.contentCard}><p className={styles.eyebrow}>TODAY&apos;S SCRIPTURE READING</p><h2>{lesson.primaryReading}</h2><p>Read the full passage in the FCE Bible Reader. Pay attention to the setting, the people, and what the passage reveals about God.</p>
            {passages.length>0?passages.map((passage,i)=><p key={i}><Link className={styles.primaryButton} href={withReturn(passage.href)}>{passages.length===1?"Open in FCE Bible Reader":`Read ${passage.label} in FCE Bible Reader`} →</Link></p>):<p role="status">Bible Reader link is not available for this reference.</p>}
            <small>King James Version (KJV). Open the FCE Bible Reader to read the assigned Scripture, then return to this lesson to mark your progress.</small>
          </section>
          <section className={styles.contentCard}><p className={styles.eyebrow}>KEY VERSE</p>
            <blockquote className={styles.keyVerse}><span>“{lesson.keyVerse.text}”</span>{" "}<strong>{lesson.keyVerse.reference} (KJV){lesson.keyVerse.isExcerpt?" — excerpt":""}</strong></blockquote>
            {keyVerseHref?<Link className={styles.cardLink} href={withReturn(keyVerseHref)}>Read Key Verse in FCE Bible Reader →</Link>:null}
          </section>
          {sections.map(([label,copy])=><section className={styles.contentCard} key={label}><h2>{label}</h2><p>{copy}</p></section>)}
          <nav className={styles.dailyNav} aria-label="Move between daily readings">
            {lesson.day>1?<Link className={styles.secondaryButton} href={`/reading-plans/${slug}/day/${lesson.day-1}`}>← Previous Day</Link>:<span/>}
            {lesson.day<plan.days?<Link className={styles.primaryButton} href={`/reading-plans/${slug}/day/${lesson.day+1}`}>Next Day →</Link>:<Link className={styles.primaryButton} href={`/reading-plans/${slug}`}>Return to Plan →</Link>}
          </nav>
        </article>
        <DailyCompletion slug={plan.slug} day={lesson.day} total={plan.days} nextDay={lesson.day<plan.days?lesson.day+1:null}/>
      </div>
    </div></main><Footer/></>;
}
