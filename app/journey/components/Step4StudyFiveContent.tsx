import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00028"];
const playerId = "4d-study-5";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyFiveContent() {
  return (
    <>
      <LessonBlock title="4.d.31 Step Five — Where Should I Begin?" icon="◇">{null}</LessonBlock>

      <LessonBlock title="4.d.32 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.32" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;All scripture is given by inspiration of God, and is profitable for
          doctrine, for reproof, for correction, for instruction in righteousness:
          that the man of God may be perfect, thoroughly furnished unto all
          good works.&quot;{" "}
          <JourneyScriptureReference reference="2 Timothy 3:16-17 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.33 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.33" />
        <p>
          Every book of the Bible has value because every word is inspired by God.
          Yet for someone who is just beginning, knowing where to start can feel
          overwhelming. This passage reminds us that all of Scripture has a
          purpose, while also encouraging us to approach God&apos;s Word in a way
          that helps us understand and grow.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.34 The Lesson" icon="◇">
        <ListenFromSection section="4.d.34" />
        <p>
          One of the most common questions people ask is, &quot;Where should I begin
          reading the Bible?&quot; It&apos;s a great question.
        </p>
        <p>
          The Bible is made up of sixty-six books written over many centuries by
          different authors, yet together they tell one incredible story—God&apos;s
          plan to redeem mankind through Jesus Christ.
        </p>
        <p>
          Although every book is inspired by God, not every book is equally easy
          for a new believer to understand. That&apos;s why it&apos;s often helpful to
          begin with books that clearly introduce who Jesus is and what it means
          to follow Him.
        </p>
        <p>
          A wonderful place to start is the Gospel of John. John presents Jesus
          as the Son of God and emphasizes His love, His miracles, His teachings,
          and His invitation to believe in Him. Many people have come to know
          Christ more deeply through this Gospel.
        </p>
        <p>
          After reading John, continue with the Gospel of Mark to see the servant
          heart of Jesus in action. Then read the Book of Acts, where you&apos;ll
          discover how the early church began and how the Holy Spirit empowered
          ordinary believers to share the Gospel.
        </p>
        <p>
          From there, consider reading Philippians, James, and Romans. Each of
          these books provides practical teaching for everyday Christian living
          while helping you grow in your understanding of God&apos;s grace, faith,
          and spiritual maturity.
        </p>
        <p>
          Remember, Bible study isn&apos;t a race. Don&apos;t worry about trying to
          read the entire Bible as quickly as possible. Spend time understanding
          what you&apos;re reading. Ask questions. Pray over what you&apos;ve
          learned. Let God&apos;s Word shape your heart one day at a time.
        </p>
        <p>
          As your confidence grows, you&apos;ll naturally begin exploring the rest
          of Scripture and discover how every book points back to God&apos;s
          unfolding plan of salvation.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.35 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.35" />
        <p>Take a moment to think about these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Have I ever felt overwhelmed by the size of the Bible?</li>
          <li>Am I willing to focus on understanding rather than simply finishing?</li>
          <li>Which book of the Bible will I begin reading this week?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.36 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.36" />
        <p>
          If you haven&apos;t already started reading regularly, begin with the
          Gospel of John. Read one chapter each day this week. As you read,
          write one thing you learn about Jesus in your Faith Changes Everything
          Bible Journal. By the end of the week, you&apos;ll begin seeing not
          only what Jesus did, but who He is.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.37 Prayer" icon="◇">
        <ListenFromSection section="4.d.37" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for giving us Your Word and for revealing Yourself through
          every page of Scripture. As I begin this journey, give me wisdom to
          know where to start and the patience to grow one step at a time.
          Help me never to become discouraged or overwhelmed, but instead to
          enjoy discovering who You are through Your Word. Open my eyes to the
          life and teachings of Jesus and let every lesson draw me closer to You.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.38 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.38" />
        <p>
          Every great journey begins with a single step, and every deep
          relationship begins by getting to know someone personally. As you
          read the Gospel of John, you&apos;re not simply learning facts about
          Jesus—you are getting to know the Savior who knows you completely
          and loves you perfectly. Let each chapter draw you closer to Him,
          and trust that God will faithfully guide you through the rest of
          His Word in His perfect time.
        </p>
      </LessonBlock>
    </>
  );
}
