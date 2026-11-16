import { LessonBlock } from "./PageStructures";
import styles from "../step-overview-sequence9.module.css";

export function SalvationFinalEncouragementContent() {
  return (
    <LessonBlock title="2.g Final Encouragement" icon="✦" tone="highlight">
      <p>As you continue your journey of faith, may this prayer from the Apostle Paul encourage your heart.</p>
      <blockquote className={styles.scriptureQuote}>
        {'"I pray that out of his glorious riches he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love, may have power, together with all the Lord\'s holy people, to grasp how wide and long and high and deep is the love of Christ, and to know this love that surpasses knowledge—that you may be filled to the measure of all the fullness of God. Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen."'}
        {" "}<strong>Ephesians 3:16–21 (NIV)</strong>
      </blockquote>
    </LessonBlock>
  );
}
