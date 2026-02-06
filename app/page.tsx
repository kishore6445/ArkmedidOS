import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-slate-900 text-white text-xs font-bold group-hover:shadow-lg group-hover:shadow-slate-400 transition-all">
              ◆
            </div>
            <span className="text-sm font-semibold text-slate-900">ArkMedis OS</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden sm:block text-xs text-slate-500 font-medium tracking-wide space-x-2">
              <span className="inline-block px-2 py-1 rounded hover:bg-slate-50 transition">Secure</span>
              <span>•</span>
              <span className="inline-block px-2 py-1 rounded hover:bg-slate-50 transition">Role-based</span>
              <span>•</span>
              <span className="inline-block px-2 py-1 rounded hover:bg-slate-50 transition">Audit logs</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/signin"
                className="px-4 py-2 text-sm font-medium text-slate-900 hover:text-slate-600 hover:bg-slate-50 rounded transition"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Mission First */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-16 space-y-12 animate-fade-in">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Mission 2026
              </p>
              
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-slate-900">
                This is the year we scale ArkMedis.
              </h1>
              
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                Our 2026 target: 50 new clients across three focused brands. This is how we grow.
              </p>
            </div>

            {/* Mission Numbers with Count-Up Animation */}
            <div className="space-y-6">
              <p className="text-base font-semibold text-slate-900">
                New clients to onboard across 2026.
              </p>
              
              <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                <div className="space-y-2 animate-count-up group cursor-pointer" style={{ animationDelay: "0.2s" }}>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">To Onboard</p>
                  <p className="text-6xl md:text-7xl font-light text-slate-900 group-hover:text-slate-700 transition">
                    30
                  </p>
                  <p className="text-xs font-semibold text-slate-600">Warrior Systems</p>
                  <div className="h-0.5 w-16 bg-slate-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
                <div className="space-y-2 animate-count-up group cursor-pointer" style={{ animationDelay: "0.3s" }}>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">To Onboard</p>
                  <p className="text-6xl md:text-7xl font-light text-slate-900 group-hover:text-slate-700 transition">
                    18
                  </p>
                  <p className="text-xs font-semibold text-slate-600">Story Marketing</p>
                  <div className="h-0.5 w-16 bg-slate-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
                <div className="space-y-2 animate-count-up group cursor-pointer" style={{ animationDelay: "0.4s" }}>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">To Onboard</p>
                  <p className="text-6xl md:text-7xl font-light text-slate-900 group-hover:text-slate-700 transition">
                    2
                  </p>
                  <p className="text-xs font-semibold text-slate-600">MetaGurukul</p>
                  <div className="h-0.5 w-16 bg-slate-900 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
              
              <p className="text-xs font-light text-slate-600 pt-4 border-t border-slate-100">
                50 new clients to onboard across all three brands. This is how we scale ArkMedis in 2026.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-800 hover:shadow-lg transition-all group"
              >
                Sign in
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Success = Your Growth Section */}
        <section className="border-b border-slate-100 bg-slate-50 animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Mission success means your growth.
              </h2>
              <p className="text-lg font-light text-slate-700 max-w-2xl leading-relaxed">
                When ArkMedis wins, you win.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Financial Growth",
                  desc: "As ArkMedis grows revenue, your financial rewards grow with it. Growth is shared, not hidden."
                },
                {
                  title: "Skill Mastery",
                  desc: "ArkMedis is in a growth phase. You learn faster by working closely with founders and leaders on real problems."
                },
                {
                  title: "Career Momentum",
                  desc: "You build a strong reputation by owning important work in a successful startup. That reputation opens bigger opportunities and faster growth."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded hover:shadow-lg hover:border-slate-400 transition-all">
                  <p className="text-sm font-semibold text-slate-900 mb-3">{item.title}</p>
                  <p className="text-sm font-light text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Role Matters - Ownership & Growth */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/50 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Your Role Matters
              </h2>
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                You are not here to just complete tasks. You are here to take ownership, build something meaningful, and grow in clarity, skill, and confidence.
              </p>
            </div>
            
            <div className="space-y-4 p-6 border-l-2 border-slate-900 pl-6 bg-white rounded">
              <p className="text-lg text-slate-900 font-semibold">The mission is achieved one focused day at a time.</p>
              <p className="text-sm text-slate-700">This is how today's work becomes tomorrow's results.</p>
            </div>

            <div className="pt-4">
              <p className="text-lg font-light text-slate-900">
                You don't just work here. <span className="font-semibold">You grow here.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Link
                href="/signin"
                className="px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-800 hover:shadow-lg transition-all"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Three Brands. One Company.
              </h2>
              <p className="text-sm font-light text-slate-600 max-w-2xl leading-relaxed">
                ArkMedis is the operating company. We build and scale three focused brands—each with a clear mission—aligned by one execution standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Warrior Systems",
                  description: "Execution systems that help founders and leadership teams win with confidence.",
                  target: 30,
                  label: "Clients"
                },
                {
                  title: "Story Marketing",
                  description: "Clarity-led marketing systems that build trust and drive growth.",
                  target: 18,
                  label: "Clients"
                },
                {
                  title: "MetaGurukul",
                  description: "A high-impact learning ecosystem built on depth, discipline, and lifelong guidance.",
                  target: 2,
                  label: "Clients"
                }
              ].map((brand, i) => (
                <div
                  key={brand.title}
                  className="group p-4 border border-slate-200 rounded hover:border-slate-400 hover:shadow-md hover:shadow-slate-200 transition-all duration-500 cursor-pointer bg-white"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-semibold text-slate-900 flex-1 group-hover:text-slate-700 transition">
                      {brand.title}
                    </h3>
                    <span className="text-lg ml-2 group-hover:scale-125 transition-transform origin-right">→</span>
                  </div>
                  <p className="text-xs font-light text-slate-600 leading-relaxed group-hover:text-slate-700 transition mb-4">
                    {brand.description}
                  </p>
                  <div className="bg-slate-900 p-3 rounded border border-slate-900 text-center group-hover:bg-slate-800 group-hover:border-slate-800 transition-all">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-300">2026 Goal</p>
                    <p className="text-2xl font-semibold text-white group-hover:text-slate-100 transition animate-count-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                      +{brand.target}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-1 text-center">
              <p className="text-xs font-light text-slate-600">Different missions.</p>
              <p className="text-xs font-light text-slate-600">One company.</p>
              <p className="text-xs font-light text-slate-600">One way of working.</p>
            </div>
          </div>
        </section>

        {/* How We Work - Principles */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                How We Operate
              </h2>
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                ArkMedis Operating System removes confusion, clarifies priorities, and makes progress visible—so your daily work moves the mission forward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {[
                "Clarity before speed — so decisions are faster.",
                "Ownership over excuses — so work moves forward.",
                "Systems over shortcuts — so progress compounds.",
                "Long-term over short-term wins — so growth lasts."
              ].map((principle, i) => (
                <div
                  key={i}
                  className="group p-4 border border-slate-100 rounded hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <p className="text-sm font-light text-slate-800 group-hover:text-slate-900 transition">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Find Inside ArkMedis OS */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/50 animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                What You'll Find Inside
              </h2>
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                Clear priorities, daily momentum, visible ownership, and real progress tracking that keeps work focused and meaningful.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {[
                "Clear priorities and outcomes",
                "Daily Power Moves that drive momentum",
                "Visible owners and due dates",
                "Scorecards and weekly rhythms",
                "Less rework and fewer follow-ups",
                "Recognition for real progress"
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden p-4 border border-slate-100 rounded hover:border-slate-300 bg-white hover:bg-slate-50/80 transition-all cursor-pointer"
                  style={{ animationDelay: `${0.7 + i * 0.05}s` }}
                >
                  <div className="absolute -left-1 top-0 h-full w-1 bg-slate-900 transform group-hover:w-1.5 transition-all"></div>
                  <p className="text-sm font-light text-slate-800 group-hover:text-slate-900 transition pl-2">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-900">Built for teams that execute.</p>
              <p className="text-xs text-slate-600">© 2026 ArkMedis</p>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
              <Link href="#privacy" className="hover:text-slate-900 transition">
                Privacy
              </Link>
              <span>•</span>
              <Link href="#security" className="hover:text-slate-900 transition">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
