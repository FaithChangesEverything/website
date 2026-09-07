import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/journey/step-1/hope-for-today",
        destination: "/journey/step-1/understanding-hope",
        permanent: true,
      },
      {
        source: "/journey/step-1/biblical-study-of-hope",
        destination: "/journey/step-1/what-does-the-bible-say-about-hope",
        permanent: true,
      },
      {
        source: "/journey/step-1/biblical-study-of-hope/:section",
        destination: "/journey/step-1/what-does-the-bible-say-about-hope/:section",
        permanent: true,
      },
      {
        source: "/journey/step-2/final-word-of-encouragement",
        destination: "/journey/step-2/a-final-word-of-encouragement",
        permanent: true,
      },
      {
        source: "/journey/step-6/before-we-begin",
        destination: "/journey/step-6/a-message-from-pastor-richard",
        permanent: true,
      },
      {
        source: "/journey/step-6/weekly-encouragement",
        destination: "/journey/step-6/receive-weekly-encouragement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
