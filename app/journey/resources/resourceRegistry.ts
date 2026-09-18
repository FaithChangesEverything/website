import type { ResolvedResource, ResourceId } from "./types";

/**
 * Journey to Hope resource-resolution registry.
 *
 * Sequence 1 reconciliation rule:
 * do not reactivate legacy or unverified destinations merely because they
 * existed on the old branch. Records belong here only after the current FCE
 * destination has been verified.
 */
const resourceRegistry: Record<ResourceId, ResolvedResource> = {};

export function getResourceById(id: ResourceId): ResolvedResource | undefined {
  return resourceRegistry[id];
}

export function hasResource(id: ResourceId): boolean {
  return Object.prototype.hasOwnProperty.call(resourceRegistry, id);
}

export { resourceRegistry };
