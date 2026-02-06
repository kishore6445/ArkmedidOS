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
                Join us
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: Company Mission */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Our Mission
              </p>
              
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-slate-900">
                Scale three brands. Impact thousands.
              </h1>
              
              <p className="text-lg font-light text-slate-700 max-w-2xl leading-relaxed">
                30 new Warrior Systems clients. 18 new Story Marketing clients. 2 new MetaGurukul clients. This is how ArkMedis grows in 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How You Grow */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-12 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Mission success means your growth.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Financial Growth", desc: "Revenue increases. Your opportunities expand. Real upside." },
                { title: "Skill Mastery", desc: "Work with founders, leaders, experts. Learn at the highest level." },
                { title: "Career Momentum", desc: "Build your reputation. Own bigger outcomes. Move up." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded hover:shadow-lg hover:border-slate-400 transition-all">
                  <p className="text-sm font-semibold text-slate-900 mb-2">{item.title}</p>
                  <p className="text-sm font-light text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Your Role Matters */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-12 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Your role is mission-critical.
              </h2>
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                You own your outcomes. You drive your growth. You build your future here.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-l-4 border-slate-900 pl-6 bg-slate-50 rounded">
                <p className="text-lg font-semibold text-slate-900 mb-2">The mission is achieved one focused day at a time.</p>
                <p className="text-sm font-light text-slate-700">This is how today's work becomes tomorrow's results. Your consistency. Your ownership. Your impact.</p>
              </div>
            </div>

            <Link
              href="/signin"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-800 hover:shadow-lg transition-all group"
            >
              Start growing
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
                  <div className="bg-slate-50 p-3 rounded border border-slate-100 text-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-slate-400">2026 Goal</p>
                    <p className="text-2xl font-semibold text-slate-900 group-hover:text-white transition animate-count-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
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
                { principle: "Clarity before speed", outcome: "so you learn what matters." },
                { principle: "Ownership over excuses", outcome: "so you own your growth." },
                { principle: "Systems over shortcuts", outcome: "so your progress compounds." },
                { principle: "Long-term over short-term", outcome: "so your career lasts." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-4 border border-slate-100 rounded hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <p className="text-sm font-semibold text-slate-900 mb-2">{item.principle}</p>
                  <p className="text-xs font-light text-slate-600 group-hover:text-slate-700 transition">
                    {item.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Growth Pathways */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="mx-auto max-w-5xl px-6 py-20 space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Your Growth Pathways
              </h2>
              <p className="text-base font-light text-slate-700 max-w-2xl leading-relaxed">
                In 2026, you don't just help scale our clients—you scale yourself. Every project builds your skills, network, and leadership.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {[
                { title: "New Skills", description: "Learn systems, frameworks, and strategies used by top companies." },
                { title: "Leadership Development", description: "Own outcomes, mentor others, and grow into leadership roles." },
                { title: "Network Expansion", description: "Build relationships with founders, leaders, and industry experts." },
                { title: "Career Clarity", description: "See your growth path clearly and progress toward your goals." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-4 border border-slate-100 rounded hover:border-slate-400 bg-white hover:bg-slate-900 transition-all cursor-pointer"
                  style={{ animationDelay: `${0.7 + i * 0.05}s` }}
                >
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-white mb-2">{item.title}</p>
                  <p className="text-xs font-light text-slate-600 group-hover:text-slate-300 transition">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Find Inside ArkMedis OS */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/50 animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
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
                  style={{ animationDelay: `${0.8 + i * 0.05}s` }}
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
