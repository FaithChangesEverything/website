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
const resourceRegistry: Record<ResourceId, ResolvedResource> = {};

export function getResourceById(id: ResourceId): ResolvedResource | undefined {
  return resourceRegistry[id];
}

export function hasResource(id: ResourceId): boolean {
  return Object.prototype.hasOwnProperty.call(resourceRegistry, id);
}

export { resourceRegistry };
