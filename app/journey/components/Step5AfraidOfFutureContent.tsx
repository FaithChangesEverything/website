import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00036"];
const playerId = "5f-when-youre-afraid-of-the-future";
function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}

export function Step5AfraidOfFutureContent() {
  return <>
    <LessonBlock title="5.f When You’re Afraid of the Future" icon="◇">
      <Listen section="5.f" />
      <p>The future can feel especially uncertain when we are already carrying difficult circumstances today. In this lesson, we’ll look at what Jesus teaches about worry, trust, and living one day at a time. My prayer is that you will be reminded that while you may not know what tomorrow holds, you can trust the God who does and rest in His faithfulness today.</p>
    </LessonBlock>
    <LessonBlock title="5.f.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.f.1" />
      <blockquote className={sequence9.scriptureQuote}>
        &quot;Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.&quot;{" "}
        <JourneyScriptureReference reference="Matthew 6:34 (KJV)" />
      </blockquote>
    </LessonBlock>
    <LessonBlock title="5.f.2 Why This Scripture?" icon="▤">
      <Listen section="5.f.2" />
      <p>The future can feel uncertain, especially when life is already difficult. Questions about our health, finances, family, career, or tomorrow&apos;s unknowns can easily fill our minds with fear. Jesus reminds us that while we cannot control tomorrow, we can trust the One who already knows it. God calls us to live faithfully today, confident that He is already present in every tomorrow we will ever face.</p>
    </LessonBlock>
    <LessonBlock title="5.f.3 The Lesson" icon="▤">
      <Listen section="5.f.3" />
      <p>Few things have the power to steal our peace like uncertainty about the future. We naturally want to know what tomorrow will bring. We want assurance that everything will work out, that our loved ones will be safe, that our needs will be met, and that the difficult season we&apos;re walking through will eventually come to an end.</p>
      <p>When those answers don&apos;t come, fear often fills the empty spaces.</p>
      <p>Our minds begin asking questions that have no immediate answers. What if I lose my job? What if my health gets worse? What if this relationship never heals? What if I don&apos;t have enough? Before long, we&apos;ve begun living in a future that hasn&apos;t happened yet.</p>
      <p>Jesus understood that tendency. That&apos;s why He lovingly reminded His followers not to worry about tomorrow. He wasn&apos;t saying we shouldn&apos;t plan for the future or act responsibly. Planning is wise. Worry is different. Worry carries burdens that God never intended us to carry. The truth is none of us knows what tomorrow holds. But as Christ followers, we know the One who holds tomorrow.</p>
      <p>Throughout Scripture, God repeatedly tells His people not to fear—not because life will always be easy, but because His presence will never leave them. His promises remain true regardless of our circumstances. He has proven His faithfulness in the past, and He will remain faithful in the future.</p>
      <p>Think back over your own life for a moment. There were probably seasons when you wondered how everything would work out. Yet here you are today. Looking back, you can likely see moments when God quietly provided, protected, guided, or strengthened you in ways you didn&apos;t realize or recognize at the time. The same God who carried you then is the same God who will carry you tomorrow. Fear focuses on everything that might go wrong. Faith remembers everything God has already done.</p>
      <p>When your thoughts begin racing toward tomorrow, gently bring them back to today. Ask yourself, &quot;What is God asking me to trust with Him right now?&quot; More often than not, you&apos;ll discover that today&apos;s grace is exactly what you need for today&apos;s challenges. Leave tomorrow in God&apos;s hands. He&apos;s already there.</p>
    </LessonBlock>
    <LessonBlock title="5.f.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.f.4" />
      <p>Fear imagines what might happen. Faith remembers who God is.</p>
      <p>You may not know what tomorrow holds, but you can rest in the confidence that God does.</p>
    </LessonBlock>
    <LessonBlock title="5.f.5 Bible Study Tip" icon="▣">
      <Listen section="5.f.5" />
      <p>As you read the Bible, pay attention to God&apos;s promises instead of focusing only on people&apos;s problems. Notice how often God reminds His people of His faithfulness before asking them to trust Him. Consider keeping a list in your Faith Changes Everything Bible Journal of verses that remind you of God&apos;s provision, protection, and care. Return to those promises whenever fear begins to take hold.</p>
    </LessonBlock>
    <LessonBlock title="5.f.6 Time to Reflect" icon="?">
      <Listen section="5.f.6" />
      <p>Take a few quiet moments to reflect.</p>
      <ul>
        <li>What part of my future causes me the greatest concern?</li>
        <li>Am I spending more time imagining worst-case scenarios than remembering God&apos;s faithfulness?</li>
        <li>What evidence have I already seen of God&apos;s provision in my life?</li>
        <li>What would change if I truly trusted God with tomorrow?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.f.7 Today's Challenge" icon="→">
      <Listen section="5.f.7" />
      <p>Open your Faith Changes Everything Bible Journal and write down the biggest fear you have about the future. Then write today&apos;s key Scripture: Matthew 6:34 (KJV)</p>
      <p>Below that verse, list three specific ways God has been faithful to you in the past. As you reflect on His faithfulness, ask Him to help you trust Him with the future just as He has faithfully cared for you in the past.</p>
      <div className={fixes.churchFinderCallToAction}>
        <Link href="/journal" className={fixes.churchFinderButton}>Open the FCE Bible Journal</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.f.8 Prayer" icon="◇">
      <Listen section="5.f.8" />
      <p>Heavenly Father,</p>
      <p>I confess that I often worry about things I cannot control. My heart wants certainty, but You have called me to trust You instead. Thank You for reminding me that You already know what tomorrow holds and that nothing I face will ever surprise You.</p>
      <p>Help me to release my fears into Your hands. Replace my anxiety with Your peace, my uncertainty with Your promises, and my fear with confident faith. Teach me to live one day at a time, trusting that Your grace will always be sufficient for whatever tomorrow brings.</p>
      <p>Thank You for being faithful yesterday, today, and forever.</p>
      <p>In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}>
        <Link href="/help-support" className={fixes.step5NeedHelpButton}><span aria-hidden="true">♥</span> Need Help Right Now?</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.f.9 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.f.9" />
      <p>The future may feel uncertain, but God&apos;s faithfulness never is. Long before you face tomorrow, your Heavenly Father is already there, preparing the way for you. He has never asked you to carry the weight of the future on your own shoulders. Instead, He invites you to trust Him one day at a time.</p>
      <p>When fear begins to whisper, remember God&apos;s promises. When uncertainty steals your peace, remember His faithfulness. And when you don&apos;t know what tomorrow holds, remember that you belong to the One who holds tomorrow.</p>
      <p>Take the next step in faith. Then the next. God will meet you there.</p>
    </LessonBlock>
  </>;
}
