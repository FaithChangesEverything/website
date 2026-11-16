export type SalvationScriptureBlock =
  | { type: "paragraph"; text: string }
  | { type: "scripture"; text: string; reference: string };

export type SalvationScriptureSection = {
  id: "2.c.1" | "2.c.2" | "2.c.3" | "2.c.4" | "2.c.5" | "2.c.6" | "2.c.7" | "2.c.8" | "2.c.9" | "2.c.10";
  title: string;
  blocks: SalvationScriptureBlock[];
};

export const salvationScriptureIntro =
  `We’ve looked at the meaning of salvation and the wonderful plan God has provided through Jesus Christ. Now we’re going to turn directly to Scripture and see what God’s Word says about our need for salvation, the work of Christ, and the gift of eternal life. As you move through these passages, take your time and allow the Bible itself to guide your understanding of this life-changing truth.`;

export const salvationScriptureSections: SalvationScriptureSection[] = [
  {
    id: "2.c.1",
    title: "Introduction– Pastor Richard",
    blocks: [
      {
        type: "paragraph",
        text: `Throughout the previous section, we explored what the Bible teaches about salvation and examined the wonderful plan God has made available through Jesus Christ. While understanding these truths is important, our confidence should never rest solely on the explanations of another person. True faith is built upon the unchanging truth of God's Word.`,
      },
      {
        type: "paragraph",
        text: `The Bible is God's inspired revelation to humanity. Through its pages, God reveals His character, His love, His justice, and His plan to redeem a world that has been separated from Him by sin. Every truth we have discussed throughout this journey finds its foundation in Scripture.`,
      },
      {
        type: "paragraph",
        text: `In this section, we will look directly at several key passages from the Bible that explain God's plan of salvation. Rather than simply reading individual verses, we will take time to understand what God is saying and why these passages are so important. My prayer is that as you read His Word, the Holy Spirit will give you wisdom, understanding, and a deeper appreciation for the incredible gift of salvation found in Jesus Christ.`,
      },
      { type: "paragraph", text: `Let's begin by looking at the power of the Gospel itself.` },
    ],
  },
  {
    id: "2.c.2",
    title: "The Gospel Is God's Power to Save",
    blocks: [
      {
        type: "paragraph",
        text: `The Bible begins God's plan of salvation with the Gospel—the good news of Jesus Christ. It is the message of God's love, His grace, and His provision for our salvation through the death and resurrection of His Son. The Gospel is not simply good advice or religious teaching; it is God's power to save those who believe. The Apostle Paul understood the life-changing power of the Gospel. Writing to the believers in Rome, he boldly declared:`,
      },
      {
        type: "scripture",
        text: `"For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: The righteous will live by faith.”`,
        reference: "Romans 1:16–17 (NIV)",
      },
      {
        type: "paragraph",
        text: `Paul reminds us that the Gospel is God's power to bring salvation to everyone who believes. From beginning to end, salvation is received by faith in Jesus Christ, not by human effort. As we continue through the following passages, we will discover why every person needs this wonderful gift that God has provided.`,
      },
    ],
  },
  {
    id: "2.c.3",
    title: "Every Person Needs Salvation",
    blocks: [
      {
        type: "paragraph",
        text: `Before we can understand God's gift of salvation, we must first understand why every person needs it. The Bible teaches that sin is a universal problem. No one is exempt, and no one can claim to have met God's perfect standard. The Apostle Paul summarizes this truth in a single verse:`,
      },
      {
        type: "scripture",
        text: `"For all have sinned and fall short of the glory of God."`,
        reference: "Romans 3:23 (NIV)",
      },
      {
        type: "paragraph",
        text: `This verse reminds us that every person has sinned and needs God's forgiveness. Rather than leaving us without hope, it prepares us to understand the incredible gift of salvation that God offers through Jesus Christ. In the next passage, we will discover both the consequence of sin and the hope found in God's gift.`,
      },
    ],
  },
  {
    id: "2.c.4",
    title: "God's Love Was Demonstrated Through Jesus Christ",
    blocks: [
      {
        type: "paragraph",
        text: `The Bible does not leave us wondering whether God loves us. His love was demonstrated through the greatest act of sacrifice in history. While we were still separated from Him because of our sin, God sent His Son, Jesus Christ, to die in our place so that we could be forgiven and restored to Him. The Apostle Paul writes:`,
      },
      {
        type: "scripture",
        text: `"But God demonstrates His own love for us in this: While we were still sinners, Christ died for us."`,
        reference: "Romans 5:8 (NIV)",
      },
      {
        type: "paragraph",
        text: `This verse reveals the heart of the Gospel. God's love was not based on our goodness or our ability to earn His favor. Christ willingly gave His life for us while we were still sinners. Through His sacrifice, God made a way for us to be forgiven and reconciled to Him. In the next passage, we will discover that Jesus Christ is not simply one way to God—He is the only way.`,
      },
    ],
  },
  {
    id: "2.c.5",
    title: "Jesus Christ Is the Only Way",
    blocks: [
      {
        type: "paragraph",
        text: `The Bible clearly teaches that salvation is found in Jesus Christ alone. In a world with many different beliefs and opinions, God's Word points to one Savior. Jesus is not one of many ways to God—He is the only way. Jesus declared:`,
      },
      {
        type: "scripture",
        text: `"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"`,
        reference: "John 14:6 (NIV)",
      },
      { type: "paragraph", text: `After Jesus' death and resurrection, the Apostle Peter proclaimed the same truth:` },
      {
        type: "scripture",
        text: `"Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved."`,
        reference: "Acts 4:12 (NIV)",
      },
      {
        type: "paragraph",
        text: `Jesus Himself declared that He is the only way to the Father, and Peter affirmed that salvation is found in no one else. The Bible leaves no uncertainty about where salvation is found—it is found in Jesus Christ alone.`,
      },
      {
        type: "paragraph",
        text: `Some people struggle with this teaching because it sounds exclusive. Yet it is actually one of the greatest expressions of God's love. If there had been another way for sinful humanity to be reconciled to God, Jesus would not have needed to suffer and die on the cross. The very fact that He willingly gave His life for us demonstrates both the seriousness of our sin and the immeasurable depth of God's love.`,
      },
      {
        type: "paragraph",
        text: `In the next passage, Jesus explains that entering God's kingdom requires more than outward religion or good works. He teaches that every person must be born again.`,
      },
    ],
  },
  {
    id: "2.c.6",
    title: "You Must Be Born Again",
    blocks: [
      {
        type: "paragraph",
        text: `One of the most important conversations Jesus ever had was with a man named Nicodemus, a respected religious leader. Although Nicodemus was sincere and knowledgeable, Jesus told him that entering God's kingdom required something more.`,
      },
      {
        type: "scripture",
        text: `Jesus replied, "Very truly I tell you, no one can see the kingdom of God unless they are born again."`,
        reference: "John 3:3–6 (NIV)",
      },
      {
        type: "scripture",
        text: `"How can someone be born when they are old?" Nicodemus asked. "Surely they cannot enter a second time into their mother's womb to be born!"`,
        reference: "",
      },
      {
        type: "scripture",
        text: `Jesus answered, "Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit. Flesh gives birth to flesh, but the Spirit gives birth to spirit."`,
        reference: "",
      },
      {
        type: "paragraph",
        text: `Jesus was not speaking about a second physical birth. He was teaching that every person needs a spiritual birth that only God can bring about. Becoming a Christian is not simply adopting a new religion or trying to become a better person. It is the new life that God gives through His Holy Spirit. In the next passage, we will discover that this new life is not something we earn—it is received by God's grace through faith.`,
      },
    ],
  },
  {
    id: "2.c.7",
    title: "Salvation Is by Grace Through Faith",
    blocks: [
      {
        type: "paragraph",
        text: `The Bible teaches that salvation is God's gift. It cannot be earned through good works or religious effort. Instead, we are saved by God's grace through faith in Jesus Christ. His grace not only saves us but also begins changing the way we live. The Apostle Paul writes:`,
      },
      {
        type: "scripture",
        text: `"For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."`,
        reference: "Ephesians 2:8–9 (NIV)",
      },
      { type: "paragraph", text: `Paul also explains what God's grace accomplishes:` },
      {
        type: "scripture",
        text: `"For the grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age, while we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ, who gave himself for us to redeem us from all wickedness and to purify for himself a people that are his very own, eager to do what is good."`,
        reference: "Titus 2:11–14 (NIV)",
      },
      {
        type: "paragraph",
        text: `These passages teach that salvation is entirely God's gift, received through faith rather than earned by our own efforts. They also remind us that God's grace transforms those who receive it, producing lives that increasingly reflect the character of Jesus Christ. We are saved by grace through faith. That same grace that saves us, also teaches and transforms us. Grace doesn't simply forgive our past—it begins changing our future. In the next passage, we will see how the Bible calls each person to respond to God's offer of salvation through faith in Jesus Christ.`,
      },
    ],
  },
  {
    id: "2.c.8",
    title: "Responding to the Gospel",
    blocks: [
      {
        type: "paragraph",
        text: `After hearing the Gospel, the Bible calls each person to respond. Salvation is not simply knowing about Jesus—it is placing our faith in Him as Lord and Savior. God invites everyone to believe the Gospel, trust in His Son, and call on His name. The Apostle Paul writes:`,
      },
      {
        type: "scripture",
        text: `"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved."`,
        reference: "Romans 10:9-11 (NIV)",
      },
      {
        type: "scripture",
        text: `“Everyone who calls on the name of the Lord will be saved.”`,
        reference: "Romans 10:13 (NIV)",
      },
      {
        type: "paragraph",
        text: `These verses teach that salvation is received through genuine faith in Jesus Christ. To confess that Jesus is Lord is to acknowledge Him as the risen Lord and place your trust in Him. This confession is the outward expression of a heart that truly believes. God promises that everyone who calls on the name of the Lord will be saved, reminding us that His invitation is open to all who come to Him in faith. If you're sensing God speaking to your heart as you read these words, don't ignore His invitation.`,
      },
    ],
  },
  {
    id: "2.c.9",
    title: "What God Does When We Believe",
    blocks: [
      {
        type: "paragraph",
        text: `When we place our faith in Jesus Christ, God begins a new work in our lives. The Bible teaches that believers are given the Holy Spirit and are assured of God's promise of eternal life through His Son. The Apostle Paul writes:`,
      },
      {
        type: "scripture",
        text: `"And you also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God's possession—to the praise of his glory."`,
        reference: "Ephesians 1:13–14 (NIV)",
      },
      { type: "paragraph", text: `Paul also encourages believers with these words:` },
      {
        type: "scripture",
        text: `"For God did not appoint us to suffer wrath but to receive salvation through our Lord Jesus Christ. He died for us so that, whether we are awake or asleep, we may live together with him."`,
        reference: "1 Thessalonians 5:9–10 (NIV)",
      },
      {
        type: "paragraph",
        text: `These passages remind us that when we believe in Jesus Christ, God gives us His Holy Spirit as the guarantee of His promises and assures us that our hope is found in Christ. Through His death and resurrection, we are brought into a new relationship with God and look forward to living with Him forever. In the final section, we will briefly reflect on the biblical truths we have studied and prepare to continue our journey of faith.`,
      },
    ],
  },
  {
    id: "2.c.10",
    title: "Closing",
    blocks: [
      {
        type: "paragraph",
        text: `Throughout this section, we have looked directly at God's Word to discover what the Bible says about salvation. From beginning to end, Scripture reveals God's plan to rescue sinful humanity through His Son, Jesus Christ.`,
      },
      {
        type: "paragraph",
        text: `We have seen that the Gospel is God's power to save, that every person needs salvation, and that God demonstrated His love by sending Jesus Christ to die for our sins. We have learned that Jesus is the only way to the Father, that we must be born again, and that salvation is God's gift of grace received through faith. Finally, we have seen God's promises to those who believe in His Son.`,
      },
      {
        type: "paragraph",
        text: `The Bible presents one clear message of hope: salvation is found in Jesus Christ alone. This is not merely the opinion of one writer or one passage of Scripture. It is the consistent message of God's Word.`,
      },
      {
        type: "paragraph",
        text: `As you continue your journey, I encourage you to return to these passages often. Read them carefully, pray over them, and allow God's Word to continue shaping your heart and strengthening your faith.`,
      },
    ],
  },
];
