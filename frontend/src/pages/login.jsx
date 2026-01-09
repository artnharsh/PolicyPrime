import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("LOGIN SUCCESS →", response.data);
      // Redirect or update UI on successful login

      setLoading(false);
      setError(null);
      setSuccess("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      console.error("LOGIN FAIL →", err.response?.data || err.message);
    }
  }


  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#050910] via-[#0b1224] to-[#0a1a35] text-slate-100 flex items-center justify-center px-6 py-14"
      data-mode="login"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-sky-500/20 blur-3xl -top-10 -left-6" />
        <div className="absolute w-72 h-72 bg-indigo-500/15 blur-3xl bottom-0 right-6" />
      </div>

      <div className="auth-stage w-full max-w-6xl relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="auth-panel auth-copy space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200/80 border border-white/10 backdrop-blur">
            Secure access
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
            Log in to manage your policies with confidence
          </h1>
          <p className="text-base text-slate-300 max-w-2xl">
            Access your dashboard, track active plans, and stay on top of
            approvals without leaving this page. We keep your data encrypted and
            private.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              2FA ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Instant status updates
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Encrypted sessions
            </span>
          </div>
        </div>

        <div className="auth-panel auth-form relative">
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-500/30 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 p-8 sm:p-10 space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                Welcome back
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Sign in to continue
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block space-y-2">
                <span className="text-sm text-slate-200/90">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/60 outline-none transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-slate-200/90">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/60 outline-none transition"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="flex items-center justify-between text-sm text-slate-300">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-sky-500" />
                  Remember me
                </label>
                <a
                  className="font-medium text-sky-300 hover:text-sky-200"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:translate-y-[1px] hover:shadow-sky-500/30"
              >
                Sign in
              </button>
            </form>

            <div className="flex items-center gap-2 text-sm text-slate-300/90">
              <span className="h-px flex-1 bg-white/10" />
              <span>Or continue with</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["Google", "LinkedIn", "GitHub"].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/60 hover:text-white"
                >
                  {provider}
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-slate-300">
              New here?{" "}
              <Link
                to="/register"
                className="font-semibold text-sky-300 hover:text-sky-200"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
