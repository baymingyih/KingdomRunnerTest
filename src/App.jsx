import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import UserDashboard from "./UserDashboard";

const App = () => {
  // Simple authentication check. Replace with your actual auth logic.
  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
