import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 relative z-50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground shadow-lg group-hover:shadow-xl transition-shadow">
            ◆
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] font-semibold text-primary">ArkMedis</p>
            <p className="text-sm font-bold text-foreground">Operating System</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <div className="hidden text-xs text-muted-foreground sm:flex gap-3 font-medium">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted hover:bg-border transition">Secure</span>
            <span>•</span>
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted hover:bg-border transition">Fast</span>
            <span>•</span>
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted hover:bg-border transition">Focused</span>
          </div>
          <Link
            href="/signin"
            className="rounded-full border-2 border-foreground/10 px-5 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary/5"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
          >
            Start free
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-slide-up">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">2026 Mission</p>
            </div>

            <div className="space-y-6 max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-black leading-tight text-balance animate-slide-up" style={{animationDelay: '0.1s'}}>
                Make work <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">meaningful.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
                Stop managing chaos. Start building clarity. ArkMedis OS aligns your team, accelerates execution, and turns vision into victory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Link
                href="/signup"
                className="group relative px-8 py-4 text-lg font-bold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-110 transition-all duration-300"
              >
                Launch your workspace
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity blur"></span>
              </Link>
              <Link
                href="/signin"
                className="px-8 py-4 text-lg font-bold text-foreground border-2 border-foreground/10 rounded-full hover:border-primary hover:bg-primary/5 transition"
              >
                See it in action
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
              {[
                { value: "30+", label: "Enterprise Clients", color: "from-primary" },
                { value: "15", label: "Years of Innovation", color: "from-accent" },
                { value: "87%", label: "On-track Commitments", color: "from-success" },
                { value: "3x", label: "Faster Execution", color: "from-warning" }
              ].map((stat, i) => (
                <div key={i} className={`bg-gradient-to-br ${stat.color} to-transparent p-6 rounded-xl border border-foreground/10 backdrop-blur-sm hover:border-foreground/20 transition group cursor-pointer`}>
                  <p className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-xs md:text-sm text-foreground/70 font-semibold mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Brands Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 relative">
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4">ArkMedis Three</p>
              <h2 className="text-5xl md:text-6xl font-black text-balance">Three Brands.<br />One Mission.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Warrior Systems",
                  subtitle: "Execution systems for founders and leadership teams",
                  icon: "🛡️",
                  color: "from-primary",
                  description: "Turn strategy into action with crystal-clear execution frameworks"
                },
                {
                  name: "Story Marketing",
                  subtitle: "Clarity-led marketing systems that build trust",
                  icon: "📖",
                  color: "from-accent",
                  description: "Tell stories that resonate and build lasting brand connections"
                },
                {
                  name: "MetaGurukul",
                  subtitle: "Learning ecosystem focused on depth and discipline",
                  icon: "🌳",
                  color: "from-success",
                  description: "Develop leaders who think deeply and execute decisively"
                },
              ].map((brand, i) => (
                <div
                  key={brand.name}
                  className={`group relative bg-gradient-to-br ${brand.color} to-transparent p-8 rounded-2xl border border-foreground/10 backdrop-blur-sm hover:border-foreground/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">{brand.icon}</div>
                    <h3 className="text-2xl font-black text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">{brand.name}</h3>
                    <p className="text-sm text-foreground/60 font-semibold mt-2">{brand.subtitle}</p>
                    <p className="text-foreground/70 mt-4 text-sm leading-relaxed">{brand.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                      Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground/60 text-sm font-semibold pt-8 border-t border-foreground/10">
              Different missions. One company. One execution standard.
            </p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-primary/20 p-12 md:p-16 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-balance">Built to support you.<br />Not to monitor you.</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Clear Priorities", desc: "Everyone knows what matters most" },
                  { title: "Visible Progress", desc: "Real-time updates without micromanagement" },
                  { title: "Less Confusion", desc: "Single source of truth for all initiatives" },
                  { title: "More Impact", desc: "Focus energy on high-impact work" }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 p-4 rounded-xl hover:bg-white/50 transition">
                    <p className="font-bold text-lg text-foreground">{item.title}</p>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4">Our DNA</p>
              <h2 className="text-5xl md:text-6xl font-black">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Clarity before speed", icon: "🎯", desc: "Confused fast doesn't win. Clear and steady does." },
                { title: "Ownership over excuses", icon: "💪", desc: "We own results. No blame-shifting, no politics." },
                { title: "Systems over shortcuts", icon: "⚙️", desc: "Build sustainable processes that scale." },
                { title: "Long-term over hype", icon: "🏔️", desc: "We're building for years, not quarters." }
              ].map((value, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Motivation Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-12 md:p-20 text-primary-foreground space-y-8 shadow-2xl">
              <div className="space-y-6">
                <p className="text-lg md:text-2xl font-bold opacity-90">To everyone on the ArkMedis journey:</p>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  You weren't brought here to follow orders.
                </h2>
                <div className="space-y-4 text-lg leading-relaxed opacity-95">
                  <p>You're here to take ownership. To think deeply. To solve problems that matter.</p>
                  <p>You're here to build something that changes how teams execute. To create clarity in chaos. To turn ambitious visions into tangible reality.</p>
                  <p className="font-bold text-xl">Your integrity matters. Your consistency matters. Your growth matters.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
                {[
                  { emoji: "🚀", text: "Move with urgency" },
                  { emoji: "🧠", text: "Think with clarity" },
                  { emoji: "📈", text: "Scale with intention" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <span className="text-4xl">{item.emoji}</span>
                    <p className="font-bold text-center">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="/signup"
                  className="inline-block px-8 py-4 bg-primary-foreground text-primary font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
                >
                  Join the movement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Line */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-center space-y-4">
            <p className="text-5xl md:text-6xl font-black text-balance text-foreground">
              ArkMedis OS turns today's work into tomorrow's <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">results.</span>
            </p>
            <p className="text-lg text-foreground/60 font-medium">2026 is waiting. Are you ready?</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-gradient-to-b from-background to-muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 text-sm text-foreground/70 sm:flex-row">
          <p className="font-semibold">© 2026 ArkMedis. Building the future of execution.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="#privacy" className="transition hover:text-foreground">
              Privacy
            </Link>
            <Link href="#security" className="transition hover:text-foreground">
              Security
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="rounded-full border-2 border-foreground/10 px-4 py-2 text-xs font-bold transition hover:border-primary hover:text-primary"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30"
            >
              Start free
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
