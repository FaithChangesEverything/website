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
  "vid-2026-00184": {
    id: "vid-2026-00184",
    type: "video",
    title: "Hope in Hard Times",
  },
  "vid-2026-00188": {
    id: "vid-2026-00188",
    type: "video",
    title: "Navigating Storms of Life",
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
    title: "01-god",
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
  "doc-2026-00017": {
    id: "doc-2026-00017",
    type: "document",
    title: "How to Study the Bible — Printable Guide",
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
};

export function getResourceById(id: ResourceId): ResolvedResource | undefined {
  return resourceRegistry[id];
}

export function hasResource(id: ResourceId): boolean {
  return Object.prototype.hasOwnProperty.call(resourceRegistry, id);
}

export { resourceRegistry };
