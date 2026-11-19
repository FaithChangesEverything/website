import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00033"];
const playerId = "5c-when-youre-grieving";

function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}

export function Step5GrievingContent() {
  return <>
    <LessonBlock title="5.c When You're Grieving" icon="◇">
      <Listen section="5.c" />
      <p>Grief can leave us carrying emotions that are difficult to explain and even harder to bear. In this lesson, we’ll look at the comfort God offers to the brokenhearted and the assurance that He does not distance Himself from us in our sorrow. My prayer is that as you walk through this section, you will be reminded that God sees your pain, understands your loss, and remains near even in the hardest moments.</p>
    </LessonBlock>
    <LessonBlock title="5.c.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.c.1" />
      <blockquote className={sequence9.scriptureQuote}>
        &quot;The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.&quot;{" "}
        <JourneyScriptureReference reference="Psalm 34:18 (KJV)" />
      </blockquote>
    </LessonBlock>
    <LessonBlock title="5.c.2 Why This Scripture?" icon="▤">
      <Listen section="5.c.2" />
      <p>One of the greatest comforts in Scripture is knowing that God does not keep His distance from those who are hurting. When our hearts are broken, He draws near. He sees every tear, understands every ache, and promises His presence even when life feels unbearable.</p>
    </LessonBlock>
    <LessonBlock title="5.c.3 The Lesson" icon="▤">
      <Listen section="5.c.3" />
      <p>Grief is one of life&apos;s most difficult journeys. It arrives in many different ways. Sometimes it comes with the loss of someone we love. Sometimes it follows the end of a relationship.</p>
      <p>Sometimes it comes through the loss of our health, our career, our dreams, or the future we thought we were going to have. Whatever has brought grief into your life, I want you to know this:</p>
      <p>God understands your pain.</p>
      <p>One of the beautiful truths found throughout Scripture is that God never asks us to pretend we aren&apos;t hurting. Jesus Himself stood beside the tomb of His friend Lazarus and wept. Even though He knew resurrection was only moments away, He still entered into sorrow of those who were grieving. That tells us something wonderful about our Savior.</p>
      <p>He isn&apos;t distant from our pain. He steps into it with us. There are days when grief feels like waves crashing over your heart. Some mornings you wake up feeling almost normal. Other days, the smallest memory, a photograph, a familiar song, or an empty chair can bring tears you never expected. That doesn&apos;t mean you&apos;re moving backward. It simply means you&apos;re grieving because you loved deeply.</p>
      <p>Healing is rarely a straight line. Some days will be easier than others. And that&apos;s okay.</p>
      <p>Don&apos;t allow anyone to make you feel guilty because your grief hasn&apos;t disappeared on someone else&apos;s timetable. God is patient with you. Be patient with yourself. Although grief changes us, it does not have to define us forever. Little by little, God begins replacing despair with hope. He doesn&apos;t ask us to forget those we&apos;ve loved. Instead, He teaches us how to carry both love and hope together.</p>
      <p>One day you&apos;ll discover that although the pain hasn&apos;t completely disappeared, God&apos;s faithfulness has become stronger than your sorrow. Until then... Keep bringing your tears to Him. He understands every one of them.</p>
    </LessonBlock>
    <LessonBlock title="5.c.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.c.4" />
      <p>Grief is not a sign that your faith is weak. It is often a reflection of how deeply you loved. God understands both your tears...and your love.</p>
    </LessonBlock>
    <LessonBlock title="5.c.5 Bible Study Tip" icon="▣">
      <Listen section="5.c.5" />
      <p>When grief makes it difficult to concentrate, choose one short passage of Scripture each day instead of trying to read large portions. Read it slowly. Pray through it. Allow God to minister to your heart one verse at a time. Sometimes a single promise is enough to carry us through an entire day.</p>
    </LessonBlock>
    <LessonBlock title="5.c.6 Time to Reflect" icon="?">
      <Listen section="5.c.6" />
      <p>Take a few quiet moments to reflect.</p>
      <ul>
        <li>What loss am I grieving today?</li>
        <li>Have I been trying to hide my pain from God?</li>
        <li>What memories make me smile?</li>
        <li>What memories still make me cry?</li>
        <li>Can I trust God to walk with me, even while I grieve?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.c.7 Today’s Challenge" icon="→">
      <Listen section="5.c.7" />
      <p>Today, spend a few minutes writing in your Faith Changes Everything Bible Journal. Write about the person, relationship, dream, or season you are grieving. Then write one thing you are thankful for. Gratitude does not erase grief. But it reminds us that even in our darkest seasons, God&apos;s goodness is still present.</p>
      <div className={fixes.lessonResourceLinks}><Link href="/journal">Open the FCE Bible Journal</Link></div>
    </LessonBlock>
    <LessonBlock title="5.c.8 Prayer" icon="◇">
      <Listen section="5.c.8" />
      <p>Heavenly Father,</p>
      <p>My heart hurts. Some days I don&apos;t even know how to put my feelings into words. Thank You for being close to the brokenhearted and for never asking me to carry this pain alone. Comfort me when I feel overwhelmed. Give me strength when my heart feels weak. Help me remember that You understand every tear I cry and every memory I hold close.</p>
      <p>Teach me to trust You one day at a time. Thank You for Your promise that You will never leave me nor forsake me. Help me find hope again—not because my loss wasn&apos;t real, but because Your love is greater than my sorrow.</p>
      <p>In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}>
        <Link href="/help-support" className={fixes.step5NeedHelpButton}><span aria-hidden="true">♥</span> Need Help Right Now?</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.c.9 Additional Ministry Resources" icon="▣">
      <Listen section="5.c.9" />
      <p>Explore our growing collection of sermons, worship music, Bible studies, devotionals, and discipleship resources created to encourage your heart and strengthen your faith during every season of life.</p>
      <div className={fixes.lessonResourceLinks}>
        <Link href="/sermons">Sermons</Link>
        <Link href="/music">Music Library</Link>
        <Link href="/bible-studies">Bible Studies</Link>
        <Link href="/resources">Ministry Resources</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.c.10 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.c.10" />
      <p>Grief may change the landscape of your life, but it does not change the faithfulness of God. The same Lord who walks with you through the valley also promises never to leave your side. He sees every tear, hears every prayer, and holds every broken piece of your heart. In time, He will gently replace despair with hope—not by asking you to forget what you&apos;ve lost, but by reminding you that His love is constant and His promises are sure.</p>
      <p>Take the next step, then another. And remember:</p>
      <p>You never walk through grief alone.</p>
    </LessonBlock>
  </>;
}
