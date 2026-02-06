import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-semibold text-white">
            AO
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600">ArkMedis</p>
            <p className="text-lg font-semibold text-slate-900">Operating System</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
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
            Sign up
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero Section - 2026 Mission */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-600">
              2026 Mission
            </div>
            <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
              Transform businesses through intelligent operating systems.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              We are building the future of organizational execution. Three brands, one vision: to empower teams to achieve extraordinary results.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/signup"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get started
              </Link>
              <Link
                href="/signin"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Sign in
              </Link>
            </div>
            {/* Key Metrics */}
            <div className="flex items-center gap-8 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-slate-900">30+</p>
                <p className="text-sm text-slate-600">Enterprise Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-slate-900">15</p>
                <p className="text-sm text-slate-600">Years of Innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Brands Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
            <p className="mt-2 text-slate-600">Three complementary brands working together</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Warrior Systems",
                description: "Building enterprise execution platforms that align leadership, execution, and accountability.",
                icon: "⚔️",
              },
              {
                name: "Story Marketing",
                description: "Crafting compelling brand narratives that resonate with audiences and drive meaningful engagement.",
                icon: "📖",
              },
              {
                name: "MetaGurukul",
                description: "Empowering next-generation leaders through transformative education and mentorship programs.",
                icon: "🎓",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{brand.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{brand.name}</h3>
                <p className="mt-4 text-slate-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Builder Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Teams Trust Us</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">Proven track record</p>
                <p className="text-slate-600">Trusted by leading organizations worldwide for delivering measurable results.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">Customer-centric approach</p>
                <p className="text-slate-600">We listen, adapt, and evolve based on real feedback from our clients.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">Innovation first</p>
                <p className="text-slate-600">Continuous improvement and cutting-edge technology at the core of everything we do.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">Transparent partnership</p>
                <p className="text-slate-600">Open communication and shared success metrics ensure alignment on every project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Values Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            <p className="mt-2 text-slate-600">Four core values that guide everything we do</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Vision", description: "Clear, inspiring direction for the future" },
              { title: "Execution", description: "Disciplined implementation and accountability" },
              { title: "Impact", description: "Measurable results that matter" },
              { title: "Growth", description: "Continuous learning and evolution" },
            ].map((value) => (
              <div key={value.title} className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Message Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-900 p-12 text-white">
            <h2 className="text-3xl font-bold">Join Us in 2026</h2>
            <p className="max-w-2xl text-lg text-slate-300">
              We are looking for teams and organizations ready to transform. Whether you are scaling your business, redefining your brand, or investing in leadership, ArkMedis is your partner in success.
            </p>
            <p className="text-sm text-slate-400">Together, we are building the future. Let's make 2026 extraordinary.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/signup"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Start your journey
              </Link>
              <Link
                href="/signin"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-300 hover:bg-white/5"
              >
                Explore more
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center">
          <p>© 2026 ArkMedis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="transition hover:text-slate-900">
              Sign in
            </Link>
            <Link href="/signup" className="transition hover:text-slate-900">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
