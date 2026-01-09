import { Link } from "react-router-dom";

const LandingPage = () => {
  const bullets = [
    {
      k: "Encrypted by default",
      c: "Your data never leaves a secure channel.",
    },
    { k: "Track every step", c: "Applications and approvals in real‑time." },
    { k: "Picks that fit", c: "Plans curated to what you actually need." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050910] via-[#0b1327] to-[#0a1f33] text-slate-50">
      {/* Minimal background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid vignette" />
      <div className="pointer-events-none absolute -top-24 -left-16 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* Hero */}
      <header className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-300/90 backdrop-blur">
            Insurance, clarified
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Coverage without the clutter
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Find a plan, apply in minutes, and watch approvals move— all in one
            calm, focused space.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              to="/dashboard"
              className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/30"
            >
              Explore plans
            </Link>
            <Link
              to="/register"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-sky-400/70 hover:text-sky-100"
            >
              Create account
            </Link>
          </div>
        </div>

        {/* Minimal features */}
        <ul className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
          {bullets.map((b) => (
            <li
              key={b.k}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/95 backdrop-blur transition-colors duration-300 hover:border-white/20"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <p className="font-semibold text-white">{b.k}</p>
                  <p className="text-slate-300">{b.c}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </header>

      {/* Slim CTA */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-slate-300 sm:text-left">
              Get started in under a minute. No paperwork.
            </p>
            <div className="flex gap-3 text-sm font-semibold">
              <Link
                to="/register"
                className="rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-2.5 text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-sky-500/30"
              >
                Create account
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white backdrop-blur transition hover:border-white/25"
              >
                I already have one
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
