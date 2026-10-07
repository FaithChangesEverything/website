import type { BibleStudyLessonSummary, BibleStudySeriesDetail } from "./data";

type FceStudySeed = {
  slug: string;
  title: string;
  pdfUrl: string;
  coverImage: string;
  headerImage: string;
  summary: string;
};

const beginnerSeeds: FceStudySeed[] = [
  {
    slug: "who-is-jesus",
    title: "Who Is Jesus?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00179_who_Is_jesus.pdf",
    coverImage: "who-is-jesus-cover.jpg",
    headerImage: "who-is-jesus-header.jpg",
    summary: "Begin with the central question of who Jesus is and explore the biblical foundation for understanding His identity.",
  },
  {
    slug: "what-is-salvation",
    title: "What Is Salvation?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00180-what-is-salvation.pdf",
    coverImage: "what-is-salvation-cover.jpg",
    headerImage: "what-is-salvation-header.jpg",
    summary: "Explore what Scripture teaches about salvation and the good news of Jesus Christ.",
  },
  {
    slug: "how-do-i-pray",
    title: "How Do I Pray?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00181-how-to-pray.pdf",
    coverImage: "how-do-i-pray-cover.jpg",
    headerImage: "how-do-i-pray-header.jpg",
    summary: "Learn biblical foundations for prayer and for growing in a meaningful life of prayer with God.",
  },
  {
    slug: "what-is-faith",
    title: "What Is Faith?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00182-what-is-faith.pdf",
    coverImage: "what-is-faith-cover.jpg",
    headerImage: "what-is-faith-header.jpg",
    summary: "Consider what the Bible means by faith and what it looks like to trust God in everyday life.",
  },
  {
    slug: "how-do-i-read-the-bible",
    title: "How Do I Read the Bible?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00183-how-to-read-bible.pdf",
    coverImage: "how-do-i-read-the-bible-cover.jpg",
    headerImage: "how-do-i-read-the-bible-header.jpg",
    summary: "Build practical habits for reading Scripture carefully, consistently, and with growing understanding.",
  },
  {
    slug: "who-is-the-holy-spirit",
    title: "Who Is the Holy Spirit?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00185-who-is-holy-spirit.pdf",
    coverImage: "who-is-the-holy-spirit-cover.jpg",
    headerImage: "who-is-the-holy-spirit-header.jpg",
    summary: "Explore what Scripture reveals about the Holy Spirit and His work in the life of a believer.",
  },
  {
    slug: "what-is-grace",
    title: "What Is Grace?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00186-What_Is_grace.pdf",
    coverImage: "what-is-grace-cover.jpg",
    headerImage: "what-is-grace-header.jpg",
    summary: "Study the biblical meaning of grace and why it stands at the heart of the gospel.",
  },
  {
    slug: "why-do-christians-go-to-church",
    title: "Why Do Christians Go to Church?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00191-why-do-christians-go-to-church.pdf",
    coverImage: "why-do-christians-go-to-church-cover.jpg",
    headerImage: "why-do-christians-go-to-church-header.jpg",
    summary: "Explore the biblical purpose of Christian fellowship, worship, teaching, and life together in the church.",
  },
  {
    slug: "what-happens-when-i-sin",
    title: "What Happens When I Sin?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00192-what-happens-when-i-sin.pdf",
    coverImage: "what-happens-when-i-sin-cover.jpg",
    headerImage: "what-happens-when-i-sin-header.jpg",
    summary: "Consider sin, confession, forgiveness, repentance, and the believer’s continuing walk with Christ.",
  },
  {
    slug: "how-can-i-know-god",
    title: "How Can I Know God?",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Beginner%20Bible%20Studies/doc-2026-00193-how-can-i-know-god.pdf",
    coverImage: "how-can-i-know-god-cover.jpg",
    headerImage: "how-can-i-know-god-header.jpg",
    summary: "Bring the beginner series together by exploring how Scripture invites us to know God through Jesus Christ.",
  },
];

