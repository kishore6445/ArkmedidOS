import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
            ✦
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-orange-600 font-bold">ArkMedis</p>
            <p className="text-base font-bold text-slate-900">Mission 50</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded px-4 py-2 text-sm font-bold text-orange-600 transition hover:text-orange-700 border-2 border-orange-500 hover:bg-orange-50"
          >
            Sign in
          </Link>
        </nav>
      </header>

      <main className="space-y-0">
        {/* Hero - What You Get */}
        <section className="bg-slate-950 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-white">
                    Win Mission 50.<br/>
                    <span className="text-orange-400">Earn 50% salary growth.</span>
                  </h1>
                  <p className="text-xl text-slate-300">
                    Earned by contribution. Tracked transparently.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-orange-400 text-2xl font-bold mt-1">✓</div>
                    <div>
                      <p className="text-white font-bold text-lg">Fair & Transparent</p>
                      <p className="text-slate-400">Your work is measured. Your results speak.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-orange-400 text-2xl font-bold mt-1">✓</div>
                    <div>
                      <p className="text-white font-bold text-lg">Every Role Counts</p>
                      <p className="text-slate-400">Execution, marketing, knowledge—everyone contributes.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/signin"
                    className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-600"
                  >
                    Enter Dashboard
                  </Link>
                </div>
              </div>

              {/* Right Visual - Mission 50 Poster */}
              <div className="flex items-center justify-center">
                <div className="w-full rounded-lg border-4 border-orange-500 bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-center shadow-2xl">
                  <div className="space-y-8">
                    <h2 className="text-6xl font-black text-white">Mission 50</h2>
                    <div className="bg-white rounded-lg p-8 space-y-6">
                      <p className="text-orange-600 text-2xl font-black">50 clients. 3 brands.</p>
                      <div className="space-y-3 text-left">
                        <p className="text-slate-700 font-bold">
                          <span className="text-orange-600 text-3xl font-black">30</span> · Warrior Systems
                        </p>
                        <p className="text-slate-700 font-bold">
                          <span className="text-orange-600 text-3xl font-black">18</span> · Story Marketing
                        </p>
                        <p className="text-slate-700 font-bold">
                          <span className="text-orange-600 text-3xl font-black">2</span> · MetaGurukul
                        </p>
                      </div>
                    </div>
                    <p className="text-white font-bold text-lg">Deadline: Dec 31, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How You Earn Growth */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How You Earn This Growth</h2>
              <p className="text-xl text-slate-700">Every person. Every quarter. Same system.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Define Your Power Moves",
                  desc: "Clear actions that move the needle. You own them. No ambiguity."
                },
                {
                  num: "2",
                  title: "Execute & Get Measured",
                  desc: "Every outcome tracked transparently. Dashboards show the truth. No politics."
                },
                {
                  num: "3",
                  title: "Earn Your Share",
                  desc: "When Mission 50 succeeds, your contribution determines your hike. Fair. Aligned. Real."
                }
              ].map((item) => (
                <div key={item.num} className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="text-4xl font-black text-orange-500 mb-3">{item.num}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Beyond Money */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-400 mb-4">What Else You Get</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Work From Home & Flexibility",
                  desc: "Execution earns freedom. Consistent delivery builds trust. Trust enables flexibility. You control your environment."
                },
                {
                  title: "Recognition Without Politics",
                  desc: "Dashboards show your contribution. No gossip. No hidden agendas. Your work speaks for itself. Always."
                },
                {
                  title: "Growth That Compounds",
                  desc: "Your hike reinvested in your skills. You get better. Opportunities expand. Your market value rises."
                }
              ].map((item) => (
                <div key={item.title} className="bg-slate-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Three Brands You're Part Of */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">The Three Brands You Build</h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                You're not just working at ArkMedis. You're part of three focused missions solving real Indian problems.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "The Warrior Systems",
                  target: "30 Indian companies",
                  mission: "Execution discipline that scales globally"
                },
                {
                  name: "Story Marketing",
                  target: "18 manufacturing brands",
                  mission: "Global recognition for Indian quality"
                },
                {
                  name: "MetaGurukul",
                  target: "2 coaching platforms",
                  mission: "Reviving India's knowledge traditions"
                }
              ].map((brand) => (
                <div key={brand.name} className="bg-slate-50 rounded-lg p-8 border-2 border-slate-200 hover:border-orange-500 transition">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{brand.name}</h3>
                  <p className="text-orange-600 font-bold text-sm mb-4">{brand.target}</p>
                  <p className="text-slate-700">{brand.mission}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg bg-slate-900 border-2 border-orange-500 p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white mb-6">You're Not Just Earning Money</h2>
                <p className="text-slate-300 text-lg">
                  You're part of something that builds <span className="text-orange-400 font-bold">better Indian companies</span> while you grow.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-8 space-y-3">
                <p className="text-slate-200">
                  Your Power Moves → Company wins Mission 50 → Indian businesses get stronger → You grow alongside.
                </p>
                <p className="text-sm text-orange-400 font-bold mt-6">
                  Profit and purpose. Both real. Both happening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">
              Ready to Grow?
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              No shortcuts. No politics. Transparent execution. Fair rewards. This is how we work.
            </p>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              Sign in to your account
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© 2026 ArkMedis. All rights reserved.</p>
          <Link href="/signin" className="hover:text-orange-600 transition font-semibold">
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  )
}
