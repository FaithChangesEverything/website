import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00029"];
const playerId = "4d-study-6";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudySixContent() {
  return (
    <>
      <LessonBlock title="4.d.39 Step Six — Let Scripture Explain Scripture" icon="◇">{null}</LessonBlock>

      <LessonBlock title="4.d.40 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.40" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;Knowing this first, that no prophecy of the scripture is of any private
          interpretation. For the prophecy came not in old time by the will of man:
          but holy men of God spake as they were moved by the Holy Ghost.&quot;{" "}
          <JourneyScriptureReference reference="2 Peter 1:20-21 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.41 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.41" />
        <p>
          The Bible is unlike any other book because its ultimate Author is God
          Himself. Although He used many different writers over many centuries,
          His message remains perfectly consistent. When we encounter a difficult
          passage, we should allow other portions of Scripture to help us
          understand it rather than relying only on our own opinions or taking a
          single verse out of context.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.42 The Lesson" icon="◇">
        <ListenFromSection section="4.d.42" />
        <p>
          One of the greatest safeguards against misunderstanding the Bible is
          learning to let Scripture explain Scripture.
        </p>
        <p>
          The Bible is one complete story. Although it is made up of sixty-six
          individual books, they all work together to reveal God&apos;s character,
          His plan of salvation, and His love for humanity. Because God is the
          Author behind every page, His Word never contradicts itself. Instead,
          one passage often sheds light on another.
        </p>
        <p>
          Sometimes you&apos;ll read a verse that seems difficult to understand.
          Don&apos;t become discouraged. Rather than building an entire belief
          around one verse, continue reading the surrounding passage. Ask
          yourself what the author is discussing and how the verse fits within
          the larger context.
        </p>
        <p>
          Then look for other places in the Bible that address the same subject.
          You may discover that a teaching found in the New Testament is rooted
          in the Old Testament, or that Jesus&apos; words are explained more fully
          in the letters written by the apostles.
        </p>
        <p>
          Good Bible study is like putting together a puzzle. One piece by
          itself may not reveal much, but as more pieces come together, the
          picture becomes clearer. This is also why it&apos;s important to be
          cautious about teachings that are based on a single verse taken out
          of context. God&apos;s truth is consistently confirmed throughout
          Scripture. As you continue studying, you&apos;ll begin seeing beautiful
          connections that strengthen your understanding and deepen your faith.
        </p>
        <p>
          Never be afraid to ask questions. Every believer—whether new to the
          faith or a seasoned student of Scripture—continues learning throughout
          life. God delights in revealing His truth to those who seek Him with
          humble hearts.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.43 Bible Study Tip" icon="◇">
        <ListenFromSection section="4.d.43" />
        <p>
          When you come across a verse that is difficult to understand, don&apos;t
          stop reading.
        </p>
        <p>Instead, ask yourself these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>What do the verses before and after this passage say?</li>
          <li>Who is speaking, and who is being addressed?</li>
          <li>Are there other places in the Bible that teach the same truth?</li>
          <li>Does my understanding agree with the overall message of Scripture?</li>
        </ul>
        <p>
          The Bible often explains itself when we patiently study it in context.
          Allow God&apos;s Word to become its own best commentary. One thing you can
          do to help with this, is find a bible study bible. There are several
          different bibles that will provide connected verses on the page you
          are reading so that you can go read those as well and see the
          connections that exist throughout the bible. These connections are
          one of the interwoven miracles of the bible. All these authors, over
          all the years, yet the message it gives us is consistent, and
          stitched together to help us understand God clear message of salvation.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.44 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.44" />
        <p>Take a few moments to consider these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>When I come across a difficult verse, do I keep reading to understand the context?</li>
          <li>Am I willing to let God&apos;s Word shape my beliefs instead of looking only for verses that support my own opinions?</li>
          <li>How does remembering that the Bible has one divine Author change the way I study it?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.45 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.45" />
        <p>Choose a verse that is familiar to you. Before deciding what it means:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Read the entire chapter.</li>
          <li>Read the chapter before and after if needed.</li>
          <li>Look for other passages that speak about the same subject.</li>
          <li>Record what you learned in your Faith Changes Everything Bible Journal.</li>
        </ul>
        <p>Notice how your understanding grows as you allow Scripture to explain Scripture.</p>
      </LessonBlock>

      <LessonBlock title="4.d.46 Prayer" icon="◇">
        <ListenFromSection section="4.d.46" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for giving us Your perfect Word. Help me to study the Bible
          carefully and faithfully. Guard me from misunderstanding Scripture or
          taking verses out of context. Give me wisdom to compare Your Word with
          Your Word and to trust that You will guide me into truth through the
          Holy Spirit. As I continue learning, help me grow in both knowledge
          and obedience so that my life reflects Your truth each day.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>

      <LessonBlock title="4.d.47 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="4.d.47" />
        <p>
          The more you study God&apos;s Word, the more you&apos;ll discover that
          it is beautifully connected from beginning to end. Every book,
          every chapter, and every promise points to God&apos;s faithfulness and
          ultimately to Jesus Christ. Trust the Holy Spirit to guide you,
          continue studying with a humble heart, and allow Scripture to
          illuminate Scripture. As your understanding grows, so will your
          confidence in the truth of God&apos;s Word.
        </p>
      </LessonBlock>
    </>
  );
}
