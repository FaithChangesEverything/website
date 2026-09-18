import type {
  JourneyResourceReference,
  ResolvedResource,
  ResourceCategory,
} from "../resources/types";
import { getResourceById } from "../resources/resourceRegistry";
import styles from "./ResourceArea.module.css";

const categoryHeadings: Record<ResourceCategory, string> = {
  "related-song": "Related Song",
  "related-sermon": "Related Sermon",
  "related-video": "Related Video",
  "bible-study": "Related Bible Study",
  "companion-resource": "Companion Resource",
  prayer: "Need Prayer?",
  testimony: "Testimony or Encouragement",
  "additional-resource": "Additional Ministry Resource",
};

type ResolvedCard = {
  reference: JourneyResourceReference;
  resource: ResolvedResource;
};

interface ResourceAreaProps {
  resources: JourneyResourceReference[];
  heading?: string;
  introduction?: string;
}

interface ResourceAreaPreviewProps {
  items: ResolvedCard[];
  heading?: string;
  introduction?: string;
}

function ResourceAreaLayout({
  items,
  heading = "Continue Your Journey",
  introduction,
}: ResourceAreaPreviewProps) {
  if (items.length === 0) return null;

  return (
    <section className={styles.area} aria-labelledby="j2h-resource-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Faith Changes Everything</p>
        <h2 id="j2h-resource-heading">{heading}</h2>
        {introduction ? <p>{introduction}</p> : null}
      </div>

      <div className={styles.grid}>
        {items.map(({ reference, resource }) => (
          <article
            className={styles.card}
            key={`${reference.category}-${reference.id}`}
          >
            <p className={styles.category}>
              {reference.label ?? categoryHeadings[reference.category]}
            </p>
            <h3>{resource.title}</h3>
            {resource.description ? <p>{resource.description}</p> : null}
            <a
              className={styles.action}
              href={resource.href}
              target={resource.external ? "_blank" : undefined}
              rel={resource.external ? "noopener noreferrer" : undefined}
            >
              {resource.actionLabel}
              <span className={styles.srOnly}>: {resource.title}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ResourceArea({
  resources,
  heading,
  introduction,
}: ResourceAreaProps) {
  const resolved = resources.flatMap((reference) => {
    const resource = getResourceById(reference.id);

    if (!resource) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[J2H ResourceArea] No verified registry record found for ${reference.id}.`,
        );
      }
      return [];
    }

    return [{ reference, resource }];
  });

  return (
    <ResourceAreaLayout
      items={resolved}
      heading={heading}
      introduction={introduction}
    />
  );
}

/**
 * Temporary reconciliation-preview helper.
 * It renders through the same presentation layer without adding preview-only
 * records to the production resource registry.
 */
export function ResourceAreaPreview({
  items,
  heading,
  introduction,
}: ResourceAreaPreviewProps) {
  return (
    <ResourceAreaLayout
      items={items}
      heading={heading}
      introduction={introduction}
    />
  );
}
