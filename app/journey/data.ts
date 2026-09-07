export type JourneyStep = {
  id: string;
  number: number;
  title: string;
  href: string;
  summary: string;
  lessons: JourneyLesson[];
};

export type JourneyLesson = {
  id: string;
  title: string;
  href: string;
  kind?: "lesson" | "series" | "pastor-letter";
};

export const journeySteps: JourneyStep[] = [
  {
    id: "1",
    number: 1,
    title: "I’m Looking for Hope",
    href: "/journey/step-1",
    summary: "Begin with the hope God gives and discover where lasting hope is found.",
    lessons: [
      { id: "1.a", title: "Before We Begin", href: "/journey/step-1/before-we-begin", kind: "pastor-letter" },
      { id: "1.b", title: "Understanding Hope", href: "/journey/step-1/understanding-hope" },
      { id: "1.c", title: "What Does the Bible Say About Hope", href: "/journey/step-1/what-does-the-bible-say-about-hope", kind: "series" },
      { id: "1.d", title: "Time to Reflect", href: "/journey/step-1/time-to-reflect" },
      { id: "1.e", title: "Helpful Resources", href: "/journey/step-1/helpful-resources" },
      { id: "1.f", title: "A Prayer for Today", href: "/journey/step-1/a-prayer-for-today" },
      { id: "1.g", title: "Continue Your Journey", href: "/journey/step-1/continue-your-journey" },
    ],
  },
  {
    id: "2",
    number: 2,
    title: "I’m Looking for Information About Salvation",
    href: "/journey/step-2",
    summary: "Understand the Gospel, salvation through Jesus Christ, and what it means to follow Him.",
    lessons: [
      { id: "2.a", title: "Before We Begin", href: "/journey/step-2/before-we-begin", kind: "pastor-letter" },
      { id: "2.b", title: "Understanding Salvation", href: "/journey/step-2/understanding-salvation" },
      { id: "2.c", title: "What Does the Bible Say About Salvation", href: "/journey/step-2/what-does-the-bible-say-about-salvation" },
      { id: "2.d", title: "Time to Reflect", href: "/journey/step-2/time-to-reflect" },
      { id: "2.e", title: "Continue Your Salvation Journey", href: "/journey/step-2/continue-your-salvation-journey" },
      { id: "2.f", title: "Bible Study Online Resources", href: "/journey/step-2/bible-study-online-resources" },
      { id: "2.g", title: "A Final Word of Encouragement", href: "/journey/step-2/a-final-word-of-encouragement" },
      { id: "2.h", title: "Continue Your Journey", href: "/journey/step-2/continue-your-journey" },
    ],
  },
  {
    id: "3",
    number: 3,
    title: "Knowing the Heart of God",
    href: "/journey/step-3",
    summary: "Learn what Scripture reveals about God’s character and His heart toward us.",
    lessons: [
      { id: "3.a", title: "Before We Begin", href: "/journey/step-3/before-we-begin", kind: "pastor-letter" },
      { id: "3.b", title: "Knowing the Heart of God", href: "/journey/step-3/knowing-the-heart-of-god" },
      { id: "3.c", title: "Time to Reflect", href: "/journey/step-3/time-to-reflect" },
      { id: "3.d", title: "Final Word of Encouragement", href: "/journey/step-3/final-word-of-encouragement" },
      { id: "3.e", title: "Continue Your Journey", href: "/journey/step-3/continue-your-journey" },
    ],
  },
  {
    id: "4",
    number: 4,
    title: "I Want to Grow My Faith",
    href: "/journey/step-4",
    summary: "Build practical habits that help you know God’s Word and grow in your walk with Christ.",
    lessons: [
      { id: "4.a", title: "Before We Begin", href: "/journey/step-4/before-we-begin", kind: "pastor-letter" },
      { id: "4.b", title: "Understanding Spiritual Growth", href: "/journey/step-4/understanding-spiritual-growth" },
      { id: "4.c", title: "The Importance of Reading God’s Word", href: "/journey/step-4/the-importance-of-reading-gods-word" },
      { id: "4.d", title: "How to Study the Bible", href: "/journey/step-4/how-to-study-the-bible", kind: "series" },
    ],
  },
  {
    id: "5",
    number: 5,
    title: "I’m Walking Through a Difficult Season",
    href: "/journey/step-5",
    summary: "Find biblical truth and encouragement for seasons that feel heavy or uncertain.",
    lessons: [
      { id: "5.a", title: "Before We Begin", href: "/journey/step-5/before-we-begin", kind: "pastor-letter" },
      { id: "5.b", title: "When Life Feels Overwhelming", href: "/journey/step-5/when-life-feels-overwhelming" },
      { id: "5.c", title: "When You’re Grieving", href: "/journey/step-5/when-youre-grieving" },
      { id: "5.d", title: "When God Feels Silent", href: "/journey/step-5/when-god-feels-silent" },
      { id: "5.e", title: "When You Think You Have Failed", href: "/journey/step-5/when-you-think-you-have-failed" },
      { id: "5.f", title: "When You’re Afraid of the Future", href: "/journey/step-5/when-youre-afraid-of-the-future" },
      { id: "5.g", title: "When Relationships Hurt", href: "/journey/step-5/when-relationships-hurt" },
      { id: "5.h", title: "Finding Hope Again", href: "/journey/step-5/finding-hope-again" },
    ],
  },
  {
    id: "6",
    number: 6,
    title: "Take the Next Step",
    href: "/journey/step-6",
    summary: "Continue walking with Christ through Scripture, prayer, encouragement, and connection.",
    lessons: [
      { id: "6.a", title: "A Message from Pastor Richard", href: "/journey/step-6/a-message-from-pastor-richard", kind: "pastor-letter" },
      { id: "6.b", title: "Read God’s Word", href: "/journey/step-6/read-gods-word" },
      { id: "6.c", title: "Walk with Christ", href: "/journey/step-6/walk-with-christ" },
      { id: "6.d", title: "Reflect on Your Journey", href: "/journey/step-6/reflect-on-your-journey" },
      { id: "6.e", title: "Receive Weekly Encouragement", href: "/journey/step-6/receive-weekly-encouragement" },
      { id: "6.f", title: "We Would Love to Pray for You", href: "/prayer" },
      { id: "6.g", title: "Stay Connected", href: "/journey/step-6/stay-connected" },
    ],
  },
];

export const hopeSeries = [
  "The God of Hope",
  "Hope: An Anchor for the Soul",
  "Hope in God’s Faithfulness",
  "Hope that Renews Strength",
  "Hope in the Midst of Discouragement",
  "Hope Through Suffering",
  "A Living Hope Through Christ",
];

export const bibleStudySeries = [
  "Just Begin",
  "Begin with Prayer",
  "Read With Purpose",
  "Write Down What God Shows You",
  "Where Should I Begin",
  "Let Scripture Explain Scripture",
  "Live What You Learn",
  "Never Stop Growing",
];

export function getJourneyStep(stepNumber: number) {
  return journeySteps.find((step) => step.number === stepNumber);
}

export function getJourneyLesson(stepNumber: number, slug: string) {
  const step = getJourneyStep(stepNumber);
  return step?.lessons.find((lesson) => lesson.href.endsWith(`/${slug}`));
}
