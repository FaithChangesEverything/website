import type { ResolvedResource, ResourceId } from "./types";

/**
 * Journey to Hope resource-resolution registry.
 *
 * Only verified current FCE destinations belong here. Legacy destinations
 * remain excluded until they are intentionally republished on the current
 * website.
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
};

export function getResourceById(id: ResourceId): ResolvedResource | undefined {
  return resourceRegistry[id];
}

export function hasResource(id: ResourceId): boolean {
  return Object.prototype.hasOwnProperty.call(resourceRegistry, id);
}

export { resourceRegistry };
