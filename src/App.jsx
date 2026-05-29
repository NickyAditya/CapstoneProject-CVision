import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import HistoryPage from "./pages/HistoryPage";
import ResumeAnalysisPage from "./pages/ResumeAnalysisResultPage";
import ProfileAnalysisPage from "./pages/ProfileAnalysisResultPage";
import ProtectedRoute from "./components/ProtectedRoute";

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
        element={ <LandingPage /> }
      />

      <Route
        path="/resume-analysis"
        element={
          <ProtectedRoute>
            <ResumeAnalysisPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile-analysis"
        element={
          <ProtectedRoute>
            <ProfileAnalysisPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;