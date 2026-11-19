import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step4AudioTimestamps["audio-2026-00022"];
const playerId = "4c-reading-gods-word";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4ReadingGodsWordContent() {
  return (
    <>
      <LessonBlock title="4.c The Importance of Reading God’s Word" icon="◇">
        <ListenFromSection section="4.c" />
        <p>
          The Bible is unlike any other book ever written. It is God&apos;s inspired Word,
          given to reveal His character, His love, His truth, and His plan of salvation
          through Jesus Christ. Within its pages we discover who God is, who we are,
          and how we are called to live. It is through Scripture that God speaks to our
          hearts, strengthens our faith, and guides us through every season of life.
        </p>
        <p>
          As followers of Christ, we cannot grow spiritually without spending time in
          God&apos;s Word. Just as our bodies need food each day to remain healthy,
          our souls need the nourishment of Scripture. The Bible encourages us when
          we are discouraged, comforts us when we are hurting, corrects us when we
          wander, and gives us wisdom for the decisions we face every day. The
          apostle Paul reminded Timothy of the incredible value of God&apos;s Word:
        </p>
        <blockquote className={sequence9.scriptureQuote}>
          &quot;All Scripture is God-breathed and is useful for teaching, rebuking,
          correcting and training in righteousness, so that the servant of God may be
          thoroughly equipped for every good work.&quot;{" "}
          <JourneyScriptureReference reference="2 Timothy 3:16–17 (NIV)" />
        </blockquote>
        <p>
          God never intended for His Word to be something we only hear on Sunday
          mornings. He invites us to open it for ourselves, to read it, to meditate
          on it, and to allow it to shape the way we think and live. The more we know
          God&apos;s Word, the more we come to know the God who gave it.
        </p>
        <p>
          If you&apos;ve ever opened the Bible and felt overwhelmed, you&apos;re not
          alone. Many people wonder where to begin or worry that they won&apos;t
          understand what they&apos;re reading. Don&apos;t let those thoughts discourage
          you. Every mature believer once started exactly where you are today. God
          isn&apos;t asking you to know everything—He simply asks you to begin.
        </p>
        <p>
          Healthy relationships grow through consistent time together. Our
          relationship with Christ grows the same way. As we spend time with Him
          through prayer, Scripture, worship, and obedience, our faith becomes
          stronger and our hearts become more like His.
        </p>
        <p>
          As you develop the habit of reading Scripture, you&apos;ll discover that the
          Bible is not merely a collection of ancient writings. It is living and active,
          speaking timeless truth into everyday life. Through its pages, the Holy
          Spirit teaches us, strengthens our faith, and draws us into a deeper
          relationship with Jesus Christ.
        </p>
        <p>
          One of the most rewarding discoveries you&apos;ll ever make is that the Bible
          isn&apos;t just a book to read—it is a lifelong conversation with your
          Heavenly Father.
        </p>
      </LessonBlock>

      <LessonBlock title="4.c.1 A Simple Place to Begin" icon="▤">
        <ListenFromSection section="4.c.1" />
        <p>
          If you&apos;re new to reading the Bible, I encourage you to start with the
          Gospel of John. Read one chapter each day. Before you begin, ask God to help
          you understand what you&apos;re reading and to reveal something about Himself
          through His Word.
        </p>
        <p>
          Don&apos;t worry about how much you read. Focus on spending time with God.
          Even a few verses read with a willing heart can change your life.
        </p>
      </LessonBlock>

      <LessonBlock title="4.c.2 Take Your Next Step" icon="▤">
        <ListenFromSection section="4.c.2" />
        <p>
          Now that you understand why God&apos;s Word is so important, the next lesson
          will show you how to study the Bible in a way that is practical, meaningful,
          and life changing. Together we&apos;ll learn simple methods that will help
          you understand Scripture, apply it to your life, and grow in your
          relationship with Christ.
        </p>
      </LessonBlock>
    </>
  );
}