const intermediateSeeds: FceStudySeed[] = [
  {
    slug: "understanding-the-trinity",
    title: "Understanding the Trinity",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00188-understanding-trinity.pdf",
    coverImage: "understanding-the-trinity-cover.jpg",
    headerImage: "understanding-the-trinity-header.jpg",
    summary: "Explore the biblical foundations for understanding the one God revealed as Father, Son, and Holy Spirit.",
  },
  {
    slug: "creation",
    title: "Creation",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00190_creation.pdf",
    coverImage: "creation-cover.jpg",
    headerImage: "creation-header.jpg",
    summary: "Study the biblical account of creation and what it reveals about God, humanity, and the world He made.",
  },
  {
    slug: "learning-to-trust-god",
    title: "Learning to Trust God",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00194-learning-to-trust-god.pdf",
    coverImage: "learning-to-trust-god-cover.jpg",
    headerImage: "learning-to-trust-god-header.jpg",
    summary: "Explore what Scripture teaches about trusting God when the way forward is clear and when it is not.",
  },
  {
    slug: "understanding-gods-will",
    title: "Understanding God’s Will",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00195-understanding-gods-will.pdf",
    coverImage: "understanding-gods-will-cover.jpg",
    headerImage: "understanding-gods-will-header.jpg",
    summary: "Consider biblical principles for seeking God’s will with wisdom, obedience, prayer, and trust.",
  },
  {
    slug: "the-fruit-of-the-spirit",
    title: "The Fruit of the Spirit",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00196-the-fruits-of-the-spirit.pdf",
    coverImage: "the-fruit-of-the-spirit-cover.jpg",
    headerImage: "the-fruit-of-the-spirit-header.jpg",
    summary: "Study the fruit the Holy Spirit produces as believers grow in Christlike character.",
  },
  {
    slug: "forgiveness",
    title: "Forgiveness",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00197-forgiveness.pdf",
    coverImage: "forgiveness-cover.jpg",
    headerImage: "forgiveness-header.jpg",
    summary: "Explore the biblical meaning of receiving forgiveness and extending forgiveness to others.",
  },
  {
    slug: "temptation",
    title: "Temptation",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00198-temptation.pdf",
    coverImage: "temptation-cover.jpg",
    headerImage: "temptation-header.jpg",
    summary: "Study how Scripture describes temptation and the ways believers are called to respond faithfully.",
  },
  {
    slug: "christian-fellowship",
    title: "Christian Fellowship",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00199-christian-fellowship.pdf",
    coverImage: "christian-fellowship-cover.jpg",
    headerImage: "christian-fellowship-header.jpg",
    summary: "Explore the biblical importance of fellowship, encouragement, worship, service, and life together.",
  },
  {
    slug: "biblical-wisdom",
    title: "Biblical Wisdom",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00200-biblical-wisdom.pdf",
    coverImage: "biblical-wisdom-cover.jpg",
    headerImage: "biblical-wisdom-header.jpg",
    summary: "Explore how Scripture describes wisdom and how biblical wisdom shapes everyday decisions and character.",
  },
  {
    slug: "trials-and-suffering",
    title: "Trials and Suffering",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Intermediate%20Bible%20Studies/doc-2026-00201-trials-and-suffering.pdf",
    coverImage: "trials-and-suffering-cover.jpg",
    headerImage: "trials-and-suffering-header.jpg",
    summary: "Study biblical truth about trials and suffering while keeping God’s character, presence, and eternal purposes in view.",
  },
];

