import Link from "next/link";
import { LessonBlock } from "./PageStructures";
import fixes from "../journey-fixes.module.css";

export function SalvationContinueJourneyContent() {
  return (
    <LessonBlock title="2.h Continue Your Journey" icon="✦" tone="highlight">
      <p>Congratulations on completing this part of your journey!!</p>
      <p>Whether you have recently placed your faith in Jesus Christ or are still seeking to know Him better, I hope this chapter has helped you take another step toward a deeper understanding of God&apos;s love and His plan for your life. Remember, following Jesus is not a destination—it is a lifelong journey of growing in faith, trusting God&apos;s promises, and becoming more like Christ each day.</p>
      <p>When you&apos;re ready, return to the Journey Hub to continue your journey. There you&apos;ll find additional paths designed to help you grow, answer questions you may still have, and encourage you wherever you are in your walk with God.</p>
      <p>As you continue growing in your faith, don’t forget to visit our resources available at the bottom of each of the step, and also on our site-wide resources page. God Bless you on your continued journey with Christ. And remember, God Loves you so very much, and so do I.</p>
      <div className={fixes.churchFinderCallToAction}>
        <Link href="/journey" className={fixes.churchFinderButton}>
          Return to the Journey Hub <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={fixes.churchFinderCallToAction}>
        <Link href="/resources" className={fixes.churchFinderButton}>Explore the FCE Resources Library <span aria-hidden="true">→</span></Link>
      </div>
    </LessonBlock>
  );
}
