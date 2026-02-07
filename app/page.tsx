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
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-bold text-white uppercase tracking-[0.15em]">
                  50 by Dec 31, 2026
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-7xl text-slate-900">
                  Your growth. India's growth.
                </h1>
                <p className="text-2xl text-slate-700 max-w-2xl">
                  When the company wins Mission 50, <span className="text-orange-600 font-bold">everyone shares up to 50% salary growth</span>. Earned. Aligned by contribution. Non-negotiable.
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
            </div>
          </div>
        </section>

        {/* What We Do - The Three Brands */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Three Brands. One Mission. Build India.</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Strong execution. Global branding. Deep knowledge. Three problems. Three solutions. One country gets stronger.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "The Warrior Systems",
                  target: "30 companies",
                  problem: "Indian businesses have talent but lack execution discipline.",
                  solution: "We install systems that scale globally."
                },
                {
                  name: "Story Marketing",
                  target: "18 companies",
                  problem: "Indian manufacturing loses globally due to weak branding.",
                  solution: "We amplify their story. They compete. They win."
                },
                {
                  name: "MetaGurukul",
                  target: "2 platforms",
                  problem: "India's ancient knowledge traditions are fading.",
                  solution: "We revive them through modern coaching disciplines."
                }
              ].map((brand) => (
                <div key={brand.name} className="bg-slate-900 rounded-lg p-8 border-l-4 border-orange-500 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                    <p className="text-orange-400 font-bold text-sm mt-2">{brand.target}</p>
                  </div>
                  <p className="text-slate-400 text-sm">{brand.problem}</p>
                  <p className="text-slate-200 font-semibold">{brand.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How You Earn Growth */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How You Earn Growth</h2>
              <p className="text-xl text-slate-700">Every person, every quarter, same system.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Define Power Moves",
                  desc: "Clear actions that move the needle. You own them."
                },
                {
                  num: "2",
                  title: "Execute & Measure",
                  desc: "Every outcome tracked. No politics. Dashboards show the truth."
                },
                {
                  num: "3",
                  title: "Earn Your Hike",
                  desc: "Up to 50% salary growth when Mission 50 succeeds. Your contribution decides your share."
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

        {/* Why This Matters */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Three Things Make This Real</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Work From Home & Flexibility",
                  desc: "Execution earns freedom. Consistent delivery builds trust. Trust enables flexibility. Not the other way around."
                },
                {
                  title: "Recognition Without Politics",
                  desc: "Dashboards show your contribution. No gossip. No noise. Your outcomes matter. Your work speaks for itself."
                },
                {
                  title: "Growth That Compounds",
                  desc: "Your 50% hike reinvested in your development. Skills compound. Opportunities expand. Year over year."
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

        {/* Purpose × Passion × Profit - The Philosophy */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg bg-slate-950 border-2 border-orange-500 p-12 text-center space-y-8">
              <div className="space-y-4">
                <p className="text-slate-300 text-lg">
                  <span className="text-orange-400 font-bold">Purpose</span> without passion doesn't last.
                </p>
                <p className="text-slate-300 text-lg">
                  <span className="text-orange-400 font-bold">Passion</span> without profit doesn't scale.
                </p>
                <p className="text-slate-300 text-lg">
                  <span className="text-orange-400 font-bold">All three are non-negotiable.</span>
                </p>
              </div>
              <div className="border-t border-slate-700 pt-8">
                <p className="text-2xl font-bold text-orange-300 mb-6">
                  India first. Always.
                </p>
                <p className="text-slate-200 mb-4">
                  We build better Indian companies while building ArkMedis sustainably. Three brands solve three problems. Everyone involved wins.
                </p>
              </div>
              <div className="space-y-2 border-t border-slate-700 pt-8">
                <p className="text-slate-200">
                  <span className="text-orange-300 font-bold">Built</span> with genuine passion.
                </p>
                <p className="text-slate-200">
                  <span className="text-orange-300 font-bold">Driven</span> by clear purpose.
                </p>
                <p className="text-slate-200">
                  <span className="text-orange-300 font-bold">Sustained</span> by profit.
                </p>
              </div>
              <p className="text-sm text-orange-400 font-bold">
                Purpose, Passion, Profit—integrated. Non-negotiable.
              </p>
            </div>
          </div>
        </section>

        {/* The Bigger Picture - By 2047 */}
        <section className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-orange-400 mb-4">By 2047</h2>
              <p className="text-xl text-slate-300">Strong execution. Disciplined knowledge. Global competitiveness. These define India.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "50 Companies",
                  desc: "With execution discipline. Proving systems scale faster than hustle."
                },
                {
                  title: "Manufacturing Pride",
                  desc: "Indian brands competing globally. Known for quality, discipline, and integrity."
                },
                {
                  title: "Knowledge Revival",
                  desc: "Coaching and wisdom traditions thriving. India exports teachers, not just goods."
                }
              ].map((item) => (
                <div key={item.title} className="bg-slate-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-slate-200 mt-8">
              Your Power Moves aren't just about Mission 50. They're about what India becomes.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              No shortcuts. No politics. Just disciplined execution that compounds. Your growth. India's growth. Both matter.
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
