import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00031"];
const playerId = "4d-study-8";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyEightContent() {
  return (
    <>
      <LessonBlock title="4.d.57 Step Eight — Never Stop Growing" icon="◇">{null}</LessonBlock>

      <LessonBlock title="4.d.58 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.58" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;As ye have therefore received Christ Jesus the Lord, so walk ye in him:
          rooted and built up in him, and stablished in the faith, as ye have been taught,
          abounding therein with thanksgiving.&quot;{" "}
          <JourneyScriptureReference reference="Colossians 2:6-7 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.59 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.59" />
        <p>
          Following Jesus is not a one-time decision—it is a lifelong journey of
          growing in faith. Just as a healthy tree continues to deepen its roots
          and grow stronger over time, God desires us to continually mature in
          our relationship with Him. Every time we open His Word, we take
          another step toward becoming the people He created us to be.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.60 The Lesson" icon="◇">
        <ListenFromSection section="4.d.60" />
        <p>
          Congratulations! You have completed this Bible Study Journey, but
          your walk with God is only beginning. The habits you&apos;ve learned
          throughout these lessons are not meant to be completed once and
          then forgotten. They are practices that can shape your life for years to come.
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>Continue opening your Bible with prayer.</li>
          <li>Read with purpose.</li>
          <li>Write down what God teaches you.</li>
          <li>Allow Scripture to explain Scripture.</li>
          <li>Most importantly, live what you learn.</li>
        </ul>
        <p>
          As you remain faithful in these simple habits, you&apos;ll discover
          something wonderful: God continues to reveal Himself through His Word
          in new and meaningful ways. Passages you&apos;ve read many times
          before will suddenly speak to your current season of life. Questions
          that once seemed difficult will become clearer. Your confidence in
          God&apos;s promises will grow stronger with every passing year.
        </p>
        <p>
          There will be seasons when Bible study feels exciting and seasons
          when it requires discipline. Don&apos;t become discouraged during
          the quieter seasons. Faithfulness is not measured by emotion but
          by consistency.
        </p>
        <p>
          Remember that spiritual growth doesn&apos;t happen overnight. Just
          as a seed grows into a mighty tree one day at a time, God transforms
          us little by little as we faithfully seek Him. Even on the days when
          you feel like you&apos;re making little progress, God is still at
          work in your heart.
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>Never stop asking questions.</li>
          <li>Never stop learning.</li>
          <li>Never stop trusting.</li>
          <li>And above all, never stop pursuing Jesus.</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.61 Bible Study Tip" icon="◇">
        <ListenFromSection section="4.d.61" />
        <p>
          Create a daily rhythm instead of waiting for the perfect moment.
          Choose a regular time each day—even if it&apos;s only fifteen minutes—to
          meet with God. Consistency over time will accomplish far more
          than occasional moments of inspiration.
        </p>
        <p>A simple daily routine might look like this:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Begin with prayer.</li>
          <li>Read a portion of Scripture.</li>
          <li>Reflect on what God is teaching you.</li>
          <li>Record your thoughts in your Faith Changes Everything Bible Journal.</li>
          <li>Pray about how you will apply His Word today.</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.62 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.62" />
        <p>As you complete this study, consider these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>How has my approach to reading the Bible changed?</li>
          <li>Which lesson has impacted me the most?</li>
          <li>What daily habit will help me continue growing in my faith?</li>
          <li>Who can I encourage by sharing what God has taught me?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.63 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.63" />
        <p>Commit to spending time with God every day this week.</p>
        <p>
          Choose a time and place where you can consistently read His Word,
          pray, and write in your Faith Changes Everything Bible Journal
        </p>
        <p>Then take one more step.</p>
        <p>
          Share something God has taught you with a family member, a friend,
          or someone who needs encouragement. God&apos;s truth is not only meant
          to change your life—it is meant to be shared with others.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.64 Prayer" icon="◇">
        <ListenFromSection section="4.d.64" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for meeting with me through Your Word. Thank You for every
          lesson You have taught me and for every step you have walked beside me.
          Help me remain faithful long after I finish this study. Give me a
          hunger for Your Word that grows stronger with each passing day.
          Continue shaping my heart, renewing my mind, and making me more like
          Jesus. May my life reflect Your love and may everything I learn bring
          glory to You. Use me to encourage others as I continue this journey of faith.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.65 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.65" />
        <p>You&apos;ve reached the end of this study, but not the end of your journey.</p>
        <p>
          Every page of the Bible reveals the heart of God. Every prayer draws
          you closer to Him. Every act of obedience strengthens your faith.
          And every day you spend with Jesus is another step in the incredible
          life He has prepared for you.
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>Never stop opening God&apos;s Word.</li>
          <li>Never stop listening for His voice.</li>
          <li>Never stop trusting His promises.</li>
          <li>Never stop growing.</li>
        </ul>
        <p>
          May the Lord bless you, guide you, and strengthen your faith as
          you continue your journey with Him.
        </p>
        <blockquote className={sequence9.scriptureQuote}>
          &quot;Thy word is a lamp unto my feet, And a light unto my path.&quot;{" "}
          <JourneyScriptureReference reference="Psalm 119:105 (KJV)" />
        </blockquote>
        <p>
          Here at the end of this lesson, there are some resources that you
          might find helpful. I encourage you to look through them, listen
          to the sermons, listen to the music, go look through the bible
          studies. I hope that these resources help you in your walk with Christ.
        </p>
      </LessonBlock>
    </>
  );
}
