import Link from "next/link";
import { LessonBlock } from "./PageStructures";
import { bibleStudyOnlineResourcesContent } from "../content/bibleStudyOnlineResources";
import fixes from "../journey-fixes.module.css";

export function BibleStudyOnlineResourcesContent() {
  const lesson = bibleStudyOnlineResourcesContent;
  return (
    <LessonBlock title={`${lesson.id} ${lesson.title}`} icon="▣" tone="highlight">
      {lesson.paragraphs.map((paragraph,index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className={fixes.churchFinderCallToAction}>
        <a className={fixes.churchFinderButton} href={lesson.resourcePdfUrl} target="_blank" rel="noopener noreferrer">
          View / Download Bible Study Online References PDF <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={fixes.churchFinderCallToAction}>
        <Link href="/resources#guides" className={fixes.churchFinderButton}>Explore all FCE guides and printable resources <span aria-hidden="true">→</span></Link>
      </div>
    </LessonBlock>
  );
}
