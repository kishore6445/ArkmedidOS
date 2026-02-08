import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 border-b border-slate-200">
        <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
            ✦
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-600 font-bold">ArkMedis</p>
            <p className="text-base font-bold text-slate-900">Mission 50</p>
          </div>
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded px-4 py-2 text-sm font-bold text-slate-600 transition hover:text-slate-900"
          >
            Sign in
          </Link>
        </nav>
      </header>

      <main className="space-y-0">
        {/* Hero Section - Mission Statement & Value Prop */}
        <section className="bg-slate-950 px-6 py-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              {/* Left: Headline & Core Message */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white">
                    Win. Execute. Earn.
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    50% salary growth when Mission 50 wins. Your execution determines your hike. Transparent. Fair. Real.
                  </p>
                </div>
                <Link
                  href="/signin"
                  className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-600"
                >
                  Start here
                </Link>
              </div>

              {/* Right Visual - Mission 50 Card */}
              <div className="flex items-center justify-center">
                <div className="w-full rounded-lg bg-white border border-slate-200 p-8 shadow-lg">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-black text-slate-900">Mission 50</h2>
                    <div className="space-y-3 border-t border-slate-200 pt-6">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-orange-500">30</span>
                        <span className="text-slate-700">Warrior Systems</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-orange-500">18</span>
                        <span className="text-slate-700">Story Marketing</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-orange-500">2</span>
                        <span className="text-slate-700">MetaGurukul</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 border-t border-slate-200 pt-6">
                      3 brands. 50 clients. One mission.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 3 Step Flow */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900">How it works</h2>
              <p className="text-lg text-slate-600">Define. Execute. Earn.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Define Power Moves",
                  desc: "Clear actions. Measurable outcomes. You own them."
                },
                {
                  step: "02",
                  title: "Execute Consistently",
                  desc: "Track daily. Dashboard shows the truth. No politics."
                },
                {
                  step: "03",
                  title: "Earn Growth",
                  desc: "Your contribution = your hike. Transparent. Fair. Real."
                }
              ].map((item) => (
                <div key={item.step} className="space-y-4">
                  <div className="text-sm font-black text-slate-400 uppercase tracking-wide">{item.step}</div>
                  <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters - Single Powerful Message */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-12 text-center">
              <div className="space-y-4 max-w-2xl mx-auto">
                <h2 className="text-5xl font-black text-white">
                  Better execution. Better rewards.
                </h2>
                <p className="text-lg text-slate-300">
                  You build Indian companies that win globally. You grow alongside them. That's the alignment.
                </p>
              </div>
              <div className="flex gap-8 justify-center flex-wrap">
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-bold">No ambiguity</p>
                  <p className="text-white font-semibold">Clear metrics. Clear outcomes.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-bold">No politics</p>
                  <p className="text-white font-semibold">Dashboards show the truth.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 uppercase tracking-wide font-bold">No shortcuts</p>
                  <p className="text-white font-semibold">Execution builds trust.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <h2 className="text-5xl font-black text-slate-900">
              Ready?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sign in to your dashboard. Define your power moves. Start executing.
            </p>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-600"
            >
              Enter dashboard
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8 bg-slate-50">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© 2026 ArkMedis. All rights reserved.</p>
          <Link href="/signin" className="hover:text-slate-900 transition font-semibold">
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  )
}
