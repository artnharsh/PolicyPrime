import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
// import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

import AdminPlans from "./pages/adminPlans";
import AdminRequests from "./pages/adminRequest";
import Admin from "./pages/admin";
import LandingPage from "./pages/landingPage";
import Dashboard from "./pages/dashboard";
import AdminLogin from "./pages/adminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPlans />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
        <Route path="/admin/panel" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
