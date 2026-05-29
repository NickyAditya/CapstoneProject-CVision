import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import HistoryPage from "./pages/HistoryPage";
import MyAccountPage from "./pages/MyAccountPage";
import ResumeAnalysisPage from "./pages/ResumeAnalysisResultPage";
import ProfileAnalysisPage from "./pages/ProfileAnalysisResultPage";

function App() {
  return (
    <Routes>

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/resume-analysis"
        element={<ResumeAnalysisPage />}
      />
      
      <Route
        path="/profile-analysis"
        element={<ProfileAnalysisPage />}
      />

      <Route
        path="/account"
        element={<MyAccountPage />}
      />

      <Route
        path="/history"
        element={<HistoryPage />}
      />

      <Route
        path="/account"
        element={<MyAccountPage />}
      />

    </Routes>
  );
}

export default App;
