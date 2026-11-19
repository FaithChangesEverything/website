import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00026"];
const playerId = "4d-study-3";

function ListenFromSection({ section }: { section: Exclude<keyof typeof cues, "4.d.15"> }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyThreeContent() {
  return (
    <>
      <LessonBlock title="4.d.15 Step 3 — Read With Purpose" icon="◇">
        {null}
      </LessonBlock>

      <LessonBlock title="4.d.16 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.16" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;And the brethren immediately sent away Paul and Silas by night unto Berea:
          who coming thither went into the synagogue of the Jews. These were more
          noble than those in Thessalonica, in that they received the word with all
          readiness of mind, and searched the scriptures daily, whether those things
          were so..&quot;{" "}
          <JourneyScriptureReference reference="Acts 17:10-11 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.17 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.17" />
        <p>
          The believers in Berea didn&apos;t simply accept what they heard—they
          eagerly searched the Scriptures to discover God&apos;s truth for themselves.
          Their example reminds us that Bible study is more than reading words on
          a page; it is intentionally seeking to understand what God is saying
          and how His truth applies to our lives.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.18 The Lesson" icon="◇">
        <ListenFromSection section="4.d.18" />
        <p>
          As you begin reading the Bible, remember that your goal is not simply
          to finish a chapter or complete a reading plan. Your goal is to hear
          what God is saying through His Word.
        </p>
        <p>
          Before you start reading, take a moment to ask yourself a simple
          question: &quot;What is God trying to teach me today?&quot;
        </p>
        <p>
          That one question changes everything. Instead of reading out of
          routine, you begin reading with expectation. You become attentive to
          what the Holy Spirit may want to reveal, encourage, correct, or
          strengthen in your life.
        </p>
        <p>
          As you read, slow down. Don&apos;t worry about how many chapters you
          complete. Sometimes God uses a single verse to speak more deeply than
          an entire chapter read in a hurry. If a verse captures your attention,
          pause and spend time thinking about it. Read it again. Ask yourself
          why it stands out and how it relates to your life today.
        </p>
        <p>It is also helpful to notice the context of what you&apos;re reading. Ask questions such as:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Who is speaking?</li>
          <li>Who is being spoken to?</li>
          <li>What is happening in this passage?</li>
          <li>What does this teach me about God?</li>
          <li>What does this teach me about how I should live?</li>
        </ul>
        <p>
          The Bible was never intended to be rushed through. It was given to
          transform our hearts, renew our minds, and draw us into a deeper
          relationship with God. Reading with purpose allows Scripture to move
          beyond information and become personal transformation.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.19 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.19" />
        <p>As you read your Bible today, consider these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Am I reading to complete a task, or am I reading to know God better?</li>
          <li>Is there a verse that God is impressing on my heart today?</li>
          <li>What truth from today&apos;s reading can I begin applying immediately?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.20 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.20" />
        <p>
          Choose a short passage of Scripture today. Read it slowly at least
          twice. After reading, ask yourself: &quot;What is God teaching me
          through this passage?&quot; Write down one truth that stands out and
          one practical way you can live it out today.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.21 Prayer" icon="◇">
        <ListenFromSection section="4.d.21" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for giving me Your Word as a guide for my life. Help me read
          the Bible with purpose and expectation, believing that You desire to
          speak to me through every page. Slow me down when I rush, open my
          heart to Your truth, and give me the wisdom to understand what You are
          teaching me. Help me not only to learn Your Word but also to live it
          faithfully each day. Draw me closer to You as I seek You through Scripture.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.22 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.22" />
        <p>
          Every time you open your Bible with a heart that is eager to learn,
          you are inviting God to shape your life. Don&apos;t measure your
          success by how much you read—measure it by how faithfully you listen
          and respond. God&apos;s Word has the power to change your life,
          one verse at a time.
        </p>
      </LessonBlock>
    </>
  );
}
