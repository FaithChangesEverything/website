import type { ResolvedResource, ResourceId } from "./types";

/**
 * Journey to Hope resource-resolution registry.
 *
 * The step assignment files carry the authoritative FCE resource IDs.
 * A card becomes visitor-facing only after that ID has a current verified
 * destination here. This keeps Journey pages stable while downstream FCE
 * libraries are built.
 */
const resourceRegistry: Record<ResourceId, ResolvedResource> = {
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
