import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00024"];
const playerId = "4d-study-1";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyOneContent() {
  return (
    <>
      <LessonBlock title="4.d.1 Step 1 — Just Begin" icon="◇">
        <ListenFromSection section="4.d.1" />
        <p>&quot;Every great journey begins with a single step.&quot;</p>
      </LessonBlock>

      <LessonBlock title="4.d.2 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.2" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;Keep this Book of the Law always on your lips; meditate on it day and
          night, so that you may be careful to do everything written in it. Then
          you will be prosperous and successful.&quot;{" "}
          <JourneyScriptureReference reference="Joshua 1:8 (NIV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.3 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.3" />
        <p>
          When God called Joshua to lead the people of Israel into the Promised
          Land, He didn&apos;t begin by giving him a military strategy. Instead, He
          pointed Joshua to His Word. God instructed Joshua to meditate on
          Scripture continually—not simply to gain knowledge, but so that he
          would faithfully live according to it.
        </p>
        <p>
          The same principle is true for us today. Our spiritual growth doesn&apos;t
          begin with knowing everything the Bible says. It begins with opening
          God&apos;s Word and allowing Him to speak into our lives one day at a time.
        </p>
        <p>Every journey of faith starts with a simple decision: Open the Bible.</p>
      </LessonBlock>

      <LessonBlock title="4.d.4 The Lesson" icon="◇">
        <ListenFromSection section="4.d.4" />
        <p>
          One of the biggest obstacles to studying the Bible isn&apos;t understanding
          it. It&apos;s simply getting started. We often tell ourselves we&apos;ll begin
          tomorrow. Maybe when life becomes less hectic, when we have more time,
          or when we find the perfect Bible study guide. But tomorrow has a way
          of becoming next week. Next week becomes next month. Before we know
          it, months—or even years—have passed.
        </p>
        <p>
          Don&apos;t wait for the perfect moment. Don&apos;t wait until you know more.
          Don&apos;t wait until life slows down. Simply open your Bible.
        </p>
        <p>
          God has promised that His Word will accomplish His purposes. Every time
          you spend time reading Scripture, you place yourself in a position to
          hear from the Lord. Some days you may read an entire chapter. Other days
          you may spend several minutes thinking about a single verse. The amount
          you read is far less important than the habit you&apos;re building.
        </p>
        <p>
          Faith grows through faithful consistency. Each day you spend time in
          God&apos;s Word is another step toward knowing Him more deeply. Remember,
          the goal is not to finish reading the Bible as quickly as possible.
          The goal is to know the Author. As James reminds us, we are not called
          to merely hear God&apos;s Word—we are called to live it.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.5 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.5" />
        <p>Before moving on, spend a few quiet moments thinking about these questions.</p>
        <ul className={fixes.reflectionQuestions}>
          <li>What has kept me from consistently reading God&apos;s Word?</li>
          <li>What is one obstacle I can give to God today?</li>
          <li>When can I set aside time to spend with Him this week?</li>
        </ul>
        <p>
          Don&apos;t worry about creating the perfect schedule. Simply choose a
          realistic time and commit to meeting with God.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.6 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.6" />
        <p>
          Today, open your Bible. Read one chapter. If a chapter feels
          overwhelming, read one paragraph. If a paragraph is all you can manage
          today, that&apos;s okay. The important thing is that you begin.
          Tomorrow, come back and do it again. Small, faithful steps become
          lifelong habits.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.7 Prayer" icon="◇">
        <ListenFromSection section="4.d.7" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for giving me Your Word. Thank You that You desire to speak
          to me through the Scriptures. Help me not to put off spending time
          with You. Give me a hunger for Your Word and the discipline to return
          to it each day. Open my heart to receive what You want to teach me,
          and help me not only to hear Your Word, but to live it.
        </p>
        <p>Thank You for patiently walking with me as I grow in my faith.</p>
        <p>In Jesus&apos; name,</p>
        <p>Amen.</p>
      </LessonBlock>
    </>
  );
}
