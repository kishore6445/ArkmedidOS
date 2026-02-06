import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation Bar */}
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-white font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide font-semibold text-blue-900">ArkMedis OS</p>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <p className="hidden sm:block text-xs text-slate-500 font-medium">Secure • Role-based access • Audit logs</p>
            <Link
              href="/signin"
              className="px-5 py-2 text-sm font-semibold text-blue-900 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-sm font-semibold text-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition"
            >
              Create workspace
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero - 2026 Mission */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-900 mb-16">2026 Mission</p>
            
            <div className="flex flex-col md:flex-row gap-24 md:gap-48">
              <div className="space-y-4">
                <p className="text-7xl font-bold text-blue-900">30</p>
                <p className="text-sm font-medium text-slate-600">Warrior Systems clients</p>
              </div>
              <div className="space-y-4">
                <p className="text-7xl font-bold text-blue-900">15</p>
                <p className="text-sm font-medium text-slate-600">Story Marketing clients</p>
              </div>
            </div>

            <p className="mt-16 text-slate-600 font-medium max-w-lg">Focus. Alignment. One shared finish line.</p>
          </div>
        </section>

        {/* Company Structure */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">ArkMedis</h2>
            <p className="text-sm text-slate-600 font-medium mb-8">Parent Company</p>
            <div className="h-px bg-slate-200 mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-slate-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Warrior Systems</h3>
                <p className="text-sm text-slate-600">Execution systems for founders and leadership teams</p>
              </div>
              <div className="border border-slate-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Story Marketing</h3>
                <p className="text-sm text-slate-600">Clarity-led marketing systems that build trust</p>
              </div>
              <div className="border border-slate-200 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-2">MetaGurukul</h3>
                <p className="text-sm text-slate-600">Depth-driven learning ecosystem for lifelong learning</p>
              </div>
            </div>

            <p className="mt-12 text-sm text-slate-600 font-medium">Different missions. One company. One execution standard.</p>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Built to support you.</h2>
              <h2 className="text-3xl font-bold text-slate-900">Not to monitor you.</h2>
              <p className="text-sm text-slate-600 font-medium mt-8">Clear priorities • Visible progress • Less confusion</p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <ul className="space-y-6 text-slate-900">
                <li className="flex gap-4">
                  <span className="text-base font-bold">–</span>
                  <span className="text-base font-medium">Clarity before speed</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-base font-bold">–</span>
                  <span className="text-base font-medium">Ownership over excuses</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-base font-bold">–</span>
                  <span className="text-base font-medium">Systems over shortcuts</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-base font-bold">–</span>
                  <span className="text-base font-medium">Long-term over short-term wins</span>
                </li>
              </ul>
              <p className="mt-12 text-sm text-slate-600 font-medium">These principles protect focus and help teams succeed.</p>
            </div>
          </div>
        </section>

        {/* Message to the Team */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl space-y-8">
              <p className="text-lg leading-relaxed text-slate-900 font-medium">
                You weren't brought here to just complete tasks.
              </p>
              <p className="text-lg leading-relaxed text-slate-900 font-medium">
                You're here to take ownership,<br/>build something meaningful,<br/>and grow in clarity, skill, and confidence.
              </p>
              <p className="text-sm text-slate-600 font-medium">Your work matters. Your consistency matters. Your integrity matters.</p>
            </div>
          </div>
        </section>

        {/* Closing Line */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">ArkMedis OS turns today's work into tomorrow's results.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-slate-600 font-medium">© 2026 ArkMedis</p>
          <div className="flex items-center gap-6 text-sm text-slate-600 font-medium">
            <Link href="#privacy" className="hover:text-slate-900">Privacy</Link>
            <span>•</span>
            <Link href="#security" className="hover:text-slate-900">Security</Link>
          </div>
          <Link
            href="/signin"
            className="text-sm font-semibold text-blue-900 hover:text-blue-800"
          >
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  )
}
