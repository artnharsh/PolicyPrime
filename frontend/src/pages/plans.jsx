import { useState, useEffect } from "react";
import axios from "axios";

const Plans = () => {
  const [availablePlans, setAvailablePlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/plans", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // protected route
          },
        });
        setAvailablePlans(response.data); // expects response.data to be an array of plans
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError("Failed to load plans.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleApply = async (planId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/plans/apply/${planId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(response.data.message); // show success message
    } catch (err) {
      console.error("Failed to apply for plan:", err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  if (loading) return <p className="text-white">Loading plans...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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
            key={plan._id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-sky-500/30 transition group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{plan.type} Plan</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-medium">
                  {plan.type}
                </div>
              </div>

              <p className="text-slate-300 text-sm">{plan.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Created At</span>
                  <span className="text-white font-semibold">
                    {new Date(plan.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Price</span>
                  <span className="text-2xl font-bold text-sky-400">${plan.price}</span>
                </div>
              </div>

              <button
                onClick={() => handleApply(plan._id)}
                className="w-full rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[-2px] hover:shadow-sky-500/30"
              >
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
