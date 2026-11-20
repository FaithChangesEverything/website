import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00038"];
const playerId = "5h-finding-hope-again";

function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}

export function Step5FindingHopeAgainContent() {
  return <>
    <LessonBlock title="5.h Finding Hope Again" icon="◇">
      <Listen section="5.h" />
      <p>After a difficult season, hope can sometimes feel distant or even impossible to recover. In this lesson, we’ll look at what Scripture teaches about trusting God when the future feels uncertain and learning to hope again after pain, loss, disappointment, or discouragement. My prayer is that you will be reminded that your story is not finished, and that lasting hope is found not in perfect circumstances, but in the faithfulness of God.</p>
    </LessonBlock>
    <LessonBlock title="5.h.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.h.1" />
      <blockquote className={sequence9.scriptureQuote}>
        &quot;For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.&quot;{" "}
        <JourneyScriptureReference reference="Jeremiah 29:11 (KJV)" />
      </blockquote>
    </LessonBlock>
    <LessonBlock title="5.h.2 Why This Scripture?" icon="▤">
      <Listen section="5.h.2" />
      <p>When we&apos;ve walked through pain, it&apos;s easy to believe our best days are behind us. Yet God reminds us that He is still writing our story. His plans are rooted in His love, His faithfulness, and His desire to give us hope. Even after seasons of sorrow, disappointment, or uncertainty, God continues to lead us toward His purposes.</p>
    </LessonBlock>
    <LessonBlock title="5.h.3 The Lesson" icon="▤">
      <Listen section="5.h.3" />
      <p>If you&apos;ve walked through each lesson in this section, you&apos;ve already taken an important step. You chose not to give up.</p>
      <p>Instead, you chose to seek God.</p>
      <p>That may not seem like much today, but it is a powerful act of faith.</p>
      <p>Hope doesn&apos;t usually return all at once. It often begins quietly, almost unnoticed. It grows as we spend time with God, trust His promises, and take one faithful step after another.</p>
      <p>Many of the people we admire in the Bible experienced long seasons of waiting before they saw God&apos;s plan unfold. Joseph endured years of betrayal and imprisonment before God raised him up. Naomi believed her story had ended in bitterness before God filled her life with unexpected joy. Peter failed publicly before becoming one of the Church&apos;s boldest leaders.</p>
      <p>Their stories remind us that difficult seasons are chapters—not conclusions. Perhaps your circumstances haven&apos;t changed yet. Perhaps some questions still remain unanswered. Perhaps you&apos;re still carrying grief or waiting for healing.</p>
      <p>Even so, God is already at work.</p>
      <p>Sometimes His greatest work is not changing our circumstances first—it is changing our hearts. As we learn to trust Him more deeply, we begin to see life through the eyes of faith rather than fear. Hope is not pretending everything is fine. Hope is confidently believing that God is still faithful, even when life is not easy.</p>
      <p>As you continue your journey, don&apos;t measure God&apos;s work only by what has changed around you. Also look to what He has changed within you. Maybe you pray differently now. Maybe you trust Him more than you did before. Maybe you&apos;ve discovered a peace that doesn&apos;t make sense apart from His presence. Those are signs that God has been walking with you all along, and He isn&apos;t finished yet.</p>
    </LessonBlock>
    <LessonBlock title="5.h.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.h.4" />
      <p>Your difficult season is part of your story. It is not the end of your story. God is still writing the chapters ahead.</p>
    </LessonBlock>
    <LessonBlock title="5.h.5 Bible Study Tip" icon="▣">
      <Listen section="5.h.5" />
      <p>Take time to look back through your Faith Changes Everything Bible Journal. Notice the prayers you&apos;ve written, the Scriptures that encouraged you, and the ways God has answered—even in unexpected ways. Remembering God&apos;s faithfulness in the past strengthens our confidence for the future.</p>
    </LessonBlock>
    <LessonBlock title="5.h.6 Time to Reflect" icon="?">
      <Listen section="5.h.6" />
      <p>Take a few quiet moments to reflect.</p>
      <ul>
        <li>How has God strengthened my faith during this season?</li>
        <li>What has He taught me about Himself?</li>
        <li>In what ways have I seen His faithfulness?</li>
        <li>What gives me hope as I continue moving forward?</li>
        <li>How can my story encourage someone else who is struggling?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.h.7 Today's Challenge" icon="→">
      <Listen section="5.h.7" />
      <p>Open your Faith Changes Everything Bible Journal and write a letter to your future self. Include today&apos;s key Scripture from Jeremiah 29:11.</p>
      <p>Then write about what God has been teaching you through this difficult season. Record the ways He has remained faithful, the prayers He has answered, and the hope you have found in Him. One day, when you look back on these pages, you&apos;ll be reminded that even in your darkest moments, God never stopped working.</p>
      <div className={fixes.churchFinderCallToAction}><Link href="/journal" className={fixes.churchFinderButton}>Open the FCE Bible Journal</Link></div>
    </LessonBlock>
    <LessonBlock title="5.h.8 Prayer" icon="◇">
      <Listen section="5.h.8" />
      <p>Heavenly Father,</p>
      <p>Thank You for walking with me through every step of this journey. Thank You for never leaving me, even during the moments when I couldn&apos;t see what You were doing. As I move forward, help me continue trusting Your promises and resting in Your faithfulness.</p>
      <p>Fill my heart with renewed hope. Strengthen my faith for whatever lies ahead. Help me become a source of encouragement to others who are walking through difficult seasons, just as You have encouraged me. Thank You for reminding me that my story is not finished because You are still writing it.</p>
      <p>In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}><Link href="/help-support" className={fixes.step5NeedHelpButton}><span aria-hidden="true">♥</span> Need Help Right Now?</Link></div>
    </LessonBlock>
    <LessonBlock title="5.h.9 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.h.9" />
      <p>As you finish this section, remember where you began. You may have arrived feeling overwhelmed, grieving, uncertain, or discouraged. While your circumstances may not have changed overnight, your journey has not been wasted. Every lesson, every prayer, every Scripture, and every quiet moment with God has been another step toward hope.</p>
      <p>Continue walking with Christ. Continue opening His Word. Continue bringing Him your joys, your questions, and your burdens. The God who has carried you this far will not stop now.</p>
      <p>And whenever another difficult season comes—and it will—remember what you&apos;ve learned here. You are never alone. God&apos;s presence is constant, His promises are trustworthy, and His hope is stronger than any darkness you may face.</p>
      <p>Take the next step with confidence.</p>
      <p>The same Savior who brought you through this season will faithfully lead you into the next one.</p>
    </LessonBlock>
  </>;
}
