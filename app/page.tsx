import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-7xl">
          Faith Changes Everything
        </h1>

        <p className="mb-10 max-w-2xl text-xl text-neutral-300 md:text-2xl">
          Sharing Hope Through Music • Scripture • Prayer
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400">
            Listen to Music
          </button>

          <button className="rounded-lg border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            Watch Sermons
          </button>

          <button className="rounded-lg border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            Request Prayer
          </button>
        </div>
      </section>

      {/* Today's Encouragement */}
      <section className="bg-neutral-900 px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-amber-400">
            Today's Encouragement
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-amber-400">
                Verse of the Day
              </h3>

              <p className="text-neutral-300">
                "Fear not, for I am with you; be not dismayed, for I am your
                God..."
              </p>

              <p className="mt-4 font-semibold">
                Isaiah 41:10
              </p>
            </div>

            <div className="rounded-xl bg-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-amber-400">
                Featured Song
              </h3>

              <p className="text-lg font-semibold">
                Yesterday Don't Own Me Anymore
              </p>

              <p className="mt-2 text-neutral-300">
                A reminder that God's grace is greater than yesterday's regrets.
              </p>
            </div>

            <div className="rounded-xl bg-neutral-800 p-6">
              <h3 className="mb-3 text-xl font-semibold text-amber-400">
                Today's Prayer
              </h3>

              <p className="text-neutral-300">
                Lord, remind me today that Your grace is enough, Your love never
                fails, and my hope is found in You alone.
              </p>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </main>
  );
}
