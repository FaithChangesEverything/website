import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step3AudioTimestamps } from "../timestamps/step3";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step3AudioTimestamps["audio-2026-00020"];
const playerId = "3b-knowing-heart-of-god";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

function QuotedScripture({ text, reference }: { text: string; reference: string }) {
  return (
    <blockquote className={sequence9.scriptureQuote}>
      {text} <JourneyScriptureReference reference={reference} />
    </blockquote>
  );
}

export function Step3HeartOfGodContent() {
  return (
    <>
      <LessonBlock title="3.b Knowing the Heart of God" icon="◇">
        <ListenFromSection section="3.b" />
        <p>
          To know God more deeply, we must begin with what He has revealed about
          Himself. In the sections that follow, we’ll look at God’s character
          through Scripture and see how Jesus Christ reveals the heart of the
          Father. As we grow in our understanding of who God truly is, we also
          learn why He is worthy of our trust, our worship, and our love.
        </p>
      </LessonBlock>

      <LessonBlock title="3.b.1 God Reveals His Own Character" icon="▤">
        <ListenFromSection section="3.b.1" />
        <p>
          One of the greatest questions anyone can ask is simply this: What is God
          really like? People have searched for the answer throughout history. Some
          imagine God as distant and uncaring. Others picture Him as angry or
          impossible to please. Still others form their understanding of God from
          personal experiences or opinions they have heard from others.
        </p>
        <p>
          Many of us unknowingly build our picture of God from our earthly
          experiences. If we&apos;ve experienced rejection, we may imagine that God
          is distant. If we&apos;ve known harshness, we may assume God is always
          angry. But our understanding of God must be shaped by Scripture rather
          than by our circumstances.
        </p>
        <p>
          But God has not left us to guess. He has revealed Himself through His
          Word, and most clearly through His Son, Jesus Christ.
        </p>
        <QuotedScripture
          text={'Jesus said, "Anyone who has seen Me has seen the Father."'}
          reference="John 14:9 (NIV)"
        />
        <p>
          If you want to know what God is like, look at Jesus. When Jesus welcomed
          those who were rejected, you see God&apos;s heart. When He forgave
          sinners, you see God&apos;s heart. When He healed the sick, comforted
          the brokenhearted, fed the hungry, and ultimately gave His life on the
          cross, you see the very character of God revealed to the world.
        </p>
        <p>
          Jesus did not come to introduce us to a different God. He came to reveal
          the Father. Every miracle, every act of compassion, every word of truth,
          and every step Jesus took toward the cross reveals the very heart of God
          for humanity.
        </p>
        <p>
          Throughout the Bible we learn about God through His actions, His
          promises, and His relationship with His people. Yet one of the most
          remarkable moments in all of Scripture occurs when Moses asked God to
          reveal Himself more fully. Instead of simply displaying His power or
          glory, God revealed His character.
        </p>
        <QuotedScripture
          text={'"The LORD, the LORD, the compassionate and gracious God, slow to anger, abounding in love and faithfulness."'}
          reference="Exodus 34:6 (NIV)"
        />
        <p>
          These words became one of the most quoted descriptions of God
          throughout the Bible because they reveal His very heart. God tells us
          that He is
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>Compassionate</li>
          <li>Gracious</li>
          <li>Slow to anger</li>
          <li>Abounding in love</li>
          <li>Faithful</li>
        </ul>
        <p>
          These are not simply qualities God possesses. They describe who He is.
          Because God&apos;s character never changes, we can trust Him
          completely. His compassion, grace, patience, love, and faithfulness are
          not temporary moods—they are the unchanging foundation of everything
          He does. Everything God does flows from His perfect character.
        </p>
        <p>
          Take a moment to ask yourself: Which of these descriptions of God do I
          need most today? His compassion? His grace? His patience? His faithful
          love? Spend a few moments thanking Him for revealing His heart through
          His Word.
        </p>
      </LessonBlock>

      <LessonBlock title="3.b.2 Jesus Is the Perfect Revelation of God" icon="◇">
        <ListenFromSection section="3.b.2" />
        <p>
          When you read the Gospels, you&apos;ll discover that everything God
          declared about Himself is perfectly displayed in Jesus Christ. Jesus
          showed compassion to the hurting. He extended grace to those who had
          failed. He patiently called people to repentance. He demonstrated
          unfailing love by giving His life on the cross. He faithfully fulfilled
          every promise God made concerning our salvation.
        </p>
        <p>
          The life of Jesus allows us to see the Father&apos;s heart more clearly
          than ever before. As you grow to know Jesus, you will grow to know God.
        </p>
      </LessonBlock>

      <LessonBlock title="3.b.3 Knowing God Personally" icon="✦" tone="highlight">
        <ListenFromSection section="3.b.3" />
        <p>
          Knowing God is much more than learning facts about Him. It is the
          beginning of a personal relationship that grows throughout your life.
          The more you spend time reading His Word...pThe more you pray... The
          more you trust Him...The more you will discover that He truly is
          compassionate, gracious, patient, loving, and faithful. You won&apos;t
          simply learn more about God. You will come to know Him personally. And
          that relationship will continue to change your life every day.
        </p>
      </LessonBlock>

      <LessonBlock title="3.b.4 Go Deeper in Your Understanding of God" icon="▣">
        <ListenFromSection section="3.b.4" />
        <p>
          This section introduces the heart of who God is, but there is so much
          more to discover. To help you continue growing, we&apos;ve prepared a
          Character of God Bible Study Series that explores these wonderful truths
          in greater depth.
        </p>
        <p>In this series you&apos;ll learn about:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>The Trinity — Understanding God the Father, Jesus Christ, and the Holy Spirit</li>
          <li><JourneyScriptureReference reference="Exodus 34:6–7" /> — God&apos;s own description of His character</li>
          <li>God&apos;s Compassion</li>
          <li>God&apos;s Grace</li>
          <li>Why God Is Slow to Anger</li>
          <li>God&apos;s Loyal Love</li>
          <li>God&apos;s Faithfulness</li>
        </ul>
        <p>
          Each study includes biblical teaching, Scripture references, and
          additional resources designed to help you know God more deeply through
          His Word.
        </p>
        <div className={fixes.lessonResourceLinks}>
          <Link href="/bible-studies/character-of-god">▶ Explore the Character of God Bible Study Series</Link>
        </div>
      </LessonBlock>

      <LessonBlock title="3.b.5 Time to Reflect" icon="?">
        <ListenFromSection section="3.b.5" />
        <p>Take a few quiet moments to think about what you&apos;ve just read.</p>
        <p>
          For many people, their understanding of God has been shaped by life
          experiences, difficult circumstances, or things they&apos;ve heard from
          others. But throughout the Bible—and especially through Jesus—we
          discover who God truly is.
        </p>
        <p>Consider these questions:</p>
        <ul className={fixes.reflectionQuestions}>
          <li>Before reading this chapter, how would you have described God?</li>
          <li>Has your understanding of God changed? If so, how?</li>
          <li>Which part of God&apos;s character speaks most to your heart today?</li>
          <li>Is there an area of your life where you need to trust God&apos;s compassion, grace, patience, love, or faithfulness?</li>
          <li>What step could you take this week to know God more personally?</li>
        </ul>
        <p>There are no wrong or right answers.</p>
        <p>
          God invites you to come to Him honestly. He already knows your heart,
          and He desires a genuine relationship with you. Take a few moments now
          to pray. Thank God for revealing Himself through Jesus Christ and ask
          Him to help you know Him more deeply each day.
        </p>
        <blockquote className={sequence9.scriptureQuote}>
          &quot;Draw nigh to God, and he will draw nigh to you. Cleanse{" "}
          <em>your</em> hands, <em>ye</em> sinners; and purify{" "}
          <em>your</em> hearts, <em>ye</em> double minded.&quot;{" "}
          <JourneyScriptureReference reference="James 4:8 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="3.b.6 Final Encouragement" icon="✦" tone="highlight">
        <ListenFromSection section="3.b.6" />
        <p>
          As you continue your journey of faith, remember that knowing God is not
          simply about gaining knowledge—it&apos;s about growing in a relationship
          with Him through Jesus Christ. May these words from Jesus encourage
          your heart:
        </p>
        <QuotedScripture
          text={'"Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent."'}
          reference="John 17:3 (NIV)"
        />
      </LessonBlock>

      <LessonBlock title="3.b.7 Continue Your Journey" icon="→">
        <ListenFromSection section="3.b.7" />
        <p>Congratulations!</p>
        <p>
          You&apos;ve completed another important step in your journey of faith.
          Learning about God&apos;s character is one of the greatest adventures of
          the Christian life. The more you come to know Him, the more you&apos;ll
          discover His compassion, His grace, His patience, His unfailing love,
          and His faithfulness. Every day spent walking with Him is another
          opportunity to grow in your relationship with the One who created you,
          loves you, and has promised never to leave you.
        </p>
        <p>
          Remember that spiritual growth doesn&apos;t happen overnight. It
          happens one step at a time as you spend time with God through His Word,
          prayer, worship, and fellowship with other believers. Be patient with
          yourself, trust God&apos;s work in your life, and continue seeking Him
          with all your heart.
        </p>
        <p>
          When you&apos;re ready, return to the Journey Hub to continue your
          journey. There you&apos;ll find additional paths designed to encourage
          you, strengthen your faith, answer new questions, and help you continue
          growing in your walk with Jesus Christ. As you continue growing in your
          faith, you may find some of the additional resources at the bottom of
          this page helpful.
        </p>
      </LessonBlock>
    </>
  );
}
