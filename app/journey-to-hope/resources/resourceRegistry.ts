import type { ResolvedResource, ResourceId } from "./types";

/**
 * Website-facing resource registry.
 *
 * This is the single resolution layer between Journey to Hope references and
 * the public presentation data for FCE assets. Journey pages should not copy
 * asset metadata into lesson files.
 *
 * Records are added only after an authoritative ID and public destination are
 * verified. This prevents placeholder URLs from becoming accidental links.
 */
const resourceRegistry: Record<ResourceId, ResolvedResource> = {
  "ser-2026-0001": {
    id: "ser-2026-0001",
    type: "sermon",
    title: "Alaska Testimony",
    href: "https://youtu.be/NYziICJcv1U",
    actionLabel: "Watch sermon",
    external: true,
  },
  "ser-2026-0003": {
    id: "ser-2026-0003",
    type: "sermon",
    title: "Hope in Hard Times",
    href: "https://youtu.be/TKhk4DoNEoU",
    actionLabel: "Watch sermon",
    external: true,
  },
  "ser-2026-0007": {
    id: "ser-2026-0007",
    type: "sermon",
    title: "Navigating Storms",
    href: "https://youtu.be/mDWSQGtIs0c",
    actionLabel: "Watch sermon",
    external: true,
  },
  "vid-2026-00182": {
    id: "vid-2026-00182",
    type: "video",
    title: "Alaska Testimony",
    href: "https://youtu.be/NYziICJcv1U",
    actionLabel: "Watch testimony",
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
