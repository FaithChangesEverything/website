import type { BibleStudyLessonSummary, BibleStudySeriesDetail } from "./data";

type BiblicalThemeSeed = {
  slug: string;
  title: string;
  videoUrl: string;
  streamSrc: string;
  scriptUrl: string;
  studyGuideUrl?: string;
  image: string;
  imagePosition?: string;
};

const biblicalThemeSeeds: BiblicalThemeSeed[] = [
  { slug: "anointing", title: "Anointing", videoUrl: "https://bibleproject.com/videos/anointing/", streamSrc: "https://stream.mux.com/6gCy4WaoAMwMDklh02EiCN4PFXRSmFzakfT4KI57UuJc/high.mp4?download=anointing.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00019-anointing-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00020-anointing-studyguide.pdf", image: "anointing.png" },
  { slug: "blessing-and-curse", title: "Blessing and Curse", videoUrl: "https://bibleproject.com/videos/blessing-and-curse/", streamSrc: "https://stream.mux.com/eZyquSwIbH8Aw5vsqdWFxDQ3B3AlRhR02kLTp2sEdchE/high.mp4?download=blessing-and-curse.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00021-blessing-and-curse-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00022-blessing-and-curse-studyguide.pdf", image: "blessing-n-curse.png" },
  { slug: "chaos-dragon", title: "Chaos Dragon", videoUrl: "https://bibleproject.com/videos/chaos-dragon/", streamSrc: "https://stream.mux.com/bVT6yHqsYk00bObQADiMsnaA01QM3sFHkbH8Cj300my7PY/high.mp4?download=chaos-dragon.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00023-chaos-dragon-script.pdf", image: "chaos-dragon.png" },
  { slug: "city", title: "City", videoUrl: "https://bibleproject.com/videos/the-city/", streamSrc: "https://stream.mux.com/SzG1whFfR3RzrjKrpRb1nS02RkjWFNaurimuW6SZeK02U/high.mp4?download=the-city.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00024-city-script.pdf", image: "city.png" },
  { slug: "covenants", title: "Covenants", videoUrl: "https://bibleproject.com/videos/covenants/", streamSrc: "https://stream.mux.com/Qvh5JS2S01EI3y3pkZNGDKLP6Fwx1HlCz4Vkp5jH0071c/high.mp4?download=covenants.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00025-covenants-script.pdf", image: "covenants.png" },
  { slug: "day-of-the-lord", title: "Day of the Lord", videoUrl: "https://bibleproject.com/videos/day-of-the-lord/", streamSrc: "https://stream.mux.com/QCLVg65005EHgvzkioxGmCYyS74NyPhTzFlNmyDUgRSY/high.mp4?download=day-of-the-lord.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00026-day-of-the-lord-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00027-day-of-the-lord-studyguide.pdf", image: "day-of-the-lord.png" },
  { slug: "eternal-life", title: "Eternal Life", videoUrl: "https://bibleproject.com/videos/eternal-life/", streamSrc: "https://stream.mux.com/LpCn027Ipl8F73NwHdGgl7NmaR8vZlUG3rmDDzt58HYw/high.mp4?download=eternal-life.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00028-eternal-life-script.pdf", image: "eternal-life.png" },
  { slug: "exile", title: "Exile", videoUrl: "https://bibleproject.com/videos/exile/", streamSrc: "https://stream.mux.com/BucWzB7EfewcTzArlX6ttdl00s402gBOqDEAQQ3vc3G2A/high.mp4?download=exile.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00029-exile-script.pdf", image: "exile.png" },
  { slug: "exodus-way", title: "Exodus Way", videoUrl: "https://bibleproject.com/videos/the-exodus-way/", streamSrc: "https://stream.mux.com/WhAb01S5TRkjikqlIuQ00ajVRVQuYuYVikJvbeKwIj00SI/high.mp4?download=the-exodus-way.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00030-exodus-way-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00031-exodus-way-studyguide.pdf", image: "exodus-way.png" },
  { slug: "generosity", title: "Generosity", videoUrl: "https://bibleproject.com/videos/generosity/", streamSrc: "https://stream.mux.com/SxFWP5bIJgAcZnRdGO0201rWzUhFsLduC5FDKA023ICwNc/high.mp4?download=generosity.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00032-generosity-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00033-generosity-studyguide.pdf", image: "generosity.png" },
  { slug: "gospel-of-the-kingdom", title: "Gospel of the Kingdom", videoUrl: "https://bibleproject.com/videos/gospel-kingdom/", streamSrc: "https://stream.mux.com/mp3tjs02X5scbwi8LqbWiAsST3I02ZgUo028PjMWSF1xRY/high.mp4?download=gospel-of-the-kingdom.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00034-gospel-of-the-kingdom-script.pdf", image: "gospel-of-the-kingdom.png" },
  { slug: "heaven-and-earth", title: "Heaven and Earth", videoUrl: "https://bibleproject.com/videos/heaven-and-earth/", streamSrc: "https://stream.mux.com/PIyXuO8FLxa9q9ZSSUXHXCc2pJQH8C009pCXKjuwGxNs/high.mp4?download=heaven-and-earth.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00035-heaven-and-earth-script.pdf", image: "heaven-n-earth.png" },
  { slug: "holiness", title: "Holiness", videoUrl: "https://bibleproject.com/videos/holiness/", streamSrc: "https://stream.mux.com/gtPRhhK5ceBMz01KzpifRYfyc01IIO3LUxS02Zz9EZ7rAs/high.mp4?download=holiness.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00036-holiness-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00037-holiness-studyguide.pdf", image: "holiness.png" },
  { slug: "holy-spirit", title: "Holy Spirit", videoUrl: "https://bibleproject.com/videos/holy-spirit/", streamSrc: "https://stream.mux.com/Ze02bzjje4rWeY3ANRlZNx00UbwM8TaUz2MdjPQLy7Avg/high.mp4?download=holy-spirit.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00038-holyspirit-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00039-holyspirit-studyguide.pdf", image: "holy-spirit.png" },
  { slug: "image-of-god", title: "Image of God", videoUrl: "https://bibleproject.com/videos/image-of-god/", streamSrc: "https://stream.mux.com/3UTz1ikNqysuVQ95XjY9Cf4GNHbMl3fZg9jrNutSn7M/high.mp4?download=image-of-god.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00040-image-of-god-script.pdf", image: "image-of-god.png" },
  { slug: "justice", title: "Justice", videoUrl: "https://bibleproject.com/videos/justice/", streamSrc: "https://stream.mux.com/1V5ZkTXBbm4s3w7CLcrUsYF2dO49si2cl800IC01chrKA/high.mp4?download=justice.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00041-justice-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00042-justice-studyguide.pdf", image: "justice.png" },
  { slug: "last-will-be-first", title: "Last Will Be First", videoUrl: "https://bibleproject.com/videos/last-will-be-first/", streamSrc: "https://stream.mux.com/3hpzxSgYmRsJjgVB8oZavoV3y4S6sV48XUOQ6C02wNFg/high.mp4?download=the-last-will-be-first.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00043-last-first-script.pdf", image: "last-will-be-first.png" },
  { slug: "law", title: "Law", videoUrl: "https://bibleproject.com/videos/law/", streamSrc: "https://stream.mux.com/FHE7z76dj01EWaD01NhoU5N94l34Te37K02c9J91hwO3Dg/high.mp4?download=the-law.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00044-law-script.pdf", image: "law.png" },
  { slug: "messiah", title: "Messiah", videoUrl: "https://bibleproject.com/videos/messiah/", streamSrc: "https://stream.mux.com/w1eN5wt02j9fHB02DSxVrlNWbUP00pjEfnUaV2RY00FWo3E/high.mp4?download=the-messiah.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00045-messiah-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00046-messiah-studyguide.pdf", image: "messiah.png", imagePosition: "center 18%" },
  { slug: "mountain", title: "Mountain", videoUrl: "https://bibleproject.com/videos/the-mountain/", streamSrc: "https://stream.mux.com/XFrImxp1uIP02QT01cWyJuMUyOlhXmP7xwkkugDjz4sk4/high.mp4?download=the-mountain.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00047-mountain-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00048-mountain-studyguide.pdf", image: "mountain.png" },
  { slug: "public-reading-of-scripture", title: "Public Reading of Scripture", videoUrl: "https://bibleproject.com/videos/public-reading-scripture/", streamSrc: "https://stream.mux.com/Ol1xhn7lAfpO2l01vp3l9gsBswbI02MlKdxAiuoeI7OLM/high.mp4?download=public-reading-of-scripture.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00049-public-reading-of-scripture-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00050-public-reading-of-scripture-studyguide.pdf", image: "public-reading-of-scripture.png" },
  { slug: "redemption", title: "Redemption", videoUrl: "https://bibleproject.com/videos/redemption/", streamSrc: "https://stream.mux.com/2Z8nzeFBm007rxd3Rh4fPZxIKthdoSo1M5WLyyZy4pWk/high.mp4?download=redemption.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00052-redemption-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00051-redemption-group-studyguide.pdf", image: "redemption.png" },
  { slug: "sabbath", title: "Sabbath", videoUrl: "https://bibleproject.com/videos/sabbath-video/", streamSrc: "https://stream.mux.com/fJX5Tx2IfUfQoV4hyMCjwlBj7v124Ny8HRzRvhRQb1A/high.mp4?download=sabbath.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00053-sabbath-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00054-sabbath-studyguide.pdf", image: "sabbath.png" },
  { slug: "sacrifice-and-atonement", title: "Sacrifice and Atonement", videoUrl: "https://bibleproject.com/videos/sacrifice-and-atonement/", streamSrc: "https://stream.mux.com/kjDODM02a9ZuYcz5HDic01ulnf02t4SyWFav02SjydJxgqE/high.mp4?download=sacrifice-and-atonement.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00055-sacrifice-and-atonement-script.pdf", image: "sacrifice-n-atonement.png" },
  { slug: "son-of-man", title: "Son of Man", videoUrl: "https://bibleproject.com/videos/son-of-man/", streamSrc: "https://stream.mux.com/JiTNkrJpp02MRrTnHXYZ6uTqT3u5M6izLr60248102RgmA/high.mp4?download=son-of-man.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00056-son-of-man-script.pdf", image: "son-of-man.png" },
  { slug: "temple", title: "Temple", videoUrl: "https://bibleproject.com/videos/temple/", streamSrc: "https://stream.mux.com/fbFyUVvOlniYph02q69XxExdOYQarVmLfgabCkJDzhRI/high.mp4?download=temple.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00057-temple-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00058-temple-studyguide.pdf", image: "temple.png" },
  { slug: "test", title: "Test", videoUrl: "https://bibleproject.com/videos/the-test/", streamSrc: "https://stream.mux.com/CeZ7qqeH46EAciz93f7Ptsrz7kkeR2Cmg6BIkeDg02zU/high.mp4?download=the-test.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00059-test-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00060-test-studyguide.pdf", image: "test.png" },
  { slug: "tree-of-life", title: "Tree of Life", videoUrl: "https://bibleproject.com/videos/tree-of-life/", streamSrc: "https://stream.mux.com/b00VCMqwF8myoXmGxgdK02Esqc5U1Cl00sINcntcUeilS00/high.mp4?download=tree-of-life.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00061-tree-of-life-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00062-tree-of-life-studyguide.pdf", image: "tree-of-life.png" },
  { slug: "water-of-life", title: "Water of Life", videoUrl: "https://bibleproject.com/videos/water-of-life/", streamSrc: "https://stream.mux.com/ZPLUAJxtrg2amMZGKVq3zRwKegV2xjqDyj2VYOjOGZ8/high.mp4?download=water-of-life.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00063-water-of-life-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00064-water-of-life-studyguide.pdf", image: "water-of-life.png" },
  { slug: "way-of-the-exile", title: "Way of the Exile", videoUrl: "https://bibleproject.com/videos/the-way-of-the-exile/", streamSrc: "https://stream.mux.com/RuZt01XhYaEAW7D602NITU9w1pYbucteXqQsBI2uw4n9s/high.mp4?download=the-way-of-the-exile.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00065-way-of-exile-script.pdf", image: "way-of-exile.png" },
  { slug: "wilderness", title: "Wilderness", videoUrl: "https://bibleproject.com/videos/the-wilderness/", streamSrc: "https://stream.mux.com/M7JxYGBikgT2QKm8L6PJc3HoakR841ScaGO7P5DriWY/high.mp4?download=the-wilderness.mp4", scriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00066-wilderness-script.pdf", studyGuideUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/biblical-themes/doc-2026-00067-wilderness-studyguide.pdf", image: "wilderness.png" },
];

