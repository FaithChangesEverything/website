import Link from "next/link";
import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step5AudioTimestamps } from "../timestamps/step5";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cues = step5AudioTimestamps["audio-2026-00035"];
const playerId = "5e-when-you-think-you-have-failed";

function Listen({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step5WhenYouHaveFailedContent() {
  return (
    <>
      <LessonBlock title="5.e When You Think You Have Failed" icon="◇">
        <Listen section="5.e" />
        <p>Failure can leave us carrying guilt, regret, and the fear that we have somehow gone too far to be restored. In this lesson, we’ll look at the difference between our failures and the grace God offers through Jesus Christ. My prayer is that you will be reminded that your mistakes do not have to define you, and that in Christ there is forgiveness, restoration, and the opportunity to keep moving forward.</p>
      </LessonBlock>

      <LessonBlock title="5.e.1 Key Scripture" icon="▣" tone="scripture">
        <Listen section="5.e.1" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.&quot;{" "}
          <JourneyScriptureReference reference="Romans 8:1 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="5.e.2 Why This Scripture?" icon="▤">
        <Listen section="5.e.2" />
        <p>One of Satan&apos;s greatest lies is convincing us that our failures define us. God&apos;s Word tells a very different story. Through Jesus Christ, we are not condemned—we are forgiven, restored, and given the opportunity to begin again. Our mistakes may become part of our testimony, but they never have to become our identity.</p>
      </LessonBlock>

      <LessonBlock title="5.e.3 The Lesson" icon="▤">
        <Listen section="5.e.3" />
        <p>If we&apos;re honest, every one of us has moments we&apos;d rather forget. We&apos;ve all said things we wish we could take back, made decisions we regret, or watched opportunities slip through our fingers. Sometimes those memories stay with us far longer than they should, quietly whispering that we&apos;ve failed beyond repair.</p>
        <p>The enemy loves to use those moments against us. He reminds us of our past, magnifies our mistakes, and convinces us that God could never use someone like us again. But those thoughts are not the voice of God.</p>
        <p>Throughout the Bible, we see ordinary people who made extraordinary mistakes. Peter denied even knowing Jesus. David committed terrible sins that brought heartbreaking consequences. Paul spent part of his life persecuting Christians before his dramatic encounter with Christ. Their failures were real, but they were not the end of their stories. God forgave them, restored them, and used them in remarkable ways.</p>
        <p>The same God who restored Peter, David, and Paul is the same God who offers His grace to you today. No matter what you&apos;ve done or how far you&apos;ve wandered, you are never beyond the reach of His mercy. Jesus did not come to save people who had everything together. He came to save people who knew they needed Him.</p>
        <p>That doesn&apos;t mean our choices never have consequences. Sometimes we must face the results of our actions, seek forgiveness from others, and rebuild what has been broken. But consequences are not the same as condemnation. Through Christ, God offers forgiveness, restoration, and a new beginning.</p>
        <p>Your past may explain part of your journey, but it does not determine your future. God&apos;s grace is greater than your greatest regret, and His plans for your life are not cancelled because you&apos;ve stumbled along the way.</p>
        <p>Today, don&apos;t define yourself by your worst moment. Define yourself by the love, mercy, and forgiveness of the Savior who gave His life for you.</p>
      </LessonBlock>

      <LessonBlock title="5.e.4 Remember This" icon="✦" tone="highlight">
        <Listen section="5.e.4" />
        <p>Your greatest failure will never be greater than God&apos;s amazing grace.</p>
        <p>When you place your faith in Jesus Christ, your past no longer has the final word. His forgiveness does.</p>
      </LessonBlock>

      <LessonBlock title="5.e.5 Bible Study Tip" icon="▣">
        <Listen section="5.e.5" />
        <p>As you read Scripture, pay close attention to the people God chose to use. You&apos;ll quickly discover that many of the Bible&apos;s greatest leaders were imperfect people who experienced God&apos;s forgiveness and restoration. Their stories remind us that God delights in redeeming broken lives and giving people a new beginning.</p>
      </LessonBlock>

      <LessonBlock title="5.e.6 Time to Reflect" icon="?">
        <Listen section="5.e.6" />
        <p>Take a few quiet moments to think about these questions.</p>
        <ul>
          <li>Am I allowing my past to define my future?</li>
          <li>Have I truly accepted God&apos;s forgiveness, or am I continuing to condemn myself?</li>
          <li>Is there someone I need to ask forgiveness from?</li>
          <li>What would change if I fully believed God&apos;s grace was enough?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="5.e.7 Today's Challenge" icon="→">
        <Listen section="5.e.7" />
        <p>Open your Faith Changes Everything Bible Journal and write down one mistake, regret, or failure you&apos;ve been carrying. Then, beside it, write today&apos;s Scripture from Romans 8:1.</p>
        <p>Spend a few moments thanking God for His forgiveness. Ask Him to help you stop living in the shadow of your past and begin walking in the freedom He has already given you through Christ.</p>
        <div className={fixes.churchFinderCallToAction}>
          <Link href="/journal" className={fixes.churchFinderButton}>Open the FCE Bible Journal</Link>
        </div>
      </LessonBlock>

      <LessonBlock title="5.e.8 Prayer" icon="◇">
        <Listen section="5.e.8" />
        <p>Heavenly Father,</p>
        <p>Thank You for loving me even when I fall short. Thank You that Your grace is greater than my failures and that Your mercy is new every morning. Help me stop living in the shadow of my past and begin walking in the freedom You have provided through Jesus Christ. Teach me to accept Your forgiveness, to extend that same grace to others, and to trust that You can still use my life for Your glory. Thank You for never giving up on me.</p>
        <p>In Jesus&apos; name, Amen.</p>
        <div className={fixes.step5NeedHelpAction}>
          <Link href="/help-support" className={fixes.step5NeedHelpButton}>
            <span aria-hidden="true">♥</span> Need Help Right Now?
          </Link>
        </div>
      </LessonBlock>

      <LessonBlock title="5.e.9 Final Encouragement" icon="✦" tone="highlight">
        <Listen section="5.e.9" />
        <p>The enemy wants you to believe that your story ended with your worst mistake, but God says your story is still being written. Through His grace, broken lives are restored. Through His mercy, guilty hearts are forgiven. Through His love, hopeless people find new life.</p>
        <p>Don&apos;t allow yesterday to keep you from the future God is preparing for you. Walk forward in confidence, walk forward in freedom, and walk forward in Christ. Your greatest testimony may begin where you once believed your life had ended.</p>
      </LessonBlock>
    </>
  );
}
