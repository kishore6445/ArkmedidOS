import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-lg font-semibold text-amber-400">
            ✦
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">ArkMedis</p>
            <p className="text-base font-semibold">Mission 50</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded-full border border-amber-500/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-amber-500/60 hover:bg-amber-500/10"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Join us
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-300">
              50 customers by December 31, 2026
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-balance">
              When the company wins, everyone grows.
            </h1>
            <p className="text-lg text-slate-300">
              ArkMedis is built on a simple belief: <span className="text-amber-300 font-semibold">when people contribute honestly to a shared mission, the company should grow them in return.</span> Mission 50 is our shared goal. Execution is our system. Growth is your reward.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signin"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Sign in to your account
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-amber-500/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-500/60 hover:bg-amber-500/10"
              >
                Learn more
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400 pt-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Clear accountability
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Fair recognition
              </div>
            </div>
          </div>

          {/* Right Column - Mission Breakdown */}
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-400">Mission 50</p>
                <h2 className="mt-3 text-2xl font-semibold">Three brands, one mission</h2>
                <p className="mt-2 text-sm text-slate-300">
                  50 customers across three focused brands.
                </p>
              </div>
              <div className="grid gap-3">
                {[
                  {
                    brand: "The Warrior Systems",
                    target: "30 customers",
                    detail: "Execution discipline for Indian companies",
                  },
                  {
                    brand: "Story Marketing",
                    target: "18 customers",
                    detail: "Manufacturing brands competing globally",
                  },
                  {
                    brand: "MetaGurukul",
                    target: "2 customers",
                    detail: "Reviving India's knowledge traditions",
                  },
                ].map((item) => (
                  <div
                    key={item.brand}
                    className="rounded-2xl border border-amber-500/15 bg-amber-500/5 p-4 hover:bg-amber-500/10 transition"
                  >
                    <p className="text-sm font-semibold text-amber-300">{item.brand}</p>
                    <p className="text-xs text-amber-200/80 mt-1">{item.target}</p>
                    <p className="text-xs text-slate-400 mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Outcomes Section */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 lg:grid-cols-3">
            {[
              {
                title: "Clear Power Moves",
                detail: "Every role has clearly defined actions that matter. Visible, trackable, reviewed regularly.",
              },
              {
                title: "Team Outcomes",
                detail: "Your execution rolls up into department targets and directly impacts Mission 50.",
              },
              {
                title: "Earned Growth",
                detail: "Up to 50% salary growth when Mission 50 is achieved—distributed fairly based on contribution.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-3 rounded-lg border border-amber-500/10 bg-slate-900/50 p-6 hover:bg-slate-900 transition">
                <h3 className="text-lg font-semibold text-amber-300">{item.title}</h3>
                <p className="text-sm text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold">The Principles We Build On</h2>
              <p className="text-lg text-slate-400">Team-first. Mission-focused. Fairly rewarded.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  heading: "When one person executes, everyone benefits",
                  detail: "Your Power Moves aren't just your wins—they enable your teammates to succeed.",
                },
                {
                  heading: "Recognition replaces politics",
                  detail: "Dashboards show your contribution. Your work speaks for you. No noise, no opinions.",
                },
                {
                  heading: "Execution earns freedom",
                  detail: "Consistent execution builds reliability. Reliability earns autonomy. Autonomy enables flexibility.",
                },
                {
                  heading: "Growth is both personal and national",
                  detail: "As you grow, ArkMedis grows. As ArkMedis grows, India's businesses strengthen.",
                },
              ].map((item) => (
                <div key={item.heading} className="rounded-2xl border border-amber-500/15 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 hover:border-amber-500/30 transition">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">{item.heading}</h3>
                  <p className="text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-500/5 p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Build Something Real?</h2>
            <p className="text-lg text-slate-300 mb-8">
              No shortcuts. No politics. Just disciplined execution that compounds.
            </p>
            <Link
              href="/signin"
              className="inline-flex rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Sign in to your account
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-500/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>© 2026 ArkMedis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="hover:text-amber-400 transition">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-amber-400 transition">
              Join us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
