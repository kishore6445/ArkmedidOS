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
        <section className="bg-white px-6 py-20 border-b border-slate-200">
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

        {/* Section 2: What You Get When Company Wins */}
        <section className="bg-slate-50 px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-600">What You Get When the Company Wins</h2>
              <p className="text-xl text-slate-700">ArkMedis is built on a simple belief:</p>
            </div>
            <div className="bg-white border-l-4 border-orange-500 p-8 rounded shadow-sm">
              <p className="text-2xl font-bold text-slate-900 leading-relaxed">
                When people contribute honestly to a shared mission,<br />
                the company should grow them in return.
              </p>
            </div>
            <div className="space-y-4 text-lg text-slate-700">
              <p><span className="text-orange-600 font-bold">•</span> When <span className="font-bold text-slate-900">Mission 50</span> is achieved: ArkMedis commits to <span className="text-orange-600 font-bold">50% salary growth by December 31, 2026</span></p>
              <p><span className="text-orange-600 font-bold">•</span> Growth is <span className="font-bold text-slate-900">earned through contribution</span></p>
              <p><span className="text-orange-600 font-bold">•</span> Distributed <span className="font-bold text-slate-900">in proportion to how your Power Moves contributed</span></p>
              <p><span className="text-orange-600 font-bold">•</span> Designed so <span className="font-bold text-slate-900">everyone has the opportunity to reach the full 50%</span></p>
            </div>
            <Link
              href="/signin"
              className="inline-block rounded bg-orange-500 px-6 py-3 text-base font-bold text-white transition hover:bg-orange-600 mt-4"
            >
              Sign in to your account
            </Link>
          </div>
        </section>

        {/* Section 3: How Salary Growth Works */}
        <section className="bg-white px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">How Salary Growth Works</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Fair Framework",
                  points: ["Growth tied to business success", "All salaries increase proportionally", "No favoritism or politics"]
                },
                {
                  title: "Earned Through Contribution",
                  points: ["Your Power Moves are tracked", "Dashboard shows your impact", "Clear visibility on progress"]
                },
                {
                  title: "Distributed Based on Execution",
                  points: ["Execute well = higher percentage", "Team succeeds = you grow", "Shared success model"]
                }
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 border-2 border-orange-500 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-700">
                        <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Team-First Principles */}
        <section className="bg-slate-50 px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Team-First Principles</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Clear Power Moves",
                  desc: "Every role has clearly defined actions that matter. You know exactly what success looks like. Your contribution is visible and trackable."
                },
                {
                  title: "Team Outcomes",
                  desc: "Your Power Moves roll up into your team's targets. Your team's targets roll up into department victory targets. Department targets contribute to Mission 50."
                },
                {
                  title: "Company Wins",
                  desc: "When Mission 50 is achieved, everyone at ArkMedis wins. This isn't just about the company growing—it's about your growth being tied to our collective success."
                },
                {
                  title: "Recognition Replaces Politics",
                  desc: "Dashboards show your contribution in real time. No politics. No opinions. Your work speaks for itself. Promotions and growth are based on execution, not relationships."
                }
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-300 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Three Pillars System */}
        <section className="bg-white px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">The System That Makes It Work</h2>
              <p className="text-xl text-slate-700">ArkMedis operates on three interconnected pillars:</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  num: "1",
                  title: "Execution Discipline",
                  desc: "Define clear Power Moves for each role. Track execution weekly. Review progress in one-on-ones."
                },
                {
                  num: "2",
                  title: "Team Outcomes",
                  desc: "Individual Power Moves align to team targets. Team targets align to department victory targets. Every action connects to Mission 50."
                },
                {
                  num: "3",
                  title: "Company Mission",
                  desc: "Mission 50 is the company goal. When it's achieved, everyone wins. Salaries grow. Success is shared."
                }
              ].map((item) => (
                <div key={item.num} className="bg-orange-50 border-2 border-orange-500 rounded-lg p-8">
                  <div className="text-5xl font-black text-orange-500 mb-4">{item.num}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What This Means for You */}
        <section className="bg-slate-50 px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">What This Means for You</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Flexibility in How You Work",
                  desc: "You define how to execute your Power Moves. The framework is clear; the path is yours. Execution earns autonomy."
                },
                {
                  title: "Recognition for Your Work",
                  desc: "Dashboards eliminate politics. Your contribution is visible. Your growth depends on execution, not connections or seniority games."
                },
                {
                  title: "Real Growth Opportunities",
                  desc: "50% salary growth isn't a rumor—it's a commitment. When the company hits Mission 50, you hit it with us. Together."
                },
                {
                  title: "A Shared Mission",
                  desc: "You're not working to help someone else succeed. You're working on something that directly benefits you. Mission 50 is your mission."
                }
              ].map((item) => (
                <div key={item.title} className="bg-white border-l-4 border-orange-500 rounded p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Three Brands */}
        <section className="bg-white px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Three Brands. One System. One Mission.</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "The Warrior Systems",
                  target: "30 customers",
                  desc: "Execution discipline for Indian companies scaling from ₹1Cr to ₹10Cr+. We install systems so revenue grows without firefighting.",
                  focus: "Founded 2021. Proven in 50+ client engagements."
                },
                {
                  name: "Story Marketing",
                  target: "18 customers",
                  desc: "Manufacturing brands competing globally. We build positioning and execution so they win in markets where price isn't the answer.",
                  focus: "Focused on 'Make in India' brands going global."
                },
                {
                  name: "MetaGurukul",
                  target: "2 customers",
                  desc: "Reviving India's knowledge traditions through execution discipline. Training, mentoring, and systems for the next generation of Indian leaders.",
                  focus: "Building leaders for Atmanirbhar Bharat."
                }
              ].map((item) => (
                <div key={item.name} className="bg-slate-50 border-2 border-orange-500 rounded-lg p-8">
                  <div className="mb-4">
                    <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">{item.target}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">{item.name}</h3>
                  </div>
                  <p className="text-slate-700 mb-4">{item.desc}</p>
                  <p className="text-sm text-orange-600 font-semibold italic">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Who Thrives at ArkMedis */}
        <section className="bg-slate-50 px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Who Thrives at ArkMedis</h2>
            <div className="grid gap-4">
              {[
                "You understand that motivation is temporary; systems are permanent.",
                "You recognize that team performance depends on execution design, not effort.",
                "You believe in transparency and data over politics and opinions.",
                "You're committed to building something real—not quick wins.",
                "You want to grow with the company, not work for the company.",
                "You see execution as a craft worth mastering."
              ].map((item) => (
                <div key={item} className="bg-white border border-slate-300 rounded-lg p-6 flex gap-4">
                  <span className="text-orange-600 font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: One Mission One Team */}
        <section className="bg-white px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-orange-50 to-white border-2 border-orange-500 rounded-lg p-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">One Mission. One Team.</h2>
              <p className="text-xl text-slate-700 mb-6">
                Mission 50 isn't just a number. It's a commitment. It's a shared goal that says: <span className="text-orange-600 font-bold">when we all execute honestly, we all grow together</span>.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                At ArkMedis, you're not just an employee. You're part of a team with a shared mission. Your success is tied to our success. Our success is tied to yours. No politics. No favoritism. Just execution and results.
              </p>
              <Link
                href="/signin"
                className="inline-block rounded bg-orange-500 px-8 py-3 text-base font-bold text-white transition hover:bg-orange-600"
              >
                Join Mission 50
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: Mission 2047 */}
        <section className="bg-slate-50 px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Beyond Mission 50: The Bigger Picture</h2>
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-orange-500 rounded p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission 2047: Atmanirbhar Bharat</h3>
                <p className="text-lg text-slate-700 mb-4">
                  Mission 50 is our first step toward something bigger. By 2047, India's 100th year of independence, ArkMedis aims to have strengthened 1000+ Indian companies. Companies that compete globally. Companies that create jobs. Companies that drive innovation.
                </p>
                <p className="text-slate-700">
                  As you grow at ArkMedis through Mission 50, you're not just building a company—you're building the infrastructure for India's next generation of world-class businesses. That's what we mean by <span className="text-orange-600 font-bold">one mission, one team</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Two Missions Connected */}
        <section className="bg-white px-6 py-16 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Two Missions Connected Through One System</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-8">
                <p className="text-lg font-bold text-orange-600 mb-4">Mission 50 (2026)</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>50 customers across three brands</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>50% salary growth when achieved</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>Your personal growth is tied to company growth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>Execution discipline as the foundation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-8">
                <p className="text-lg font-bold text-slate-900 mb-4">Mission 2047 (2047)</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>1000+ Indian companies strengthened</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>Atmanirbhar Bharat—India's independence in business</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>Global competition from Indian companies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">→</span>
                    <span>Execution as the national competitive advantage</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-slate-700 text-center pt-8 border-t border-slate-200">
              Every customer you help execute through Mission 50 becomes part of the 1000+ by 2047. Every person you mentor. Every system you build. Every country we touch. It all counts toward a larger vision of India's future.
            </p>
          </div>
        </section>

        {/* Section 12: Your Journey */}
        <section className="bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-7xl space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Your Journey at ArkMedis Starts Today</h2>
            <div className="grid gap-8 lg:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Join the Mission",
                  desc: "Sign in to your account and become part of a team committed to executing on Mission 50."
                },
                {
                  num: "2",
                  title: "Define Your Power Moves",
                  desc: "Work with your manager to clearly define your Power Moves—the actions that matter most for your role."
                },
                {
                  num: "3",
                  title: "Execute with Clarity",
                  desc: "Execute consistently. Track your progress. See your impact roll up to team targets and company mission."
                },
                {
                  num: "4",
                  title: "Grow When We Win",
                  desc: "When Mission 50 is achieved by December 31, 2026, you grow with us. Up to 50% salary increase based on your contribution."
                }
              ].map((item) => (
                <div key={item.num} className="bg-white border-2 border-orange-500 rounded-lg p-6">
                  <div className="text-4xl font-black text-orange-500 mb-3">{item.num}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-8">
              <Link
                href="/signin"
                className="inline-block rounded bg-orange-500 px-10 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
              >
                Sign in to Your Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row">
          <p>© 2026 ArkMedis. All rights reserved. | Mission 50 by December 31, 2026</p>
          <div className="flex items-center gap-6">
            <Link href="/signin" className="hover:text-orange-600 transition font-semibold text-slate-900">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-orange-600 transition font-semibold text-slate-900">
              Join us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
