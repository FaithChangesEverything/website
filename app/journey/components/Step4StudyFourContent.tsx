import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00027"];
const playerId = "4d-study-4";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyFourContent() {
  return (
    <>
      <LessonBlock title="4.d.23 Step Four — Write Down What God Shows You" icon="◇">{null}</LessonBlock>

      <LessonBlock title="4.d.24 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.24" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;And the LORD answered me, and said, Write the vision, and make it
          plain upon tables, that he may run that readeth it.&quot;{" "}
          <JourneyScriptureReference reference="Habakkuk 2:2 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.25 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.25" />
        <p>
          Throughout Scripture, God often instructed His people to write down
          what He revealed to them. Recording what God teaches us helps us remember
          His faithfulness, reflect on His truth, and see how He has been working
          in our lives over time. A journal becomes more than a notebook—it
          becomes a testimony of God&apos;s ongoing work in your heart.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.26 The Lesson" icon="◇">
        <ListenFromSection section="4.d.26" />
        <p>
          One of the simplest and most valuable habits you can develop is
          writing down what God is teaching you as you study His Word.
        </p>
        <p>
          You don&apos;t have to write pages of notes or produce a detailed Bible
          commentary. Sometimes a single sentence, a meaningful verse, or a
          personal prayer is enough. The important thing is not how much you write,
          but that you take time to capture what God is placing on your heart.
          As you read, ask yourself:
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>What verse stood out to me today?</li>
          <li>What is God teaching me through this passage?</li>
          <li>Is there a promise to trust?</li>
          <li>Is there a command to obey?</li>
          <li>Is there an area of my life that God is asking me to change?</li>
        </ul>
        <p>
          Writing these thoughts down helps move God&apos;s truth from your mind
          into your heart. It also gives you something to return to later.
          There will be days when you need encouragement, and looking back
          through your journal can remind you of prayers God has answered,
          lessons He has taught, and ways He has faithfully guided your life.
        </p>
        <p>
          Your journal doesn&apos;t have to be perfect. It doesn&apos;t need
          beautiful handwriting or polished sentences. It is simply a
          conversation between you and God—a place to record what He is
          teaching you as you grow in your faith.
        </p>
        <p>
          Years from now, those pages may become one of your greatest reminders
          of God&apos;s faithfulness.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.27 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.27" />
        <p>As you finish reading today, consider these questions</p>
        <ul className={fixes.reflectionQuestions}>
          <li>What verse spoke to my heart today?</li>
          <li>What is one truth I don&apos;t want to forget?</li>
          <li>How can I apply what I learned this week?</li>
          <li>What prayer would I like to write to God today?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.28 Today’s Challenge: Begin a Bible journal today." icon="→">
        <ListenFromSection section="4.d.28" />
        <p>Write down:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>The date.</li>
          <li>The Scripture you read.</li>
          <li>One truth God showed you.</li>
          <li>One way you will apply it this week.</li>
          <li>A short prayer thanking God for speaking through His Word.</li>
        </ul>
        <p>
          Don&apos;t worry about writing a lot. Simply begin. Over time,
          your journal will become a beautiful record of your spiritual journey.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.29 Prayer" icon="◇">
        <ListenFromSection section="4.d.29" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for speaking through Your Word. Help me not only to read what
          You are teaching but also to remember it and live it out. Give me the
          discipline to record the truths You place on my heart so that I can
          look back and see Your faithfulness throughout my life. May my journal
          become a testimony of Your grace, your guidance, and the work You are
          doing within me. Continue shaping me into the person You have called me to be.
        </p>
        <p>In Jesus&apos; name,</p>
        <p>Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.30 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.30" />
        <p>
          Every note you write is another reminder of God&apos;s faithfulness.
          As the days, months, and years pass, you&apos;ll discover that your
          journal tells a story—not just of what you have read, but of how God
          has faithfully guided, encouraged, corrected, and transformed your
          life through His Word.
        </p>
      </LessonBlock>
    </>
  );
}
