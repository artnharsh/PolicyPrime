const Status = () => {
  const applications = [
    {
      id: 1,
      planName: "Premium Health Plan",
      appliedDate: "2024-01-10",
      status: "under review",
      progress: 60,
    },
    {
      id: 2,
      planName: "Family Care Plan",
      appliedDate: "2024-01-05",
      status: "approved",
      progress: 100,
    },
    {
      id: 3,
      planName: "Senior Wellness Plan",
      appliedDate: "2024-01-08",
      status: "pending documents",
      progress: 30,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Application Status
        </h2>
        <button className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition">
          Refresh
        </button>
      </div>

      <div className="grid gap-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {application.planName}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Applied on{" "}
                    {new Date(application.appliedDate).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    application.status === "approved"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : application.status === "under review"
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  {application.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-white font-semibold">
                    {application.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      application.progress === 100
                        ? "bg-gradient-to-r from-emerald-500 to-green-600"
                        : "bg-gradient-to-r from-sky-500 to-indigo-600"
                    }`}
                    style={{ width: `${application.progress}%` }}
                  />
                </div>
              </div>

              {application.status !== "approved" && (
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition text-sm">
                    View Details
                  </button>
                  {application.status === "pending documents" && (
                    <button className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 transition text-sm">
                      Upload Documents
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
