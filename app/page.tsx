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
          <Link
            href="/signup"
            className="rounded bg-orange-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Join us
          </Link>
        </nav>
      </header>

      <main className="space-y-0">
        {/* Hero */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6 flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-bold text-white uppercase tracking-[0.15em]">
                  50 by Dec 31, 2026
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-7xl text-slate-900">
                  When the company wins, you grow.
                </h1>
                <p className="text-xl text-slate-700">
                  Mission 50: 50 customers across 3 brands. When we win, <span className="text-orange-600 font-bold">everyone earns up to 50% salary growth</span>.
                </p>
                <div className="pt-4">
                  <Link
                    href="/signin"
                    className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-600"
                  >
                    Sign in to your account
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="space-y-4 text-center">
                  <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">Three Brands</p>
                  <div className="space-y-3">
                    <div className="text-lg font-bold text-slate-900">The Warrior Systems <span className="text-orange-600">30</span></div>
                    <div className="text-lg font-bold text-slate-900">Story Marketing <span className="text-orange-600">18</span></div>
                    <div className="text-lg font-bold text-slate-900">MetaGurukul <span className="text-orange-600">2</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">How You Earn Growth</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Clear Power Moves",
                  desc: "Execute defined actions every week."
                },
                {
                  num: "2",
                  title: "Measured Contribution",
                  desc: "Your impact is tracked and visible."
                },
                {
                  num: "3",
                  title: "Earned Growth",
                  desc: "50% growth split by your contribution."
                }
              ].map((item) => (
                <div key={item.num} className="bg-slate-900 rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="text-4xl font-black text-orange-500 mb-3">{item.num}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">What Makes This Different</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Transparency, Not Politics",
                  desc: "Your contribution is measured. Your work speaks for itself."
                },
                {
                  title: "One Mission, One Team",
                  desc: "Everyone's Power Moves roll up to the same outcome. Your win is our win."
                },
                {
                  title: "Earned Autonomy",
                  desc: "Consistent execution builds reliability. Reliability earns freedom."
                },
                {
                  title: "Equal Opportunity",
                  desc: "Every role can reach the full 50% growth through contribution."
                }
              ].map((item) => (
                <div key={item.title} className="border-2 border-slate-200 rounded-lg p-6 hover:border-orange-500 transition">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Three Brands */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Three Focused Brands</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "The Warrior Systems",
                  target: "30 customers",
                  desc: "Execution discipline for Indian companies"
                },
                {
                  name: "Story Marketing",
                  target: "18 customers",
                  desc: "Manufacturing brands competing globally"
                },
                {
                  name: "MetaGurukul",
                  target: "2 customers",
                  desc: "Reviving India's knowledge traditions"
                }
              ].map((brand) => (
                <div key={brand.name} className="bg-slate-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
                  <p className="text-orange-400 font-bold mb-3">{brand.target}</p>
                  <p className="text-slate-300">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission 2047 */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">Mission 50 → Mission 2047</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 border-2 border-orange-500 rounded-lg p-8 bg-orange-50">
                <h3 className="text-2xl font-bold text-slate-900">Near term</h3>
                <p className="text-slate-800">
                  50 companies with execution discipline by 2026. Prove that systems work better than hustle.
                </p>
              </div>
              <div className="space-y-4 border-2 border-slate-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900">Long term</h3>
                <p className="text-slate-700">
                  By 2047, India should lead in efficient execution. Companies that compete on quality, not just cost.
                </p>
              </div>
            </div>
            <p className="text-lg text-slate-700">
              Your Power Moves build both. You grow. <span className="text-orange-600 font-bold">India's businesses get stronger.</span>
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Something Real?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              No shortcuts. No politics. Just disciplined execution that compounds.
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
          <div className="flex items-center gap-4">
            <Link href="/signin" className="hover:text-orange-600 transition font-semibold">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-orange-600 transition font-semibold">
              Join us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
