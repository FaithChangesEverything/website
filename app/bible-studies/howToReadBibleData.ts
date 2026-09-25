import type { BibleStudyLessonSummary, BibleStudySeriesDetail } from "./data";

type HowToReadBibleSeed = {
  slug: string;
  title: string;
  videoUrl: string;
  streamSrc: string;
  scriptUrl?: string;
  studyGuideUrl?: string;
  image: string;
};

const howToReadBibleSeeds: HowToReadBibleSeed[] = [
  {
    slug: "what-is-the-bible",
    title: "What Is the Bible",
    videoUrl: "https://bibleproject.com/videos/what-is-bible/",
    streamSrc: "https://stream.mux.com/hRgtUaEhBl97k3Y3j9GyVG794KP43ULDBu9gL6tGoa8/high.mp4?download=what-is-the-bible.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00093-01-what-is-the-bible-script-.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00094-01-what-is-the-bible-studyguide.pdf",
    image: "01-how-to-read-bible.png",
  },
  {
    slug: "story-of-the-bible",
    title: "The Story of the Bible",
    videoUrl: "https://bibleproject.com/videos/the-story-of-the-bible/",
    streamSrc: "https://stream.mux.com/SPNOVb3wBYm9x027k91yQrXN4RzVoufBU6fVB47Q9nI4/high.mp4?download=the-story-of-the-bible.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00095-02-the-story-of-the-bible-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00096-02-the-story-of-the-bible-studyguide.pdf",
    image: "02-story-of-bible.png",
  },
  {
    slug: "literary-styles",
    title: "Literary Styles",
    videoUrl: "https://bibleproject.com/videos/literary-styles-bible/",
    streamSrc: "https://stream.mux.com/H00BPqi2gPe7SzlrlqcAmXWSNI02Ofur02H02Gryhtpb594/high.mp4?download=literary-styles.mp4",
    image: "03-literary-styles.png",
  },
  {
    slug: "ancient-jewish-meditation-literature",
    title: "Ancient Jewish Meditation Literature",
    videoUrl: "https://bibleproject.com/videos/bible-jewish-meditation-literature-h2r/",
    streamSrc: "https://stream.mux.com/uDc7umNjwX9ipf2DfB9Jy4x02PRAWnYKbZ6Eb02SMl00O8/high.mp4?download=ancient-jewish-meditation-literature.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00098-04-jewish-meditation-literature-script.pdf",
    image: "04-jewish-lit-styles.png",
  },
  {
    slug: "plot",
    title: "Plot",
    videoUrl: "https://bibleproject.com/videos/plot-biblical-narrative/",
    streamSrc: "https://stream.mux.com/lbyTtmpgCaaB9VajL9jMCE457CZd8UmEzdasGntd4p8/high.mp4?download=plot.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00100-05-plot-in-biblical-narrrative-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00099-05-plot-in-biblical-narrative-studyguide.pdf",
    image: "05-plot.png",
  },
  {
    slug: "character",
    title: "Character",
    videoUrl: "https://bibleproject.com/videos/character-biblical-narrative/",
    streamSrc: "https://stream.mux.com/m9B95nheGFZK52dBd802IuTYswvVun0100aRqnM8ZwBGq8/high.mp4?download=character.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00101-06-character-script.pdf",
    image: "06-characters.png",
  },
  {
    slug: "setting",
    title: "Setting",
    videoUrl: "https://bibleproject.com/videos/setting-biblical-narrative/",
    streamSrc: "https://stream.mux.com/UABvu9l01T327INE12Bcy022k89nqraIWUKiMIAXkP01ow/high.mp4?download=setting.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00103-07-setting-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00104-07-setting-studyguide.pdf",
    image: "07-settings.png",
  },
  {
    slug: "design-patterns",
    title: "Design Patterns",
    videoUrl: "https://bibleproject.com/videos/design-patterns-biblical-narrative/",
    streamSrc: "https://stream.mux.com/73YpsKrzNVwA7UXIW1z5evRPPssQVwZFZulpoXdCDNw/high.mp4?download=design-patterns.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00105-08-design-patterns-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00106-08-design-patterns-studyguide.pdf",
    image: "08-design-patterns.png",
  },
  {
    slug: "poetry",
    title: "Poetry",
    videoUrl: "https://bibleproject.com/videos/art-biblical-poetry/",
    streamSrc: "https://stream.mux.com/H1Jf9btmzRYbrgwLGd9A7iMSMCJCxGUQkHWt202Sq7Zs/high.mp4?download=poetry.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00107-09-poetry-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00108-09-poetry-studyguide.pdf",
    image: "09-poetry.png",
  },
  {
    slug: "poetic-metaphor",
    title: "Poetic Metaphor",
    videoUrl: "https://bibleproject.com/videos/metaphor-biblical-poetry/",
    streamSrc: "https://stream.mux.com/Os00tKl02FxKZ00j0000b4NQjipQeJF01FdfZVstNez8mPJGs/high.mp4?download=poetic-metaphor.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00109-10-poetic-metaphor-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00110-10-poetic-metaphor-studyguide.pdf",
    image: "10-poetic-met.png",
  },
  {
    slug: "book-of-psalms",
    title: "The Book of Psalms",
    videoUrl: "https://bibleproject.com/videos/book-of-psalms/",
    streamSrc: "https://stream.mux.com/fIOh5zHGXmLU025yMRp6PmRu8wTPNpRaZQNyvKWVHwCw/high.mp4?download=the-book-of-psalms.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00111-11-the-book-of-psalms-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00112-11-the-book-of-psalms-studyguide.pdf",
    image: "11-book-psalms.png",
  },
  {
    slug: "prophets",
    title: "The Prophets",
    videoUrl: "https://bibleproject.com/videos/the-prophets/",
    streamSrc: "https://stream.mux.com/ivpK101TcDCxH016vFvNYP01xoz8qvRMg2pBnwJUD5NoWM/high.mp4?download=the-prophets.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00113-12-the%20prophets-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00114-12-the%20prophets-studyguide.pdf",
    image: "12-prophets.png",
  },
  {
    slug: "biblical-law",
    title: "Biblical Law",
    videoUrl: "https://bibleproject.com/videos/reading-biblical-law/",
    streamSrc: "https://stream.mux.com/Shmo4jQIFAnFoGwjJ4Ha7XBVWDP4WPdi2Cev8P4BIjI/high.mp4?download=biblical-law.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00115-13-biblical%20law-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00116-13-biblical%20law-studyguide.pdf",
    image: "13-biblical-law.png",
  },
  {
    slug: "books-of-solomon",
    title: "The Books of Solomon",
    videoUrl: "https://bibleproject.com/videos/books-solomon/",
    streamSrc: "https://stream.mux.com/00rkXk5lXIqEKMAvjYLiF1nnGivbKUFbDam5oLYRaw0100/high.mp4?download=the-books-of-solomon.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00117-14-the-books-of-solomon-script.pdf",
    image: "14-book-solomon.png",
  },
  {
    slug: "how-to-read-the-gospel",
    title: "How to Read the Gospel",
    videoUrl: "https://bibleproject.com/videos/how-to-read-gospel/",
    streamSrc: "https://stream.mux.com/nG2ya1Vlm8wktajESzKIH743Uf8lqRxdN400qlVXTknU/high.mp4?download=the-gospel.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00118-15-how-to-read-the-gospel-script.pdf",
    image: "15-read-gospel.png",
  },
  {
    slug: "parables-of-jesus",
    title: "The Parables of Jesus",
    videoUrl: "https://bibleproject.com/videos/how-to-read-the-bible-the-parables-of-jesus/",
    streamSrc: "https://stream.mux.com/1Mzy6Mq7JU3582ylmmsneAK01ebiGVOxRu01029zhPCD7I/high.mp4?download=the-parables-of-jesus.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00120-16-parables-of-jesus-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00121-16-parables-of-jesus-studyguide.pdf",
    image: "16-parables-jesus.png",
  },
  {
    slug: "new-testament-letters-historical-context",
    title: "New Testament Letters: Historical Context",
    videoUrl: "https://bibleproject.com/videos/new-testament-letters-epistles-historical-context/",
    streamSrc: "https://stream.mux.com/E8ewd02FS3rAqj5Wui8GXSRn2tMTp01eRvNDHXcAk9R1I/high.mp4?download=new-testament-letters-historical-context.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00122-17-new-test-letters-historical-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00123-17-new-test-letters-historical-studyguide.pdf",
    image: "17-new-test-hist.png",
  },
  {
    slug: "new-testament-letters-literary-context",
    title: "New Testament Letters: Literary Context",
    videoUrl: "https://bibleproject.com/videos/new-testament-letters-literary-context/",
    streamSrc: "https://stream.mux.com/011diPqUlURqRsGcn5QK5pXmDdpS00XL7MEFdrW2K12zI/high.mp4?download=new-testament-letters-literary-context.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00124-18-new-test-letters-Literary-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00125-18-new-test-letters-Literary-studyguide.pdf",
    image: "18-new-test-lit.png",
  },
  {
    slug: "apocalyptic-literature",
    title: "Apocalyptic Literature",
    videoUrl: "https://bibleproject.com/videos/apocalyptic-literature/",
    streamSrc: "https://stream.mux.com/tUFH502znU6ShKPHoNXJBTwC01ffh5zMpMBsCNOmbY7uI/high.mp4?download=apocalyptic-literature.mp4",
    scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00126-19-apocalyptic-script.pdf",
    studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-read-the-bible/doc-2026-00127-19-apocalyptic-studyguide.pdf",
    image: "19-apocalyptic.png",
  },
];

