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
        {/* Section 1: Hero - Mission 50 Overview */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6 flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-bold text-white uppercase tracking-[0.15em]">
                  50 by December 31, 2026
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-slate-900">
                  50 customers by December 31, 2026 — across three focused brands.
                </h1>
                <div className="space-y-3 text-lg text-slate-700">
                  <p><span className="text-orange-600 font-bold">The Warrior Systems</span> — 30 customers</p>
                  <p><span className="text-orange-600 font-bold">Story Marketing</span> — 18 customers</p>
                  <p><span className="text-orange-600 font-bold">MetaGurukul</span> — 2 customers</p>
                </div>
                <p className="text-xl text-slate-800 pt-2">Together, this is <span className="text-orange-600 font-bold">Mission 50</span>.</p>
                <p className="text-lg text-slate-700">Everyone at ArkMedis works toward this single mission. And when the mission is accomplished, <span className="text-orange-600 font-bold">everyone who contributed wins</span>.</p>
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
                <div className="text-8xl font-black text-orange-500/15 text-center">
                  MISSION
                  <br />
                  50
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What You Get - Dark Blue Background */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-400">What You Get When the Company Wins</h2>
              <p className="text-xl text-slate-300">ArkMedis is built on a simple belief:</p>
            </div>
            <div className="bg-slate-900 border-l-4 border-orange-500 p-8 rounded shadow-lg">
              <p className="text-2xl font-bold text-white leading-relaxed">
                When people contribute honestly to a shared mission,<br />
                the company should grow them in return.
              </p>
            </div>
            <div className="space-y-4 text-lg text-slate-200">
              <p><span className="text-orange-400 font-bold">•</span> When <span className="font-bold text-white">Mission 50</span> is achieved: ArkMedis commits to <span className="text-orange-400 font-bold">50% salary growth by December 31, 2026</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Growth is <span className="font-bold text-white">earned through contribution</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Distributed <span className="font-bold text-white">in proportion to how your Power Moves contributed</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Designed so <span className="font-bold text-white">everyone has the opportunity to reach the full 50%</span></p>
            </div>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-white transition hover:bg-orange-600 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 3: How Salary Growth Works - White Background */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">How Salary Growth Works</h2>
              <p className="text-xl text-slate-700">This is not based on opinions or politics. It's transparent, earned, and fair.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Your Power Moves",
                  desc: "Every action you take is tracked, visible, and contributes to the mission"
                },
                {
                  title: "Measured Contribution",
                  desc: "We calculate your impact as a percentage of total team contribution"
                },
                {
                  title: "50% Growth Earned",
                  desc: "Your percentage of 50% is proportional to your contribution"
                }
              ].map((item) => (
                <div key={item.title} className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Team-First Principles - Dark Blue */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Team-First Principles</h2>
              <p className="text-xl text-slate-300">How we build a culture of shared success</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "One Mission, One Team",
                  desc: "Everyone's Power Moves roll up to the same company outcome. Your win is our win."
                },
                {
                  title: "Recognition, Not Politics",
                  desc: "Your dashboard shows your contribution. Your work speaks. No noise, no opinions."
                },
                {
                  title: "Execution Earns Freedom",
                  desc: "Consistent execution = reliability. Reliability = autonomy. Autonomy = flexibility."
                },
                {
                  title: "Everyone Has the Same Opportunity",
                  desc: "The system is designed so every role can reach the full 50% growth through contribution."
                }
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-orange-400 bg-slate-900 rounded-r-lg p-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{item.title}</h3>
                  <p className="text-slate-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Three Pillar System - White */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">The Three-Pillar System</h2>
              <p className="text-xl text-slate-700">How we make Mission 50 real</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Clear Power Moves (Weekly)",
                  desc: "Your role has defined actions that matter every week. Visible. Trackable. Reviewed."
                },
                {
                  num: "2",
                  title: "Team Outcomes (Monthly)",
                  desc: "Your Power Moves roll up into department targets. Department targets roll up into Mission 50."
                },
                {
                  num: "3",
                  title: "Company Wins (Quarterly)",
                  desc: "Mission 50 progress is visible to everyone. Wins are celebrated. Growth is earned."
                }
              ].map((item) => (
                <div key={item.num} className="bg-slate-950 rounded-lg p-8 text-white">
                  <div className="text-5xl font-black text-orange-500 mb-4">{item.num}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What This Means For You - Dark Blue */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">What This Means For You</h2>
              <p className="text-xl text-slate-300">Real outcomes. Real transparency. Real growth.</p>
            </div>
            <div className="space-y-4 text-lg text-slate-200">
              <div className="flex gap-4">
                <span className="text-orange-400 font-bold text-2xl">✓</span>
                <p><span className="text-white font-bold">Clarity over confusion:</span> You know exactly what matters and how to contribute.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-orange-400 font-bold text-2xl">✓</span>
                <p><span className="text-white font-bold">Transparency over politics:</span> Your contribution is measured and visible. Everyone plays by the same rules.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-orange-400 font-bold text-2xl">✓</span>
                <p><span className="text-white font-bold">Growth over stagnation:</span> Execute consistently. Earn recognition. Unlock flexibility.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-orange-400 font-bold text-2xl">✓</span>
                <p><span className="text-white font-bold">Community over isolation:</span> You're part of something bigger. Your wins contribute to our shared mission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: The Three Brands - White */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">The Three Brands of Mission 50</h2>
              <p className="text-xl text-slate-700">Each brand. Same system. One mission.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "The Warrior Systems",
                  target: "30 customers",
                  desc: "Execution discipline for Indian companies looking to scale without firefighting."
                },
                {
                  name: "Story Marketing",
                  target: "18 customers",
                  desc: "Manufacturing brands that want to compete globally on quality, craft, and story."
                },
                {
                  name: "MetaGurukul",
                  target: "2 customers",
                  desc: "Reviving India's knowledge traditions through execution-driven learning systems."
                }
              ].map((brand) => (
                <div key={brand.name} className="border-2 border-slate-950 rounded-lg p-8 bg-gradient-to-br from-white to-slate-50">
                  <h3 className="text-2xl font-bold text-slate-950 mb-2">{brand.name}</h3>
                  <p className="text-orange-600 font-bold text-lg mb-3">{brand.target}</p>
                  <p className="text-slate-700">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Who Thrives Here - Dark Blue */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Who Thrives at ArkMedis</h2>
              <p className="text-xl text-slate-300">We work with founders and leaders who believe:</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                "Motivation is temporary. Systems are permanent.",
                "Team performance depends on execution design, not effort.",
                "Recognition should replace politics.",
                "Growth happens when people see their contribution clearly.",
                "Systems thinking matters more than individual hustle.",
                "Transparency builds trust faster than any culture initiative."
              ].map((belief, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-900 rounded-lg border-l-4 border-orange-500">
                  <span className="text-orange-400 font-bold text-xl flex-shrink-0">→</span>
                  <p className="text-slate-200 text-lg">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: One Mission One Team - White */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">One Mission. One Team.</h2>
              <p className="text-xl text-slate-700">How we think about growth at ArkMedis</p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-8">
              <p className="text-lg text-slate-800 leading-relaxed">
                We don't believe in individual performers creating company outcomes. We believe in <span className="font-bold text-slate-950">aligned teams executing clear systems</span>. Mission 50 is one mission. Every Power Move contributes. Every department outcome matters. Every team member has the opportunity to grow at the same rate when the mission is accomplished.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Sales executes",
                  desc: "Targets met, pipelines flowing"
                },
                {
                  title: "Operations scales",
                  desc: "Systems built, processes optimized"
                },
                {
                  title: "Leadership aligns",
                  desc: "Strategy connected to execution"
                }
              ].map((item) => (
                <div key={item.title} className="border-2 border-slate-950 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h4>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Mission 2047 - Dark Blue */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-4">Mission 2047 — India's Role</h2>
              <p className="text-xl text-slate-300">Why this matters beyond the companies we work with</p>
            </div>
            <div className="space-y-6 text-lg text-slate-200">
              <p>
                India turns 100 in 2047. By then, we believe India should be home to the world's most efficiently executed companies. Companies that scale without chaos. Companies that compete globally on quality, not just cost.
              </p>
              <p>
                That starts with <span className="text-orange-400 font-bold">execution systems that work</span>. Not coaching. Not motivation seminars. Systems. Clear Power Moves. Transparent outcomes. Fair recognition.
              </p>
              <p>
                Mission 50 is our first step toward Mission 2047. <span className="text-orange-400 font-bold">50 companies with execution discipline</span>. 50 companies that prove it's possible. 50 companies that become case studies for what's next.
              </p>
              <p>
                Every Power Move you execute contributes to both goals: Your growth. India's businesses getting stronger.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Two Missions Connected - White */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-4">Two Missions. One System.</h2>
              <p className="text-xl text-slate-700">How they connect through you</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-slate-950 rounded-lg p-8 text-white">
                <h3 className="text-3xl font-bold text-orange-400 mb-4">Mission 50</h3>
                <p className="text-lg text-slate-300 mb-4">Your personal mission (2026)</p>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex gap-3"><span className="text-orange-400">→</span> Execute clear Power Moves</li>
                  <li className="flex gap-3"><span className="text-orange-400">→</span> Build team outcomes</li>
                  <li className="flex gap-3"><span className="text-orange-400">→</span> Earn 50% salary growth</li>
                  <li className="flex gap-3"><span className="text-orange-400">→</span> Be part of something winning</li>
                </ul>
              </div>
              <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">Mission 2047</h3>
                <p className="text-lg text-slate-800 mb-4">India's execution vision</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3"><span className="text-orange-600">→</span> 50 companies with discipline</li>
                  <li className="flex gap-3"><span className="text-orange-600">→</span> Systems that scale globally</li>
                  <li className="flex gap-3"><span className="text-orange-600">→</span> India's businesses competing</li>
                  <li className="flex gap-3"><span className="text-orange-600">→</span> Growth that's sustainable</li>
                </ul>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-950 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-slate-900">When you win, the company wins. When the company wins, India wins.</p>
            </div>
          </div>
        </section>

        {/* Section 12: Your Journey - Dark Blue CTA */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">Your Journey Starts Here</h2>
              <p className="text-2xl text-orange-400 font-bold">No shortcuts. No politics. Just clear systems and earned growth.</p>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join us in building something real. Mission 50. Mission 2047. Your growth. India's strength. All connected through execution.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center items-center pt-8">
              <Link
                href="/signin"
                className="rounded bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
              >
                Sign in to your account
              </Link>
              <Link
                href="/signup"
                className="rounded border-2 border-orange-500 px-8 py-4 text-lg font-bold text-orange-400 transition hover:bg-orange-500/10"
              >
                Join Mission 50
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-12 border-t border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <h4 className="text-orange-400 font-bold mb-3">Mission 50</h4>
              <p className="text-slate-400">50 customers by December 31, 2026</p>
            </div>
            <div>
              <h4 className="text-orange-400 font-bold mb-3">Three Brands</h4>
              <ul className="space-y-2 text-slate-400">
                <li>The Warrior Systems</li>
                <li>Story Marketing</li>
                <li>MetaGurukul</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-400 font-bold mb-3">Get Started</h4>
              <Link href="/signin" className="text-slate-300 hover:text-orange-400 transition">
                Sign in
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2026 ArkMedis. All rights reserved. | Mission 50 — When the company wins, everyone grows.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
