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
 * `type` identifies the authoritative FCE asset type. `category` controls
 * how that asset is presented inside the Journey.
 *
 * Journey content should reference FCE assets by ID instead of duplicating
 * titles, URLs, artwork, or other presentation metadata.
 */
export interface JourneyResourceReference {
  id: ResourceId;
  type: ResourceType;
  category: ResourceCategory;
  label?: string;
}

/**
 * The presentation record resolved from an authoritative resource ID.
 * Keeping this small lets the eventual content source evolve without forcing
 * Journey pages to change.
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
