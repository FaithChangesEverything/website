export const crisisSupport = {
  pageHref: "/help-support",
  emergency: {
    callLabel: "CALL 911",
    callHref: "tel:911",
    instruction: "If this is an emergency or there is immediate danger, call 911 or go to the nearest emergency room.",
  },
  opening: "If you're thinking about hurting yourself or ending your life, please don't face this alone. Talk to someone you trust—a family member, friend, pastor, counselor, or another person who can stay with you and help you get support.",
  pastoralClosing: [
    "Your life matters.",
    "You are deeply loved by God.",
    "This difficult season does not have the final word. Jesus does.",
  ],
  us: {
    country: "United States",
    name: "988 Suicide & Crisis Lifeline",
    availability: "Call, text, or chat 24 hours a day, 7 days a week.",
    callHref: "tel:988",
    textHref: "sms:988",
    chatHref: "https://988lifeline.org/chat/",
    websiteHref: "https://988lifeline.org/",
  },
  canada: {
    country: "Canada",
    name: "9-8-8: Suicide Crisis Helpline",
    availability: "Call or text 24 hours a day, 7 days a week.",
    callHref: "tel:988",
    textHref: "sms:988",
    websiteHref: "https://988.ca/",
  },
  international: "Outside the United States or Canada? Contact your local emergency services or your country's crisis-support service for immediate assistance.",
} as const;
