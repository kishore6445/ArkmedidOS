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
            <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 left-10 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 animate-slide-up">
              <span className="inline-block w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600">2026 Mission</p>
            </div>

            <div className="space-y-8 max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-black leading-tight text-balance animate-slide-up" style={{animationDelay: '0.1s'}}>
                Build clarity.<br />Win <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift">together.</span>
              </h1>
              
              {/* 2026 Mission Goals */}
              <div className="grid grid-cols-2 gap-4 md:gap-8 py-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                  <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-2">Warrior Systems</p>
                  <p className="text-4xl md:text-5xl font-black text-blue-600 group-hover:scale-110 transition-transform">20</p>
                  <p className="text-xs md:text-sm text-foreground/70 font-semibold mt-3">Enterprise Clients</p>
                </div>
                <div className="group bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-400/30 rounded-2xl p-6 hover:border-pink-400/60 hover:shadow-xl hover:shadow-pink-500/20 transition-all">
                  <p className="text-sm uppercase tracking-widest font-bold text-pink-600 mb-2">Story Marketing</p>
                  <p className="text-4xl md:text-5xl font-black text-pink-600 group-hover:scale-110 transition-transform">21</p>
                  <p className="text-xs md:text-sm text-foreground/70 font-semibold mt-3">Growth Partners</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-medium animate-slide-up" style={{animationDelay: '0.3s'}}>
                Stop managing chaos. Start building clarity. ArkMedis OS aligns your team, accelerates execution, and turns vision into victory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link
                href="/signup"
                className="group relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300"
              >
                Launch your workspace
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-30 transition-opacity blur"></span>
              </Link>
              <Link
                href="/signin"
                className="px-8 py-4 text-lg font-bold text-foreground border-2 border-foreground/15 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
                See it in action
              </Link>
            </div>
          </div>
        </section>

        {/* ArkMedis Hub Visualization */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 relative">
          <div className="flex flex-col items-center justify-center min-h-[600px] relative">
            {/* Central Hub */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Animated connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))'}}>
                {/* Line to Warrior (top-left) */}
                <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6"/>
                {/* Line to Story Marketing (top-right) */}
                <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6"/>
                {/* Line to MetaGurukul (bottom) */}
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradient3)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6"/>
                
                <defs>
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="lineGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Central Hub Circle */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-cyan-500 p-1 shadow-2xl shadow-blue-500/50 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 via-pink-600 to-cyan-600 bg-clip-text">AO</span>
                  <span className="text-xs font-bold text-blue-600 tracking-wider">ARKMEDIS</span>
                </div>
              </div>
              <p className="text-sm font-bold text-center text-foreground/70 mt-4 max-w-xs">Three Brands. One Operating System. One Mission.</p>
            </div>

            {/* Three Brands in Hub Layout */}
            <div className="relative w-full h-full mt-12 lg:mt-0">
              {/* Warrior Systems - Top Left */}
              <div className="absolute top-0 left-0 lg:top-12 lg:left-0">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-400/50 rounded-2xl p-6 w-56 hover:border-blue-400/90 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🛡️</span>
                      <div>
                        <h3 className="text-lg font-black text-blue-700">Warrior</h3>
                        <p className="text-xs font-bold text-blue-600 uppercase">Systems</p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/70 font-medium mb-4">Execution frameworks that turn vision into action.</p>
                    <div className="text-center py-3 bg-blue-500/20 rounded-lg">
                      <p className="text-3xl font-black text-blue-600">20</p>
                      <p className="text-xs font-bold text-blue-600 mt-1">Target Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Marketing - Top Right */}
              <div className="absolute top-0 right-0 lg:top-12 lg:right-0">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-2 border-pink-400/50 rounded-2xl p-6 w-56 hover:border-pink-400/90 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-500 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">📖</span>
                      <div>
                        <h3 className="text-lg font-black text-pink-700">Story</h3>
                        <p className="text-xs font-bold text-pink-600 uppercase">Marketing</p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/70 font-medium mb-4">Narratives that build trust and connections.</p>
                    <div className="text-center py-3 bg-pink-500/20 rounded-lg">
                      <p className="text-3xl font-black text-pink-600">21</p>
                      <p className="text-xs font-bold text-pink-600 mt-1">Target Partners</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MetaGurukul - Bottom Center */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:bottom-12 lg:left-1/2">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-2 border-cyan-400/50 rounded-2xl p-6 w-56 hover:border-cyan-400/90 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🌳</span>
                      <div>
                        <h3 className="text-lg font-black text-cyan-700">Meta</h3>
                        <p className="text-xs font-bold text-cyan-600 uppercase">Gurukul</p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/70 font-medium mb-4">Leaders who think deeply and act decisively.</p>
                    <div className="text-center py-3 bg-cyan-500/20 rounded-lg">
                      <p className="text-2xl font-black text-cyan-600">∞</p>
                      <p className="text-xs font-bold text-cyan-600 mt-1">Growth Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-6xl px-6 py-20 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-16 relative z-10">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-blue-600 mb-4">ArkMedis Three</p>
              <h2 className="text-5xl md:text-6xl font-black text-balance leading-tight">Three Brands.<br />One <span className="bg-gradient-to-r from-blue-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">Victory.</span></h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Warrior Systems */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-blue-500/15 to-blue-600/5 border-2 border-blue-400/40 rounded-3xl p-8 h-full hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group cursor-pointer overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">🛡️</div>
                    <h3 className="text-3xl font-black text-blue-700 mb-2">Warrior Systems</h3>
                    <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wide">Execution + Leadership</p>
                    <p className="text-foreground/80 mb-6 text-sm leading-relaxed font-medium">Turn strategy into unstoppable action with crystal-clear execution frameworks built for teams that win.</p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-4 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Marketing */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-500/15 to-pink-600/5 border-2 border-pink-400/40 rounded-3xl p-8 h-full hover:border-pink-400/80 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 group cursor-pointer overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">📖</div>
                    <h3 className="text-3xl font-black text-pink-700 mb-2">Story Marketing</h3>
                    <p className="text-sm font-bold text-pink-600 mb-4 uppercase tracking-wide">Brand + Clarity</p>
                    <p className="text-foreground/80 mb-6 text-sm leading-relaxed font-medium">Craft narratives that resonate, build trust, and create lasting connections with your market.</p>
                    <div className="flex items-center gap-2 text-pink-600 font-bold text-sm group-hover:gap-4 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MetaGurukul */}
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border-2 border-cyan-400/40 rounded-3xl p-8 h-full hover:border-cyan-400/80 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group cursor-pointer overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">🌳</div>
                    <h3 className="text-3xl font-black text-cyan-700 mb-2">MetaGurukul</h3>
                    <p className="text-sm font-bold text-cyan-600 mb-4 uppercase tracking-wide">Learning + Growth</p>
                    <p className="text-foreground/80 mb-6 text-sm leading-relaxed font-medium">Develop leaders who think deeply, act decisively, and inspire transformation in others.</p>
                    <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm group-hover:gap-4 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-foreground/70 text-sm font-semibold">Different missions. One company. One execution standard.</p>
            </div>
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
