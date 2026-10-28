export type Resource = { id: string; title: string; description: string; category: string; href: string; type: "pdf" | "internal" | "external" | "hotline" };
// Source: approved FCE ResourcePageMetaData REV1.2, 2026-10-28.
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
  },
  {
    "id": "RES-008",
    "title": "American Association of Christian Counselors (AACC)",
    "description": "Christian counseling education, resources, and professional information.",
    "category": "counseling",
    "href": "https://www.aacc.net/",
    "type": "external"
  },
  {
    "id": "RES-009",
    "title": "Focus on the Family — Counseling Services & Referrals",
    "description": "Christian-oriented counseling consultations and referral information.",
    "category": "counseling",
    "href": "https://www.focusonthefamily.com/get-help/counseling-services-and-referrals/",
    "type": "external"
  },
  {
    "id": "RES-010",
    "title": "Christian Counseling & Educational Foundation (CCEF)",
    "description": "Biblical counseling resources, articles, and training.",
    "category": "counseling",
    "href": "https://www.ccef.org/",
    "type": "external"
  },
  {
    "id": "RES-011",
    "title": "Association of Certified Biblical Counselors (ACBC)",
    "description": "Biblical counseling resources, training, and counselor directory.",
    "category": "counseling",
    "href": "https://www.biblicalcounseling.com/",
    "type": "external"
  },
  {
    "id": "RES-012",
    "title": "National Alliance on Mental Illness (NAMI)",
    "description": "Mental health education, support, advocacy, and family guidance.",
    "category": "mental",
    "href": "https://www.nami.org/",
    "type": "external"
  },
  {
    "id": "RES-013",
    "title": "Mental Health America (MHA)",
    "description": "Mental health information, screening tools, and educational support.",
    "category": "mental",
    "href": "https://www.mhanational.org/",
    "type": "external"
  },
  {
    "id": "RES-014",
    "title": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
    "description": "Government resources for mental health, treatment, and recovery.",
    "category": "mental",
    "href": "https://www.samhsa.gov/",
    "type": "external"
  },
  {
    "id": "RES-015",
    "title": "FindTreatment.gov",
    "description": "Search for mental health and substance use treatment facilities.",
    "category": "mental",
    "href": "https://findtreatment.gov/locator/home",
    "type": "external"
  },
  {
    "id": "RES-016",
    "title": "GriefShare",
    "description": "Faith-based groups supporting those grieving a loved one.",
    "category": "grief",
    "href": "https://www.griefshare.org/",
    "type": "external"
  },
  {
    "id": "RES-017",
    "title": "VITAS Healthcare",
    "description": "Grief and bereavement support groups and guidance.",
    "category": "grief",
    "href": "https://www.vitas.com/family-and-caregiver-support/grief-and-bereavement/remote-grief-support-groups",
    "type": "external"
  },
  {
    "id": "RES-018",
    "title": "Focus on the Family",
    "description": "Christian resources for marriage, parenting, and family life.",
    "category": "family",
    "href": "https://www.focusonthefamily.com/",
    "type": "external"
  },
  {
    "id": "RES-019",
    "title": "FamilyLife",
    "description": "Christian resources for marriage, parenting, and family relationships.",
    "category": "family",
    "href": "https://www.familylife.com/",
    "type": "external"
  },
  {
    "id": "RES-020",
    "title": "Hope Restored by Focus on the Family",
    "description": "Christian marriage intensives and support for couples in difficulty.",
    "category": "family",
    "href": "https://www.hoperestored.com/",
    "type": "external"
  },
  {
    "id": "RES-021",
    "title": "Love and Respect Ministries",
    "description": "Christian marriage and communication resources.",
    "category": "family",
    "href": "https://www.loveandrespect.com/",
    "type": "external"
  },
  {
    "id": "RES-022",
    "title": "The Gospel Coalition — Marriage & Family",
    "description": "Biblical articles about marriage, parenting, and family life.",
    "category": "family",
    "href": "https://www.thegospelcoalition.org/",
    "type": "external"
  },
  {
    "id": "RES-023",
    "title": "Celebrate Recovery",
    "description": "Christ-centered groups helping people with hurts, habits, and hang-ups.",
    "category": "addiction",
    "href": "https://celebraterecovery.com/",
    "type": "external"
  },
  {
    "id": "RES-024",
    "title": "Recovery in Christ Ministries",
    "description": "Christian addiction recovery resources and ministry information.",
    "category": "addiction",
    "href": "https://recoveryinchrist.org/",
    "type": "external"
  },
  {
    "id": "RES-025",
    "title": "Christ and Recovery Ministries",
    "description": "Christian ministry resources addressing addiction and recovery.",
    "category": "addiction",
    "href": "https://christandrecovery.org/",
    "type": "external"
  },
  {
    "id": "RES-026",
    "title": "Pure Desire Ministries",
    "description": "Faith-based groups supporting recovery from unwanted sexual behaviors.",
    "category": "addiction",
    "href": "https://puredesire.org/",
    "type": "external"
  },
  {
    "id": "RES-027",
    "title": "The Salvation Army Adult Rehabilitation Centers",
    "description": "Adult rehabilitation and recovery programs.",
    "category": "addiction",
    "href": "https://satruck.org/",
    "type": "external"
  },
  {
    "id": "RES-028",
    "title": "988 Suicide & Crisis Lifeline",
    "description": "Free, confidential crisis support by calling or texting 988.",
    "category": "help",
    "href": "https://988lifeline.org/",
    "type": "hotline"
  },
  {
    "id": "RES-029",
    "title": "SAMHSA National Helpline",
    "description": "Information and treatment referrals: 1-800-662-HELP (4357).",
    "category": "help",
    "href": "https://www.samhsa.gov/find-help/helplines/national-helpline",
    "type": "hotline"
  },
  {
    "id": "RES-030",
    "title": "FCE Need Help Now",
    "description": "Immediate support information and pathways to additional help.",
    "category": "help",
    "href": "/help-support",
    "type": "internal"
  }
];
