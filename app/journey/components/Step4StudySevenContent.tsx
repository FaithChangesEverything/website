import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00030"];
const playerId = "4d-study-7";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudySevenContent() {
  return (
    <>
      <LessonBlock title="4.d.48 Step Seven — Live What You Learn" icon="◇">{null}</LessonBlock>

      <LessonBlock title="4.d.49 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.49" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;But be ye doers of the word, and not hearers only, deceiving your own selves.&quot;{" "}
          <JourneyScriptureReference reference="James 1:22 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.50 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.50" />
        <p>
          God never intended for His Word to remain only in our minds. The
          purpose of Scripture is to transform our hearts and guide the way we
          live each day. James reminds us that true spiritual growth comes when
          we put God&apos;s truth into practice.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.51 The Lesson" icon="◇">
        <ListenFromSection section="4.d.51" />
        <p>
          The goal of Bible study is not simply to gain more knowledge. The
          goal is to become more like Jesus.
        </p>
        <p>
          It&apos;s possible to spend years reading the Bible, attending
          church, and learning about God without allowing His Word to truly
          change our lives. Knowledge alone does not produce spiritual maturity.
          Transformation happens when we believe God&apos;s Word, trust His
          promises, and choose to live according to His truth.
        </p>
        <p>Each time you open your Bible, ask yourself one simple question:</p>
        <p>&quot;How should this change the way I live today?&quot;</p>
        <p>
          Sometimes God will encourage you through His promises. Sometimes He
          will comfort you during difficult seasons. Sometimes He will lovingly
          correct an attitude or behavior that needs to change. At other times,
          He may call you to forgive someone, show kindness to a stranger,
          serve another person, or trust Him in a situation that feels
          uncertain. Whatever God reveals through His Word, respond with a
          willing heart.
        </p>
        <p>Obedience doesn&apos;t earn God&apos;s love—it is our response to His love</p>
        <p>
          As you faithfully apply what you learn, you&apos;ll begin noticing
          changes that only God can produce. Your faith will grow stronger.
          Your perspective will become more Christ-centered. Your relationships
          will reflect greater grace and compassion. Over time, others may
          even notice the difference and ask what has changed in your life.
        </p>
        <p>
          This is the power of God&apos;s Word—not simply to inform us,
          but to transform us.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.52 Bible Study Tip" icon="◇">
        <ListenFromSection section="4.d.52" />
        <p>
          Ask an application question every time you finish reading.
          Before closing your Bible, ask yourself:
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>What did I learn about God?</li>
          <li>What did I learn about myself?</li>
          <li>Is there a command I should obey?</li>
          <li>Is there a promise I should trust?</li>
          <li>Is there someone I need to forgive, encourage, or pray for today?</li>
          <li>What is one thing I can do today because of what I have read?</li>
          <li>Even one small act of obedience can become the beginning of lasting spiritual growth.</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.53 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.53" />
        <p>Take a few moments to consider these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Is there an area of my life where God has been asking me to trust or obey Him?</li>
          <li>Am I satisfied with simply knowing God&apos;s Word, or do I genuinely desire to live it?</li>
          <li>What is one practical step I can take today because of what I have learned?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.54 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.54" />
        <p>
          Choose one truth from your Bible reading today. Write it in your
          Faith Changes Everything Bible Journal. Then write one specific
          action you will take today in response to what God has shown you.
          Before the day ends, take that step in faith, trusting God to
          work through your obedience.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.55 Prayer" icon="◇">
        <ListenFromSection section="4.d.55" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for speaking to me through Your Word. Forgive me for
          the times I have learned Your truth without putting it into
          practice. Give me a willing heart that desires not only to hear
          You but also to obey You. Help me become more like Jesus each day
          as I apply Your Word to my life. May my actions reflect my faith,
          and may others see Your love through the way I live.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.56 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.56" />
        <p>
          Every time you choose to live what you learn, God&apos;s Word
          becomes more than words on a page—it becomes a living testimony
          in your life. Your faith grows stronger with every step of
          obedience, and your daily choices begin to reflect the character
          of Christ. Keep listening, keep trusting, and keep walking in
          His truth. The life God desires for you is discovered not only
          by hearing His Word, but by faithfully living it.
        </p>
      </LessonBlock>
    </>
  );
}
