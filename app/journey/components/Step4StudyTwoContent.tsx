import { JourneyListenFromHere } from "./JourneyListenFromHere";
import { JourneyScriptureReference } from "./JourneyScriptureReference";
import { LessonBlock } from "./PageStructures";
import { step4AudioTimestamps } from "../timestamps/step4";
import sequence9 from "../step-overview-sequence9.module.css";
import fixes from "../journey-fixes.module.css";

const cues = step4AudioTimestamps["audio-2026-00025"];
const playerId = "4d-study-2";

function ListenFromSection({ section }: { section: keyof typeof cues }) {
  return (
    <div className={fixes.lessonSectionActions}>
      <JourneyListenFromHere playerId={playerId} seconds={cues[section].seconds} />
    </div>
  );
}

export function Step4StudyTwoContent() {
  return (
    <>
      <LessonBlock title="4.d.8 Step 2 — Begin With Prayer" icon="◇">
        <ListenFromSection section="4.d.8" />
      </LessonBlock>

      <LessonBlock title="4.d.9 Key Scripture" icon="▣" tone="scripture">
        <ListenFromSection section="4.d.9" />
        <blockquote className={sequence9.scriptureQuote}>
          &quot;Open my eyes that I may see wonderful things in your law.&quot;{" "}
          <JourneyScriptureReference reference="Psalm 119:18 (KJV)" />
        </blockquote>
      </LessonBlock>

      <LessonBlock title="4.d.10 Why This Scripture?" icon="▤">
        <ListenFromSection section="4.d.10" />
        <p>
          Before we begin reading the Bible, we should first ask God to help us
          understand what He wants to teach us. The Bible is unlike any other
          book because it is God&apos;s living Word. While we can understand many
          things through careful reading, the Holy Spirit gives us wisdom,
          insight, and understanding that go far beyond human knowledge.
          Prayer prepares our hearts to receive what God wants to say.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.11 The Lesson" icon="◇">
        <ListenFromSection section="4.d.11" />
        <p>
          One of the greatest habits you can develop is beginning every time
          you open your Bible with a simple prayer. You do not need eloquent
          words or a long prayer. God is not impressed by how many words we
          speak—He delights in a humble heart that sincerely desires to know Him.
        </p>
        <p>
          One of the songs in the FCE music library is entitled “Just Talk to Me”.
          If you want to, go listen to that song. It speaks directly to the idea
          that God is not looking for perfect words or Sunday suits, he’s
          looking for a relationship with you.
        </p>
        <p>
          Before you begin reading, simply ask God to quiet your mind, open
          your heart, and help you understand His Word. Invite the Holy Spirit
          to guide your thoughts and reveal truths that will strengthen your
          faith and help you grow in your relationship with Jesus Christ.
        </p>
        <p>
          Sometimes God will impress a single verse on your heart. Other
          times He may challenge you, encourage you, comfort you, or gently
          correct you. There may even be days when you don&apos;t immediately
          understand what you&apos;re reading. Continue faithfully. God often
          teaches us little by little as we consistently spend time in His Word.
        </p>
        <p>
          Prayer is not just something we do before Bible study—it is the
          beginning of a conversation with God. As you read, listen carefully.
          Allow Him to speak through His Word, and don&apos;t be afraid to pause,
          think, and pray again as He reveals something meaningful to you.
        </p>
        <p>
          When prayer becomes the doorway to your Bible study, reading
          Scripture becomes more than gaining information—it becomes
          spending time with the One who inspired it.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.12 Time to Reflect" icon="?">
        <ListenFromSection section="4.d.12" />
        <p>
          Before you begin reading Scripture today, take a few quiet
          moments to pray.
        </p>
        <ul className={fixes.reflectionQuestions}>
          <li>Am I inviting God to teach me, or am I simply reading to finish a passage?</li>
          <li>Is my heart open to hearing what God wants to say—even if it challenges me?</li>
          <li>How might my Bible study change if I intentionally began every time with prayer?</li>
        </ul>
      </LessonBlock>

      <LessonBlock title="4.d.13 Today’s Challenge" icon="→">
        <ListenFromSection section="4.d.13" />
        <p>Before reading your Bible this week, pause for just one minute.</p>
        <p>
          Ask God to open your heart, give you understanding, and help you
          apply His Word to your life. Then pay attention to what stands out
          as you read. You may be surprised how God speaks through even the
          simplest passage.
        </p>
        <p>
          Remember, Bible study is not about checking a box or completing a
          reading plan. It is about spending time with your Heavenly Father.
          Every prayer you offer before opening His Word invites Him to
          shape your heart and deepen your faith.
        </p>
      </LessonBlock>

      <LessonBlock title="4.d.14 Prayer" icon="◇">
        <ListenFromSection section="4.d.14" />
        <p>Heavenly Father,</p>
        <p>
          Thank You for giving me Your Word. As I open my Bible today, I ask
          that You open my heart and my mind. Help me understand what You want
          to teach me and give me the wisdom to apply Your truth to my life.
          Quiet the distractions around me and help me hear Your voice through
          Scripture. May every time I read Your Word draw me closer to Jesus
          and strengthen my faith. Thank You for Your patience, Your guidance,
          and your unfailing love.
        </p>
        <p>In Jesus&apos; name, Amen.</p>
      </LessonBlock>
    </>
  );
}
