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
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
       
        {/* Protected User Routes */}
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <AdminProtectedRoute>
            <AdminPlans />
          </AdminProtectedRoute>
        } />
        <Route path="/admin/requests" element={
          <AdminProtectedRoute>
            <AdminRequests />
          </AdminProtectedRoute>
        } />
        <Route path="/admin/panel" element={
          <AdminProtectedRoute>
            <Admin />
          </AdminProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
