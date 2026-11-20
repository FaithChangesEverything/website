import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { Step5ResourceTiles } from "./Step5ResourceTiles";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00034"];
const playerId = "5d-when-god-feels-silent";

function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}

export function Step5GodFeelsSilentContent() {
  return <>
    <LessonBlock title="5.d When God Feels Silent" icon="◇">
      <Listen section="5.d" />
      <p>There are seasons when we pray, wait, and wonder why God seems quiet. In this lesson, we’ll look at what Scripture teaches about trusting God when we cannot see what He is doing or understand His timing. My prayer is that you will be reminded that silence is not the same as absence, and that God remains faithful even when the answers have not yet come.</p>
    </LessonBlock>
    <LessonBlock title="5.d.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.d.1" />
      <blockquote className={sequence9.scriptureQuote}>
        &quot;Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.&quot;{" "}
        <JourneyScriptureReference reference="Isaiah 41:10 (KJV)" />
      </blockquote>
    </LessonBlock>
    <LessonBlock title="5.d.2 Why This Scripture?" icon="▤">
      <Listen section="5.d.2" />
      <p>There are seasons when God feels distant, our prayers seem unanswered, and we wonder if He still hears us. Yet God&apos;s promises are not based on our feelings. He assures us that He is with us, strengthening and sustaining us—even when we cannot see what He is doing.</p>
    </LessonBlock>
    <LessonBlock title="5.d.3 The Lesson" icon="▤">
      <Listen section="5.d.3" />
      <p>If you&apos;ve walked with God for any length of time, you&apos;ve probably experienced a season when He seemed silent. You prayed... But the answer didn&apos;t come. You searched the Scriptures... Yet the comfort you were hoping for seemed just out of reach.</p>
      <p>You wondered if God was listening. You wondered if He had forgotten you. You may have even wondered if your faith was failing.</p>
      <p>If you&apos;ve ever felt that way, you&apos;re not alone.</p>
      <p>Many of the men and women we admire most in Scripture experienced seasons just like this. David cried out, &quot;How long, Lord?&quot;</p>
      <p>Job searched for God in the middle of unimaginable suffering.</p>
      <p>Even Elijah, after one of the greatest victories of his life, found himself discouraged and wondering where God was leading him.</p>
      <p>Their stories remind us of something important: Faith is not the absence of questions. Faith is choosing to trust God even when the answers haven&apos;t come yet. Sometimes we mistake God&apos;s silence for His absence. But they are not the same. A teacher is often silent during a test. A parent may quietly watch while a child learns to take another step.</p>
      <p>Silence does not mean abandonment. More often than we realize, God is working behind the scenes in ways we cannot yet see. Looking back over our lives, many of us can identify moments when we wondered what God was doing, only to realize later that He had been faithfully guiding us all along.</p>
      <p>His timing is different from ours. His perspective is greater than ours. His love for us never changes. If today feels quiet...Keep praying. Keep reading His Word. Keep trusting His promises. The silence will not last forever.</p>
      <p>And even when you cannot hear His voice, you can trust His heart.</p>
    </LessonBlock>
    <LessonBlock title="5.d.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.d.4" />
      <p>God&apos;s silence does not mean God has abandoned you.</p>
      <p>He is often doing His greatest work in ways you cannot see.</p>
      <p>Keep trusting Him.</p>
    </LessonBlock>
    <LessonBlock title="5.d.5 Bible Study Tip" icon="▣">
      <Listen section="5.d.5" />
      <p>When you don&apos;t know what to pray, pray God&apos;s promises. Choose one verse that reminds you of His faithfulness.</p>
      <p>Read it slowly. Pray it back to Him. Sometimes God&apos;s Word becomes the very prayer our hearts cannot find on their own.</p>
    </LessonBlock>
    <LessonBlock title="5.d.6 Time to Reflect" icon="?">
      <Listen section="5.d.6" />
      <p>Spend a few quiet moments with these questions.</p>
      <ul>
        <li>Have I confused God&apos;s silence with His absence?</li>
        <li>Can I remember a time when God answered a prayer in a way I didn&apos;t expect?</li>
        <li>What promise from Scripture can I hold on to while I wait?</li>
        <li>How can I continue trusting God, even when I don&apos;t understand His timing?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.d.7 Today's Challenge" icon="→">
      <Listen section="5.d.7" />
      <p>Open your Faith Changes Everything Bible Journal. Write down one prayer you&apos;ve been waiting for God to answer. Next to it, write one promise from Scripture that reminds you of His faithfulness. Then pray this simple prayer:</p>
      <p>&quot;Lord, even while I wait, I choose to trust You.&quot;</p>
      <div className={fixes.churchFinderCallToAction}><Link href="/journal" className={fixes.churchFinderButton}>Open the FCE Bible Journal</Link></div>
    </LessonBlock>
    <LessonBlock title="5.d.8 Prayer" icon="◇">
      <Listen section="5.d.8" />
      <p>Heavenly Father,</p>
      <p>There are moments when I don&apos;t understand what You&apos;re doing. Sometimes it feels as though my prayers disappear into silence, and I wonder if You hear me at all.</p>
      <p>Thank You for reminding me that Your presence is not determined by my feelings. Even when I cannot see You working, help me trust that You are still faithful. Strengthen my faith while I wait, give me peace in the unanswered questions, and help me rest in the certainty that You will never leave me nor forsake me.</p>
      <p>Teach me to trust Your heart, even when I cannot understand Your plan.</p>
      <p>In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}>
        <Link href="/help-support" className={fixes.step5NeedHelpButton}><span aria-hidden="true">♥</span> Need Help Right Now?</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.d.9 Additional Ministry Resources" icon="▣">
      <Listen section="5.d.9" />
      <p>Explore our growing collection of sermons, worship music, Bible studies, devotionals, and discipleship resources designed to strengthen your faith and remind you of God&apos;s unchanging promises.</p>
      <Step5ResourceTiles />
    </LessonBlock>
    <LessonBlock title="5.d.10 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.d.10" />
      <p>Waiting is one of the hardest parts of Christian life, but it is also one of the places where faith grows the deepest. Even when heaven seems quiet, God&apos;s promises remain true. He has not forgotten you. He has not abandoned you. He is still writing your story, and His timing is always perfect.</p>
      <p>Keep praying.</p>
      <p>Keep trusting.</p>
      <p>Keep walking.</p>
      <p>One day, you&apos;ll look back and discover that even in the silence...</p>
      <p>God was there all along.</p>
    </LessonBlock>
  </>;
}
