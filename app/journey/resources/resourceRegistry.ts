import type { ResolvedResource, ResourceId } from "./types";

/**
 * Journey to Hope resource-resolution registry.
 *
 * Resource metadata can be registered before its final FCE destination page
 * exists. This lets the approved resource appear on the Step page immediately
 * without creating a dead link. When the destination is published, add href
 * and actionLabel here; no Journey page changes are required.
 */
const resourceRegistry: Record<ResourceId, ResolvedResource> = {
  "song-2026-0009": {
    id: "song-2026-0009",
    type: "song",
    title: "Saved by Your Grace",
  },
  "song-2026-0008": {
    id: "song-2026-0008",
    type: "song",
    title: "In the Quiet You’re Still There",
  },
  "song-2026-0012": {
    id: "song-2026-0012",
    type: "song",
    title: "Come as You Are",
  },
  "song-2026-0007": {
    id: "song-2026-0007",
    type: "song",
    title: "It Should Have Been Me",
  },
  "song-2026-0014": {
    id: "song-2026-0014",
    type: "song",
    title: "Teach Me to Trust",
  },
  "song-2026-0018": {
    id: "song-2026-0018",
    type: "song",
    title: "Faith Changes Everything",
  },
  "song-2026-0005": {
    id: "song-2026-0005",
    type: "song",
    title: "Yesterday Don’t Own Me Anymore",
  },
  "ser-2026-0016": {
    id: "ser-2026-0016",
    type: "sermon",
    title: "Being Rooted in Christ",
  },
  "ser-2026-0010": {
    id: "ser-2026-0010",
    type: "sermon",
    title: "Trust in the Lord with All Your Heart",
  },
  "ser-2026-0012": {
    id: "ser-2026-0012",
    type: "sermon",
    title: "What Is Faith",
  },
  "ser-2026-0008": {
    id: "ser-2026-0008",
    type: "sermon",
    title: "How to Have a Personal Relationship with God",
  },
  "vid-2026-00026": {
    id: "vid-2026-00026",
    type: "video",
    title: "Holy Spirit",
  },
  "vid-2026-00050": {
    id: "vid-2026-00050",
    type: "video",
    title: "Faithful",
  },
  "vid-2026-00056": {
    id: "vid-2026-00056",
    type: "video",
    title: "What Is the Bible",
  },
  "vid-2026-00057": {
    id: "vid-2026-00057",
    type: "video",
    title: "The Story of the Bible",
  },
  "vid-2026-00165": {
    id: "vid-2026-00165",
    type: "video",
    title: "The Lord’s Prayer",
  },
  "vid-2026-00184": {
    id: "vid-2026-00184",
    type: "video",
    title: "Hope in Hard Times",
  },
  "vid-2026-00133": {
    id: "vid-2026-00133",
    type: "video",
    title: "Job",
  },
  "vid-2026-00134": {
    id: "vid-2026-00134",
    type: "video",
    title: "Psalms",
  },
  "vid-2026-00188": {
    id: "vid-2026-00188",
    type: "video",
    title: "Navigating Storms of Life",
  },
  "vid-2026-00204": {
    id: "vid-2026-00204",
    type: "video",
    title: "Bad Things-Good People",
  },
  "vid-2026-00182": {
    id: "vid-2026-00182",
    type: "video",
    title: "Alaska Testimony",
  },
  "vid-2026-00027": {
    id: "vid-2026-00027",
    type: "video",
    title: "Image of God",
  },
  "vid-2026-00044": {
    id: "vid-2026-00044",
    type: "video",
    title: "God",
  },
  "vid-2026-00190": {
    id: "vid-2026-00190",
    type: "video",
    title: "Salvation",
  },
  "vid-2026-00189": {
    id: "vid-2026-00189",
    type: "video",
    title: "How to Have a Personal Relationship with Christ",
  },
  "vid-2026-00187": {
    id: "vid-2026-00187",
    type: "video",
    title: "The Mercy Principle",
  },
  "vid-2026-00019": {
    id: "vid-2026-00019",
    type: "video",
    title: "Eternal Life",
  },
  "vid-2026-00023": {
    id: "vid-2026-00023",
    type: "video",
    title: "Gospel of the Kingdom",
  },
  "vid-2026-00038": {
    id: "vid-2026-00038",
    type: "video",
    title: "The Messiah",
  },
  "vid-2026-00196": {
    id: "vid-2026-00196",
    type: "video",
    title: "Prayer of Salvation",
  },
  "vid-2026-00206": {
    id: "vid-2026-00206",
    type: "video",
    title: "God Wants to Be Known — Knowing the Heart of God 1",
  },
  "vid-2026-00207": {
    id: "vid-2026-00207",
    type: "video",
    title: "Jesus Reveals the Father’s Heart — Knowing the Heart of God 2",
  },
  "vid-2026-00208": {
    id: "vid-2026-00208",
    type: "video",
    title: "God’s Heart Changes Lives — Knowing the Heart of God 3",
  },
  "doc-2026-00017": {
    id: "doc-2026-00017",
    type: "document",
    title: "How to Study the Bible — Printable Guide",
  },
  "doc-2026-00068": {
    id: "doc-2026-00068",
    type: "document",
    title: "Understanding the Trinity",
  },
  "doc-2026-00069": {
    id: "doc-2026-00069",
    type: "document",
    title: "Exodus 34:6–7 — God’s Description of Himself",
    href: "/bible-studies/character-of-god/character-of-god-in-exodus",
    actionLabel: "Open Study",
  },
  "doc-2026-00070": {
    id: "doc-2026-00070",
    type: "document",
    title: "God’s Compassion",
    href: "/bible-studies/character-of-god/compassion",
    actionLabel: "Open Study",
  },
  "doc-2026-00071": {
    id: "doc-2026-00071",
    type: "document",
    title: "God’s Grace",
    href: "/bible-studies/character-of-god/grace",
    actionLabel: "Open Study",
  },
  "doc-2026-00072": {
    id: "doc-2026-00072",
    type: "document",
    title: "God Is Slow to Anger",
    href: "/bible-studies/character-of-god/slow-to-anger",
    actionLabel: "Open Study",
  },
  "doc-2026-00073": {
    id: "doc-2026-00073",
    type: "document",
    title: "God’s Loyal Love",
    href: "/bible-studies/character-of-god/loyal-love",
    actionLabel: "Open Study",
  },
  "doc-2026-00074": {
    id: "doc-2026-00074",
    type: "document",
    title: "God’s Faithfulness",
    href: "/bible-studies/character-of-god/faithful",
    actionLabel: "Open Study",
  },
  "j2h-prayer-support": {
    id: "j2h-prayer-support",
    type: "prayer",
    title: "Prayer Support",
    description:
      "If you'd like someone to pray with you as you continue your journey, we'd be honored to pray for you.",
    href: "/prayer",
    actionLabel: "Submit a Prayer Request",
  },
  "j2h-find-a-church": {
    id: "j2h-find-a-church",
    type: "ministry",
    title: "Find a Church Home",
    description:
      "Learn what to look for in a healthy, Bible-believing church and search for churches near you.",
    href: "/find-a-church",
    actionLabel: "Find a Church Home",
  },
  "j2h-character-of-god-series": {
    id: "j2h-character-of-god-series",
    type: "ministry",
    title: "Character of God Bible Study Series",
    description:
      "Continue exploring what Scripture reveals about God’s character through the Faith Changes Everything Character of God Bible Study Series.",
    href: "/bible-studies/character-of-god",
    actionLabel: "Explore the Series",
  },
  "external-tim-mackie-living-hope": {
    id: "external-tim-mackie-living-hope",
    type: "ministry",
    title: "A Living Hope - Living in the Light of the Resurrection",
    description:
      "A teaching from Tim Mackie offered as an additional ministry resource for further study.",
    href: "https://www.youtube.com/watch?v=rXs-w1gjmL8&t=1s",
    actionLabel: "Watch the Resource",
    external: true,
  },
  "external-tim-mackie-what-is-faith": {
    id: "external-tim-mackie-what-is-faith",
    type: "ministry",
    title: "What Is Faith — Tim Mackie",
    description:
      "An additional teaching resource from Tim Mackie exploring the biblical meaning of faith.",
    href: "https://www.youtube.com/watch?v=A-zK3Uy-QcY",
    actionLabel: "Watch the Resource",
    external: true,
  },
  "external-tim-mackie-what-is-hope": {
    id: "external-tim-mackie-what-is-hope",
    type: "ministry",
    title: "What Is Faith — Tim Mackie",
    description:
      "An additional teaching resource from Tim Mackie exploring the biblical meaning of faith.",
    href: "https://www.youtube.com/watch?v=A-zK3Uy-QcY",
    actionLabel: "Watch the Resource",
    external: true,
  },
};

export function getResourceById(id: ResourceId): ResolvedResource | undefined {
  return resourceRegistry[id];
}

export function hasResource(id: ResourceId): boolean {
  return Object.prototype.hasOwnProperty.call(resourceRegistry, id);
}

export { resourceRegistry };
