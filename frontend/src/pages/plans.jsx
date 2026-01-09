import { useState } from "react";

const Plans = () => {
  const [availablePlans] = useState([
    {
      id: 101,
      name: "Premium Health Plan",
      description: "Comprehensive health coverage with dental and vision",
      price: "$299",
      duration: "12 months",
      coverage: "$100,000",
    },
    {
      id: 102,
      name: "Family Care Plan",
      description: "Complete family health and wellness protection",
      price: "$499",
      duration: "12 months",
      coverage: "$250,000",
    },
    {
      id: 103,
      name: "Senior Wellness Plan",
      description: "Specialized care for seniors with extended benefits",
      price: "$399",
      duration: "12 months",
      coverage: "$150,000",
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Available Plans</h2>
        <button className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition">
          Filter Plans
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availablePlans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-sky-500/30 transition group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{plan.duration}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium">
                  Popular
                </div>
              </div>

              <p className="text-slate-300 text-sm">{plan.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Coverage</span>
                  <span className="text-white font-semibold">
                    {plan.coverage}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Price</span>
                  <span className="text-2xl font-bold text-sky-400">
                    {plan.price}
                  </span>
                </div>
              </div>

              <button className="w-full rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[-2px] hover:shadow-sky-500/30">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
