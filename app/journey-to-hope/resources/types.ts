export type ResourceType =
  | "song"
  | "sermon"
  | "video"
  | "document"
  | "prayer"
  | "testimony"
  | "ministry";

export type ResourceCategory =
  | "related-song"
  | "related-sermon"
  | "related-video"
  | "bible-study"
  | "companion-resource"
  | "prayer"
  | "testimony"
  | "additional-resource";

export type ResourceId = string;

/**
 * A reference used by Journey to Hope content.
 *
 * Journey pages should reference authoritative FCE assets by ID rather than
 * duplicating titles, URLs, artwork, or other asset metadata.
 */
export interface JourneyResourceReference {
  id: ResourceId;
  type: ResourceType;
  category: ResourceCategory;
  label?: string;
}

/**
 * The resolved presentation record consumed by ResourceArea.
 * This is intentionally small so the source of truth for an asset can evolve
 * without changing every Journey page that references it.
 */
export interface ResolvedResource {
  id: ResourceId;
  type: ResourceType;
  title: string;
  description?: string;
  href: string;
  actionLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  external?: boolean;
}
