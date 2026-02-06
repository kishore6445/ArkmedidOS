import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation Bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-semibold text-white">
            AO
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-600">ArkMedis</p>
            <p className="text-sm font-semibold text-slate-900">OS</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <div className="hidden text-xs text-slate-500 sm:flex gap-2">
            <span className="flex items-center gap-1">Secure</span>
            <span>•</span>
            <span className="flex items-center gap-1">Role-based access</span>
            <span>•</span>
            <span className="flex items-center gap-1">Audit logs</span>
          </div>
          <Link
            href="/signin"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Create workspace
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section - 2026 Mission */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-8">2026 Mission</p>
              <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <div className="flex flex-col gap-4">
                  <p className="text-6xl font-bold text-slate-900">30</p>
                  <p className="text-sm text-slate-600">Warrior Systems clients</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-6xl font-bold text-slate-900">15</p>
                  <p className="text-sm text-slate-600">Story Marketing clients</p>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl">
              Focus. Alignment. One shared finish line.
            </p>
          </div>
        </section>

        {/* Who We Are - Three Brands */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 border-t border-slate-200">
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">ArkMedis</p>
              <h2 className="text-3xl font-bold text-slate-900">Three Brands. One Company.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Warrior Systems",
                  subtitle: "Execution systems for founders and leadership teams",
                  icon: "🛡️",
                },
                {
                  name: "Story Marketing",
                  subtitle: "Clarity-led marketing systems that build trust",
                  icon: "📚",
                },
                {
                  name: "MetaGurukul",
                  subtitle: "Learning ecosystem focused on depth and discipline",
                  icon: "🌳",
                },
              ].map((brand) => (
                <div key={brand.name} className="space-y-4">
                  <div className="text-5xl">{brand.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900">{brand.name}</h3>
                  <p className="text-sm text-slate-600">{brand.subtitle}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 pt-4 border-t border-slate-200">
              Different missions. One company. One execution standard.
            </p>
          </div>
        </section>

        {/* Why This System Exists - Trust Builder */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Built to support you. Not to monitor you.</h2>
            <p className="text-slate-600">
              Clear priorities • Visible progress • Less confusion
            </p>
          </div>
        </section>

        {/* How We Work - Values Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 border-t border-slate-200">
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { title: "Clarity before speed", icon: "🎯" },
                { title: "Ownership over excuses", icon: "💪" },
                { title: "Systems over shortcuts", icon: "⚙️" },
                { title: "Long-term over short-term wins", icon: "🏔️" },
              ].map((value) => (
                <div key={value.title} className="space-y-3">
                  <div className="text-3xl">{value.icon}</div>
                  <p className="font-semibold text-slate-900">{value.title}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 pt-8 border-t border-slate-200">
              These principles protect focus and help teams succeed.
            </p>
          </div>
        </section>

        {/* Message to the Team - Emotional Anchor */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 border-t border-slate-200">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-900">
              You weren't brought here to just complete tasks.<br />
              You're here to take ownership, build something meaningful,<br />
              and grow in clarity, skill, and confidence.
            </p>
            <p className="text-sm text-slate-600">
              Your work matters. Your consistency matters. Your integrity matters.
            </p>
          </div>
        </section>
        {/* Closing Line */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20 border-t border-slate-200">
          <p className="text-center text-lg text-slate-900 font-medium">
            ArkMedis OS turns today's work into tomorrow's results.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 text-sm text-slate-600 sm:flex-row">
          <p>© 2026 ArkMedis. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="transition hover:text-slate-900">
              Privacy
            </Link>
            <Link href="#security" className="transition hover:text-slate-900">
              Security
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-900 transition hover:bg-white"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              Create workspace
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
