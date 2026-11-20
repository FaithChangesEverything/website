import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { LessonBlock } from "./PageStructures";
import { helpfulResources } from "../content/helpfulResources";
import fixes from "../journey-fixes.module.css";

export function HelpfulResourcesContent() {
  return (
    <>
      {helpfulResources.sections.map((section) => (
        <LessonBlock
          key={section.id}
          title={`${section.id} ${section.title}`}
          icon={section.kind === "intro" ? "◇" : section.kind === "internal" ? "→" : "▣"}
          tone={section.kind === "intro" || section.kind === "internal" ? "highlight" : undefined}
        >
          <div className={fixes.lessonSectionActions}>
            <JourneyListenFromHere
              playerId="1e-helpful-resources"
              seconds={section.audioStartSeconds}
            />
          </div>

          {"note" in section ? <p>{section.note}</p> : null}

          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
          ))}

          {"resources" in section ? (
            <div>
              {section.resources.map((resource) => (
                <p key={resource.name}>
                  <strong>{resource.name}</strong> – {resource.description}
                </p>
              ))}
            </div>
          ) : null}

          {"links" in section ? (
            <div className={fixes.churchFinderCallToAction}>
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} className={fixes.churchFinderButton}>{link.label}</Link>
              ))}
            </div>
          ) : null}
        </LessonBlock>
      ))}
    </>
  );
}
