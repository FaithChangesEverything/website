import type {
  JourneyResourceReference,
  ResourceCategory,
} from "../resources/types";
import { getResourceById } from "../resources/resourceRegistry";
import {
  getStepResourceAssignments,
  type JourneyStepId,
} from "../resources/stepResourceAssignments";
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

interface JourneyStepResourceAreaProps {
  stepId: JourneyStepId;
  heading?: string;
  introduction?: string;
}

function groupHeading(reference: JourneyResourceReference) {
  if (reference.category === "prayer") return categoryHeadings.prayer;
  return reference.label ?? categoryHeadings[reference.category];
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
          `[J2H ResourceArea] No registry metadata found for ${reference.id}.`,
        );
      }
      return [];
    }

    return [{ reference, resource }];
  });

  if (resolved.length === 0) return null;

  const grouped = resolved.reduce<
    Array<{
      heading: string;
      items: typeof resolved;
    }>
  >((groups, item) => {
    const heading = groupHeading(item.reference);
    const existing = groups.find((group) => group.heading === heading);

    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ heading, items: [item] });
    }

    return groups;
  }, []);

  return (
    <section className={styles.area} aria-labelledby="j2h-resource-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Faith Changes Everything</p>
        <h2 id="j2h-resource-heading">{heading}</h2>
        {introduction ? <p>{introduction}</p> : null}
      </div>

      <div className={styles.grid}>
        {grouped.map((group) => (
          <article className={styles.card} key={group.heading}>
            <h3 className={styles.category}>{group.heading}</h3>
            <ul className={styles.resourceList}>
              {group.items.map(({ reference, resource }, index) => (
                <li
                  className={styles.resourceItem}
                  key={`${reference.category}-${reference.id}-${index}`}
                >
                  <div className={styles.resourceCopy}>
                    <strong>{resource.title}</strong>
                    {resource.description ? <p>{resource.description}</p> : null}
                  </div>
                  {resource.href && resource.actionLabel ? (
                    <a
                      className={styles.action}
                      href={resource.href}
                      target={resource.external ? "_blank" : undefined}
                      rel={resource.external ? "noopener noreferrer" : undefined}
                    >
                      {resource.actionLabel}
                      <span className={styles.srOnly}>: {resource.title}</span>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function JourneyStepResourceArea({
  stepId,
  heading,
  introduction,
}: JourneyStepResourceAreaProps) {
  return (
    <ResourceArea
      resources={getStepResourceAssignments(stepId)}
      heading={heading}
      introduction={introduction}
    />
  );
}
