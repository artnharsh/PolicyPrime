import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const AdminLogin = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        email: formData.email,
        password: formData.password
      });
      console.log("Login successful:", response.data);

      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("admin", JSON.stringify(response.data.user));
      // On successful login, navigate to the admin dashboard
      navigate('/admin/panel');

    } catch (error) {
      console.error("Login failed:", error.message);
    }

  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-[#050910] via-[#0b1224] to-[#0a1a35] text-slate-100 flex items-center justify-center px-6 py-14"
      data-mode="login"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-amber-500/20 blur-3xl -top-10 -left-6" />
        <div className="absolute w-72 h-72 bg-orange-500/15 blur-3xl bottom-0 right-6" />
      </div>

      <div className="auth-stage w-full max-w-6xl relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="auth-panel auth-copy space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200/80 border border-white/10 backdrop-blur">
            Admin access
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
            Log in to manage all policies and requests
          </h1>
          <p className="text-base text-slate-300 max-w-2xl">
            Access the admin dashboard to review policy applications, manage
            user requests, and maintain platform security. Full control and
            visibility over all operations.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Full access
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Real-time updates
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              Secure session
            </span>
          </div>
        </div>

        <div className="auth-panel auth-form relative">
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-500/40 via-orange-500/30 to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 p-8 sm:p-10 space-y-6">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                Admin portal
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
                  placeholder="admin@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/60 outline-none transition"
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none transition"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="flex items-center justify-between text-sm text-slate-300">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-amber-500" />
                  Remember me
                </label>
                <a
                  className="font-medium text-amber-300 hover:text-amber-200"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 px-4 py-3 font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:translate-y-[1px] hover:shadow-amber-500/30"
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
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-amber-400/60 hover:text-white"
                >
                  {provider}
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-slate-300">
              Back to user login?{" "}
              <Link
                to="/login"
                className="font-semibold text-amber-300 hover:text-amber-200"
              >
                Go back
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
