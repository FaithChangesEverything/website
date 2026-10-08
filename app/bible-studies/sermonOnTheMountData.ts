import type { BibleStudyLessonSummary, BibleStudySeriesDetail } from "./data";

const bibleProjectOwner = {
  ownerName: "BibleProject",
  ownerUrl: "https://bibleproject.com/",
  attribution: "BibleProject is the author and owner of this video.",
};

const bibleProjectResources = {
  resourcesOwnerName: "BibleProject",
  resourcesOwnerUrl: "https://bibleproject.com/",
  resourcesAttribution:
    "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
};

export const sermonOnTheMountLessons: BibleStudyLessonSummary[] = [
  {
    slug: "intro-to-sermon-on-the-mount",
    title: "Intro to the Sermon on the Mount",
    summary:
      "Begin with an overview of Jesus’ teaching in Matthew 5–7, then explore a visual commentary that traces the design and message of the sermon as a whole.",
    href: "/bible-studies/sermon-on-the-mount/intro-to-sermon-on-the-mount",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/01-SOTM.png",
    imageAlt: "Sermon on the Mount study artwork",
    videos: [
      {
        title: "Intro to the Sermon on the Mount",
        description:
          "Explore an introduction to the largest collection of Jesus’ teachings and the setting of the Sermon on the Mount.",
        href: "https://bibleproject.com/videos/intro-to-sermon-on-the-mount/",
        streamSrc:
          "https://stream.mux.com/83STGVxtcO01902cUvy00g1SJzT4xju2no7DTh9pCZJvRE/high.mp4?download=intro-to-the-sermon-on-the-mount.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5–7: Sermon Overview",
        description:
          "Look more closely at the literary design and big-picture message of Jesus’ Sermon on the Mount.",
        href: "https://bibleproject.com/videos/matthew-5-7-sermon-overview/",
        streamSrc:
          "https://stream.mux.com/DMQYPSesvzZyWsOGKR02eA7dSQu3T028FDNO6EDW01k8PU/high.mp4?download=matthew-5-7-sermon-overview.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the introductory Sermon on the Mount teaching.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00161-01-intro-sermon-on-mount.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Commentary Transcript",
        description: "Read the transcript and Scripture references for the Matthew 5–7 sermon overview.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount-commetaries/doc-2026-00171-01-Matthew%205-7-Script%20References.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "the-beatitudes",
    title: "The Beatitudes",
    summary:
      "Explore the opening blessings of Jesus’ sermon and then go deeper into Matthew 5:3–16 through the companion visual commentary.",
    href: "/bible-studies/sermon-on-the-mount/the-beatitudes",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/02-beautitudes.png",
    imageAlt: "Beatitudes study artwork",
    videos: [
      {
        title: "The Beatitudes",
        description:
          "Explore Jesus’ opening statements in the Sermon on the Mount and how they announce the arrival of God’s Kingdom.",
        href: "https://bibleproject.com/videos/the-beatitudes/",
        streamSrc:
          "https://stream.mux.com/Ikf7tTbhu7Nba75THD00kHPRPX0100aDAEUxHWgj8ozmI4/high.mp4?download=the-beatitudes.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5:3–16: Beatitudes",
        description:
          "Examine the Beatitudes, salt, light, and the city on a hill in their place within the opening of Jesus’ sermon.",
        href: "https://bibleproject.com/videos/matthew-5-3-16-beatitudes/",
        streamSrc:
          "https://stream.mux.com/QitMM45oBYD4omgwwA01NI3hAStz02PyA1LxYPgFJLsFo/high.mp4?download=matthew-53-16-beatitudes.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the BibleProject teaching on the Beatitudes.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00162-02-beatitudes-Script.pdf",
        actionLabel: "Open Transcript",
      },
      {
        title: "Commentary Transcript",
        description: "Read the companion transcript for the Matthew 5:3–16 Beatitudes commentary.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount-commetaries/doc-2026-00172-02-Beatitudes-overview-Script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "jesus-fulfills-the-law",
    title: "Jesus Fulfills the Law",
    summary:
      "Study Jesus’ teaching about righteousness and the Torah and Prophets, followed by commentary on Matthew 5:17–20.",
    href: "/bible-studies/sermon-on-the-mount/jesus-fulfills-the-law",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/03-jesusfulfillslaw.png",
    imageAlt: "Jesus fulfills the law study artwork",
    videos: [
      {
        title: "Jesus Fulfills the Law",
        description:
          "Explore Jesus’ vision of righteousness and how his teaching fulfills the story and wisdom of the Torah and Prophets.",
        href: "https://bibleproject.com/videos/jesus-fulfills-the-law/",
        streamSrc:
          "https://stream.mux.com/OfeVSkoOnWcqajEKVZ901iTfWeWs3yN01Xr8bWzF004Yvc/high.mp4?download=jesus-fulfills-the-law.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5:17–20: Righteousness and Jesus’ Bible",
        description:
          "Go deeper into Jesus’ words about the Torah, the Prophets, and the greater righteousness he calls his followers to embody.",
        href: "https://bibleproject.com/videos/matthew-5-17-20-righteousness-and-jesus-bible/",
        streamSrc:
          "https://stream.mux.com/GbCmMEQi75uPMKskmo01NEcbzQ00LUk8ugVXJK3iMzsSE/high.mp4?download=matthew-517-20-righteousness-and-jesus-bible.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on Jesus fulfilling the law.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00163-03-Jesus-fullfills-law-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "murder-adultery-and-divorce",
    title: "Murder, Adultery, and Divorce",
    summary:
      "Explore the wisdom Jesus reveals beneath laws about murder, adultery, and divorce, with focused commentaries on contempt and lust.",
    href: "/bible-studies/sermon-on-the-mount/murder-adultery-and-divorce",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/04-MurderAdultDivorce.png",
    imageAlt: "Murder adultery and divorce study artwork",
    videos: [
      {
        title: "Murder, Adultery, and Divorce",
        description:
          "Explore how Jesus addresses the desires and attitudes beneath outward behavior in his teaching on murder, adultery, and divorce.",
        href: "https://bibleproject.com/videos/wisdom-underneath-laws/",
        streamSrc:
          "https://stream.mux.com/2zpmXs00DUhjxKnmYVBTYpUiLWayRQrkavB01gu6gGbaw/high.mp4?download=murder-adultery-and-divorce.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5:21–22: Murder and Contempt",
        description:
          "Look more closely at Jesus’ connection between murder, anger, insults, and the contempt that devalues another person.",
        href: "https://bibleproject.com/videos/matthew-521-22-murder-and-contempt/",
        streamSrc:
          "https://stream.mux.com/Gw2rkyn2OJ1wb8hcRp01LkQ3ftiJlaE0001aqTnuQsUdbQ/high.mp4?download=matthew-521-22-murder-and-contempt.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5:27–28: Adultery and Lust",
        description:
          "Look more closely at Jesus’ teaching about adultery, lust, and the way people are viewed in the heart and imagination.",
        href: "https://bibleproject.com/videos/matthew-527-28-adultery-and-lust/",
        streamSrc:
          "https://stream.mux.com/mnDok7dMFAve02Pfra8ZOVnftrHSB21GgUZI4DIxXBQU/high.mp4?download=matthew-527-28-adultery-and-lust.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on murder, adultery, and divorce.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00164-04-mur-adul-div-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "oaths-retaliation-and-enemy-love",
    title: "Oaths, Retaliation, and Enemy Love",
    summary:
      "Study Jesus’ teaching on truthfulness, retaliation, and love for enemies, with a focused commentary on oaths and truth-telling.",
    href: "/bible-studies/sermon-on-the-mount/oaths-retaliation-and-enemy-love",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/05-OathRetEnemyLove.png",
    imageAlt: "Oaths retaliation and enemy love study artwork",
    videos: [
      {
        title: "Oaths, Retaliation, and Enemy Love",
        description:
          "Explore the wisdom Jesus reveals beneath laws about oaths, revenge, and enemies in Matthew 5.",
        href: "https://bibleproject.com/videos/wisdom-within-laws-about-oaths-retaliation-and-enemy-love/",
        streamSrc:
          "https://stream.mux.com/vjNu00fhh6VpkYQ9pycVWXhLAv9GbKtH13ZSalwOwKow/high.mp4?download=oaths-retaliation-and-enemy-love.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 5:33–37: Oaths and Truth-Telling",
        description:
          "Examine Jesus’ call to honesty and integrity and his warning against using oaths to manipulate or deceive.",
        href: "https://bibleproject.com/videos/matthew-5-33-37-oaths/",
        streamSrc:
          "https://stream.mux.com/BoSAqDcSG01h6018CZ3mpq6W1M2pbJrTJNYtMdzUrf8qk/high.mp4?download=matthew-533-37-oaths-and-truth-telling.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on oaths, retaliation, and enemy love.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00165-05-oath-ret-enmlve-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "warnings-about-religious-practices",
    title: "Warnings About Religious Practices",
    summary:
      "Explore Jesus’ warnings about religious hypocrisy and then examine his teaching on generosity and the true reward.",
    href: "/bible-studies/sermon-on-the-mount/warnings-about-religious-practices",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/06-religiouspractice.png",
    imageAlt: "Warnings about religious practices study artwork",
    videos: [
      {
        title: "Warnings About Religious Practices",
        description:
          "Explore Jesus’ warnings in Matthew 6 about practicing righteousness for public recognition rather than from a heart directed toward God.",
        href: "https://bibleproject.com/videos/warnings-about-religious-practices/",
        streamSrc:
          "https://stream.mux.com/qfikVrPuNDqwDyNhAK01buX6KtmE9v6h1G1JCOc0201VNo/high.mp4?download=warnings-about-religious-practices.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 6:1–4: Generosity and the True Reward",
        description:
          "Look more closely at Jesus’ teaching about generosity, public recognition, and seeking reward from God rather than people.",
        href: "https://bibleproject.com/videos/matthew-6-1-4-generosity-and-true-reward/",
        streamSrc:
          "https://stream.mux.com/00UgyQ01VU9IaQjQb02v7SMZ4u6wKrfsKmTzhFlZSWFy9w/high.mp4?download=matthew-61-4-generosity-and-the-true-reward.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on warnings about religious practices.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00166-06-religious-practices-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "the-lords-prayer",
    title: "The Lord’s Prayer",
    summary:
      "Study the prayer Jesus gives his followers and then go deeper into Matthew 6:9–13 through the companion commentary.",
    href: "/bible-studies/sermon-on-the-mount/the-lords-prayer",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/07-lordsprayer.png",
    imageAlt: "The Lord's Prayer study artwork",
    videos: [
      {
        title: "The Lord’s Prayer",
        description:
          "Explore how Jesus teaches his followers to align their desires with the purposes of God’s Kingdom through prayer.",
        href: "https://bibleproject.com/videos/lords-prayer/",
        streamSrc:
          "https://stream.mux.com/Ok02b3DgDhHj1pqIXldDtkGTMrkrygpUlJpxaCzqq6K4/high.mp4?download=the-lords-prayer.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 6:9–13: The Prayer of Jesus",
        description:
          "Examine the Lord’s Prayer line by line and explore how its requests fit within the larger biblical story and Jesus’ sermon.",
        href: "https://bibleproject.com/videos/matthew-6-9-13-prayer-jesus/",
        streamSrc:
          "https://stream.mux.com/6HAd7UQFq61tJvdCW4xwGde5g00brLiPA1F41paRvIng/high.mp4?download=matthew-69-13-the-prayer-of-jesus.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the BibleProject teaching on the Lord’s Prayer.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00167-07-lord-prayer-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "wealth-and-worry",
    title: "Wealth and Worry",
    summary:
      "Explore Jesus’ teaching about possessions, trust, and worry, followed by a focused commentary on true wealth and generosity.",
    href: "/bible-studies/sermon-on-the-mount/wealth-and-worry",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/08-wealthworry.png",
    imageAlt: "Wealth and worry study artwork",
    videos: [
      {
        title: "Wealth and Worry",
        description:
          "Explore Jesus’ teaching about wealth, possessions, trust, and worry in Matthew 6.",
        href: "https://bibleproject.com/videos/wealth-and-worry/",
        streamSrc:
          "https://stream.mux.com/U01wiDwhj602YJPtukuNGOYLYOiWeaTHwFkI3hhEz5CJE/high.mp4?download=wealth-and-worry.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 6:19–23: True Wealth and Generosity",
        description:
          "Look more closely at how Jesus connects treasure, vision, generosity, and a person’s relationship with God.",
        href: "https://bibleproject.com/videos/matthew-619-23-true-wealth-and-generosity/",
        streamSrc:
          "https://stream.mux.com/sdgNn7hLjDa00PDuLSGlBhuIprZh7P95xL3swvRtg87I/high.mp4?download=matthew-619-23-true-wealth-and-generosity.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on wealth and worry.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00168-08-wealth-worry-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "wisdom-in-relationships",
    title: "Wisdom in Relationships",
    summary:
      "Study Jesus’ teaching about relationships and discernment, with focused commentaries on judging, pearls before pigs, and the Golden Rule.",
    href: "/bible-studies/sermon-on-the-mount/wisdom-in-relationships",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/09-wisdomrelation.png",
    imageAlt: "Wisdom in relationships study artwork",
    videos: [
      {
        title: "Wisdom in Relationships",
        description:
          "Explore Jesus’ teaching in Matthew 7 about judging others, discernment, prayer, and doing to others as you would have them do to you.",
        href: "https://bibleproject.com/videos/wisdom-in-relationships/",
        streamSrc:
          "https://stream.mux.com/gECIK1hB3lBrkd00reyesZtDdVkQWVBl3PVpoBN5UzSo/high.mp4?download=wisdom-in-relationships.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 7:1–2: Don’t Judge",
        description:
          "Examine Jesus’ warning about judging others and the standard by which we measure people.",
        href: "https://bibleproject.com/videos/matthew-7-1-2-dont-judge/",
        streamSrc:
          "https://stream.mux.com/yM6gt7pUVdDfxEzbC5sEUmCwaCni9Fg1voS4B3gdZh8/high.mp4?download=matthew-71-2-dont-judge.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 7:6: Pearls Before Pigs",
        description:
          "Explore Jesus’ challenging image about pearls before pigs and the wisdom required in relationships.",
        href: "https://bibleproject.com/videos/matthew-7-6-pearls-pigs/",
        streamSrc:
          "https://stream.mux.com/963tjVXI9U01n2A5JnK01lDPypodSa2rWNMrm763vjOts/high.mp4?download=matthew-76-pearls-before-pigs.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 7:12: The Golden Rule",
        description:
          "Look more closely at Jesus’ summary of relational wisdom: treating others as you would want them to treat you.",
        href: "https://bibleproject.com/videos/matthew-7-12-golden-rule/",
        streamSrc:
          "https://stream.mux.com/t900wtFSCmAyzhX00kuxRSZtAQmqLVQ2vnKVHyhJlOk8A/high.mp4?download=matthew-712-the-golden-rule.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the teaching on wisdom in relationships.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00169-09-relationships-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
  {
    slug: "the-choice",
    title: "The Choice",
    summary:
      "Conclude the series with Jesus’ call to choose how we will respond to his teaching, followed by commentary on the two houses.",
    href: "/bible-studies/sermon-on-the-mount/the-choice",
    imageSrc: "/images/bible-studies/sermon-on-the-mount/10-choice.png",
    imageAlt: "The choice study artwork",
    videos: [
      {
        title: "The Choice",
        description:
          "Explore the closing images Jesus uses to describe the choice his followers face in responding to his call.",
        href: "https://bibleproject.com/videos/the-choice/",
        streamSrc:
          "https://stream.mux.com/GQuIQuYEH6IoixgZkMyU2sv8T0100N3022A00QrNmGNvONM/high.mp4?download=the-choice.mp4",
        sectionLabel: "PRIMARY TEACHING",
        ...bibleProjectOwner,
      },
      {
        title: "Matthew 7:24–27: The Two Houses",
        description:
          "Examine Jesus’ image of two houses and the difference between hearing his words and putting them into practice.",
        href: "https://bibleproject.com/videos/matthew-7-24-27-two-houses/",
        streamSrc:
          "https://stream.mux.com/w01Gbi00lPlTtA7wyVTS4rLxIHJ65VJNvEI2VkAprMHf8/high.mp4?download=matthew-724-27-the-two-houses.mp4",
        sectionLabel: "COMMENTARY / DEEPER STUDY",
        ...bibleProjectOwner,
      },
    ],
    resources: [
      {
        title: "Primary Teaching Transcript",
        description: "Read the transcript for the concluding teaching on the choice.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/sermon-on-mount/doc-2026-00170-10-choice-script.pdf",
        actionLabel: "Open Transcript",
      },
    ],
    ...bibleProjectResources,
  },
];

export const sermonOnTheMountSeriesDetail: BibleStudySeriesDetail = {
  slug: "sermon-on-the-mount",
  title: "Sermon on the Mount",
  introduction:
    "The Sermon on the Mount in Matthew 5–7 brings together some of Jesus’ clearest teaching about life in the kingdom of God. This series pairs the main BibleProject teachings with related visual commentaries so each lesson can be explored both broadly and in greater detail.",
  overviewTitle: "Walking Through Matthew 5–7",
  lessonsTitle: "Explore the Sermon on the Mount",
  lessonsDescription:
    "Each lesson combines the primary teaching with its related commentary video or videos. Where transcripts are available, they are included on the lesson page for further study.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt:
      "The Sermon on the Mount, found in Matthew chapters 5 through 7, is one of the clearest and most challenging teachings Jesus ever gave. In these chapters, Jesus speaks about what life looks like in the kingdom of God and what it means to follow Him from the heart. He addresses subjects that reach into nearly every part of our lives—our attitudes, our relationships, our desires, our words, our generosity, our prayer, our possessions, our worries, our judgment, our wisdom, and ultimately the choices we make about how we will live.\n\nIn this study, we will walk through the Sermon on the Mount section by section, beginning with the Beatitudes and continuing through Jesus’ teaching on righteousness, anger, lust, truthfulness, generosity, prayer, wealth, worry, relationships, wisdom, and the decisions that shape our lives. Many of the lessons will include both a primary teaching video and a companion commentary video, allowing us to first see the larger message and then look more closely at the meaning of the passage. Where available, transcripts will also be provided to help you study at your own pace. My prayer is that as we move through these teachings together, we will not simply learn what Jesus said, but allow His words to examine our hearts and shape the way we live as His followers.",
    imageSrc: "/images/pastor-richard.png",
    videoEmbedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/81146b5c78d7d455eff20bd922522746/iframe",
    compactLayout: true,
  },
  lessons: sermonOnTheMountLessons,
  sourceNote:
    "The teaching videos and transcripts in this series are provided by BibleProject. Ownership and attribution appear with each third-party resource on the individual study pages.",
};
