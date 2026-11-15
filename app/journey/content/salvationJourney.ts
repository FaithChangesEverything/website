export type SalvationJourneyBlock =
  | { type: "paragraph"; text: string }
  | { type: "scripture"; text: string; reference: string };

export type SalvationJourneySection = {
  id: "2.e.1" | "2.e.2" | "2.e.3" | "2.e.4" | "2.e.5" | "2.e.6";
  title: string;
  blocks: SalvationJourneyBlock[];
};

export const salvationJourneyIntro =
  "Understanding salvation is only the beginning of a lifelong walk with Jesus Christ. In this section, we’ll look at several simple habits that can help you continue growing in your faith, strengthen your relationship with God, and build a solid foundation for the days ahead. My prayer is that these next steps will encourage you to keep seeking Christ, trusting His Word, and growing one day at a time.";

export const salvationJourneySections: SalvationJourneySection[] = [
  {
    id: "2.e.1",
    title: "Introduction– Pastor Richard",
    blocks: [
      { type: "paragraph", text: "Whether you have recently placed your faith in Jesus Christ or are continuing to seek Him, your spiritual journey does not end here. God desires that we continue growing in our relationship with Him each day." },
      { type: "paragraph", text: "Spiritual growth doesn't happen all at once. Like any healthy relationship, it develops over time as we spend time with God, learn from His Word, talk with Him in prayer, and connect with other believers." },
      { type: "paragraph", text: "The following habits have helped Christians grow in their faith for generations. As you begin—or continue—your walk with Christ, I encourage you to make these practices a regular part of your life." },
    ],
  },
  {
    id: "2.e.2",
    title: "Read Your Bible Daily",
    blocks: [
      { type: "paragraph", text: "One of the most important ways to grow in your relationship with God is by spending time in His Word. The Bible reveals God's character, His promises, His wisdom, and His plan for our lives. As we read Scripture consistently, our faith is strengthened and our understanding of God's truth continues to grow." },
      { type: "paragraph", text: "The psalmist writes:" },
      { type: "scripture", text: '"Your word is a lamp for my feet, a light on my path."', reference: "Psalm 119:105 (NIV)" },
      { type: "paragraph", text: "God's Word provides guidance, wisdom, and encouragement for every season of life. Even if you are just beginning your journey of faith, spending time in the Bible each day will help you grow closer to Him." },
      { type: "paragraph", text: "Begin with one of the four Gospels—Matthew, Mark, Luke, or John. Read a small portion each day, asking God to help you understand what you are reading and how it applies to your life. Consistency is more important than reading large amounts at one time." },
    ],
  },
  {
    id: "2.e.3",
    title: "Spend Time in Prayer",
    blocks: [
      { type: "paragraph", text: "Prayer is one of the greatest privileges we have as followers of Jesus Christ. Through prayer, we can worship God, thank Him for His blessings, seek His wisdom, confess our sins, and bring our needs before Him. God invites us to come to Him with confidence, knowing that He hears the prayers of His children. The Apostle Paul writes:" },
      { type: "scripture", text: '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."', reference: "Philippians 4:6–7 (NIV)" },
      { type: "paragraph", text: "Prayer is not about using special words or following a particular formula. It is simply talking with God. As you spend time with Him in prayer, your relationship with Him will grow, and He will give you the peace and wisdom you need for each day." },
      { type: "paragraph", text: "Set aside a few minutes each day to talk with God. Thank Him for His love and blessings, share your concerns with Him, ask for His guidance, and pray for others. Remember that prayer is a conversation with your Heavenly Father, who loves you and desires a close relationship with you." },
    ],
  },
  {
    id: "2.e.4",
    title: "Become Part of a Bible-Believing Church",
    blocks: [
      { type: "paragraph", text: "God created us to grow in our faith alongside other believers. A healthy, Bible-believing church provides encouragement, sound biblical teaching, opportunities to worship, and a community where we can serve and be supported. As we grow together, we strengthen one another in our walk with Christ. The writer of Hebrews encourages believers:" },
      { type: "scripture", text: '"And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."', reference: "Hebrews 10:24–25 (NIV)" },
      { type: "paragraph", text: "Being part of a local church helps us grow spiritually and reminds us that we are not meant to walk through life alone. God often uses other believers to encourage us, challenge us, and help us mature in our faith." },
      { type: "paragraph", text: "If you are not already part of a church, begin praying that God will lead you to a Bible-believing church where His Word is faithfully taught, Jesus Christ is honored, and people genuinely love and serve one another. As you become involved, you'll find opportunities to worship, learn, build meaningful relationships, and use the gifts God has given you to serve others." },
      { type: "paragraph", text: "NOTE: If you are looking for a Bible-believing church in your area, click the link below. We'll help you locate churches near you that faithfully teach God's Word and encourage believers to grow in their faith." },
    ],
  },
  {
    id: "2.e.5",
    title: "Continue Growing",
    blocks: [
      { type: "paragraph", text: "Following Jesus Christ is the beginning of a lifelong journey of faith. As you continue reading God's Word, spending time in prayer, worshiping with other believers, and applying His truth to your life, your faith will continue to grow. God is patient and faithful, and He will continue the work He has begun in you. The Apostle Paul encourages believers with these words:" },
      { type: "scripture", text: '"Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus."', reference: "Philippians 1:6 (NIV)" },
      { type: "paragraph", text: "Spiritual growth happens one day at a time. There will be seasons of joy and seasons of challenge, but God remains faithful through them all. Keep seeking Him, trusting His promises, and allowing His Word to shape your life. As you continue to follow Christ, He will transform you more and more into His likeness." },
    ],
  },
  {
    id: "2.e.6",
    title: "Closing",
    blocks: [
      { type: "paragraph", text: "Growing in your faith is a lifelong journey. As you spend time in God's Word, talk with Him in prayer, worship and serve alongside other believers, and continue following Jesus Christ each day, your relationship with Him will grow stronger." },
      { type: "paragraph", text: "Remember that spiritual growth doesn't happen all at once. There will be times of great joy and times of challenge, but God is always faithful. Trust Him, remain rooted in His Word, and continue seeking Him with all your heart. He will guide you, strengthen you, and continue the good work He has begun in your life." },
    ],
  },
];
