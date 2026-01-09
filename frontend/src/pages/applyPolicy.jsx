import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PLAN_OPTIONS = [
  {
    name: "Basic",
    description:
      "Essential coverage for everyday protection with the lowest premium.",
  },
  {
    name: "Standard",
    description:
      "Balanced coverage with added benefits for common risks and claims.",
  },
  {
    name: "Premium",
    description:
      "Comprehensive protection with priority support and highest limits.",
  },
];

const ApplyPolicy = () => {
  const [searchParams] = useSearchParams();

  const initialPlan = useMemo(
    () => searchParams.get("plan") || "",
    [searchParams]
  );

  const [formData, setFormData] = useState({
    fullName: "",
    planName: initialPlan,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredPlans = useMemo(() => {
    const term = formData.planName.trim().toLowerCase();
    if (!term) return PLAN_OPTIONS;
    return PLAN_OPTIONS.filter((plan) =>
      plan.name.toLowerCase().includes(term)
    );
  }, [formData.planName]);

  const selectedPlan = useMemo(() => {
    const term = formData.planName.trim().toLowerCase();
    if (!term) return null;
    return (
      PLAN_OPTIONS.find((plan) => plan.name.toLowerCase() === term) || null
    );
  }, [formData.planName]);

  const handlePlanSelect = (plan) => {
    setFormData((prev) => ({ ...prev, planName: plan }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4 py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.1),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_28%)]"
        aria-hidden
      />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
          aria-hidden
        />

        <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              Apply
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {selectedPlan ? selectedPlan.name : "Select a plan"}
            </h2>
            <p className="text-sm text-slate-300 min-h-[48px]">
              {selectedPlan
                ? selectedPlan.description
                : "Search and pick an existing plan or start typing to filter options."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300/90">
              {PLAN_OPTIONS.map((p) => (
                <span
                  key={p.name}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-medium text-slate-100/90">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </label>

              <label className="text-sm font-medium text-slate-100/90">
                Plan Name
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Search or choose a plan"
                    className="w-full rounded-xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
                    value={formData.planName}
                    autoComplete="off"
                    onFocus={() => setIsDropdownOpen(true)}
                    onChange={(e) => {
                      setFormData({ ...formData, planName: e.target.value });
                      setIsDropdownOpen(true);
                    }}
                    onBlur={() =>
                      setTimeout(() => setIsDropdownOpen(false), 120)
                    }
                  />

                  {isDropdownOpen && filteredPlans.length > 0 && (
                    <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-xl backdrop-blur z-10">
                      {filteredPlans.map((plan) => (
                        <button
                          key={plan.name}
                          type="button"
                          className="w-full px-4 py-2.5 text-left text-sm text-white transition hover:bg-slate-800"
                          onMouseDown={() => handlePlanSelect(plan.name)}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPolicy;
