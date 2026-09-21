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
  aboutTitle?: string;
  studiesTitle?: string;
  studiesIntroduction?: string;
  pastorIntroduction: {
    title: string;
    excerpt: string;
    body?: string[];
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
    href: "/bible-studies/ten-commandments",
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

const tenCommandmentsLessons: BibleStudyLessonSummary[] = [
  {
    slug: "introduction",
    title: "10 Commandments Introduction",
    summary:
      "Begin by seeing the Ten Commandments as more than a list of rules—as wisdom that invites God’s people into faithful, life-giving relationship with Him and with one another.",
    primaryScripture: "Exodus 20:1–17",
    href: "/bible-studies/ten-commandments/introduction",
    imageSrc: "/images/bible-studies/ten-commandments/img-202600096-10command-intro.png",
    imageAlt: "Visual introduction to the Ten Commandments Bible study series",
    video: {
      title: "The 10 Commandments as Wisdom",
      description:
        "Explore how the Ten Commandments function as wisdom within the larger biblical story and invite God’s people to listen to His voice.",
      href: "https://bibleproject.com/videos/the-10-commandments-as-wisdom/",
      streamSrc:
        "https://stream.mux.com/KSGWKK67Vv8d5P6VKQIo1McPwLlL5ApTnBx8Zo5D900o/high.mp4?download=the-10-commandments-as-wisdom.mp4",
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
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00004-01-intro-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-1-no-other-god-before-me",
    title: "Command 1 No Other God Before Me",
    summary:
      "Explore why God’s covenant with Israel calls for undivided allegiance and what it means to place no other god before Him.",
    primaryScripture: "Exodus 20:2–3",
    href: "/bible-studies/ten-commandments/command-1-no-other-god-before-me",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00096-command1.png",
    imageAlt: "Illustration for the first commandment, no other god before me",
    video: {
      title: "1st Commandment: No Other Gods",
      description:
        "Explore the first commandment in its covenant setting and why Yahweh calls His people to wholehearted allegiance.",
      href: "https://bibleproject.com/videos/1st-commandment-no-other-gods/",
      streamSrc:
        "https://stream.mux.com/kmUoo4745gIarp4nhib958PnPPpD9YGkfvmtZrIvLyo/high.mp4?download=1st-commandment-no-other-gods.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the first commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00006-commandment-1-other-gods-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-2-no-idols",
    title: "Command 2 No Idols",
    summary:
      "Consider why God forbids idols and how reducing God to an image distorts both our understanding of Him and our calling as His image-bearers.",
    primaryScripture: "Exodus 20:4–6",
    href: "/bible-studies/ten-commandments/command-2-no-idols",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00097-command2.png",
    imageAlt: "Illustration for the second commandment, no idols",
    video: {
      title: "2nd Commandment: No Idols",
      description:
        "Explore why God forbids the making of idols and how the command points back to humanity’s calling to bear God’s image.",
      href: "https://bibleproject.com/videos/2nd-commandment-no-idols/",
      streamSrc:
        "https://stream.mux.com/00yUitmVFHOPNfaiWxOVhb3Q00i8ul01Fb00f1AYZOr00KBE/high.mp4?download=2nd-commandment-no-idols.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the second commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00007-commandment-2-idols-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-3-name-in-vain",
    title: "Command 3 Do Not Use the Name of the Lord in Vain",
    summary:
      "Explore what it means to carry God’s name faithfully and how His people are called to represent His character rather than carry His name in vain.",
    primaryScripture: "Exodus 20:7",
    href: "/bible-studies/ten-commandments/command-3-name-in-vain",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00098-command3.png",
    imageAlt: "Illustration for the third commandment, do not use the Lord’s name in vain",
    video: {
      title: "3rd Commandment: Do Not Carry the Name in Vain",
      description:
        "Explore the biblical meaning of carrying God’s name and what faithful representation of Yahweh looks like.",
      href: "https://bibleproject.com/videos/3rd-commandment-do-not-carry-the-name-in-vain/",
      streamSrc:
        "https://stream.mux.com/z9olfyanjRfrnP00HvQS8o1uVNFUYtwy6OWOtxht1zkk/high.mp4?download=3rd-commandment-do-not-carry-the-name-in-vain.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the third commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00008-commandment-3-name-vain-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-4-remember-the-sabbath",
    title: "Command 4 Remember the Sabbath",
    summary:
      "See how Sabbath rest reaches back to creation and teaches God’s people to stop, trust, and remember that life is sustained by Him.",
    primaryScripture: "Exodus 20:8–11",
    href: "/bible-studies/ten-commandments/command-4-remember-the-sabbath",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00099-command4.png",
    imageAlt: "Illustration for the fourth commandment, remember the Sabbath",
    video: {
      title: "4th Commandment: Remember the Sabbath",
      description:
        "Explore the Sabbath command, its connection to creation, and the wisdom of regularly stopping from labor to rest and trust God.",
      href: "https://bibleproject.com/videos/4th-commandment-remember-the-sabbath/",
      streamSrc:
        "https://stream.mux.com/zBn8XAIDZ01KUIX8de5GR8itPf00UwV9yXKjwFRvLqqkg/high.mp4?download=4th-commandment-remember-the-sabbath.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the fourth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00009-commandment-4-sabbath-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-5-honor-parents",
    title: "Command 5 Honor Parents",
    summary:
      "Explore why honoring father and mother is tied to life in the land and how this command shapes relationships across generations.",
    primaryScripture: "Exodus 20:12",
    href: "/bible-studies/ten-commandments/command-5-honor-parents",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00100-command5.png",
    imageAlt: "Illustration for the fifth commandment, honor parents",
    video: {
      title: "5th Commandment: Honor Your Father and Mother",
      description:
        "Explore the connection between honoring parents, covenant community, and the gift of life in the land.",
      href: "https://bibleproject.com/videos/5th-commandment-honor-your-father-and-mother/",
      streamSrc:
        "https://stream.mux.com/e01mjh6vZk5IPofW02m2qVF6f1ltH15027009QbFLKHZDSo/high.mp4?download=5th-commandment-honor-your-father-and-mother.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the fifth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00010-commandment-5-honor-parents-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-6-do-not-kill",
    title: "Command 6 Do Not Kill",
    summary:
      "Consider the breadth of the command against taking life and the positive calling to honor, protect, and preserve human life.",
    primaryScripture: "Exodus 20:13",
    href: "/bible-studies/ten-commandments/command-6-do-not-kill",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00101-command6.png",
    imageAlt: "Illustration for the sixth commandment, do not kill",
    video: {
      title: "6th Commandment: Do Not Kill",
      description:
        "Explore the Hebrew language behind the sixth commandment and how this prohibition invites reflection on the value and preservation of human life.",
      href: "https://bibleproject.com/videos/6th-commandment-do-not-kill/",
      streamSrc:
        "https://stream.mux.com/O7kt6eWM5pD9b41ESvWWYSpZUVWCO7jvz9DbYUeSWwc/high.mp4?download=6th-commandment-do-not-kill.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the sixth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00011-commandment-6-kill-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-7-do-not-commit-adultery",
    title: "Command 7 Do Not Commit Adultery",
    summary:
      "Explore why God protects the marriage covenant and how marital faithfulness points toward covenant love and commitment.",
    primaryScripture: "Exodus 20:14",
    href: "/bible-studies/ten-commandments/command-7-do-not-commit-adultery",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00102-command7.png",
    imageAlt: "Illustration for the seventh commandment, do not commit adultery",
    video: {
      title: "7th Commandment: Do Not Commit Adultery",
      description:
        "Explore why the seventh commandment protects marriage and how covenant faithfulness fits into the larger biblical story.",
      href: "https://bibleproject.com/videos/7th-commandment-do-not-commit-adultery/",
      streamSrc:
        "https://stream.mux.com/xxE8m6AtIPZOCwL8N1x966Ma1WtL9sUcPVNFBSho6hA/high.mp4?download=7th-commandment-do-not-commit-adultery.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the seventh commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00012-commandment-7-adultery-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-8-do-not-steal",
    title: "Command 8 Do Not Steal",
    summary:
      "Look beneath the act of stealing to the desires and beliefs that drive it, and consider God’s invitation toward trust and generosity.",
    primaryScripture: "Exodus 20:15",
    href: "/bible-studies/ten-commandments/command-8-do-not-steal",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00103-command8.png",
    imageAlt: "Illustration for the eighth commandment, do not steal",
    video: {
      title: "8th Commandment: Do Not Steal",
      description:
        "Explore what lies beneath stealing and how the eighth commandment points toward generosity, trust, and care for our neighbor.",
      href: "https://bibleproject.com/videos/8th-commandment-do-not-steal/",
      streamSrc:
        "https://stream.mux.com/tSyEgUdICcLfGRLXSIyrD3xNJ6QvArRoOrHbiOrBsKo/high.mp4?download=8th-commandment-do-not-steal.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the eighth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00013-commandment-8-steal-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-9-do-not-bear-false-witness",
    title: "Command 9 Do Not Bear False Witness",
    summary:
      "Explore the communal harm caused by false witness and how truthful speech can protect our neighbor, especially the vulnerable.",
    primaryScripture: "Exodus 20:16",
    href: "/bible-studies/ten-commandments/command-9-do-not-bear-false-witness",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00103-command9.png",
    imageAlt: "Illustration for the ninth commandment, do not bear false witness",
    video: {
      title: "9th Commandment: Do Not Bear False Witness",
      description:
        "Explore the ninth commandment’s focus on truthful witness and why truth matters for justice and the health of a community.",
      href: "https://bibleproject.com/videos/9th-commandment-do-not-bear-false-witness/",
      streamSrc:
        "https://stream.mux.com/Bvd6sk2gc01YHdl02iRYMxfIs2Me1Yj5qOc5mLExZF02HY/high.mp4?download=9th-commandment-do-not-bear-false-witness.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the ninth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00014-commandment-9-false-witness-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "command-10-do-not-covet",
    title: "Command 10 Do Not Covet",
    summary:
      "Examine the desires beneath our actions and consider what it means to align what we want with God’s good purposes.",
    primaryScripture: "Exodus 20:17",
    href: "/bible-studies/ten-commandments/command-10-do-not-covet",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00104-command10.png",
    imageAlt: "Illustration for the tenth commandment, do not covet",
    video: {
      title: "10th Commandment: Do Not Desire Your Neighbor’s Possessions",
      description:
        "Explore why the Ten Commandments end by addressing desire itself and how our desires can be shaped toward what is good.",
      href: "https://bibleproject.com/videos/10th-commandment-do-not-desire-your-neighbors-possessions/",
      streamSrc:
        "https://stream.mux.com/Ol2q2DZPm5SfBW02XSdULNbzxfEAzGQK4hDKckepQG7Y/high.mp4?download=10th-commandment-do-not-desire-your-neighbors-possessions.mp4",
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
          "Read the complete teaching transcript and continue exploring the biblical context of the tenth commandment.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00015-commandment-10-neighbors-possessions-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
  {
    slug: "summary",
    title: "Summary of the 10 Commandments",
    summary:
      "Look back across all ten commands and see the unified vision of wisdom, love, truth, generosity, and faithful relationship they present.",
    primaryScripture: "Exodus 20:1–17",
    href: "/bible-studies/ten-commandments/summary",
    imageSrc: "/images/bible-studies/ten-commandments/img-2026-00105-10command-summary.png",
    imageAlt: "Summary illustration for the Ten Commandments Bible study series",
    video: {
      title: "Looking Back on the 10 Commandments",
      description:
        "Review how the Ten Commandments invite us to hear God’s wisdom and meditate on the larger story of the Bible.",
      href: "https://bibleproject.com/videos/looking-back-on-the-10-commandments/",
      streamSrc:
        "https://stream.mux.com/aNx7wHtkyDktYh33RLpJls1fH00zwURTd016326QkWVsU/high.mp4?download=looking-back-on-the-10-commandments.mp4",
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
          "Read the complete summary transcript and review the themes developed across the Ten Commandments series.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/10-commandments/doc-2026-00005-02-summary-script.pdf",
        actionLabel: "Open Transcript",
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
    aboutTitle: "Knowing the Character of God",
    studiesTitle: "Explore the Character of God",
    studiesIntroduction:
      "Begin with the foundation in Exodus, then continue through the characteristics God reveals about Himself.",
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
  {
    slug: "ten-commandments",
    title: "Ten Commandments",
    introduction:
      "The Ten Commandments are more than a list of rules. Given within God’s covenant relationship with Israel, they reveal His character, His wisdom, and the kind of faithful life He calls His people to live.",
    aboutTitle: "Understanding the Ten Commandments",
    studiesTitle: "Explore the Ten Commandments",
    studiesIntroduction:
      "Begin with the introduction, continue through each commandment in order, and finish with the summary that brings the series together.",
    pastorIntroduction: {
      title: "A Personal Introduction from Pastor Richard",
      excerpt:
        "The Ten Commandments are some of the most familiar words in the Bible, but familiarity does not always mean understanding.",
      body: [
        "The Ten Commandments are some of the most familiar words in the Bible, but familiarity does not always mean understanding. It can be easy to see them simply as a list of rules—things we are supposed to do and things we are supposed to avoid. But when we slow down and look more carefully, we discover something much deeper. These commandments reveal the character of God, the kind of relationship He desires with His people, and the way He calls us to live in relationship with one another. They were given to a people God had already rescued, and they showed Israel what it meant to live as His covenant people.",
        "Throughout this series, we will look at each of the Ten Commandments individually, along with an introduction and summary that help place them within the larger story of Scripture. My hope is that you will not simply ask, “What does this commandment prohibit?” but also, “What does this teach me about God, about my heart, and about the life He desires for me?” These videos and their accompanying BibleProject material are designed to help us explore those questions more deeply. There are no separate study guides for this series, but I encourage you to use the Faith Changes Everything Bible Study resources as you work through each lesson—taking notes, reading the surrounding Scripture, praying over what you learn, and allowing God’s Word to shape both what you believe and how you live.",
        "My prayer is that this series will help you see the Ten Commandments not merely as words carved into stone thousands of years ago, but as part of the larger biblical story that points us toward loving God wholeheartedly and loving our neighbor faithfully. Take your time as you move through the lessons, ask questions, return to the Scriptures often, and most importantly, allow what you learn about God to draw you closer to Him.",
      ],
      imageSrc: "/images/pastor-richard.png",
      videoEmbedUrl:
        "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/aa860f7143448b6e793d7ea015a08419/iframe",
    },
    lessons: tenCommandmentsLessons,
    sourceNote:
      "The teaching videos and transcripts in this series are provided by BibleProject. Ownership and attribution appear with each third-party resource on the individual study pages.",
  },
];

export function getBibleStudySeriesDetail(slug: string) {
  return bibleStudySeriesDetails.find((series) => series.slug === slug);
}