const advancedSeeds: FceStudySeed[] = [
  {
    slug: "gods-sovereignty",
    title: "God’s Sovereignty",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00202-gods-sovereignty.pdf",
    coverImage: "gods-sovereignty-cover.jpg",
    headerImage: "gods-sovereignty-header.jpg",
    summary: "Begin the advanced series by studying Scripture’s teaching about God’s sovereign rule and authority.",
  },
  {
    slug: "justification-and-sanctification",
    title: "Justification and Sanctification",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00203-justification-sanctification.pdf",
    coverImage: "justification-and-sanctification-cover.jpg",
    headerImage: "justification-and-sanctification-header.jpg",
    summary: "Explore the biblical distinction and relationship between justification and sanctification.",
  },
  {
    slug: "the-covenants",
    title: "The Covenants",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00204-the-covenants.pdf",
    coverImage: "the-covenants-cover.jpg",
    headerImage: "the-covenants-header.jpg",
    summary: "Trace the biblical covenants and their place in the unfolding story of God’s redemptive purposes.",
  },
  {
    slug: "biblical-theology-of-redemption",
    title: "Biblical Theology of Redemption",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00205-biblical-theology-of-redemption.pdf",
    coverImage: "biblical-theology-of-redemption-cover.jpg",
    headerImage: "biblical-theology-of-redemption-header.jpg",
    summary: "Follow the theme of redemption through Scripture and consider how the biblical story culminates in Christ.",
  },
  {
    slug: "the-attributes-of-god",
    title: "The Attributes of God",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00206-the-attributes-of-god.pdf",
    coverImage: "the-attributes-of-god-cover.jpg",
    headerImage: "the-attributes-of-god-header.jpg",
    summary: "Study what Scripture reveals about God’s nature and character while respecting the limits of what He has revealed.",
  },
  {
    slug: "christology",
    title: "Christology",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00207-christology.pdf",
    coverImage: "christology-cover.jpg",
    headerImage: "christology-header.jpg",
    summary: "Study the person and work of Jesus Christ through the witness of Scripture.",
  },
  {
    slug: "the-doctrine-of-scripture",
    title: "The Doctrine of Scripture",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00208-the-doctrine-of-scripture.pdf",
    coverImage: "the-doctrine-of-scripture-cover.jpg",
    headerImage: "the-doctrine-of-scripture-header.jpg",
    summary: "Explore Christian doctrine concerning Scripture and the Bible’s authority, purpose, and place in the life of faith.",
  },
  {
    slug: "the-person-and-work-of-the-holy-spirit",
    title: "The Person and Work of the Holy Spirit",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00209-the-person-and-work-of-the-holy-spirit.pdf",
    coverImage: "the-person-and-work-of-the-holy-spirit-cover.jpg",
    headerImage: "the-person-and-work-of-the-holy-spirit-header.jpg",
    summary: "Study the person, deity, ministry, and work of the Holy Spirit through Scripture.",
  },
  {
    slug: "biblical-eschatology",
    title: "Biblical Eschatology",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00210-bible-eschatology.pdf",
    coverImage: "biblical-eschatology-cover.jpg",
    headerImage: "biblical-eschatology-header.jpg",
    summary: "Explore biblical teaching about the last things with careful attention to what Scripture clearly reveals.",
  },
  {
    slug: "old-testament-messianic-prophecy",
    title: "Old Testament Messianic Prophecy",
    pdfUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/FCE%20Bible%20Studies/FCE%20Advanced%20Bible%20Studies/doc-2026-00211-old-testament-messianic-prophecy.pdf",
    coverImage: "old-testament-messianic-prophecy-cover.jpg",
    headerImage: "old-testament-messianic-prophecy-header.jpg",
    summary: "Examine Old Testament passages that anticipate the Messiah and consider their fulfillment in Jesus Christ.",
  },
];

function buildLessons(level: "beginner" | "intermediate" | "advanced", seeds: FceStudySeed[]): BibleStudyLessonSummary[] {
  return seeds.map((study) => ({
    slug: study.slug,
    title: study.title,
    summary: study.summary,
    href: `/bible-studies/fce-${level}/${study.slug}`,
    imageSrc: `/images/bible-studies/fce-studies/${level}/headers/${study.headerImage}`,
    cardImageSrc: `/images/bible-studies/fce-studies/${level}/covers/${study.coverImage}`,
    imageAlt: `${study.title} FCE Bible Study artwork`,
    pdfUrl: study.pdfUrl,
  }));
}

export const fceBeginnerLessons = buildLessons("beginner", beginnerSeeds);
export const fceIntermediateLessons = buildLessons("intermediate", intermediateSeeds);
export const fceAdvancedLessons = buildLessons("advanced", advancedSeeds);

const beginnerPastorMessage = `Welcome to the Faith Changes Everything Beginner Bible Study series. These ten studies were created to help you build a clear biblical foundation for your walk with Christ. We begin with the most important questions—Who is Jesus? What is salvation? How do I pray? What is faith?—and then continue into reading the Bible, understanding the Holy Spirit and grace, the importance of the church, what happens when we sin, and how we can truly know God.

You can begin with the question that brought you here, and every study can stand on its own. But if you are new to Bible study, I encourage you to work through them in the order they are presented. The sequence is intentional. Each study adds another piece to the foundation and prepares you for what follows.

There is no need to rush. Read the Scripture passages for yourself, take notes, ask questions, pray about what you are learning, and return to a study whenever you need to. The goal is not simply to finish ten lessons. The goal is to know God more clearly through His Word and to keep growing in your relationship with Jesus Christ.

From Pastor Richard at Faith Changes Everything, I hope these studies encourage you as you begin. And don't forget—God loves you so very much, and so do I. God bless.`;

