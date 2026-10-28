import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resources, type Resource } from "./resourceData";
import styles from "./resources.module.css";

export const metadata = {
 title: "Resources for Life's Journey | Faith Changes Everything",
 description: "Explore Faith Changes Everything Bible guides, Christian counseling, mental health, grief, family, addiction recovery and immediate help resources."
};

const categories = [
 {id:"fce",label:"FCE Resources", icon:"▤",description:"Practical guides, Scripture, and materials created by Faith Changes Everything."},
 {id:"counseling",label:"Christian Counseling",icon:"♡",description:"Christian counseling education and guidance."},
 {id:"mental",label:"Mental Health",icon:"✧",description:"Mental health education, support, and treatment resources."},
 {id:"grief",label:"Grief & Recovery",icon:"❧",description:"Compassionate support for loss and grief."},
 {id:"family",label:"Marriage & Family",icon:"♧",description:"Encouragement and support for relationships and family life."},
 {id:"addiction",label:"Addiction Recovery",icon:"◌",description:"Programs and ministries for recovery."},
 {id:"help",label:"Immediate Help",icon:"☎",description:"Crisis support and resources when help is needed now."}
] as const;

function ResourceAction({r}: {r:Resource}) {
 const label = r.type === "pdf" ? "View / Download PDF" : r.type === "internal" ? (r.category === "fce" ? "Read Online" : "Get Help Now") : "Visit Website";
 if(r.type === "internal") return <Link className={styles.action} href={r.href}>{label} <span aria-hidden="true">→</span></Link>;
 return <a className={styles.action} href={r.href} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a>;
}
function OrganizationList({id}: {id:string}) {
 return <div className={styles.organizationList}>{resources.filter(r=>r.category===id).map(r=>
  <article className={styles.organization} key={r.id}>
   <div><h3>{r.title}</h3><p>{r.description}</p></div><ResourceAction r={r}/>
  </article>)}</div>;
}
export default function ResourcesPage() {
 const guides=resources.filter(r=>r.category==="fce" && !r.title.includes("Eschatology"));
 const research=resources.find(r=>r.title.includes("Eschatology"));
 return <><Header/><main className={styles.page}>
 <section className={styles.hero}><div className={styles.heroInner}>
 <p className={styles.eyebrow}>Faith · Guidance · Hope</p>
 <h1>Resources for<br/>Life’s Journey</h1>
 <p>Explore biblical guidance, practical tools for spiritual growth, and trusted support for life’s challenges.</p>
 </div></section>
 <div className={styles.container}>
 <section className={styles.navigation} aria-labelledby="directory-heading"><h2 id="directory-heading">Find What You Need</h2><p>Select a category to explore resources and support.</p>
 <nav className={styles.quickLinks} aria-label="Resource categories">{categories.map(c=><a key={c.id} className={c.id==="help"?styles.urgentLink:styles.quickLink} href={`#${c.id}`}><span aria-hidden="true">{c.icon}</span>{c.label}</a>)}</nav>
 </section>
 <section id="fce" className={styles.section} aria-labelledby="fce-heading"><div className={styles.sectionHeading}><span aria-hidden="true">▤</span><div><h2 id="fce-heading">FCE Resources</h2><p>Guides and materials created by Faith Changes Everything to encourage deeper understanding of Scripture.</p></div></div>
 <div className={styles.guideGrid}>{guides.map(r=><article key={r.id} className={styles.guide}><h3>{r.title}</h3><p>{r.description}</p><ResourceAction r={r}/></article>)}</div>
 {research && <article className={styles.paper}><p className={styles.eyebrow}>Theological Papers & Research</p><h3>{research.title}</h3><p>{research.description}</p><ResourceAction r={research}/></article>}
 </section>
 <div className={styles.supportGrid}>{categories.filter(c=>c.id!=="fce"&&c.id!=="help").map(c=><section id={c.id} className={styles.supportSection} key={c.id} aria-labelledby={`heading-${c.id}`}><div className={styles.sectionHeading}><span aria-hidden="true">{c.icon}</span><div><h2 id={`heading-${c.id}`}>{c.label}</h2><p>{c.description}</p></div></div><OrganizationList id={c.id}/>{c.id==="counseling"&&<p className={styles.note}>Christian counseling and licensed clinical mental health care may serve different needs. Confirm each provider’s credentials and services before selecting care.</p>}</section>)}
 <section id="help" className={`${styles.supportSection} ${styles.helpSection}`} aria-labelledby="help-heading"><div className={styles.sectionHeading}><span aria-hidden="true">☎</span><div><h2 id="help-heading">Immediate Help & Crisis Resources</h2><p>Support is available when you need help right now.</p></div></div>
 <div className={styles.helpPanel}><p className={styles.emergency}>If there is immediate danger, call <a href="tel:911">911</a> or go to the nearest emergency department.</p>
 <div className={styles.hotline}><strong>988</strong><span>Suicide & Crisis Lifeline</span><p>Call or text 988 for free, confidential crisis support.</p><a href="tel:988">Call 988</a><a href="sms:988">Text 988</a></div>
 <div className={styles.hotline}><strong>1-800-662-HELP (4357)</strong><span>SAMHSA National Helpline</span><p>Information and treatment referrals for mental health and substance use.</p><a href="tel:18006624357">Call Helpline</a></div>
 <Link className={styles.helpButton} href="/help-support">Visit FCE Help & Support <span aria-hidden="true">→</span></Link>
 <div className={styles.moreHelp}>{resources.filter(r=>r.category==="help" && r.type==="hotline").map(r=><a key={r.id} href={r.href} target="_blank" rel="noopener noreferrer">{r.title} website ↗</a>)}</div>
 </div></section></div>
 </div>
 <section className={styles.closing}><h2>You Are Not Alone</h2><p>Whatever you are facing, there is hope, help, and a path forward.</p></section>
 </main><Footer/></>;
}
