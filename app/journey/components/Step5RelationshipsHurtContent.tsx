import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00037"];
const playerId = "5g-when-relationships-hurt";
function Listen({ section }: { section: keyof typeof cues }) {
  return <div className={fixes.lessonSectionActions}><JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} /></div>;
}

export function Step5RelationshipsHurtContent() {
  return <>
    <LessonBlock title="5.g When Relationships Hurt" icon="◇">
      <Listen section="5.g" />
      <p>Relationships can bring some of life’s greatest joys, but they can also leave some of its deepest wounds. In this lesson, we’ll look at what Scripture teaches about forgiveness, grace, peace, and trusting God when relationships become painful or broken. My prayer is that you will find wisdom for the next step and remember that even when reconciliation is difficult or incomplete, God can still bring healing to your heart.</p>
    </LessonBlock>
    <LessonBlock title="5.g.1 Key Scripture" icon="▣" tone="scripture">
      <Listen section="5.g.1" />
      <blockquote className={sequence9.scriptureQuote}>
        &quot;and be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ&apos;s sake hath forgiven you&quot;{" "}
        <JourneyScriptureReference reference="Ephesians 4:32 (KJV)" />
      </blockquote>
    </LessonBlock>
    <LessonBlock title="5.g.2 Why This Scripture?" icon="▤">
      <Listen section="5.g.2" />
      <p>Relationships are one of God&apos;s greatest gifts, but they can also become one of life&apos;s deepest sources of pain. Hurtful words, broken trust, betrayal, misunderstandings, and conflict can leave wounds that seem impossible to heal. Yet God calls us to respond differently. His grace gives us the strength to forgive, pursue peace when possible, and trust Him with the healing process.</p>
    </LessonBlock>
    <LessonBlock title="5.g.3 The Lesson" icon="▤">
      <Listen section="5.g.3" />
      <p>Few things hurt more deeply than being wounded by someone you love. The closer the relationship, the deeper the pain often feels. A broken friendship, a strained marriage, a family disagreement, or words spoken in anger can leave lasting scars on our hearts.</p>
      <p>When relationships are damaged, it&apos;s easy to become consumed by bitterness or replay the hurt over and over in our minds. We may wonder why someone treated us the way they did or whether the relationship can ever be restored. Those are honest questions, and God is not afraid of them.</p>
      <p>The Bible is filled with stories of broken relationships. Joseph was betrayed by his brothers. David experienced betrayal from trusted friends. Even Jesus was betrayed by one of His own disciples and abandoned by others in His darkest hour. Because of this, we can be confident that our Savior understands the pain of relational wounds.</p>
      <p>Forgiveness is often one of the hardest commands in Scripture because it feels as though we&apos;re letting someone &quot;off the hook.&quot; But biblical forgiveness is not pretending the hurt never happened, nor does it always mean a relationship can return to what it once was. Instead, forgiveness means releasing our desire for revenge and entrusting justice to God. Sometimes reconciliation is possible. Sometimes it isn&apos;t.</p>
      <p>Healthy relationships require repentance, honesty, and rebuilding trust. While we cannot control another person&apos;s choices, we can choose how we respond. We can pray, extend grace where appropriate, establish healthy boundaries when necessary, and allow God to bring healing to our hearts.</p>
      <p>One of the greatest acts of faith is choosing not to allow someone else&apos;s actions to determine the condition of your own heart.</p>
      <p>As difficult as it may seem today, God is able to bring healing even to the deepest relational wounds. His grace can soften hardened hearts, restore what has been broken, and give peace where bitterness once lived.</p>
    </LessonBlock>
    <LessonBlock title="5.g.4 Remember This" icon="✦" tone="highlight">
      <Listen section="5.g.4" />
      <p>Forgiveness doesn&apos;t always change the past, but it can change your future.</p>
      <p>Choosing forgiveness is not saying the hurt was acceptable. It&apos;s choosing to trust God with what you cannot change and allowing Him to bring healing to your heart.</p>
    </LessonBlock>
    <LessonBlock title="5.g.5 Bible Study Tip" icon="▣">
      <Listen section="5.g.5" />
      <p>As you read the Gospels, pay attention to the way Jesus treated people who misunderstood Him, rejected Him, and even betrayed Him. His responses reveal both incredible grace and unwavering truth. Ask God to help you reflect that same balance in your own relationships.</p>
    </LessonBlock>
    <LessonBlock title="5.g.6 Time to Reflect" icon="?">
      <Listen section="5.g.6" />
      <p>Take a few quiet moments to consider these questions.</p>
      <ul>
        <li>Is there a relationship that has been weighing heavy on my heart?</li>
        <li>Am I holding on to bitterness that I need to surrender to God?</li>
        <li>Is there someone I need to forgive?</li>
        <li>Is there someone from whom I need to seek forgiveness?</li>
        <li>What step of obedience is God asking me to take today?</li>
      </ul>
    </LessonBlock>
    <LessonBlock title="5.g.7 Today's Challenge" icon="→">
      <Listen section="5.g.7" />
      <p>Open your Faith Changes Everything Bible Journal and write the name of a relationship that needs God&apos;s healing. Then write the verse from Ephesians 4:32 next to that name.</p>
      <p>Then, spend some time praying for that person—even if it&apos;s difficult. Ask God to begin His work in both of your hearts and to give you the wisdom to know what your next step should be.</p>
      <div className={fixes.churchFinderCallToAction}><Link href="/journal" className={fixes.churchFinderButton}>Open the FCE Bible Journal</Link></div>
    </LessonBlock>
    <LessonBlock title="5.g.8 Prayer" icon="◇">
      <Listen section="5.g.8" />
      <p>Heavenly Father,</p>
      <p>Relationships can bring great joy, but they can also bring deep pain. You know every hurt I&apos;ve experienced and every wound I still carry. Help me to forgive as You have forgiven me. Give me wisdom to know when to pursue reconciliation, courage to establish healthy boundaries when needed, and grace to trust You with the things I cannot control. Heal my heart from bitterness, replace anger with peace, and help me become a reflection of Your love in every relationship. In Jesus&apos; name, Amen.</p>
      <div className={fixes.step5NeedHelpAction}>
        <Link href="/help-support" className={fixes.step5NeedHelpButton}><span aria-hidden="true">♥</span> Need Help Right Now?</Link>
      </div>
    </LessonBlock>
    <LessonBlock title="5.g.9 Final Encouragement" icon="✦" tone="highlight">
      <Listen section="5.g.9" />
      <p>Relationships may leave scars, but they do not have to leave you without hope. God specializes in bringing healing where there has been hurt and peace where there has been conflict. Even when reconciliation isn&apos;t possible, He can restore your heart and help you move forward with wisdom, grace, and freedom.</p>
      <p>As you continue your journey, remember that Christ&apos;s love for you has never changed. He understands your pain, walks beside you through it, and promises to complete the good work He has begun in your life. Trust Him with your relationships, your heart, and your future, knowing that His grace is always greater than your deepest wounds.</p>
    </LessonBlock>
  </>;
}