const intermediatePastorMessage = `Welcome to the Faith Changes Everything Intermediate Bible Study series. These studies are designed for the person who already has some biblical foundation and is ready to begin connecting those truths more deeply with the way we understand God and live out our faith.

The ten studies move from understanding the Trinity and creation into learning to trust God and seek His will. From there we look at the fruit of the Spirit, forgiveness, temptation, Christian fellowship, biblical wisdom, and finally trials and suffering. Each topic can be studied on its own, so you are free to begin where you have the greatest need or interest. At the same time, the order is intentional. Taken together, the studies move from important truths about God into the practical formation of a life that is increasingly shaped by those truths.

Take your time with the material. Keep your Bible open. Test what you read against Scripture. Write down your questions and return to difficult passages rather than rushing past them. Growth in biblical understanding is not about knowing more facts for their own sake. It is about learning to think, trust, worship, and live more faithfully before God.

From Pastor Richard at Faith Changes Everything, I pray this series helps you continue growing in your knowledge of God's Word and in your walk with Christ. And don't forget—God loves you so very much, and so do I. God bless.`;

const advancedPastorMessage = `Welcome to the Faith Changes Everything Advanced Bible Study series. These ten studies were developed as individual studies, and you can certainly open any topic on its own. But I want you to know that there is also an intentional design behind the order in which they appear. Together, they form one larger course of study.

We begin with God's sovereignty and then move into justification and sanctification, the covenants, and the biblical theology of redemption. From there we study the attributes of God, Christology, the doctrine of Scripture, and the person and work of the Holy Spirit. The final studies turn to biblical eschatology and Old Testament messianic prophecy. The subjects are distinct, but they are not isolated. Truths established in one study help provide context for the studies that follow.

So if there is a particular subject you want to explore, you are welcome to begin there. But if your goal is to work through the entire Advanced series, I recommend following the sequence as it is presented. It was developed that way deliberately.

These studies will ask you to slow down, compare Scripture with Scripture, distinguish what the Bible clearly teaches from what we may infer, and remain humble where faithful Christians have disagreed. The goal is not complexity for its own sake. The goal is a deeper, more careful understanding of God's Word that leads us to know Him, trust Him, and worship Him more faithfully.

From Pastor Richard at Faith Changes Everything, I hope you enjoy this deeper study of Scripture. And don't forget—God loves you so very much, and so do I. God bless.`;

export const fceBeginnerSeriesDetail: BibleStudySeriesDetail = {
  slug: "fce-beginner",
  title: "FCE Bible Studies — Beginner",
  overviewTitle: "Build a Biblical Foundation",
  introduction:
    "Ten FCE-created studies designed to help newer Bible students understand foundational truths of the Christian faith and begin developing strong habits for a growing walk with Christ.",
  lessonsTitle: "Beginner Bible Studies",
  lessonsDescription:
    "The studies are presented in the order they were developed. You may open any study individually, but following the sequence provides a natural progression through the series.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt: beginnerPastorMessage,
    imageSrc: "/images/pastor-richard.png",
    compactLayout: true,
  },
  lessons: fceBeginnerLessons,
  sourceNote:
    "These Bible studies are created and published by Faith Changes Everything. Each study opens as the complete FCE PDF resource.",
};

export const fceIntermediateSeriesDetail: BibleStudySeriesDetail = {
  slug: "fce-intermediate",
  title: "FCE Bible Studies — Intermediate",
  overviewTitle: "Grow Deeper in Biblical Understanding",
  introduction:
    "Ten FCE-created studies that build on foundational Christian truth and help connect biblical understanding with spiritual growth, relationships, wisdom, and faithful perseverance.",
  lessonsTitle: "Intermediate Bible Studies",
  lessonsDescription:
    "Each study can stand on its own, but the sequence is intentional and provides a natural path from foundational doctrine into the practical formation of Christian life.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt: intermediatePastorMessage,
    imageSrc: "/images/pastor-richard.png",
    compactLayout: true,
  },
  lessons: fceIntermediateLessons,
  sourceNote:
    "These Bible studies are created and published by Faith Changes Everything. Each study opens as the complete FCE PDF resource.",
};

export const fceAdvancedSeriesDetail: BibleStudySeriesDetail = {
  slug: "fce-advanced",
  title: "FCE Bible Studies — Advanced",
  overviewTitle: "A Connected Course of Deeper Study",
  introduction:
    "Ten FCE-created advanced studies designed as individual resources and as one connected course of deeper biblical and theological study.",
  lessonsTitle: "Advanced Bible Studies",
  lessonsDescription:
    "You may study any topic individually, but the order is deliberate. When working through the full series, following the sequence will preserve the connections built from one study to the next.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt: advancedPastorMessage,
    imageSrc: "/images/pastor-richard.png",
    compactLayout: true,
  },
  lessons: fceAdvancedLessons,
  sourceNote:
    "These Bible studies are created and published by Faith Changes Everything. Each study opens as the complete FCE PDF resource.",
};
