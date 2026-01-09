import { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [userPlanStatuses, setUserPlanStatuses] = useState([]);
  const [newPlan, setNewPlan] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });

  // Fetch all user plan statuses
  const fetchUserPlanStatuses = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/user-plan-statuses",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      const data = await response.json();
      setUserPlanStatuses(data);
    } catch (error) {
      console.error("Error fetching user plan statuses:", error);
    }
  };

  // Approve a user plan
  const approveUserPlan = async (userPlanStatusId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/approve-user-plan/${userPlanStatusId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Plan approved successfully!");
        fetchUserPlanStatuses();
      }
    } catch (error) {
      console.error("Error approving plan:", error);
    }
  };

  // Create a new plan
  const createPlan = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/plans", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlan),
      });
      if (response.ok) {
        alert("Plan created successfully!");
        setNewPlan({ name: "", description: "", price: "", duration: "" });
      }
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050910] via-[#0b1224] to-[#0a1a35] text-slate-100">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-amber-500/10 blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 bg-orange-500/10 blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm">
                Manage plans, requests and user applications
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-3 border-b border-white/10 pb-2">
            <button
              onClick={() => {
                setActiveTab("requests");
                fetchUserPlanStatuses();
              }}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "requests"
                  ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-b-2 border-amber-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              User Requests
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "create"
                  ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-b-2 border-amber-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Create Plan
            </button>
          </div>
        </div>

        {/* User Plan Requests Tab */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">
                User Plan Requests
              </h2>
              <button
                onClick={fetchUserPlanStatuses}
                className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition"
              >
                Refresh
              </button>
            </div>

            <div className="grid gap-4">
              {userPlanStatuses.length === 0 ? (
                <div className="text-center py-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <p className="text-slate-400">
                    No pending requests found. Click Refresh to load.
                  </p>
                </div>
              ) : (
                userPlanStatuses.map((status) => (
                  <div
                    key={status._id}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-amber-500/30 transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">
                            {status.userId?.name || "User"}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              status.status === "pending"
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                : status.status === "approved"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-red-500/20 text-red-300 border border-red-500/30"
                            }`}
                          >
                            {status.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          <span className="font-medium text-slate-300">
                            Email:
                          </span>{" "}
                          {status.userId?.email}
                        </p>
                        <p className="text-slate-400 text-sm">
                          <span className="font-medium text-slate-300">
                            Plan:
                          </span>{" "}
                          {status.planId?.name || "N/A"}
                        </p>
                        <p className="text-slate-400 text-sm">
                          <span className="font-medium text-slate-300">
                            Applied:
                          </span>{" "}
                          {new Date(status.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      {status.status === "pending" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveUserPlan(status._id)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium hover:translate-y-[-2px] transition shadow-lg shadow-emerald-500/20"
                          >
                            Approve
                          </button>
                          <button className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 transition">
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Create Plan Tab */}
        {activeTab === "create" && (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Create New Plan
            </h2>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <form onSubmit={createPlan} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">
                    Plan Name
                  </label>
                  <input
                    type="text"
                    value={newPlan.name}
                    onChange={(e) =>
                      setNewPlan({ ...newPlan, name: e.target.value })
                    }
                    placeholder="e.g., Premium Plan"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/60 outline-none transition"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-200">
                    Description
                  </label>
                  <textarea
                    value={newPlan.description}
                    onChange={(e) =>
                      setNewPlan({ ...newPlan, description: e.target.value })
                    }
                    placeholder="Describe the plan features and benefits"
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/60 outline-none transition resize-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-200">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      value={newPlan.price}
                      onChange={(e) =>
                        setNewPlan({ ...newPlan, price: e.target.value })
                      }
                      placeholder="99"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none transition"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-200">
                      Duration (months)
                    </label>
                    <input
                      type="number"
                      value={newPlan.duration}
                      onChange={(e) =>
                        setNewPlan({ ...newPlan, duration: e.target.value })
                      }
                      placeholder="12"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 px-4 py-3 font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:translate-y-[-2px] hover:shadow-amber-500/30"
                >
                  Create Plan
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
