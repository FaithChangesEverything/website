import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about-ministry.module.css";

export const metadata = {
  title: "About the Ministry | Faith Changes Everything",
  description: "Learn why Faith Changes Everything exists: to share the truth of God's Word and point people toward hope and salvation in Jesus Christ.",
};

const cards = [
  { title: "Journey to Hope", description: "Explore a Scripture-centered journey toward hope and a closer relationship with Jesus Christ.", href: "/journey", image: "/images/about-ministry/journey_to_hope.png", alt: "A traveler on a path toward the sunrise" },
  { title: "Request Prayer", description: "Whatever you are facing, you are welcome to share a prayer request with our ministry.", href: "/prayer", image: "/images/about-ministry/request_prayer.png", alt: "Hands joined in prayer in warm morning light" },
  { title: "Contact the Ministry", description: "Have a question or need help finding a resource? We would love to hear from you.", href: "/contact", image: "/images/about-ministry/contact_ministry.png", alt: "A baptism scene beneath a dove in golden light" },
];

export default function AboutMinistryPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-heading">
          <div className={styles.heroContent}>
            <p className={styles.heroWelcome}>Welcome to</p>
            <h1 id="about-heading">Faith Changes Everything</h1>
            <p className={styles.heroSubtitle}>About the Ministry</p>
          </div>
        </section>

        <section className={styles.welcome} aria-label="A personal welcome from Pastor Richard">
          <div className={styles.container}>
            <div className={styles.videoCard}>
              <div className={styles.portraitWrap}>
                <div className={styles.portrait}>
                  <Image src="/images/about-ministry/pastor-richard.png" alt="Pastor Richard" fill sizes="(max-width: 760px) 190px, 235px" style={{objectFit:"cover"}} />
                </div>
              </div>
              <div className={styles.videoDetails}>
                <h3>A Personal Welcome from Pastor Richard about the heart and purpose of this ministry</h3>
                <p>The welcome video will be available here after recording.</p>
                <button className={styles.videoButton} type="button" disabled aria-label="Watch Welcome Video — coming soon">
                  <span aria-hidden="true">▶ </span>Watch Welcome Video
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introduction} aria-labelledby="purpose-title">
          <div className={styles.prose}>
            <h2 id="purpose-title">Why Faith Changes Everything Exists</h2>
            <p>Faith Changes Everything was established with one central purpose: <strong>to help people discover the truth of God’s Word and come to know Jesus Christ through a genuine, personal relationship with Him.</strong></p>
            <p>We believe the message of the Gospel is one of hope, grace, forgiveness, and redemption. Salvation is not something we can earn through religious traditions, good works, or personal accomplishments. It is a gift of God’s grace, made possible through the sacrifice of Jesus Christ and received through faith in Him.</p>
            <p>At the heart of this ministry is a commitment to sharing biblical truth in a way that is understandable, accessible, and grounded in Scripture. Whether someone is searching for answers, struggling through difficult circumstances, returning to their faith, or seeking to grow closer to God, our desire is to provide encouragement and resources that point them toward Christ.</p>
            <p>Through Bible studies, Scripture reading plans, sermons, music, Journey to Hope, and other resources, Faith Changes Everything seeks to help people better understand God’s character, recognize His love and faithfulness, and discover the hope found in His promises.</p>
            <p>We do not believe that faith removes every hardship or answers every question. But we believe that knowing Jesus Christ changes how we face life’s challenges, how we understand our purpose, and where we place our hope.</p>
            <p><strong>This ministry is not about a person, a denomination, or an organization. It is about Jesus Christ, the truth of His Word, and the transforming power of His grace.</strong></p>
            <p>Our prayer is that everything you discover here will encourage you to open your Bible, seek the Lord, and grow in your relationship with Him.</p>
            <p className={styles.closing}>Because faith really does change everything.</p>
          </div>
        </section>

        <section className={styles.nextSteps} aria-labelledby="next-heading">
          <div className={styles.container}>
            <h2 id="next-heading">Where Do I Go From Here?</h2>
            <p className={styles.sectionLead}>Wherever you are in your journey, there is a place to begin.</p>
            <div className={styles.grid}>
              {cards.map(card => (
                <article className={styles.card} key={card.title}>
                  <div className={styles.cardImage}>
                    <Image src={card.image} alt={card.alt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{objectFit:"cover"}} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link href={card.href} className={styles.cardLink}>Explore <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
