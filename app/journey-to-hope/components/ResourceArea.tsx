import type {
  JourneyResourceReference,
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

interface ResourceAreaProps {
  resources: JourneyResourceReference[];
  heading?: string;
  introduction?: string;
}

export default function ResourceArea({
  resources,
  heading = "Continue Your Journey",
  introduction,
}: ResourceAreaProps) {
  const resolved = resources.flatMap((reference) => {
    const resource = getResourceById(reference.id);

    if (!resource) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[J2H ResourceArea] No registry record found for ${reference.id}.`,
        );
      }
      return [];
    }

    return [{ reference, resource }];
  });

  if (resolved.length === 0) return null;

  return (
    <section className={styles.area} aria-labelledby="j2h-resource-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Faith Changes Everything</p>
        <h2 id="j2h-resource-heading">{heading}</h2>
        {introduction ? <p>{introduction}</p> : null}
      </div>

      <div className={styles.grid}>
        {resolved.map(({ reference, resource }) => (
          <article className={styles.card} key={`${reference.category}-${reference.id}`}>
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
