import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import fixes from "../journey-fixes.module.css";
import sequence9 from "../step-overview-sequence9.module.css";

const cue = step4AudioTimestamps["audio-2026-00021"]["4.b"].seconds;

export function Step4SpiritualGrowthContent() {
  return (
    <LessonBlock title="4.b Understanding Spiritual Growth" icon="◇">
      <div className={fixes.lessonSectionActions}>
        <JourneyListenFromHere playerId="4b-spiritual-growth" seconds={cue} />
      </div>
      <p>
        Following Jesus is not about becoming a different person overnight. It is
        about walking with Him one day at a time and allowing Him to change us
        from the inside out. Every step you take with Christ is a step toward
        becoming the person God created you to be.
      </p>
      <p>
        The moment we place our faith in Jesus Christ, we become children of God.
        But just as a newborn baby must grow and mature, so must every believer.
        Spiritual growth is the lifelong process of becoming more like Jesus Christ.
        It doesn&apos;t happen overnight, and it isn&apos;t measured by how much Bible
        knowledge we have or how long we&apos;ve attended church. Instead, it&apos;s
        seen in the way God transforms our hearts, our thoughts, our attitudes,
        and the way we live each day.
      </p>
      <p>
        Many new believers expect instant change, but God often works through a
        lifetime of small, faithful steps. As we spend time reading His Word,
        talking with Him in prayer, worshiping Him, and obeying His guidance,
        our faith becomes stronger. We begin to trust Him more, love others more
        deeply, and find peace even when life is difficult. The Holy Spirit works
        within us, shaping us into the people God created us to be.
      </p>
      <p>
        It&apos;s easy to think that spiritual growth is measured by perfection.
        The Bible teaches something different. Spiritual growth is measured by
        faithfulness—choosing to keep walking with Christ, even when the journey
        is difficult.
      </p>
      <p>
        Spiritual growth doesn&apos;t mean you&apos;ll never struggle or have
        questions. Every Christian experiences seasons of joy, uncertainty,
        victory, and hardship. During those times, God is still at work. He uses
        both the blessings and the challenges of life to strengthen our faith
        and draw us closer to Him.
      </p>
      <p>
        One of the most encouraging truths in Scripture is that God is committed
        to finishing the work He has begun in us. That means your spiritual
        growth does not depend on your ability to be perfect. It depends on
        God&apos;s faithfulness to continue shaping your life as you trust and
        follow Him. Every day you choose to walk with Christ is another step
        in the work He is faithfully accomplishing within you.
      </p>
      <blockquote className={sequence9.scriptureQuote}>
        &quot;Being confident of this, that He who began a good work in you will
        carry it on to completion until the day of Christ Jesus.&quot;{" "}
        <JourneyScriptureReference reference="Philippians 1:6 (NIV)" />
      </blockquote>
      <p>
        As you continue this journey, remember that spiritual growth is not about
        becoming perfect—it is about becoming more like Christ. Take one step
        at a time, trust God with each day, and allow Him to lead you. Every
        prayer, every chapter of Scripture you read, every act of obedience,
        and every moment spent seeking Him is another step toward a deeper
        relationship with your Heavenly Father.
      </p>
      <p>
        The lessons that follow are designed to help you build that
        relationship. My prayer is that they will strengthen your faith, deepen
        your understanding of God&apos;s Word, and encourage you to walk
        confidently with Christ for the rest of your life.
      </p>
    </LessonBlock>
  );
}
