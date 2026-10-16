/** Official initial FCE Sermon Library inventory.
 * Display titles follow Column C of SermonMetaData(4).xlsx verbatim.
 * Stable FCE video IDs allow links from Journey to Hope without duplicating content.
 * Image filename discrepancies in the source spreadsheet have been reconciled
 * to the actual 19 files in public/images/sermons/.
 */
export type Sermon = {
  id: string;
  slug: string;
  title: string;
  series: string | null;
  part: number | null;
  scripture: string;
  description: string;
  steps: number[];
  image: string;
  pdf: string | null;
  videoId: string;
};

export const sermons: Sermon[] = [
  {
    "id": "vid-2026-00182",
    "title": "Alaska Testimony",
    "series": "Testimony",
    "part": null,
    "scripture": "James 1:2-4",
    "description": "Troy Heart's testimony about his life growing up with dysfunctional parents, and how he found God and the many challenges he had a long the way.",
    "steps": [
      1,
      5,
      6
    ],
    "slug": "alaska-testimony",
    "image": "/images/sermons/alaska-testimony.png",
    "pdf": null,
    "videoId": "55796a76a1cb10617d64f8ada07ed644"
  },
  {
    "id": "vid-2026-00183",
    "title": "Beatitudes Poor In Spirit",
    "series": null,
    "part": null,
    "scripture": "Matthew 5:3",
    "description": "This sermon explains poverty of the spirit, and how we need to embrace that to find fulfillment with Christ",
    "steps": [
      1
    ],
    "slug": "beatitudes-poor-in-spirit",
    "image": "/images/sermons/beatitudes-poor-in-spirit.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/beautitudes-poor-in-spirit.pdf",
    "videoId": "dc07d80276f1f13e89e2bf0157408ed2"
  },
  {
    "id": "vid-2026-00184",
    "title": "Hope in Hard Times",
    "series": null,
    "part": null,
    "scripture": "Romans 8:28",
    "description": "This sermon attempts to show how faith in God's unchanging character, gives us hope when times are difficult",
    "steps": [
      1,
      6
    ],
    "slug": "hope-in-hard-times",
    "image": "/images/sermons/hope-in-hard-times.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/hope-in-hard-times.pdf",
    "videoId": "57ed0210d201edff39041c8deac28854"
  },
  {
    "id": "vid-2026-00185",
    "title": "Humility",
    "series": "Characteristics of Christ",
    "part": 2,
    "scripture": "Philippians 2:3-11",
    "description": "This sermon talks about an important principle of discipleship that we as Christians should adhere to, and that is humility",
    "steps": [
      2
    ],
    "slug": "humility",
    "image": "/images/sermons/humility.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/humility.pdf",
    "videoId": "642548fddc24eacbcdd104241b37e314"
  },
  {
    "id": "vid-2026-00186",
    "title": "Keeping God Centered",
    "series": null,
    "part": null,
    "scripture": "Matthew 15:18",
    "description": "This sermon speaks in real terms about changing our mindset in everything we do, to make sure we are acting under the authority of God, and keeping him first and foremost in our decisions we make.",
    "steps": [
      6
    ],
    "slug": "keeping-god-centered",
    "image": "/images/sermons/keeping-god-centered.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/keep-god-centered.pdf",
    "videoId": "d86ce4ce6f6a28dbaf935ce1fb8555d5"
  },
  {
    "id": "vid-2026-00187",
    "title": "Mercy Principle",
    "series": "Characteristics of Christ",
    "part": 3,
    "scripture": "Matthew 5:38-42",
    "description": "This message attempts to speak to the need for each of us to be merciful with everyone in our lives",
    "steps": [
      2
    ],
    "slug": "mercy-principle",
    "image": "/images/sermons/mercy-principle.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/mercy-principle.pdf",
    "videoId": "c77daca8313cf163addc21221be88257"
  },
  {
    "id": "vid-2026-00188",
    "title": "Navigating Storms",
    "series": null,
    "part": null,
    "scripture": "John 16:33",
    "description": "This sermon talks about trying to walk with God, and keep our hope in him alive during times of struggle.",
    "steps": [
      1,
      6
    ],
    "slug": "navigating-storms",
    "image": "/images/sermons/navigating-storms.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/navigating-storms.pdf",
    "videoId": "91aa9f8632ddc8d4e0fefaf7dd4f97b3"
  },
  {
    "id": "vid-2026-00189",
    "title": "Personal Relationship",
    "series": null,
    "part": null,
    "scripture": "Revelation 3:20",
    "description": "This sermon gives practical advice on how we as Christians find ways to develop a personal relationship with Christ.",
    "steps": [
      2,
      4,
      6
    ],
    "slug": "personal-relationship",
    "image": "/images/sermons/personal-relationship.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/personal-relationship.pdf",
    "videoId": "7c3a47eb8d513a1d27c6ea45ce333fcc"
  },
  {
    "id": "vid-2026-00190",
    "title": "Salvation",
    "series": null,
    "part": null,
    "scripture": "Romans 10:9-10",
    "description": "This message explores God's plan of salvation through Jesus Christ, explaining why every person needs a Savior, how salvation is received by grace through faith, and the assurance that comes from placing our trust in Jesus Christ alone.",
    "steps": [
      2
    ],
    "slug": "salvation",
    "image": "/images/sermons/salvation.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/salvation.pdf",
    "videoId": "6934971215e3e6e99f980b37a6c05091"
  },
  {
    "id": "vid-2026-00191",
    "title": "Trust in the Lord",
    "series": null,
    "part": null,
    "scripture": "Proverbs 3:5-6",
    "description": "This sermon speaks to the ways in which we as his people, prioritize and lean into Christ, developing a trust in him to be with us through all we do",
    "steps": [
      4,
      6
    ],
    "slug": "trust-in-the-lord",
    "image": "/images/sermons/trust-in-the-lord.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/trust-in-the-lord.pdf",
    "videoId": "bff9e03b3f52f5d7cf33b8c7a1ee90bc"
  },
  {
    "id": "vid-2026-00192",
    "title": "What is Truth",
    "series": null,
    "part": null,
    "scripture": "John 18:32",
    "description": "This message explores how God has revealed absolute truth through His Word and through Jesus Christ, the One who declared, \"I am the way and the truth and the life\" (John 14:6, NIV), showing us that truth is not merely a concept to believe, but a Person to follow.",
    "steps": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "slug": "what-is-truth",
    "image": "/images/sermons/what-is-truth.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/what-is-truth.pdf",
    "videoId": "22e4e9e869643b822eddd3d78f9f05a2"
  },
  {
    "id": "vid-2026-00193",
    "title": "What is Faith",
    "series": null,
    "part": null,
    "scripture": "Hebrews 11:1",
    "description": "This message explores what the Bible teaches about genuine faith—why it is rooted in the character and promises of God, how it grows through His Word, and how we can continue trusting Him even when we cannot see what He is doing.",
    "steps": [
      4,
      6
    ],
    "slug": "what-is-faith",
    "image": "/images/sermons/what-is-faith.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/what-is-faith.pdf",
    "videoId": "6364288ac29e426f68191a6a7523e6bc"
  },
  {
    "id": "vid-2026-00194",
    "title": "What Remains in the Silence",
    "series": "What Remains",
    "part": 2,
    "scripture": "Psalm 13:1-6",
    "description": "This message explores the quiet seasons of the Christian life, showing that even when we cannot hear God's voice or understand His timing, His presence, His promises, and His faithfulness remain unchanged.",
    "steps": [
      5
    ],
    "slug": "what-remains-in-the-silence",
    "image": "/images/sermons/what-remains-in-the-silence.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/what-remains-in-the-silence.pdf",
    "videoId": "0809bf1a6658433ec13f4a1d17b1bcb7"
  },
  {
    "id": "vid-2026-00195",
    "title": "What Remains in the Storm",
    "series": "What Remains",
    "part": 3,
    "scripture": "Mark 4:35-41",
    "description": "This message explores how the storms of life reveal the unchanging faithfulness of God, reminding us that while our circumstances may change, God's presence, His peace, His promises, and our hope in Christ remain secure.",
    "steps": [
      1,
      5
    ],
    "slug": "what-remains-in-the-storm",
    "image": "/images/sermons/what-remains-in-the-storm.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/what-remains-in-the-storms.pdf",
    "videoId": "50b8ade4d0bbf33184e9a5a7e56f2c47"
  },
  {
    "id": "vid-2026-00204",
    "title": "Bad Things, Good People",
    "series": null,
    "part": null,
    "scripture": "John 16:33",
    "description": "The sermon explains that suffering is part of life, but God can use it to strengthen faith, build character, and accomplish His purposes. Through Christ’s cross and resurrection, believers can trust that suffering is never the end of the story.",
    "steps": [
      5
    ],
    "slug": "bad-things-good-people",
    "image": "/images/sermons/bad-things-good-people.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/bad-things-good-people.pdf",
    "videoId": "32222df9c8f9a090f49203b23312fe13"
  },
  {
    "id": "vid-2026-00205",
    "title": "Rooted in Christ",
    "series": null,
    "part": null,
    "scripture": "Colossians 2:6-7",
    "description": "The sermon teaches that believers grow strong by staying rooted in Jesus through Scripture, prayer, obedience, and trust, enabling them to remain faithful through life’s difficulties.",
    "steps": [
      1
    ],
    "slug": "rooted-in-christ",
    "image": "/images/sermons/rooted-in-christ.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/rooted-in-christ.pdf",
    "videoId": "c77adb9ed5967f76e414b7cd9409a319"
  },
  {
    "id": "vid-2026-00206",
    "title": "God Wants to be Known",
    "series": "Knowing the Heart of God",
    "part": 1,
    "scripture": "Jeremiah 29:13",
    "description": "This first message in the Knowing the Heart of God series emphasizes that God desires to be personally known, not merely known about. Although painful circumstances, unanswered prayers, and past experiences can distort our understanding of God, Scripture reveals that His heart is loving, merciful, faithful, compassionate, and good.\nFrom God seeking Adam and Eve in the garden to His continual pursuit of Israel, the Bible shows a God who reaches toward people even when they turn away. The message encourages believers to seek God through Scripture and prayer, recognizing that circumstances do not define God’s character—His Word does. Its central truth is: We will never fully trust the hand of God until we first know the heart of God.",
    "steps": [
      2,
      3
    ],
    "slug": "god-wants-to-be-known",
    "image": "/images/sermons/god-wants-to-be-known.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/kthog1-god-wants-to-be-known.pdf",
    "videoId": "7ac77d0e429bcce61691cc2ee2040f5d"
  },
  {
    "id": "vid-2026-00207",
    "title": "God's Heart is Revealed",
    "series": "Knowing the Heart of God",
    "part": 2,
    "scripture": "John 14:8-9",
    "description": "This second sermon teaches that God’s heart is most clearly revealed through Jesus Christ. By looking at Jesus’ compassion, forgiveness, truth, grace, restoration of the broken, and sacrifice on the Cross, we discover that the Father is loving, holy, merciful, patient, and faithful. The message encourages listeners to reject distorted views of God, study the Gospels, and ask what Jesus’ words and actions reveal about the Father. It concludes by inviting people to receive salvation through Christ and prepares the way for the final sermon on how knowing God’s heart transforms the way we live.",
    "steps": [
      3
    ],
    "slug": "gods-heart-is-revealed",
    "image": "/images/sermons/gods-heart-is-revealed.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/kthog2-gods-heart-revealed.pdf",
    "videoId": "39832218036a5cf306c6cbb88af10a3f"
  },
  {
    "id": "vid-2026-00208",
    "title": "Gods Heart Changes Lives",
    "series": "Knowing the Heart of God",
    "part": 3,
    "scripture": "2 Corinthians 5:17",
    "description": "This third and final message in the Knowing the Heart of God series emphasizes that truly knowing God should do more than increase our knowledge—it should transform our lives. As we spend time with God through prayer, His Word, and the leading of the Holy Spirit, we are gradually changed into the likeness of Christ, learning to trust God’s unchanging character even when we do not understand our circumstances. That transformation becomes visible in the way we think, respond to trials, forgive others, extend grace, and demonstrate the fruit of the Spirit. The message concludes by reminding listeners that God loved and pursued us first, and His desire is for His love to shape us so deeply that others can see the heart of Jesus reflected through our words, actions, service, and love.",
    "steps": [
      3
    ],
    "slug": "gods-heart-changes-lives",
    "image": "/images/sermons/gods-heart-changes-lives.png",
    "pdf": "https://resources.faithchangeseverything.org/documents/sermons/kthog3-gods-heart-changes-lives.pdf",
    "videoId": "3eb30daddd726001855d85c74301082c"
  }
];

export const streamBase = "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com";

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((sermon) => sermon.id === id);
}
export function getSermonsForStep(step: number): Sermon[] {
  return sermons.filter((sermon) => sermon.steps.includes(step));
}
export function getSermonUrl(sermon: Sermon): string {
  return `/sermons#${sermon.slug}`;
}
