import Link from "next/link";
import styles from "./Step6NextSteps.module.css";

type Kind = "book" | "calendar" | "journal" | "church" | "prayer" | "contact";

function Icon({ kind }: { kind: Kind }) {
  const common = { width: 42, height: 42, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (kind) {
    case "book": return <svg {...common}><path d="M12 7v14M3 18V4a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-3a4 4 0 0 0-4 4 4 4 0 0 0-4-4H5a2 2 0 0 0-2 2Z"/></svg>;
    case "calendar": return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5 3 3 5-5"/></svg>;
    case "journal": return <svg {...common}><rect x="5" y="2" width="15" height="20" rx="2"/><path d="M9 2v20m4-14h4m-4 4h4m-4 4h3M3 7h4M3 13h4"/></svg>;
    case "church": return <svg {...common}><path d="M12 2v6m-3-3h6M4 22V11l8-5 8 5v11M2 22h20m-14 0v-7h8v7M8 12h.01M16 12h.01"/></svg>;
    case "prayer": return <svg {...common}><path d="m7 3 4 8-4 4-4-6 4-6Zm10 0-4 8 4 4 4-6-4-6ZM7 15l5-4 5 4-3 7h-4l-3-7Z"/><path d="M12 11v11"/></svg>;
    case "contact": return <svg {...common}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7M7 2h10"/></svg>;
  }
}

const actions = [
  {
    id: "6.b", title: "Read God’s Word", subtitle: "Faith Changes Everything Bible Studies",
    kind: "book", href: "/bible-studies", action: "Begin Reading",
    paragraphs: [
      "Faith Changes Everything has gathered several studies to help you learn and understand the bible, and your relationship with Christ. There are several beginner, intermediate and advanced level bibles studies, along with studies in creation, understanding the trinity, the 10 commandments, the character of God, and so many more. There is even an extensive bible study that introduces you to over 30 biblical themes. Spend as much time as you like, its all free and available to you anytime you want to use it. If you have a specific request that you would like to see part of the bible study series, reach out to FCE through the contact link and let us know what you would like to see as part of the study series."
    ],
  },
  {
    id: "6.c", title: "Walk with Christ", subtitle: "Daily Devotional",
    kind: "calendar", action: "Start Today’s Devotional", comingSoon: true,
    paragraphs: [
      "FCE has developed a 365-day Daily Devotional designed to help you spend time in God’s Word and walk with Christ each day. Our goal is to make the devotional available as a daily online experience through the Faith Changes Everything website.",
      "Make it a habit to spend a few minutes each day reading Scripture, reflecting on the devotional, and praying about how God’s Word applies to your life.",
      "Future plans also include exploring additional ways to make the devotional available, including a full-color printed book and, potentially, an app experience."
    ],
  },
  {
    id: "6.d", title: "Reflect on Your Journey", subtitle: "Bible Journal",
    kind: "journal", href: "/journal", action: "Begin Journaling",
    paragraphs: [
      "Record what God is teaching you, your prayers, and the ways He is working in your life. Download and use on your computer or your phone or tablet, or, use the Journal online. Save your progress, start a new journal, and work with the information on the browser, or download it, and save it any way you need to. Future plans include making this journal available on the potential app experience."
    ],
  },
  {
    id: "6.e", title: "Find a Church Home", subtitle: "Faith Changes Everything Church Finder",
    kind: "church", href: "/find-a-church", action: "Find a Church Near You",
    paragraphs: [
      "Healthy Christian growth is strengthened through worship, biblical teaching, fellowship, and serving alongside other believers. We want to do what we can to help you find a church home to build your relationship with Christ. Finding the right fit can be overwhelming at times, and this is offered to you as a free service to help in your search. We do not make any promises regarding the experiences you may encounter in the church you find, you will have to do that ground work, but the find a church map makes finding what is available around you much easier."
    ],
  },
  {
    id: "6.f", title: "We Would Love to Pray for You", subtitle: "Prayer Requests",
    kind: "prayer", href: "/prayer", action: "Submit a Prayer Request",
    paragraphs: [
      "Whatever you're facing, we'd be honored to pray with you. If you need prayer, support, or just need to reach out to someone and know that your request will receive prayer, please reach out buy clicking on the Prayer Request button that you can find all over the Faith Changes home pages. We believe that prayer builds relationship, and helps keep you in touch with God. We make time for prayer every day, and praying for you would be a privilege we take seriously. If you need it, please reach out."
    ],
  },
  {
    id: "6.g", title: "Stay Connected", subtitle: "Contact the Ministry",
    kind: "contact", href: "/contact", action: "Contact Pastor Richard",
    paragraphs: [
      "Share your story, ask a question, or simply let us know how God is working in your life. I want to build a community here at Faith Changes Everything. I want to interact with you as much as I can, so if there is something that I can do, please reach out anytime and someone from Faith Changes Everything will get back to you as soon as we can."
    ],
  },
] as const;

export function Step6NextSteps() {
  return (
    <section className={styles.section} aria-labelledby="step6-next-steps-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Continue Your Journey</p>
        <h2 id="step6-next-steps-title">Take the Next Step</h2>
        <p>There is more to discover as you continue walking with Christ. These six resources are here whenever you need them.</p>
      </header>
      <div className={styles.list}>
        {actions.map((item) => (
          <article className={styles.card} key={item.id} id={item.id}>
            <div className={styles.copy}>
              <p className={styles.number}>Step {item.id}</p>
              <h3>{item.title}</h3>
              <p className={styles.subtitle}>{item.subtitle}</p>
              {item.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <div className={styles.actionWrap}>
              {"comingSoon" in item && item.comingSoon ? (
                <div className={styles.comingSoon}>
                  <span className={`${styles.action} ${styles[item.kind]} ${styles.disabled}`} aria-disabled="true">
                    <Icon kind={item.kind} />
                    <span>{item.action}</span>
                  </span>
                  <small>Coming Soon — the online devotional is in development.</small>
                </div>
              ) : (
                <Link className={`${styles.action} ${styles[item.kind]}`} href={"href" in item ? item.href : "#"} aria-label={item.action}>
                  <Icon kind={item.kind} />
                  <span>{item.action}</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
