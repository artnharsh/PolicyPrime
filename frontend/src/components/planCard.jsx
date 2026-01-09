import { Link } from "react-router-dom";

const PlanCard = ({ name, description }) => {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40 p-6 shadow-2xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:shadow-cyan-400/20 hover:border-cyan-400/40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_25%)]"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
            Coverage
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {description}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M12 3 5 6v6c0 5 4.2 7.4 7 9 2.8-1.6 7-4 7-9V6z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Instant approval</span>
        </div>
        <Link
          to={`/apply?plan=${encodeURIComponent(name)}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/40"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
