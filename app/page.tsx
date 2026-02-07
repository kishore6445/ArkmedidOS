import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 border-b border-orange-500/20">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-slate-950">
            ✦
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-orange-500 font-bold">ArkMedis</p>
            <p className="text-base font-bold text-white">Mission 50</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded px-4 py-2 text-sm font-bold text-orange-500 transition hover:text-orange-400 border border-orange-500/50 hover:border-orange-400"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded bg-orange-500 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-orange-400"
          >
            Join us
          </Link>
        </nav>
      </header>

      <main className="space-y-0">
        {/* Section 1: Hero - Mission 50 Overview */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-20 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6 flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded bg-orange-500 px-4 py-2 text-sm font-bold text-slate-950 uppercase tracking-[0.15em]">
                  50 by December 31, 2026
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-white">
                  50 customers by December 31, 2026 — across three focused brands.
                </h1>
                <div className="space-y-3 text-lg text-slate-300">
                  <p><span className="text-orange-400 font-bold">The Warrior Systems</span> — 30 customers</p>
                  <p><span className="text-orange-400 font-bold">Story Marketing</span> — 18 customers</p>
                  <p><span className="text-orange-400 font-bold">MetaGurukul</span> — 2 customers</p>
                </div>
                <p className="text-xl text-slate-200 pt-2">Together, this is <span className="text-orange-400 font-bold">Mission 50</span>.</p>
                <p className="text-lg text-slate-300">Everyone at ArkMedis works toward this single mission. And when the mission is accomplished, <span className="text-orange-400 font-bold">everyone who contributed wins</span>.</p>
                <div className="pt-4">
                  <Link
                    href="/signin"
                    className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400"
                  >
                    Sign in to your account
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-8xl font-black text-orange-500/20 text-center">
                  MISSION
                  <br />
                  50
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What You Get When Company Wins */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-400">What You Get When the Company Wins</h2>
              <p className="text-xl text-slate-300">ArkMedis is built on a simple belief:</p>
            </div>
            <div className="bg-slate-800/50 border-l-4 border-orange-500 p-8 rounded">
              <p className="text-2xl font-bold text-white leading-relaxed">
                When people contribute honestly to a shared mission,<br />
                the company should grow them in return.
              </p>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <p><span className="text-orange-400 font-bold">•</span> When <span className="font-bold text-white">Mission 50</span> is achieved: ArkMedis commits to <span className="text-orange-400 font-bold">50% salary growth by December 31, 2026</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Growth is <span className="font-bold text-white">earned through contribution</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Distributed <span className="font-bold text-white">in proportion to how your Power Moves contributed</span></p>
              <p><span className="text-orange-400 font-bold">•</span> Designed so <span className="font-bold text-white">everyone has the opportunity to reach the full 50%</span></p>
            </div>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 3: How Salary Growth Works */}
        <section className="bg-slate-950 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-400">How Salary Growth Works (Clear & Fair)</h2>
              <p className="text-lg text-slate-300">If you execute your <span className="font-bold">Power Moves</span> in a way that contributes to Mission 50, and the <span className="font-bold">company wins</span>, we commit to ensuring:</p>
            </div>
            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-8 rounded">
              <p className="text-2xl font-bold text-orange-400 leading-relaxed">
                Up to 50% salary growth — aligned with your contribution.
              </p>
            </div>
            <div className="space-y-6 text-lg text-slate-300">
              <p><span className="text-orange-400 font-bold">This is not automatic.</span> This is not political. This is <span className="font-bold text-white">earned growth</span>.</p>
              <p>Our intent is simple and sincere: <span className="text-orange-400 font-bold">we want everyone to succeed — and we reward contribution fairly.</span></p>
            </div>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 4: The Principle We Operate On */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-orange-400">The Principle We Operate On</h2>
            <p className="text-lg text-slate-300">ArkMedis is built on timeless, team-first principles:</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "When one person executes, everyone benefits",
                "When someone falls behind, the team feels it",
                "When Mission 50 is achieved, everyone who contributed grows"
              ].map((principle) => (
                <div key={principle} className="border border-orange-500/30 bg-slate-800/50 p-6 rounded">
                  <p className="text-lg font-bold text-white leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-800/50 border-l-4 border-orange-500 p-8 rounded">
              <p className="text-lg text-slate-200 space-y-2">
                <p>The mindset is simple:</p>
                <p className="text-xl font-bold text-orange-400">Your execution helps your teammates succeed.</p>
                <p className="text-xl font-bold text-orange-400">Their execution helps you succeed.</p>
                <p className="pt-4 text-slate-300">There is no competition between teammates. There is only <span className="text-orange-400 font-bold">shared responsibility</span>.</p>
              </p>
            </div>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 5: How ArkMedis System Works */}
        <section className="bg-slate-950 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-12">
            <h2 className="text-4xl font-bold text-orange-400">How the ArkMedis System Works</h2>
            
            <div className="space-y-8">
              {[
                {
                  num: "1",
                  title: "Clear Power Moves",
                  content: "Every role has clearly defined Power Moves — the few actions that matter most. They are visible, trackable, and reviewed regularly. Execution is measured to enable growth, not to punish."
                },
                {
                  num: "2",
                  title: "Team Outcomes",
                  content: "Your Power Moves roll into Department Victory Targets, which directly impact Mission 50. This is shared execution, not isolated effort."
                },
                {
                  num: "3",
                  title: "Company Wins",
                  content: "As Mission 50 is achieved: Revenue strengthens, Stability improves, Growth becomes predictable. As a result: Salary growth is unlocked, Flexibility expands, Opportunities multiply. This is earned growth, not entitlement."
                }
              ].map((item) => (
                <div key={item.num} className="border border-orange-500/30 bg-slate-900 p-8 rounded">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-slate-950 text-lg flex-shrink-0">
                      {item.num}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-orange-400">{item.title}</h3>
                      <p className="text-lg text-slate-300 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 6: More Than Salary */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-12">
            <h2 className="text-4xl font-bold text-orange-400">More Than Salary: How Your Life Improves</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Work-From-Home & Flexibility",
                  content: "Flexibility at ArkMedis is built on trust. Consistent execution builds reliability. Reliability earns autonomy. Autonomy enables flexible work environments. Execution earns freedom."
                },
                {
                  title: "Recognition Without Politics",
                  content: "Recognition is about visible contribution. Dashboards replace gossip. Ownership replaces noise. Outcomes replace opinions. Your work speaks for you."
                },
                {
                  title: "High-Growth Startup Opportunities",
                  content: "ArkMedis is growing across three brands. Growth creates new roles, leadership paths, early responsibility, and faster learning. Those who grow with the company grow the fastest."
                }
              ].map((item) => (
                <div key={item.title} className="border border-orange-500/30 bg-slate-800/50 p-8 rounded">
                  <h3 className="text-xl font-bold text-orange-400 mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
            
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 7: The Three Brands */}
        <section className="bg-slate-950 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-12">
            <h2 className="text-4xl font-bold text-orange-400">The Three Brands You Build With</h2>
            
            <div className="space-y-8">
              {[
                {
                  brand: "The Warrior Systems",
                  description: "Helping companies build execution discipline, leadership alignment, and operational systems.",
                  detail: "India has thousands of businesses with enormous potential. Many struggle not because of talent — but because of weak systems. The Warrior Systems helps convert potential into performance."
                },
                {
                  brand: "Story Marketing",
                  description: "Helping Indian manufacturers and businesses market with clarity, trust, and confidence.",
                  detail: "India's manufacturing sector has global opportunity. Story Marketing helps brands compete on clarity and credibility, not noise."
                },
                {
                  brand: "MetaGurukul",
                  description: "Reviving deep learning, teaching, and long-term mentorship traditions.",
                  detail: "India's greatest strength has always been knowledge systems — structured learning, disciplined thinking, and lifelong mentorship. MetaGurukul exists to help restore that legacy in a modern form."
                }
              ].map((item) => (
                <div key={item.brand} className="border border-orange-500/30 bg-slate-900 p-8 rounded">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">{item.brand}</h3>
                  <p className="text-lg text-slate-300 mb-4">{item.description}</p>
                  <p className="text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 8: Who Thrives at ArkMedis */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-orange-400">Who Thrives at ArkMedis</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg text-slate-300 mb-4">We thrive with people who:</p>
                <div className="grid gap-3 text-slate-300">
                  {[
                    "Take ownership of their work",
                    "Practice daily discipline",
                    "Act proactively, not reactively",
                    "Stay mission-focused while valuing independence",
                    "Are self-starters who move without being pushed"
                  ].map((trait) => (
                    <p key={trait} className="flex items-center gap-3">
                      <span className="text-orange-500 font-bold">•</span>
                      {trait}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border-l-4 border-orange-500 p-8 rounded">
                <p className="text-lg text-slate-300 mb-4">You'll especially resonate with ArkMedis if you believe:</p>
                <div className="space-y-3">
                  {[
                    "Growth should be earned",
                    "Fairness matters",
                    "Long-term thinking wins"
                  ].map((belief) => (
                    <p key={belief} className="text-orange-400 font-bold text-lg">• {belief}</p>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-slate-400">This is not for everyone — and that's intentional.</p>
            </div>
            
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 9: One Mission One Team */}
        <section className="bg-slate-950 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8 text-center">
            <h2 className="text-5xl font-bold text-white">One Mission. One Team. One Win.</h2>
            <div className="space-y-4 text-xl text-slate-300">
              <p>Everyone is on the same mission.</p>
              <p>Everyone works toward the same outcome.</p>
              <p className="text-orange-400 font-bold">And when the mission is completed, everyone who contributed wins.</p>
            </div>
          </div>
        </section>

        {/* Section 10: Mission 2047 - National Contribution */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-orange-400">Mission 2047 — Atmanirbhar Bharat</h2>
            <p className="text-lg text-slate-300">India's future will be built on:</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Strong companies",
                "Globally competitive manufacturing",
                "Deep, disciplined knowledge systems"
              ].map((pillar) => (
                <div key={pillar} className="border border-orange-500/30 bg-slate-800/50 p-6 rounded text-center">
                  <p className="text-lg font-bold text-white">{pillar}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 text-lg text-slate-300">
              <p>ArkMedis contributes through action, not slogans:</p>
              <div className="space-y-2">
                <p><span className="text-orange-400 font-bold">•</span> <span className="font-bold text-white">The Warrior Systems</span> builds execution-ready Indian companies</p>
                <p><span className="text-orange-400 font-bold">•</span> <span className="font-bold text-white">Story Marketing</span> strengthens India's manufacturing presence</p>
                <p><span className="text-orange-400 font-bold">•</span> <span className="font-bold text-white">MetaGurukul</span> helps revive India's knowledge traditions</p>
              </div>
              <p className="text-slate-400 pt-4">Strong people build strong companies. Strong companies build a strong nation.</p>
            </div>
            
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-orange-400 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 11: Two Missions One System */}
        <section className="bg-slate-950 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-orange-400">Two Missions. One System.</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-orange-500/30 bg-slate-900 p-8 rounded">
                <h3 className="text-2xl font-bold text-orange-400 mb-3">Mission 50</h3>
                <p className="text-lg text-slate-300"><span className="font-bold text-white">Company Growth</span> → <span className="font-bold text-white">Personal Growth</span></p>
              </div>
              <div className="border border-orange-500/30 bg-slate-900 p-8 rounded">
                <h3 className="text-2xl font-bold text-orange-400 mb-3">Mission 2047 — Atmanirbhar Bharat</h3>
                <p className="text-lg text-slate-300"><span className="font-bold text-white">Business Strength</span> → <span className="font-bold text-white">National Contribution</span></p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border-l-4 border-orange-500 p-8 rounded text-center">
              <p className="text-xl text-slate-200">The <span className="text-orange-400 font-bold">ArkMedis Operating System</span> connects both.</p>
              <p className="text-lg text-slate-400 mt-2">No pressure. No propaganda. Just disciplined execution that compounds.</p>
            </div>
          </div>
        </section>

        {/* Section 12: Your Journey at ArkMedis */}
        <section className="bg-slate-900 px-6 py-16 border-b border-orange-500/20">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-orange-400">Your Journey at ArkMedis</h2>
            
            <div className="space-y-6 text-lg text-slate-300">
              <p>ArkMedis does not promise shortcuts. It offers a <span className="text-orange-400 font-bold">clear, fair system for growth</span>.</p>
              <p>If you execute with consistency and integrity:</p>
              <div className="bg-slate-800/50 border-l-4 border-orange-500 p-8 rounded space-y-2">
                <p><span className="text-orange-400 font-bold">•</span> The team wins</p>
                <p><span className="text-orange-400 font-bold">•</span> The company grows</p>
                <p><span className="text-orange-400 font-bold">•</span> <span className="font-bold text-white">And you grow with it</span></p>
              </div>
              <p>This is not a place to wait. It is a place to <span className="text-orange-400 font-bold">build</span>.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-7xl text-center space-y-8">
            <h2 className="text-5xl font-bold text-white">Ready to Build?</h2>
            <p className="text-2xl text-slate-300">Sign in to your ArkMedis account</p>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-10 py-4 text-lg font-bold text-slate-950 transition hover:bg-orange-400"
            >
              Sign in to your account
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-500/20 bg-slate-950 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 <span className="font-bold text-white">ArkMedis</span>. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/signin" className="hover:text-orange-500 transition font-semibold">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-orange-500 transition font-semibold">
              Join us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
