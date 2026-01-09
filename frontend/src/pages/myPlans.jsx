import { useState } from "react";

const MyPlans = () => {
  const [userPlans] = useState([
    {
      id: 1,
      name: "Health Plus Plan",
      status: "active",
      coverage: "$50,000",
      startDate: "2024-01-15",
      endDate: "2025-01-15",
    },
    {
      id: 2,
      name: "Life Shield Plan",
      status: "pending",
      coverage: "$100,000",
      startDate: "2024-02-01",
      endDate: "2025-02-01",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">My Policies</h2>
        <button className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition">
          View All
        </button>
      </div>

      <div className="grid gap-4">
        {userPlans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-sky-500/30 transition"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      plan.status === "active"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Coverage</p>
                    <p className="text-white font-semibold">{plan.coverage}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Start Date</p>
                    <p className="text-white font-semibold">
                      {new Date(plan.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">End Date</p>
                    <p className="text-white font-semibold">
                      {new Date(plan.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Status</p>
                    <p className="text-white font-semibold capitalize">
                      {plan.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition">
                  View Details
                </button>
                {plan.status === "active" && (
                  <button className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 transition">
                    Renew
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlans;
