import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white text-xs font-bold">
              A
            </div>
            <span className="text-sm font-medium text-slate-900">ArkMedis OS</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden sm:block text-xs text-slate-500 font-medium tracking-wide">
              Secure • Role-based access • Audit logs
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/signin"
                className="px-4 py-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition"
              >
                Create workspace
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Mission First */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-20 animate-fade-in">
            <div className="space-y-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Mission 2026
              </p>
              
              <h1 className="text-6xl md:text-7xl font-light leading-tight text-slate-900">
                This is the year we scale ArkMedis.
              </h1>
              
              <p className="text-lg font-light text-slate-600 max-w-2xl leading-relaxed">
                Onboard 50 clients across ArkMedis.
              </p>
            </div>

            {/* Mission Numbers with Count-Up Animation */}
            <div className="space-y-12">
              <p className="text-base font-semibold text-slate-900">
                Your role is mission-critical.
              </p>
              
              <div className="flex flex-col md:flex-row gap-20">
                <div className="space-y-2 animate-count-up" style={{ animationDelay: "0.1s" }}>
                  <p className="text-6xl font-light text-slate-900">30</p>
                  <p className="text-sm font-medium text-slate-600">Warrior Systems</p>
                </div>
                <div className="space-y-2 animate-count-up" style={{ animationDelay: "0.2s" }}>
                  <p className="text-6xl font-light text-slate-900">18</p>
                  <p className="text-sm font-medium text-slate-600">Story Marketing</p>
                </div>
                <div className="space-y-2 animate-count-up" style={{ animationDelay: "0.3s" }}>
                  <p className="text-6xl font-light text-slate-900">2</p>
                  <p className="text-sm font-medium text-slate-600">MetaGurukul</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Link
                href="/signin"
                className="inline-block px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition"
              >
                Sign in
              </Link>
              <p className="text-xs text-slate-500 font-medium">
                For ArkMedis team members and partners
              </p>
            </div>
          </div>
        </section>

        {/* Three Brands. One Company. */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-slate-900">
                Three Brands. One Company.
              </h2>
              <p className="text-base font-light text-slate-600 max-w-2xl leading-relaxed">
                ArkMedis is the operating company. We build and scale three focused brands—each with a clear mission—aligned by one execution standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Warrior Systems",
                  description: "Execution systems that help founders and leadership teams win with confidence."
                },
                {
                  title: "Story Marketing",
                  description: "Clarity-led marketing systems that build trust and drive growth."
                },
                {
                  title: "MetaGurukul",
                  description: "A high-impact learning ecosystem built on depth, discipline, and lifelong guidance."
                }
              ].map((brand, i) => (
                <div
                  key={brand.title}
                  className="p-8 border border-slate-100 rounded-sm hover:border-slate-200 transition bg-white"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                    {brand.title}
                  </h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 space-y-2 text-center">
              <p className="text-sm font-light text-slate-600">Different missions.</p>
              <p className="text-sm font-light text-slate-600">One company.</p>
              <p className="text-sm font-light text-slate-600">One way of working.</p>
            </div>
          </div>
        </section>

        {/* Why This System Exists */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-12">
            <h2 className="text-5xl font-light text-slate-900">
              Why This System Exists
            </h2>
            
            <div className="space-y-8">
              <p className="text-base font-semibold text-slate-900">
                ArkMedis Operating System exists to support you, never to monitor you.
              </p>
              
              <p className="text-base font-light text-slate-600 leading-relaxed max-w-2xl">
                It removes confusion, clarifies priorities, and makes progress visible—so your daily work moves the mission forward.
              </p>
              
              <div className="space-y-3 text-sm font-light text-slate-600">
                <p>If something matters, it is visible here.</p>
                <p>If it is visible, it is supported.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-12">
            <h2 className="text-5xl font-light text-slate-900">
              How We Work
            </h2>
            
            <div className="space-y-8">
              <div className="max-w-2xl space-y-5 text-base font-light text-slate-700">
                <p>Clarity before speed — so decisions are faster.</p>
                <p>Ownership over excuses — so work moves forward.</p>
                <p>Systems over shortcuts — so progress compounds.</p>
                <p>Long-term over short-term wins — so growth lasts.</p>
              </div>
              
              <p className="text-sm font-light text-slate-600 pt-4">
                These principles protect your focus and help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Find Inside ArkMedis OS */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-12">
            <h2 className="text-5xl font-light text-slate-900">
              What You'll Find Inside ArkMedis OS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Clear priorities and outcomes</p>
              </div>
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Daily Power Moves that drive momentum</p>
              </div>
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Visible owners and due dates</p>
              </div>
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Scorecards and weekly rhythms</p>
              </div>
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Less rework and fewer follow-ups</p>
              </div>
              <div className="text-sm font-light text-slate-700">
                <p className="font-medium text-slate-900">Recognition for real progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* Message to the Team */}
        <section className="border-b border-slate-100 animate-slide-in-up" style={{ animationDelay: "0.9s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 space-y-12">
            <h2 className="text-5xl font-light text-slate-900">
              Message to the Team
            </h2>
            
            <div className="max-w-2xl space-y-10 text-base font-light text-slate-700 leading-relaxed">
              <p>You are not here to just complete tasks.</p>
              
              <p>
                You are here to take ownership,<br />
                build something meaningful,<br />
                and grow in clarity, skill, and confidence.
              </p>
              
              <div className="space-y-3 text-sm text-slate-600">
                <p>Your work matters.</p>
                <p>Your consistency matters.</p>
                <p>Your integrity matters.</p>
              </div>
              
              <p className="font-semibold text-slate-900 text-base pt-6">
                ArkMedis grows because people like you execute with ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="animate-slide-in-up" style={{ animationDelay: "1s" }}>
          <div className="mx-auto max-w-5xl px-6 py-32 text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 text-balance">
              The mission is achieved one focused day at a time.
            </h2>
            
            <p className="text-base font-light text-slate-600 leading-relaxed">
              This is how today's work becomes tomorrow's results.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>© 2026 ArkMedis</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-slate-900 transition">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#security" className="hover:text-slate-900 transition">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
