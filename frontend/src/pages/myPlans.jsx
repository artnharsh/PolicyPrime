import { useState, useEffect } from "react";
import axios from "axios";

const MyPlans = () => {
  const [userPlans, setUserPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/getmyplans",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // Map the populated plan data
        const plansWithDetails = response.data.map((userPlan) => ({
          _id: userPlan._id,
          status: userPlan.status,
          name: userPlan.plan_id?.name || "Unnamed Plan",
          description: userPlan.plan_id?.description || "-",
          price: userPlan.plan_id?.price || 0,
          type: userPlan.plan_id?.type || "Basic",
          createdAt: userPlan.plan_id?.createdAt || null,
        }));

        setUserPlans(plansWithDetails);
      } catch (err) {
        console.error("Error fetching user plans:", err);
        setError("Failed to load your plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlans();
  }, []);

  if (loading) return <p className="text-white">Loading your plans...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white mb-4">My Plans</h2>

      <div className="grid gap-4">
        {userPlans.map((plan) => (
          <div
            key={plan._id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-sky-500/30 transition"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="text-slate-300 text-sm">{plan.description}</p>
                <div className="flex gap-4 text-sm mt-2">
                  <span className="text-slate-400">Type:</span>
                  <span className="text-white">{plan.type}</span>
                  <span className="text-slate-400">Price:</span>
                  <span className="text-white">${plan.price}</span>
                  <span className="text-slate-400">Status:</span>
                  <span className="text-white capitalize">{plan.status}</span>
                </div>
              </div>
              <div>
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
            </div>
            <p className="text-slate-400 text-xs mt-2">
              Created: {plan.createdAt ? new Date(plan.createdAt).toLocaleDateString() : "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlans;
