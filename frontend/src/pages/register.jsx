import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const highlights = [
    "Instant plan recommendations",
    "Real-time approval tracking",
    "Encrypted profile storage",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile,
        }
      );

      console.log("REGISTER SUCCESS →", response.data);
      setSuccess("Account created successfully! Redirecting to login...");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Registration failed";
      setError(errorMessage);
      console.error("REGISTER FAIL →", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#050910] via-[#0c1327] to-[#0b1f3f] text-slate-100 flex items-center justify-center px-6 py-14"
      data-mode="register"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-sky-500/18 blur-3xl -top-16 -left-10" />
        <div className="absolute w-80 h-80 bg-indigo-500/15 blur-3xl bottom-0 right-4" />
      </div>

      <div className="auth-stage w-full max-w-6xl relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="auth-panel auth-copy space-y-6 lg:order-2">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200/80 border border-white/10 backdrop-blur">
            Start your coverage
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
            Create your account and keep every policy in one secure place
          </h1>
          <p className="text-base text-slate-300 max-w-2xl">
            Build your profile, compare plans, and apply without paperwork. We
            protect your data with end-to-end encryption.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100/90 backdrop-blur"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-panel auth-form relative lg:order-1">
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/45 via-sky-500/30 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 p-8 sm:p-10 space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                Register
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Create your account
              </h2>
              <p className="text-sm text-slate-300">
                Takes less than a minute.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{success}</span>
                </div>
              )}
              <label className="block space-y-2">
                <span className="text-sm text-slate-200/90">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Alex Carter"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 outline-none transition"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-slate-200/90">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/60 outline-none transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-sm text-slate-200/90">Phone</span>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="(555) 123-4567"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 outline-none transition"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm text-slate-200/90">
                    Preferred plan type
                  </span>
                  <select
                    name="planType"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/60 outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-900">
                      Select an option
                    </option>
                    <option value="health" className="bg-slate-900">
                      Health
                    </option>
                    <option value="life" className="bg-slate-900">
                      Life
                    </option>
                    <option value="auto" className="bg-slate-900">
                      Auto
                    </option>
                    <option value="home" className="bg-slate-900">
                      Home
                    </option>
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-2">
                  <span className="text-sm text-slate-200/90">Password</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 outline-none transition"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm text-slate-200/90">
                    Confirm password
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/60 outline-none transition"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-sky-500"
                />
                <span>
                  I agree to the{" "}
                  <a
                    className="text-sky-300 hover:text-sky-200 font-semibold"
                    href="#"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-sky-300 hover:text-sky-200 font-semibold"
                    href="#"
                  >
                    privacy policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[1px] hover:shadow-sky-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="text-center text-sm text-slate-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-sky-300 hover:text-sky-200"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
