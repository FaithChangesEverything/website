export type BibleStudyGroupId =
  | "study-skills"
  | "foundations-themes"
  | "books-passages"
  | "fce-tracks";

export type BibleStudySeriesSummary = {
  slug: string;
  title: string;
  summary: string;
  group: BibleStudyGroupId;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
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
