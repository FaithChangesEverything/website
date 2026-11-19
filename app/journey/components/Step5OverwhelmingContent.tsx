import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00032"];
const playerId = "5b-when-life-feels-overwhelming";

function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}
function Paragraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return <>{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</>;
}

export function Step5OverwhelmingContent() {
  return <>
    <LessonBlock title="5.b When Life Feels Overwhelming" icon="◇">
      <Listen section="5.b" />
      <p>There are seasons when the weight of life can feel heavier than we know how to carry. In this lesson, we’ll look at the invitation Jesus gives to those who are weary and burdened, and we’ll consider what it means to bring our struggles to Him instead of trying to carry everything alone. My prayer is that you will be reminded that even in overwhelming moments, Christ is near and His presence gives us strength for the next step.</p>
    </LessonBlock>
    <LessonBlock title="5.b.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.b.1" />
      <blockquote className={sequence9.scriptureQuote}>&quot; Come unto me, all ye that labor and are heavy laden, and I will give you rest. Take my yoke upon you and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.&quot;{" "}<JourneyScriptureReference reference="Matthew 11:28-30 (KJV)" /></blockquote>
    </LessonBlock>
    <LessonBlock title="5.b.2 Why This Scripture?" icon="▤">
      <Listen section="5.b.2" />
      <p>Life has a way of placing burdens on our shoulders that we never meant to carry alone. Whether you&apos;re facing grief, anxiety, uncertainty, financial struggles, family difficulties, or simply the weight of everyday life, Jesus offers an invitation unlike any other. He doesn&apos;t ask us to become stronger before coming to Him—He simply invites us to come. His promise is not that life will always be easy, but that we never have to face it alone.</p>
    </LessonBlock>
    <LessonBlock title="5.b.3 The Lesson" icon="▤">
      <Listen section="5.b.3" />
      <Paragraphs paragraphs={[
        "There are seasons in life when everything seems to happen at once.",
        "One phone call changes everything.",
        "One diagnosis.",
        "One unexpected loss.",
        "One broken relationship.",
        "One financial setback.",
        "One difficult decision.",
        "Suddenly the life you knew feels completely different.",
        "Your thoughts race from one problem to the next. Your heart grows tired. Sleep becomes difficult. Even simple decisions begin to feel overwhelming.  If that's where you are today, I want you to know something.",
        "God is not surprised by your circumstances. He isn't disappointed because you're struggling. He isn't waiting for you to \"pull yourself together\" before He welcomes you into His presence.  Instead, Jesus extends one of the most compassionate invitations found anywhere in Scripture: \"Come to Me.\"",
        "Notice what Jesus doesn't say. He doesn't say, \"Come to Me after you've figured everything out.\" He doesn't say, \"Come to Me once your faith is stronger.\" He doesn't say, \"Come to Me when life finally settles down.\" He simply says, \"Come.\"",
        "That invitation is just as true today as it was when Jesus first spoke those words. You don't have to carry tomorrow's burdens today. God gives strength for today. Grace for today. Mercy for today. Hope for today.",
        "When life feels overwhelming, we often spend so much time worrying about everything that might happen tomorrow that we miss the strength God is offering us today.  Take a deep breath, Slow down. You don't have to solve every problem this afternoon. You don't have to have every answer. You don't have to know exactly what tomorrow holds.",
        "You simply need to take the next faithful step. God has promised to walk with you one step at a time. And He has never failed to keep His promises.",
      ]} />
    </LessonBlock>
    <LessonBlock title="5.b.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.b.4" />
      <p>When life feels out of control, remember that God is still in control. You may not understand everything that is happening today, but you can trust the One who holds tomorrow. Take one step, then another. God will faithfully walk beside you the entire way.</p>
    </LessonBlock>
    <LessonBlock title="5.b.5 Bible Study Tip" icon="▣">
      <Listen section="5.b.5" />
      <p>When life feels overwhelming, don&apos;t put pressure on yourself to accomplish huge goals. Instead of trying to read several chapters, read one. Instead of trying to understand everything, ask one simple question: &quot;Lord, what do You want me to see today?&quot; A few quiet moments spent with God each day will strengthen your faith far more than occasional moments of spiritual exhaustion.</p>
    </LessonBlock>
    <LessonBlock title="5.b.6 Time to Reflect" icon="?">
      <Listen section="5.b.6" />
      <p>Take a few quiet moments and ask yourself:</p>
      <ul>
        <li>What burden feels heaviest today?</li>
        <li>Have I been trying to carry something that God has invited me to place in His hands?</li>
        <li>What is one area of my life that I need to surrender to Him today?</li>
        <li>What would it look like to trust Him with today instead of worrying about tomorrow?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.b.7 Today’s Challenge" icon="→">
      <Listen section="5.b.7" />
      <p>Take a few minutes to write down every burden you&apos;re carrying in your Faith Changes Everything Bible Journal. Write each one on its own line. Then pray over them one at a time. You don&apos;t have to ask God to solve everything immediately. Simply place each burden into His hands.</p>
      <p>Leave that page in your journal.</p>
      <p>Months from now, look back and notice how faithfully God carried you through things that once seemed impossible.</p>
      <div className={fixes.lessonResourceLinks}><Link href="/journal">Open the FCE Bible Journal</Link></div>
    </LessonBlock>
    <LessonBlock title="5.b.8 Prayer" icon="◇">
      <Listen section="5.b.8" />
      <p>Heavenly Father,</p>
      <p>Life feels heavy right now, and I confess that I&apos;ve been trying to carry burdens that are far too great for me. Thank You for inviting me to come to You just as I am. Help me trust you with the things I cannot control. Give me peace in place of anxiety, strength in place of weariness, and hope in place of fear. Teach me to depend on You one day at a time, knowing that Your grace is always enough for whatever I face. Thank You for walking beside me, even when I cannot see what lies ahead.</p>
      <p>In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}>
        <Link href="/help-support" className={fixes.step5NeedHelpButton}>
          <span aria-hidden="true">♥</span> Need Help Right Now?
        </Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.b.9 Additional Ministry Resources" icon="▣">
      <Listen section="5.b.9" />
      <p>Explore our growing collection of sermons, worship music, Bible studies, devotionals, and discipleship resources—all created to encourage your heart and strengthen your walk with Jesus Christ.</p>
      <div className={fixes.lessonResourceLinks}>
        <Link href="/sermons">Sermons</Link>
        <Link href="/music">Music Library</Link>
        <Link href="/bible-studies">Bible Studies</Link>
        <Link href="/resources">Ministry Resources</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.b.10 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.b.10" />
      <Paragraphs paragraphs={[
        "When life feels overwhelming, it can seem as though you need to find a way to fix everything before you can finally breathe again. But Jesus never asked you to have every answer. He simply invited you to come to Him.",
        "The burdens you placed before God today may still be there tomorrow. The circumstances around you may not change as quickly as you would like. But you do not have to carry them alone. God will give you the strength you need for today, and when tomorrow comes, His grace will be there waiting for you then.",
        "So don't measure your faith by whether you have everything figured out. Sometimes faith is simply trusting God enough to take the next step. Sometimes it is praying one more prayer, reading one more verse, asking someone for help, or placing the same burden back into God's hands again.",
        "You don't have to see the entire road ahead. You only need to trust the One who walks it with you. Take today one step at a time. And when the weight of life begins to feel too heavy again, remember the invitation of Jesus:",
        "Come to Me. You were never meant to carry this alone.",
      ]} />
    </LessonBlock>
  </>;
}