export const biblicalThemesLessons: BibleStudyLessonSummary[] = biblicalThemeSeeds.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  summary: `Explore the biblical theme of ${theme.title} through BibleProject’s teaching and supporting study resources.`,
  href: `/bible-studies/biblical-themes/${theme.slug}`,
  imageSrc: `/images/bible-studies/biblical-themes/${theme.image}`,
  imageAlt: `${theme.title} biblical theme study artwork`,
  imagePosition: theme.imagePosition,
  video: {
    title: theme.title,
    description: `Watch BibleProject’s teaching on ${theme.title} and then use the supporting resources below to continue your study.`,
    href: theme.videoUrl,
    streamSrc: theme.streamSrc,
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
    {
      title: "Video Transcript",
      description:
        "Read the teaching transcript if you prefer to read alongside, or in addition to, the BibleProject video.",
      href: theme.scriptUrl,
      actionLabel: "Open Transcript",
    },
    ...(theme.studyGuideUrl
      ? [
          {
            title: "Study Guide",
            description:
              "Use the companion study guide to continue exploring the theme and the Scripture passages connected to it.",
            href: theme.studyGuideUrl,
            actionLabel: "Open Study Guide",
          },
        ]
      : []),
  ],
}));

const pastorMessage = "The Bible is made up of many books, written across different periods of history, yet together they tell one unified story. Throughout Scripture, certain themes appear again and again—ideas such as covenant, holiness, sacrifice, exile, redemption, the Kingdom of God, the Messiah, eternal life, and many others. When we begin tracing these themes from one part of the Bible to another, we start to see how deeply connected God’s Word really is and how each part contributes to the larger story He is telling.\n\nThis Biblical Themes series is designed to help you explore those connections more carefully. Each lesson focuses on a particular theme and follows it through Scripture so that you can better understand where it begins, how it develops, and why it matters. Some of these themes may already be familiar to you, while others may be completely new. My encouragement is simply to take your time. You do not need to complete the lessons in any particular order, and you certainly do not need to understand everything at once. Allow each study to help you see another piece of the larger biblical story and another glimpse of the character, purposes, and redemptive work of God.\n\nThroughout this series, you will find BibleProject videos along with their accompanying scripts, and for many topics, additional study guides are also available. Where a study guide is not provided, I encourage you to use the Faith Changes Everything Bible Study resources to help you dig deeper into the Scriptures, take notes, ask questions, and reflect on what you are learning. Most importantly, keep returning to the Bible itself. These resources are meant to help you understand God’s Word more clearly, not replace it.\n\nMy prayer is that as you move through these themes, you will begin to recognize just how beautifully Scripture fits together—from creation, through humanity’s brokenness, through God’s covenant faithfulness and work of redemption, and ultimately to the hope we have in Jesus Christ. The more we understand the story of the Bible, the more clearly we begin to see the God who stands at the center of it all.  From Pastor Richard at Faith Changes Everything, I hope you enjoy your time in this study, and don't forget, God loves you so very much, and so do I.  God Bless\n\n— Pastor Richard";

