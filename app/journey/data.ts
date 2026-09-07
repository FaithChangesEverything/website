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
      { id: "1.b", title: "Hope for Today", href: "/journey/step-1/hope-for-today" },
      { id: "1.c", title: "A Biblical Study of Hope", href: "/journey/step-1/biblical-study-of-hope", kind: "series" },
    ],
  },
  {
    id: "2",
    number: 2,
    title: "I’m Looking for Information About Salvation",
    href: "/journey/step-2",
    summary: "Understand the Gospel, salvation through Jesus Christ, and what it means to follow Him.",
    lessons: [],
  },
  {
    id: "3",
    number: 3,
    title: "Knowing the Heart of God",
    href: "/journey/step-3",
    summary: "Learn what Scripture reveals about God’s character and His heart toward us.",
    lessons: [],
  },
  {
    id: "4",
    number: 4,
    title: "I Want to Grow My Faith",
    href: "/journey/step-4",
    summary: "Build practical habits that help you know God’s Word and grow in your walk with Christ.",
    lessons: [
      { id: "4.d", title: "How to Study the Bible", href: "/journey/step-4/how-to-study-the-bible", kind: "series" },
    ],
  },
  {
    id: "5",
    number: 5,
    title: "I’m Walking Through a Difficult Season",
    href: "/journey/step-5",
    summary: "Find biblical truth and encouragement for seasons that feel heavy or uncertain.",
    lessons: [],
  },
  {
    id: "6",
    number: 6,
    title: "Take the Next Step",
    href: "/journey/step-6",
    summary: "Continue walking with Christ through Scripture, prayer, encouragement, and connection.",
    lessons: [
      { id: "6.a", title: "A Message from Pastor Richard", href: "/journey/step-6/before-we-begin", kind: "pastor-letter" },
      { id: "6.b", title: "Read God’s Word", href: "/journey/step-6/read-gods-word" },
      { id: "6.c", title: "Walk with Christ", href: "/journey/step-6/walk-with-christ" },
      { id: "6.d", title: "Reflect on Your Journey", href: "/journey/step-6/reflect-on-your-journey" },
      { id: "6.e", title: "Receive Weekly Encouragement", href: "/journey/step-6/weekly-encouragement" },
      { id: "6.f", title: "We Would Love to Pray for You", href: "/prayer" },
      { id: "6.g", title: "Stay Connected", href: "/journey/step-6/stay-connected" },
    ],
  },
];

export const hopeSeries = [
  "The God of Hope",
  "Hope: An Anchor for the Soul",
  "Hope in God’s Faithfulness",
  "Hope in the Past: Renewed Strength",
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
