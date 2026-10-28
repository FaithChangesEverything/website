export type Resource = { id: string; title: string; description: string; category: string; href: string; type: "pdf" | "internal" | "external" | "hotline" };
// Source: approved FCE ResourcePageMetaData REV1.2, 2026-10-28.
// Faith Changes Everything-owned materials only. External support organizations are maintained on /help-support.
export const resources: Resource[] = [
  {
    "id": "RES-001",
    "title": "FCE How to Read the Bible",
    "description": "A beginner-friendly guide to navigating Scripture and understanding what you read.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/bible-studies/bible-project/doc-2026-00212-how-to-read-the-bible.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-002",
    "title": "FCE How to Study the Bible",
    "description": "A practical guide to thoughtful Bible study, interpretation, and application.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/bible-studies/how-to-study-bible/doc-2026-00017-How%20to%20Study%20the%20Bible.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-003",
    "title": "FCE Bible Journal",
    "description": "Three printable pages for Scripture, reflection, insights, and prayer.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/bible-journal/doc-2026-00003-fce-three-page-bible-journal.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-004",
    "title": "FCE How to Find a Healthy Church",
    "description": "Guidance for evaluating and finding a healthy, Bible-centered congregation.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/find-church/doc-2026-00184-fce-how-to-find-a-church.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-005",
    "title": "FCE Bible Study Online References",
    "description": "A curated collection of online references for personal Bible study.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/online-resources/doc-2026-00159-online-resources.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-006",
    "title": "Certainty and Humility in Christian Eschatology",
    "description": "A theological paper exploring biblical authority, certainty, and interpretive humility.",
    "category": "fce",
    "href": "https://resources.faithchangeseverything.org/documents/fce-papers/FCE_Christian_Eschatology_REV8.pdf",
    "type": "pdf"
  },
  {
    "id": "RES-007",
    "title": "FCE KJV Bible",
    "description": "Read the King James Version of the Bible online.",
    "category": "fce",
    "href": "/bible",
    "type": "internal"
  }
];
