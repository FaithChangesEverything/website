export type BibleStudyGroupId =
  | "study-skills"
  | "foundations-themes"
  | "books-passages"
  | "fce-tracks";

export type BibleStudyLessonResource = {
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
};

export type BibleStudyLessonVideo = {
  title: string;
  description: string;
  href?: string;
  streamSrc?: string;
  endPosterSrc?: string;
  endPosterAlt?: string;
  ownerName?: string;
  ownerUrl?: string;
  attribution?: string;
};

export type BibleStudyLessonSummary = {
  slug: string;
  title: string;
  summary: string;
  primaryScripture?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  video?: BibleStudyLessonVideo;
  resources?: BibleStudyLessonResource[];
  resourcesOwnerName?: string;
  resourcesOwnerUrl?: string;
  resourcesAttribution?: string;
};

export type BibleStudySeriesSummary = {
  slug: string;
  title: string;
  summary: string;
  group: BibleStudyGroupId;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type BibleStudySeriesDetail = {
  slug: string;
  title: string;
  introduction: string;
  pastorIntroduction: {
    title: string;
    excerpt: string;
    imageSrc: string;
    videoEmbedUrl?: string;
  };
  lessons: BibleStudyLessonSummary[];
  sourceNote?: string;
};

export type BibleStudyGroup = {
  id: BibleStudyGroupId;
  label: string;
  description: string;
};

// Sequence 13 note:
// Group labels below are working implementation labels only. The Page Layout
// Handbook intentionally leaves final Page 1 category names open for review.
export const bibleStudyGroups: BibleStudyGroup[] = [
  {
    id: "study-skills",
    label: "Learning to Read and Study Scripture",
    description: "Practical studies that help visitors read, understand, and study the Bible with greater confidence.",
  },
  {
    id: "foundations-themes",
    label: "Knowing God and Biblical Themes",
    description: "Studies that explore God’s character, creation, biblical themes, and foundational truths of Scripture.",
  },
  {
    id: "books-passages",
    label: "Books and Passages of the Bible",
    description: "Series that focus on specific passages, teachings, and the larger story of the Old and New Testaments.",
  },
  {
    id: "fce-tracks",
    label: "FCE Bible Study Tracks",
    description: "Faith Changes Everything studies organized to support visitors at different stages of Bible study experience.",
  },
];

export const bibleStudySeries: BibleStudySeriesSummary[] = [
  {
    slug: "character-of-god",
    title: "Character of God",
    summary: "Explore what God reveals about His character and learn how those truths shape the way we understand Him.",
    group: "foundations-themes",
    href: "/bible-studies/character-of-god",
  },
  {
    slug: "all-about-creation",
    title: "All About Creation",
    summary: "Explore the biblical account of creation and the truths Scripture reveals about God, humanity, and the world He made.",
    group: "foundations-themes",
  },
  {
    slug: "how-to-read-the-bible",
    title: "How to Read the Bible",
    summary: "Learn practical principles for reading Scripture carefully, understanding context, and seeing how the Bible fits together.",
    group: "study-skills",
  },
  {
    slug: "how-to-study-the-bible",
    title: "How to Study the Bible",
    summary: "Build practical habits for studying Scripture thoughtfully and applying what you learn to everyday life.",
    group: "study-skills",
  },
  {
    slug: "sermon-on-the-mount",
    title: "Sermon on the Mount",
    summary: "Study Jesus’ teaching in Matthew 5–7 and consider what it means to live as a citizen of His kingdom.",
    group: "books-passages",
  },
  {
    slug: "sermon-on-the-mount-visual-commentaries",
    title: "Sermon on the Mount Visual Commentaries",
    summary: "Explore visual teaching resources that help illuminate the structure, imagery, and message of the Sermon on the Mount.",
    group: "books-passages",
  },
  {
    slug: "biblical-themes",
    title: "Biblical Themes",
    summary: "Trace important themes through Scripture and see how they contribute to the Bible’s unified story.",
    group: "foundations-themes",
  },
  {
    slug: "ten-commandments",
    title: "Ten Commandments",
    summary: "Study the Ten Commandments in their biblical setting and consider what they reveal about God and faithful living.",
    group: "foundations-themes",
  },
  {
    slug: "old-testament",
    title: "Old Testament",
    summary: "Explore the books, story, themes, and covenant history of the Old Testament as they prepare the way for Christ.",
    group: "books-passages",
  },
  {
    slug: "new-testament",
    title: "New Testament",
    summary: "Explore the books and message of the New Testament and the good news of Jesus Christ at its center.",
    group: "books-passages",
  },
  {
    slug: "fce-beginner",
    title: "FCE Bible Studies — Beginner",
    summary: "Foundational Faith Changes Everything studies for visitors who are beginning to explore Scripture and Christian faith.",
    group: "fce-tracks",
  },
  {
    slug: "fce-intermediate",
    title: "FCE Bible Studies — Intermediate",
    summary: "Studies designed to deepen biblical understanding and strengthen growing habits of Scripture study.",
    group: "fce-tracks",
  },
  {
    slug: "fce-advanced",
    title: "FCE Bible Studies — Advanced",
    summary: "Deeper FCE studies for visitors ready to explore Scripture, doctrine, and biblical themes in greater detail.",
    group: "fce-tracks",
  },
];

const characterOfGodLessons: BibleStudyLessonSummary[] = [
  {
    slug: "character-of-god-in-exodus",
    title: "The Character of God in Exodus",
    summary: "Begin with Exodus 34:6–7, where God reveals the character traits that form the foundation of this series.",
    primaryScripture: "Exodus 34:6–7",
    href: "/bible-studies/character-of-god/character-of-god-in-exodus",
    imageSrc: "/images/bible-studies/character-of-god/the-character-of-god-in-exodus.jpg",
    imageAlt: "Moses before Mount Sinai beneath radiant light",
    video: {
      title: "Exodus 34:6–7",
      description:
        "Watch the primary teaching for this study and explore the passage that introduces the character traits developed throughout the series.",
      href: "https://bibleproject.com/videos/character-of-god-exodus/",
      streamSrc:
        "https://stream.mux.com/uT027UvyOqrajQXVB00DVN73NYfkwm9PO7nbLkrbXYkMI/high.mp4",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/character-of-god-in-exodus/01-doc-2026-00075-cog-exodus-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into Exodus 34:6–7 with companion notes and study material that expand on the passage and its biblical context.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/character-of-god-in-exodus/01-doc-2026-00076-cog-exodus-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
  {
    slug: "compassion",
    title: "Compassion",
    summary: "Learning about God’s compassion, or Rachamim (רַחֲמִים).",
    primaryScripture: "Exodus 34:6",
    href: "/bible-studies/character-of-god/compassion",
    imageSrc: "/images/bible-studies/character-of-god/compassion.jpg",
    imageAlt: "Jesus showing compassion to a person in need",
    video: {
      title: "Rakhamim / Compassion",
      description:
        "Explore the Hebrew word for compassion and see how God’s deep care moves Him to act throughout Scripture and is embodied in Jesus.",
      href: "https://bibleproject.com/videos/character-of-god-compassion/",
      streamSrc:
        "https://stream.mux.com/JpuAhWojl2jdvdmGRvMrUnS9NDB1JA8RuoVNw1z4xJk/high.mp4",
      endPosterSrc:
        "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/compassion/02-img-2026-00092-cog-compassion-poster.png",
      endPosterAlt: "BibleProject Character of God Compassion study poster",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/compassion/02-doc-2026-00070-cog-compassion-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Poster",
        description:
          "Open the original visual summary that accompanies this BibleProject lesson on God’s compassion.",
        href:
          "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/compassion/02-img-2026-00092-cog-compassion-poster.png",
        actionLabel: "Open Poster",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into the biblical language, passages, and themes developed in the teaching on God’s compassion.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/compassion/02-doc-2026-00071-cog-compassion-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
  {
    slug: "grace",
    title: "Grace",
    summary: "Learning about God’s grace through the Hebrew words khanun and khen.",
    primaryScripture: "Exodus 34:6",
    href: "/bible-studies/character-of-god/grace",
    imageSrc: "/images/bible-studies/character-of-god/grace.jpg",
    imageAlt: "Jesus extending a helping hand in grace",
    video: {
      title: "Khen / Grace",
      description:
        "Explore the Hebrew words khanun and khen and see how Scripture reveals God as gracious, generous, and full of undeserved favor.",
      href: "https://bibleproject.com/videos/character-of-god-grace/",
      streamSrc:
        "https://stream.mux.com/Tkl7o1XsC5oPuOUD4eXjzBCkh6KwagG9XQJsjM01300eo/high.mp4?download=khen-grace.mp4",
      endPosterSrc:
        "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/grace/03-img-2026-00093-cog-grace-poster.png",
      endPosterAlt: "BibleProject Character of God Grace study poster",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/grace/03-doc-2026-00071-cog-grace-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Poster",
        description:
          "Open the original visual summary that accompanies this BibleProject lesson on God’s grace.",
        href:
          "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/grace/03-img-2026-00093-cog-grace-poster.png",
        actionLabel: "Open Poster",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into the biblical language, passages, and themes developed in the teaching on God’s grace.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/grace/03-doc-2026-00173-cog-grace-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
  {
    slug: "slow-to-anger",
    title: "Slow to Anger",
    summary: "Learning what Scripture means when God is described as ’erek ’apayim—slow to anger.",
    primaryScripture: "Exodus 34:6",
    href: "/bible-studies/character-of-god/slow-to-anger",
    imageSrc: "/images/bible-studies/character-of-god/slow-to-anger.jpg",
    imageAlt: "Jesus responding calmly during a tense confrontation",
    video: {
      title: "’Erek ’Appayim / Slow to Anger",
      description:
        "Explore the Hebrew phrase ’erek ’appayim and see how Scripture reveals God as patient, giving people time to respond while remaining just in the face of evil.",
      href: "https://bibleproject.com/videos/slow-to-anger/",
      streamSrc:
        "https://stream.mux.com/2kAHepEr200X6njitmKW6uhKRaAvZL3m4CqvEGq6F3nU/high.mp4?download=erek-appayim-slow-to-anger.mp4",
      endPosterSrc:
        "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/slow-to-anger/04-img-2026-00094-cog-slow2anger-poster.png",
      endPosterAlt: "BibleProject Character of God Slow to Anger study poster",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/slow-to-anger/04-doc-2026-00073-cog-slow2anger-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Poster",
        description:
          "Open the original visual summary that accompanies this BibleProject lesson on God’s patience and what it means for Him to be slow to anger.",
        href:
          "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/slow-to-anger/04-img-2026-00094-cog-slow2anger-poster.png",
        actionLabel: "Open Poster",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into the biblical language, passages, and themes developed in the teaching on God being slow to anger.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/slow-to-anger/04-doc-2026-00172-cog-slow2anger-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
  {
    slug: "loyal-love",
    title: "Loyal Love",
    summary: "Learning about God’s loyal love, or khesed.",
    primaryScripture: "Exodus 34:6",
    href: "/bible-studies/character-of-god/loyal-love",
    imageSrc: "/images/bible-studies/character-of-god/loyal-love.jpg",
    imageAlt: "Jesus surrounded by a family in warm evening light",
    video: {
      title: "Khesed / Loyal Love",
      description:
        "Explore the Hebrew word khesed and see how Scripture reveals God’s love as loyal, generous, and committed to keeping His promises.",
      href: "https://bibleproject.com/videos/loyal-love/",
      streamSrc:
        "https://stream.mux.com/hpLwKf00Sdlgv01Nwk4pjdoq9BLYOlKTXAjD7J1Cbn8AE/high.mp4?download=khesed-loyal-love.mp4",
      endPosterSrc:
        "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/loyal-love/05-img-2026-00095-cog-loyallove-poster.png",
      endPosterAlt: "BibleProject Character of God Loyal Love study poster",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/loyal-love/05-doc-2026-00073-cog-loyallove-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Poster",
        description:
          "Open the original visual summary that accompanies this BibleProject lesson on God’s loyal love.",
        href:
          "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/loyal-love/05-img-2026-00095-cog-loyallove-poster.png",
        actionLabel: "Open Poster",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into the biblical language, passages, and themes developed in the teaching on God’s loyal love.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/loyal-love/05-doc-2026-00175-cog-loyallove-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
  {
    slug: "faithful",
    title: "Faithful",
    summary: "Learning about God’s faithfulness, or emet.",
    primaryScripture: "Exodus 34:6",
    href: "/bible-studies/character-of-god/faithful",
    imageSrc: "/images/bible-studies/character-of-god/faithful.jpg",
    imageAlt: "A faithful shepherd watching over sheep at sunset",
    video: {
      title: "Emet / Faithfulness",
      description:
        "Explore the Hebrew word emet and see how Scripture reveals God as faithful, reliable, and worthy of our trust.",
      href: "https://bibleproject.com/videos/faithful/",
      streamSrc:
        "https://stream.mux.com/gmD02AQLqIQ008hWiZiSn5p00teQKSEWtz5E01myRidVEjY/high.mp4?download=emet-faithfulness.mp4",
      endPosterSrc:
        "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/faithful/06-img-2026-00096-cog-faithful-poster.png",
      endPosterAlt: "BibleProject Character of God Faithful study poster",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/faithful/06-doc-2026-00074-cog-faithful-script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Study Poster",
        description:
          "Open the original visual summary that accompanies this BibleProject lesson on God’s faithfulness.",
        href:
          "https://resources.faithchangeseverything.org/images/bible-studies/character-of-god/faithful/06-img-2026-00096-cog-faithful-poster.png",
        actionLabel: "Open Poster",
      },
      {
        title: "Study Guide",
        description:
          "Go deeper into the biblical language, passages, and themes developed in the teaching on God’s faithfulness.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/character-of-god/faithful/06-doc-2026-00176-cog-faithful-studyguide.pdf",
        actionLabel: "Open Study Guide",
      },
    ],
  },
];

export const bibleStudySeriesDetails: BibleStudySeriesDetail[] = [
  {
    slug: "character-of-god",
    title: "Character of God",
    introduction:
      "Centered on Exodus 34:6–7, this series explores five characteristics God reveals about Himself—compassion, grace, patience, loyal love, and faithfulness—and follows those truths through the biblical story.",
    pastorIntroduction: {
      title: "A Personal Introduction from Pastor Richard",
      excerpt:
        "Knowing the character of God provides the foundation for a deeper and more stable relationship with Him. This study is designed to help you move beyond simply knowing about God and grow in knowing Him through what He has revealed in Scripture.",
      imageSrc: "/images/pastor-richard.png",
      videoEmbedUrl:
        "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/51bacf0888847506af85d4a1c813d9a7/iframe",
    },
    lessons: characterOfGodLessons,
    sourceNote:
      "Some teaching resources in this series are provided by BibleProject. Ownership and attribution will appear with each third-party resource on the individual study pages.",
  },
];

export function getBibleStudySeriesDetail(slug: string) {
  return bibleStudySeriesDetails.find((series) => series.slug === slug);
}
