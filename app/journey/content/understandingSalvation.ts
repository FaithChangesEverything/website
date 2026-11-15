export type UnderstandingSalvationBlock =
  | { type: "paragraph"; text: string }
  | { type: "scripture"; text: string; reference: string };

export type UnderstandingSalvationSection = {
  id: "2.b.1" | "2.b.2" | "2.b.3" | "2.b.4" | "2.b.5" | "2.b.6" | "2.b.7" | "2.b.8" | "2.b.9";
  title: string;
  blocks: UnderstandingSalvationBlock[];
};

export const understandingSalvationIntro =
  "Salvation is at the very heart of the Gospel and one of the most important truths we can ever understand. It is also at the heart of why we do what we do here at FCE. In the sections that follow, we’ll walk step by step through what the Bible teaches about why we need salvation, what Jesus Christ has done for us, and how God offers forgiveness and eternal life through faith in Him. My prayer is that these truths will help you see God’s plan clearly and understand the incredible grace He offers through His Son.";

export const understandingSalvationSections: UnderstandingSalvationSection[] = [
  {
    id: "2.b.1",
    title: "Introduction",
    blocks: [
      {
        type: "paragraph",
        text: "The word salvation is one of the most important words in the Bible, yet it is often one of the most misunderstood. For some, it brings to mind religion, church attendance, or trying to live a better life. Others may think salvation is something that only a select few can experience, or that it must be earned through good works and personal effort.",
      },
      { type: "paragraph", text: "The Bible presents a very different picture." },
      {
        type: "paragraph",
        text: "Salvation is not about becoming religious or trying harder to be a good person. It is about God's loving plan to rescue us from the separation caused by sin and restore the relationship with Him that He intended from the very beginning. It is the greatest expression of God's love and grace, made possible through the life, death, and resurrection of His Son, Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "Perhaps you've come to this page because you have questions. You may be wondering what salvation really means, why it is necessary, or how someone can receive it. These are honest questions, and they deserve clear, biblical answers. My prayer is that as you read this section, you will discover that God's plan of salvation is not confusing or complicated. While its significance is beyond measure, its message is beautifully simple.",
      },
      {
        type: "paragraph",
        text: "Throughout the pages that follow, we will explore what the Bible teaches about God's plan to save humanity. We will begin where the Bible begins—with God's desire to have a relationship with the people He created. From there, we will see how sin separated us from Him, why we cannot restore that relationship on our own, and how God, in His mercy and love, provided the only way through Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "Most importantly, you will discover that salvation is not something you achieve—it is a gift that God offers freely to everyone who places their faith in His Son. As the Apostle Paul wrote,",
      },
      {
        type: "scripture",
        text: ""If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved"",
        reference: "Romans 10:9 (NIV).",
      },
      {
        type: "paragraph",
        text: "Many sincere people spend years trying to be good enough for God, only to discover that salvation has never been about earning His love. As you continue this journey, I encourage you to read each section carefully and compare what you read with God's Word. The Bible is our authority, and it is through Scripture that we come to know God's heart and his wonderful plan of salvation.",
      },
    ],
  },
  {
    id: "2.b.2",
    title: "God Created Us for Relationship",
    blocks: [
      {
        type: "paragraph",
        text: "Before we can understand salvation, we must first understand God's original purpose for humanity. The Bible tells us that God created the heavens and the earth, and everything in them, by His power and wisdom. When He created mankind, however, He did something unique. He created men and women in His own image, giving them the ability to know Him, love Him, and enjoy a personal relationship with Him.",
      },
      {
        type: "paragraph",
        text: "From the very beginning, God's desire was not simply to create people who would obey Him out of obligation. He created us for fellowship. In the Garden of Eden, Adam and Eve lived in perfect harmony with God, enjoying His presence without fear, shame, or separation. Their relationship with Him was marked by trust, peace, and love—the way God intended it to be.",
      },
      {
        type: "paragraph",
        text: "This truth is important because it reveals God's heart. He is not distant or uninterested in His creation. Throughout the Bible, we see a God who desires to be known by His people and who continually reaches out to them with love, mercy, and grace. From Genesis to Revelation, the story of Scripture is the story of a God who longs to restore what was lost.",
      },
      {
        type: "paragraph",
        text: "Every person has been created with a deep desire for purpose, meaning, and belonging. Many spend their lives searching for these things in success, possessions, relationships, or personal achievements. While these things may bring temporary satisfaction, they can never fully satisfy the deepest longing of the human heart. That longing exists because we were created for something greater—we were created for a relationship with God. Every longing for purpose, acceptance, love, and belonging ultimately points us back to the God who created us.",
      },
      {
        type: "paragraph",
        text: "Understanding this changes the way we see salvation. Salvation is not merely about escaping judgment or securing a place in heaven after we die. At its heart, salvation is God's loving work to restore the broken relationship between Himself and the people He created. Through Jesus Christ, God invites us back into the fellowship with Him that He intended from the very beginning.",
      },
      {
        type: "paragraph",
        text: "As we continue, we will discover why that relationship was broken and why every person is in need of God's saving grace.",
      },
    ],
  },
  {
    id: "2.b.3",
    title: "Sin Broke That Relationship",
    blocks: [
      {
        type: "paragraph",
        text: "God created humanity to live in perfect fellowship with Him, but He also gave us something extraordinary—the ability to choose. Love cannot be forced, and from the beginning God desired a relationship built on trust, obedience, and genuine love rather than compulsion.",
      },
      {
        type: "paragraph",
        text: "In the Garden of Eden, Adam and Eve chose to disobey God's command. What may seem like a single act of disobedience was, in reality, humanity's decision to reject God's authority and choose its own way. The Bible calls this sin.",
      },
      {
        type: "paragraph",
        text: "Sin is more than making mistakes or failing to live up to our own standards. It is any thought, word, or action that goes against God's perfect will and holy character. At its core, sin separates us from the God who created us because a holy God cannot ignore or overlook sin. Sin is choosing our way instead of God's.",
      },
      {
        type: "paragraph",
        text: "The consequences of that first act of disobedience extended far beyond Adam and Eve. Sin entered the world, and with it came brokenness, suffering, pain, and death. Since that time, every person has inherited a sinful nature and has chosen to sin. The Bible makes this truth clear:",
      },
      {
        type: "scripture",
        text: ""For all have sinned and fall short of the glory of God"",
        reference: "Romans 3:23 (NIV)",
      },
      {
        type: "paragraph",
        text: "We do not have to look very far to see the effects of sin. We see it in broken relationships, injustice, violence, selfishness, hatred, and the struggles within our own hearts. Even when we sincerely desire to do what is right, we often find ourselves falling short. Sin has affected every part of God's creation and every human life.",
      },
      {
        type: "paragraph",
        text: "This may sound discouraging, but understanding the seriousness of sin is essential to understanding the greatness of God's love. A doctor cannot offer a cure until the illness is recognized, and we cannot fully accept and appreciate God's gift of salvation until we understand why we need it.",
      },
      {
        type: "paragraph",
        text: "The good news is that God did not abandon humanity after sin entered the world. From the very beginning, He put into motion His plan to redeem and restore His creation. What sin broke, God would one day restore through Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "As we continue, we will discover why no human effort can repair the separation caused by sin and why only God could provide the solution.",
      },
    ],
  },
  {
    id: "2.b.4",
    title: "We Cannot Fix the Problem Ourselves",
    blocks: [
      {
        type: "paragraph",
        text: "When we understand that sin has separated us from God, it is natural to ask, "What can I do to make things right?" Throughout history, people have tried many different ways to answer that question. Some believe that living a good life, performing acts of kindness, following religious traditions, or doing enough good deeds will earn God's acceptance.",
      },
      {
        type: "paragraph",
        text: "While these pmay have value, the Bible teaches that they cannot remove the barrier that sin has created between us and God.",
      },
      {
        type: "paragraph",
        text: "The reason is simple. God is perfectly holy, righteous, and just. His holiness means that sin cannot simply be ignored or overlooked. Just as a just judge cannot dismiss wrongdoing without consequence, God cannot compromise His perfect justice. At the same time, God is also perfectly loving and desires to restore the relationship that sin has broken.",
      },
      {
        type: "paragraph",
        text: "This creates a problem that no human being can solve. We cannot erase our past sins by trying harder in the future. We cannot earn God's forgiveness through our own efforts or make ourselves righteous by our own goodness. No amount of religious activity, personal sacrifice, or good works can bridge the gap that sin has created. You cannot “Good Works: your way into heaven. You cannot “earn” heaven at all.",
      },
      {
        type: "paragraph",
        text: "This truth can be difficult to accept because we naturally want to solve our own problems. We value hard work, determination, and personal responsibility, and those qualities serve us well in many areas of life. But salvation is different. It is not something we can achieve through our own strength or merit.",
      },
      {
        type: "scripture",
        text: "“For it is by grace you have been saved, through faith – and this is not from yourselves, it is the gift of God – not by works, so that no one can boast”.",
        reference: "Ephesians 2: v8-p",
      },
      {
        type: "paragraph",
        text: "Rather than leaving us without hope, this truth prepares us to understand the incredible grace of God. When we recognize that we cannot save ourselves, we are ready to discover the solution that only God could provide. The good news is that God never abandoned humanity. From the very beginning, He had a plan to restore what sin had broken.",
      },
      {
        type: "paragraph",
        text: "In the next section, we will discover God's amazing solution—a solution found not in human effort, but in the saving work of Jesus Christ.",
      },
    ],
  },
  {
    id: "2.b.5",
    title: "God’s Amazing Solution",
    blocks: [
      {
        type: "paragraph",
        text: "From the very beginning, God knew that humanity could never overcome the problem of sin through its own efforts. Yet rather than leaving us separated from Him, God did something extraordinary. Out of His great love, mercy, and grace, He provided the solution Himself.",
      },
      { type: "paragraph", text: "That solution is Jesus Christ." },
      {
        type: "paragraph",
        text: "Jesus is the Son of God who came into the world to accomplish what no one else could. He lived a perfect, sinless life, completely fulfilling God's will in every way. Because He was without sin, He alone was able to become the perfect sacrifice for the sins of the world.",
      },
      {
        type: "paragraph",
        text: "When Jesus willingly went to the cross, He took upon Himself the punishment that we deserved. He paid the price for our sin so that we could be forgiven and reconciled to God. Three days later, He rose from the dead, defeating sin and death forever and proving that His sacrifice was complete and accepted by the Father.",
      },
      {
        type: "paragraph",
        text: "The cross was not an accident, nor was it merely an act of injustice carried out by sinful men. It was the fulfillment of God's plan of redemption—a plan established before the foundation of the world to bring sinful humanity back into a right relationship with Him through His Son.",
      },
      {
        type: "paragraph",
        text: "The Apostle Paul beautifully summarizes God's love for us in these words:",
      },
      {
        type: "scripture",
        text: ""But God demonstrates His own love for us in this: While we were still sinners, Christ died for us."",
        reference: "Romans 5:8 (NIV)",
      },
      {
        type: "paragraph",
        text: "Notice that Christ did not wait for us to become worthy of His love. He did not ask us to clean up our lives before He came to save us. While we were still separated from God because of our sin, Jesus willingly gave His life for us. That is the depth of God's love and the foundation of our hope.",
      },
      {
        type: "paragraph",
        text: "Because of Jesus Christ, forgiveness is possible. Because of His death and resurrection, the barrier created by sin has been removed for all who place their faith in Him. What was impossible for us, God accomplished through His Son.",
      },
      {
        type: "paragraph",
        text: "God's amazing solution was never based on human effort—it has always been based on His grace. In the next section, we will discover that salvation is not something we earn but a priceless gift that God freely offers to everyone who believes in Jesus Christ.",
      },
    ],
  },
  {
    id: "2.b.6",
    title: "Salvation is God’s Gift",
    blocks: [
      {
        type: "paragraph",
        text: "One of the most beautiful truths found in the Bible is that salvation is a gift from God. Unlike the things we earn through hard work or personal achievement, a gift is freely given by someone who loves us. It cannot be purchased, deserved, or repaid. It is simply received with gratitude.",
      },
      { type: "paragraph", text: "This is exactly how the Bible describes salvation." },
      {
        type: "paragraph",
        text: "Because Jesus Christ paid the penalty for our sins through His death and resurrection, God now offers forgiveness and eternal life as a gift to all who place their faith in His Son. We do not earn this gift by our own goodness, nor do we lose it because we have not lived a perfect life. Salvation is possible because of God's grace, not because of our performance.",
      },
      {
        type: "paragraph",
        text: "Grace is God's undeserved favor toward us. It is His willingness to forgive those who could never earn His forgiveness and to welcome into His family those who trust in Jesus Christ. Every person who has ever been saved has been saved by the same grace, regardless of their past, their failures, or their accomplishments.",
      },
      {
        type: "paragraph",
        text: "The Apostle Paul reminds us of this wonderful truth:",
      },
      {
        type: "scripture",
        text: ""For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."",
        reference: "Romans 6:23 (NIV)",
      },
      {
        type: "paragraph",
        text: "Notice the contrast Paul makes. Wages are something we earn. Sin earns death because it separates us from the holy God. Eternal life, however, is not something we earn. It is God's gift, freely offered through Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "This truth should fill us with both humility and gratitude. We cannot boast about earning salvation because it has always been God's work, not ours. Every believer stands before God on the same foundation—His grace demonstrated through Jesus Christ. God's gift is offered to everyone, but like any gift, it must be received. God does not force His salvation upon anyone. Instead, He lovingly invites each person to respond to His offer of grace by placing their faith in Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "In the next section, we will discover what the Bible teaches about responding to God's invitation and how a person receives the incredible gift of salvation through faith in Jesus Christ.",
      },
    ],
  },
  {
    id: "2.b.7",
    title: "How Do We Receive Salvation?",
    blocks: [
      {
        type: "paragraph",
        text: "After learning about God's love, our need for salvation, and the sacrifice Jesus Christ made on our behalf, a natural question remains:",
      },
      { type: "paragraph", text: "How do I receive this gift of salvation?" },
      {
        type: "paragraph",
        text: "The answer is found in the Bible, and it is both simple and life changing. Salvation is not received by earning God's favor or by living a perfect life. It is received by placing our faith and trust in Jesus Christ. To place our faith in Christ means that we believe He is the Son of God, that He died on the cross for our sins, that He rose from the dead, and that He alone is able to save us.",
      },
      {
        type: "paragraph",
        text: "Receiving salvation also involves repentance. The word repentance means to turn away from sin and turn toward God. It is more than feeling sorry for the wrong things we have done. It is a change of heart that leads to a change of direction. As we place our trust in Christ, we choose to follow Him as Lord of our lives.",
      },
      {
        type: "paragraph",
        text: "The Apostle Paul explains this beautiful truth with remarkable clarity:",
      },
      {
        type: "scripture",
        text: ""If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved."",
        reference: "Romans 10:9-10 (NIV)",
      },
      {
        type: "paragraph",
        text: "These verses do not describe a complicated religious process. They point us to a genuine response of faith. To confess that Jesus is Lord is to acknowledge Him as the risen Savior and the rightful Lord of your life. To believe in your heart is more than simply agreeing with certain facts about Jesus. It is placing your complete trust in Him and relying on Him alone for your salvation.",
      },
      {
        type: "paragraph",
        text: "God's invitation is open to everyone. No one is beyond His grace, and no one is excluded because of their past. Jesus Christ has already accomplished everything necessary for our salvation. Our response is to believe in Him, place our trust in Him, and receive the gift that He freely offers.",
      },
      {
        type: "paragraph",
        text: "If you have never placed your faith in Jesus Christ, know that God is inviting you into a relationship with Him today. He loves you, He knows you completely, and through His Son, He offers you forgiveness, new life, and the promise of eternal life.",
      },
      {
        type: "paragraph",
        text: "In the next section, we will explore what happens when a person places their faith in Christ and begins a new life as a follower of Jesus.",
      },
    ],
  },
  {
    id: "2.b.8",
    title: "What Happens When Someone is Saved?",
    blocks: [
      {
        type: "paragraph",
        text: "When a person places their faith in Jesus Christ, something wonderful happens. While there may not always be an immediate emotional experience, God begins a work that changes a person's life forever. Salvation is not simply a decision we make—it is the beginning of a new relationship with God that will continue throughout eternity.",
      },
      {
        type: "paragraph",
        text: "The Bible teaches that when we trust in Jesus Christ, our sins are forgiven. We are no longer separated from God because of our sin but are reconciled to Him through the sacrifice of Jesus Christ. The guilt of our past is removed, and we are welcomed into God's family as His children.",
      },
      {
        type: "paragraph",
        text: "Salvation also brings the gift of eternal life. This is more than the promise of heaven after we die. Eternal life begins the moment we place our faith in Christ because we enter into a personal relationship with the God who created us. From that day forward, we no longer walk through life alone. God is with us, guiding us, strengthening us, and helping us grow in our faith.",
      },
      {
        type: "paragraph",
        text: "The Holy Spirit also comes to live within every believer. He comforts us, teaches us, convicts us when we sin, and helps us become more like Jesus Christ. Although we will still face struggles and temptations, we do not face them by our own strength. God has promised to be with us and to continue the work He has begun in our lives.",
      },
      {
        type: "paragraph",
        text: "This does not mean that following Jesus removes every struggle overnight.",
      },
      {
        type: "paragraph",
        text: "There will still be days when we fail, face temptation, or wrestle with difficult circumstances. The difference is that we no longer face those struggles alone. God is faithfully at work within us, patiently shaping us into the likeness of His Son one day at a time.",
      },
      {
        type: "paragraph",
        text: "The Apostle Paul describes this transformation in these words:",
      },
      {
        type: "scripture",
        text: ""Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"",
        reference: "2 Corinthians 5:17 (NIV)",
      },
      {
        type: "paragraph",
        text: "This does not mean that believers become perfect overnight. We will continue to grow and learn, and sometimes stumble along the way. The Christian life is a lifelong journey of growing closer to God and allowing Him to shape us into the likeness of His Son.",
      },
      {
        type: "paragraph",
        text: "The most important truth to remember is that your salvation is not based on your ability to live a perfect life. It is based on the finished work of Jesus Christ. Because your salvation rests in Him, you can live each day with confidence, knowing that God is faithful to His promises and will never leave those who belong to Him.",
      },
      {
        type: "paragraph",
        text: "As we conclude this section on Understanding Salvation, remember that God's desire has always been to restore the relationship that was broken by sin. Through Jesus Christ, He has made that restoration possible. The invitation to receive His gift of salvation is extended to everyone who believes in His Son.",
      },
    ],
  },
  {
    id: "2.b.9",
    title: "Closing",
    blocks: [
      {
        type: "paragraph",
        text: "Throughout this section, we have explored one of the most important truths found in the Bible—God's plan of salvation. We have seen that God created us for a relationship with Him, that sin separated us from Him, and that no amount of human effort could restore what was broken. Yet because of His great love, God provided the solution through His Son, Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "We have also learned that salvation is not something we earn through good works or religious activity. It is God's gracious gift, made possible through the death and resurrection of Jesus Christ and received by placing our faith and trust in Him. Through Christ, our sins are forgiven, our relationship with God is restored, and we are given the gift of eternal life.",
      },
      {
        type: "paragraph",
        text: "While understanding these truths is important, our faith should always rest on the authority of God's Word rather than on the words of any person. The Bible is God's inspired Word, and it is through Scripture that He reveals His plan of salvation to the world.",
      },
      {
        type: "paragraph",
        text: "As you continue your journey, I encourage you to open your Bible and carefully read the passages in the next section. Ask God to give you the punderstanding and allow His Word to speak to your heart. The verses you are about to read have brought hope, peace, and new life to countless people throughout history, and they continue to point every generation to the saving grace found in Jesus Christ.",
      },
      {
        type: "paragraph",
        text: "Let us now turn to the Scriptures and discover what God Himself says about salvation.",
      },
    ],
  },
];
