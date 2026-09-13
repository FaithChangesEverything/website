import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ChurchFinder from "./ChurchFinder";
import styles from "./find-a-church.module.css";

export const metadata: Metadata = {
  title: "Find a Church Home | Faith Changes Everything",
  description: "Biblical guidance for choosing a healthy church and a privacy-minded map search for churches near you.",
};

const signs = [
  {
    title: "God’s Word is central and authoritative",
    text: "The preaching and teaching should come from Scripture, explain it honestly in context, and apply it to life. The Bible should be treated as the final authority for faith, doctrine, and daily living.",
  },
  {
    title: "The gospel is clear and uncompromised",
    text: "A healthy church teaches the reality of sin, the need for repentance, Christ’s sacrificial death and bodily resurrection, and salvation by grace through faith in Jesus Christ—not through religious works or human traditions.",
  },
  {
    title: "Sound biblical doctrine is taught",
    text: "Essential truths such as the Trinity, the deity and humanity of Christ, His resurrection and return, and salvation through Christ alone should be taught clearly.",
  },
  {
    title: "Leaders are biblically qualified and accountable",
    text: "Pastors and other leaders should demonstrate the character described in passages such as 1 Timothy 3 and Titus 1. Healthy leaders serve with humility and integrity and live under meaningful biblical accountability.",
  },
  {
    title: "Believers are intentionally discipled",
    text: "Church should be about more than attendance. A healthy church helps people grow in Scripture, maturity, obedience, and service. It should also help believers discover their spiritual gifts and equip them to use those gifts to serve others and build up the body of Christ.",
  },
  {
    title: "Prayer matters",
    text: "Prayer should reflect genuine dependence upon God and be woven naturally into the life and ministry of the church.",
  },
  {
    title: "Worship is centered on God",
    text: "Music, prayer, preaching, and everything else in the service should ultimately point people toward the glory, holiness, and greatness of God rather than toward entertainment or emotional hype.",
  },
  {
    title: "There is genuine Christian fellowship and love",
    text: "Look for a church where believers bear one another’s burdens, forgive, encourage, serve, and demonstrate sincere love across generations and backgrounds.",
  },
  {
    title: "Holiness is taken seriously",
    text: "A healthy church does not ignore sin, but neither does it treat struggling believers without grace. Biblical correction and discipline should seek repentance, restoration, and spiritual health.",
  },
  {
    title: "The church is committed to evangelism and outreach",
    text: "A healthy congregation wants the gospel carried beyond its own walls—both into its local community and throughout the world.",
  },
];

export default function FindAChurchPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="find-church-title">
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <h1 id="find-church-title">Find a Healthy Church Home</h1>
          <p className={styles.heroLead}>
            The goal is not to find a perfect church. It is to find a local body that faithfully pursues Christ, honors God’s Word, proclaims the gospel, and helps believers grow together.
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.intro}>
          <h2>What Should You Look For?</h2>
          <p>
            As you visit churches, look beyond building size, music style, programs, or production quality. Those things may have value, but they are not the true measure of a healthy church. Ask whether Christ is being honored and Scripture is being faithfully followed.
          </p>
          <blockquote className={styles.scripture}>
            <p className={styles.scriptureQuote}>“And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.”</p>
            <p className={styles.scriptureReference}>Acts 2:42 (KJV)</p>
          </blockquote>
        </section>

        <section className={styles.guidance} aria-labelledby="healthy-church-signs">
          <h2 id="healthy-church-signs">Ten Biblical Signs of a Healthy Church</h2>
          <p className={styles.guidanceLead}>
            Scripture may not name every decision we will face, but it teaches us how to seek God, exercise wisdom, obey Him, and trust Him in every area of life. These ten signs provide a practical biblical framework for evaluating a church.
          </p>

          <div className={styles.signGrid}>
            {signs.map((sign, index) => (
              <article className={styles.signCard} key={sign.title}>
                <div className={styles.signNumber} aria-hidden="true">{index + 1}</div>
                <div>
                  <h3>{sign.title}</h3>
                  <p>{sign.text}</p>
                </div>
              </article>
            ))}
          </div>

          <section className={styles.guidanceSection}>
            <h2>What About Baptism and the Lord’s Supper?</h2>
            <p>
              Baptism and the Lord’s Supper are important practices Christ gave to His church and should be faithfully observed. Baptism is an important act of obedience and public identification with Christ, but it is not a work that earns salvation or a requirement added to faith in order to enter heaven. Salvation rests in Jesus Christ and His finished work.
            </p>
          </section>

          <section className={styles.guidanceSection}>
            <h2>Keep Christ at the Center</h2>
            <p>
              Perhaps the most important question you can ask is: <strong>Who is this church trying to make much of?</strong> A healthy church should not revolve around the pastor, worship team, building, brand, or programs. Those things may serve a useful purpose, but Jesus Christ must remain at the center.
            </p>
          </section>

          <section className={`${styles.guidanceSection} ${styles.warningSection}`}>
            <h2>Watch for Persistent Red Flags</h2>
            <p>
              Be cautious when Scripture is repeatedly taken out of context, the gospel is rarely explained, sin and repentance are intentionally avoided, leaders operate without accountability, prosperity is presented as evidence of God’s favor, personal revelations are elevated to the authority of Scripture, or abusive and manipulative behavior is tolerated.
            </p>
            <p>
              One mistake or weakness does not automatically make a church unhealthy. Look for persistent patterns, especially problems leadership refuses to acknowledge or correct. If abuse, coercion, credible threats, or personal danger are present, you do not need to remain in an unsafe situation simply to prove that you have exhausted every avenue of reconciliation. Seek safety and wise, trustworthy counsel.
            </p>
          </section>

          <section className={styles.guidanceSection}>
            <h2>Do Not Look for a Perfect Church</h2>
            <p>
              Do not confuse biblical health with personal preference. Music style, service length, building appearance, or whether a church offers every program you would like are not biblical tests of faithfulness.
            </p>
            <p className={styles.questionList}>
              Ask instead: Is Scripture central? Is the gospel clear? Is Christ being magnified? Are the leaders biblically qualified? Are believers growing in faith and holiness? Is there prayer, Christian love, discipleship, and a desire to reach others with the gospel?
            </p>
            <p>
              If the answer is yes, you may have found something far more valuable than an impressive church—you may have found a faithful one.
            </p>
          </section>
        </section>

        <ChurchFinder />

        <section className={styles.resourcesCta} aria-labelledby="church-resources-title">
          <p className={styles.eyebrow}>CONTINUE YOUR RESEARCH</p>
          <h2 id="church-resources-title">Finding a Church Home Resources</h2>
          <p>
            Explore additional FCE guidance and resources designed to help you prayerfully evaluate a church and continue your search with biblical priorities in view.
          </p>
          <Link className={styles.resourcesButton} href="/find-a-church/resources">
            Finding a Church Home Resources →
          </Link>
        </section>

        <div className={styles.backRow}>
          <Link href="/journey">← Return to Journey to Hope</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