export const howToReadBibleLessons: BibleStudyLessonSummary[] = howToReadBibleSeeds.map((lesson) => ({
  slug: lesson.slug,
  title: lesson.title,
  summary: `Explore BibleProject’s teaching on ${lesson.title} and learn how it helps us read Scripture more carefully and in context.`,
  href: `/bible-studies/how-to-read-the-bible/${lesson.slug}`,
  imageSrc: `/images/bible-studies/how-to-read-the-bible/${lesson.image}`,
  imageAlt: `${lesson.title} How to Read the Bible study artwork`,
  video: {
    title: lesson.title,
    description: `Watch BibleProject’s teaching on ${lesson.title} and then use the supporting resources below to continue your study.`,
    href: lesson.videoUrl,
    streamSrc: lesson.streamSrc,
    ownerName: "BibleProject",
    ownerUrl: "https://bibleproject.com/",
    attribution:
      "BibleProject is the author and owner of this teaching video. Faith Changes Everything plays BibleProject’s official Full Video source within the FCE study page.",
  },
  resourcesOwnerName: "BibleProject",
  resourcesOwnerUrl: "https://bibleproject.com/",
  resourcesAttribution:
    "BibleProject is the author and owner of these supporting resources. Faith Changes Everything provides access to the original, unaltered materials for study.",
  resources: [
    ...(lesson.scriptUrl
      ? [
          {
            title: "Video Transcript",
            description:
              "Read the teaching transcript if you prefer to read alongside, or in addition to, the BibleProject video.",
            href: lesson.scriptUrl,
            actionLabel: "Open Transcript",
          },
        ]
      : []),
    ...(lesson.studyGuideUrl
      ? [
          {
            title: "Study Guide",
            description:
              "Use the companion study guide to continue exploring the lesson and the Scripture passages connected to it.",
            href: lesson.studyGuideUrl,
            actionLabel: "Open Study Guide",
          },
        ]
      : []),
  ],
}));