export const biblicalThemesSeriesDetail: BibleStudySeriesDetail = {
  slug: "biblical-themes",
  title: "Biblical Themes",
  overviewTitle: "Explore Biblical Themes",
  introduction:
    "Explore 31 biblical themes through BibleProject teaching videos and supporting transcripts and study guides. The lessons are organized alphabetically into five groups so you can quickly find a topic and study at your own pace.",
  lessonsTitle: "Choose a Biblical Theme",
  lessonsDescription:
    "Open an alphabetical group below, then choose any theme to begin. You do not need to complete the lessons in a particular order.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt: pastorMessage,
    imageSrc: "/images/pastor-richard.png",
    videoEmbedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/f08c4a2ad3bf04eedb7750a66c152d2d/iframe",
  },
  lessons: biblicalThemesLessons,
  lessonGroups: [
    { id: "group-1", label: "Themes A–D", description: "Anointing / Blessing and Curse / Chaos Dragon / City / Covenants / Day of the Lord", lessonSlugs: ["anointing","blessing-and-curse","chaos-dragon","city","covenants","day-of-the-lord"] },
    { id: "group-2", label: "Themes E–H", description: "Eternal Life / Exile / Exodus Way / Generosity / Gospel of the Kingdom / Heaven and Earth", lessonSlugs: ["eternal-life","exile","exodus-way","generosity","gospel-of-the-kingdom","heaven-and-earth"] },
    { id: "group-3", label: "Themes H–L", description: "Holiness / Holy Spirit / Image of God / Justice / Last Will Be First / Law", lessonSlugs: ["holiness","holy-spirit","image-of-god","justice","last-will-be-first","law"] },
    { id: "group-4", label: "Themes M–S", description: "Messiah / Mountain / Public Reading of Scripture / Redemption / Sabbath / Sacrifice and Atonement", lessonSlugs: ["messiah","mountain","public-reading-of-scripture","redemption","sabbath","sacrifice-and-atonement"] },
    { id: "group-5", label: "Themes S–W", description: "Son of Man / Temple / Test / Tree of Life / Water of Life / Way of the Exile / Wilderness", lessonSlugs: ["son-of-man","temple","test","tree-of-life","water-of-life","way-of-the-exile","wilderness"] },
  ],
  sourceNote:
    "The teaching videos and supporting resources in this series are provided by BibleProject. Ownership and attribution appear with each lesson. Faith Changes Everything links to the original BibleProject teaching and hosts approved supporting documents for convenient study access.",
};
