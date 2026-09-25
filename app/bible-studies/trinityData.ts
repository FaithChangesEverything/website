import type { BibleStudySeriesDetail, BibleStudyLessonSummary } from "./data";

const trinityLessons: BibleStudyLessonSummary[] = [
  {
    slug: "god-3-in-1",
    title: "God 3 in 1",
    summary:
      "Explore how Scripture reveals one God while distinguishing the Father, the Son, and the Holy Spirit.",
    primaryScripture: "Matthew 28:19",
    href: "/bible-studies/understanding-the-trinity/god-3-in-1",
    imageSrc: "/images/bible-studies/trinity/god-3-n-1.png",
    imageAlt: "Artwork for the God 3 in 1 Trinity Bible Study",
    video: {
      title: "God",
      description:
        "Explore the complex identity of God in the biblical story and how Scripture presents God as one while revealing the Father, Son, and Spirit.",
      href: "https://bibleproject.com/videos/god-video/",
      streamSrc:
        "https://stream.mux.com/besUIzraM02kEUPHAGjHCuPwxBhiCST1eEtxFJRNmop8/high.mp4?download=god.mp4",
      ownerName: "BibleProject",
      ownerUrl: "https://bibleproject.com/",
      attribution: "BibleProject is the author and owner of this video.",
    },
    resourcesOwnerName: "BibleProject",
    resourcesOwnerUrl: "https://bibleproject.com/",
    resourcesAttribution:
      "BibleProject is the author and owner of this transcript. Faith Changes Everything provides access to the original resource without altering its content.",
    resources: [
      {
        title: "Video Transcript",
        description:
          "Read the complete transcript for the BibleProject teaching on the complex identity of God.",
        href:
          "https://resources.faithchangeseverything.org/documents/bible-studies/god%203%20in%201/doc-2026-00068-g3-transcript.pdf",
        actionLabel: "Open Transcript",
      },
    ],
  },
];

export const trinitySeriesDetail: BibleStudySeriesDetail = {
  slug: "understanding-the-trinity",
  title: "Understanding the Trinity",
  introduction:
    "The doctrine of the Trinity brings together several truths Scripture teaches at the same time: there is one God, the Father is God, the Son is God, the Holy Spirit is God, and the Father, Son, and Holy Spirit are personally distinct. This study is designed to help you follow those truths through Scripture without trying to explain away the mystery or say more than God has revealed.",
  overviewTitle: "One God: Father, Son, and Holy Spirit",
  lessonsTitle: "Explore the Trinity Study",
  lessonsDescription:
    "Begin with the God 3 in 1 teaching, then use the transcript and FCE-created companion resources to continue studying what Scripture reveals about the Trinity.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt:
      "The Trinity can seem difficult because Scripture asks us to hold several truths together at the same time. There is one God, yet the Father, the Son, and the Holy Spirit are personally distinct and fully divine. In this study, we are not going to try to explain away that mystery. Instead, we will let Scripture set the boundaries and compare passage with passage so that our understanding is shaped by what God has actually revealed about Himself. My prayer is that this study leads not simply to more information about the Trinity, but to deeper worship, stronger trust, and a closer walk with the one true God—Father, Son, and Holy Spirit.",
    imageSrc: "/images/pastor-richard.png",
    videoEmbedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/17d2df6fd04a903f4e73d9945c41ccb2/iframe",
    compactLayout: true,
  },
  lessons: trinityLessons,
  fceResources: [
    {
      kind: "FCE Paper",
      title: "God 3 in 1 — Understanding the Trinity",
      href: "https://resources.faithchangeseverything.org/documents/bible-studies/god%203%20in%201/doc-2026-00187-fce_understanding_trinity.pdf",
    },
    {
      kind: "Bible Study",
      title: "Understanding the Trinity",
      href: "https://resources.faithchangeseverything.org/documents/bible-studies/god%203%20in%201/doc-2026-00188-understanding-trinity.pdf",
    },
  ],
  sourceNote:
    "The primary teaching video and transcript in this study are provided by BibleProject. Faith Changes Everything supplies the pastoral introduction, study framing, and the FCE-created companion resources below.",
};