const pastorMessage = `Hello everyone, and welcome to Faith Changes Everything Bible Study, How to Read the Bible.
The Bible is one unified story, but it was written through many different authors, time periods, cultures, and literary styles. Understanding those differences can help us read Scripture more carefully and more faithfully. In this study, we will explore how the Bible communicates through narrative, poetry, wisdom, parables, letters, apocalyptic literature, and other forms, and how each contributes to the larger story God is telling. As we learn to recognize things like plot, character, setting, design patterns, poetic imagery, and historical context, we begin to see not only what the Bible says, but how its authors intended us to understand it.

These videos will also help us explore the Bible as Jewish meditation literature, the purpose of books such as Psalms and the writings of Solomon, the parables of Jesus, the historical and literary setting of the New Testament, and the unique imagery of apocalyptic literature. The goal is not simply to learn literary terms. It is to become better readers of Scripture—people who slow down, pay attention, understand passages in their proper context, and see how each part of the Bible connects to the larger story of God’s work in the world. The better we understand how the Bible was written, the better prepared we are to hear what it is actually saying.
I do hope you enjoy this study, and it helps you in your journey and walk with Christ.  From pastor Richard at Faith Changes Everything, don'f forget that God loves you so very much, and so do I.....God Bless`;

export const howToReadBibleSeriesDetail: BibleStudySeriesDetail = {
  slug: "how-to-read-the-bible",
  title: "How to Read the Bible",
  overviewTitle: "Learning to Read Scripture Well",
  introduction:
    "The Bible is one unified story written through many authors, historical settings, and literary styles. This 19-part series explores how biblical narrative, poetry, wisdom, parables, letters, law, prophecy, and apocalyptic literature communicate so that we can read Scripture more carefully, understand passages in context, and see how each part contributes to the larger biblical story.",
  lessonsTitle: "Explore How to Read the Bible",
  lessonsDescription:
    "Open a group below and work through the studies in spreadsheet order. The lessons are arranged in four manageable groups of five, five, five, and four.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt: pastorMessage,
    imageSrc: "/images/pastor-richard.png",
    videoEmbedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/1afac2068dc5cd0f040aa14cce1d0c6f/iframe",
    compactLayout: true,
  },
  lessons: howToReadBibleLessons,
  lessonGroups: [
    {
      id: "group-1",
      label: "Studies 1–5",
      description: "What Is the Bible / The Story of the Bible / Literary Styles / Ancient Jewish Meditation Literature / Plot",
      lessonSlugs: ["what-is-the-bible", "story-of-the-bible", "literary-styles", "ancient-jewish-meditation-literature", "plot"],
    },
    {
      id: "group-2",
      label: "Studies 6–10",
      description: "Character / Setting / Design Patterns / Poetry / Poetic Metaphor",
      lessonSlugs: ["character", "setting", "design-patterns", "poetry", "poetic-metaphor"],
    },
    {
      id: "group-3",
      label: "Studies 11–15",
      description: "The Book of Psalms / The Prophets / Biblical Law / The Books of Solomon / How to Read the Gospel",
      lessonSlugs: ["book-of-psalms", "prophets", "biblical-law", "books-of-solomon", "how-to-read-the-gospel"],
    },
    {
      id: "group-4",
      label: "Studies 16–19",
      description: "The Parables of Jesus / New Testament Letters: Historical Context / New Testament Letters: Literary Context / Apocalyptic Literature",
      lessonSlugs: ["parables-of-jesus", "new-testament-letters-historical-context", "new-testament-letters-literary-context", "apocalyptic-literature"],
    },
  ],
  sourceNote:
    "The teaching videos, transcripts, and study guides in this series are provided by BibleProject. Ownership and attribution appear with each lesson. Faith Changes Everything links to BibleProject’s official teaching sources and hosts approved supporting documents for convenient study access.",
};
