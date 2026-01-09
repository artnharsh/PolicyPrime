import { useState } from "react";
import Plans from "./plans";
import MyPlans from "./myPlans";
import Status from "./status";
import Profile from "./profile";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050910] via-[#0b1224] to-[#0a1a35] text-slate-100">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-sky-500/10 blur-3xl top-20 left-10" />
        <div className="absolute w-96 h-96 bg-indigo-500/10 blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
                <p className="text-slate-400 text-sm">
                  Welcome back! Manage your policies and applications
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("profile")}
                className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 transition"
              >
                Profile
              </button>
              <button className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 transition">
                Logout
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-3 border-b border-white/10 pb-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border-b-2 border-sky-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("plans")}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "plans"
                  ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border-b-2 border-sky-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Available Plans
            </button>
            <button
              onClick={() => setActiveTab("myplans")}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "myplans"
                  ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border-b-2 border-sky-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              My Policies
            </button>
            <button
              onClick={() => setActiveTab("status")}
              className={`px-6 py-3 rounded-t-xl font-medium transition-all ${
                activeTab === "status"
                  ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border-b-2 border-sky-500"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Application Status
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stats Cards */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Active Policies</p>
                    <p className="text-2xl font-bold text-white">3</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Pending</p>
                    <p className="text-2xl font-bold text-white">2</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-sky-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Total Coverage</p>
                    <p className="text-2xl font-bold text-white">$400K</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveTab("plans")}
                  className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 text-left hover:bg-sky-500/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-sky-500/20 flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        className="w-5 h-5 text-sky-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Browse Plans</p>
                      <p className="text-sm text-slate-400">
                        Find the perfect policy
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("status")}
                  className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4 text-left hover:bg-indigo-500/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        className="w-5 h-5 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Check Status</p>
                      <p className="text-sm text-slate-400">
                        View application progress
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    action: "Applied for Health Plus Plan",
                    date: "2 days ago",
                    status: "pending",
                  },
                  {
                    action: "Life Shield Plan approved",
                    date: "1 week ago",
                    status: "approved",
                  },
                  {
                    action: "Payment processed",
                    date: "2 weeks ago",
                    status: "completed",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          activity.status === "approved" ||
                          activity.status === "completed"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      />
                      <span className="text-slate-200">{activity.action}</span>
                    </div>
                    <span className="text-sm text-slate-400">
                      {activity.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Available Plans Tab */}
        {activeTab === "plans" && <Plans />}

        {/* My Policies Tab */}
        {activeTab === "myplans" && <MyPlans />}

        {/* Application Status Tab */}
        {activeTab === "status" && <Status />}

        {/* Profile Tab */}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default Dashboard;
