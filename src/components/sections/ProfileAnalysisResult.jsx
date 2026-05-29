import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProfileAnalysisResult.css";

export default function ProfileAnalysisResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const profileText = location.state?.profileText || "-";
  const education = location.state?.education || "-";
  const careerInterest = location.state?.careerInterest || "-";
  const skills = location.state?.skills || [];

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!profileText || profileText === "-") return;

      try {
        const response = await fetch("http://127.0.0.1:8000/predict_text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teks_cv: profileText,
          }),
        });

        const data = await response.json();
        setResult(data);

        // =========================================
        // 💾 SAVE TO HISTORY (LOCAL STORAGE)
        // =========================================
        const oldHistory =
          JSON.parse(localStorage.getItem("cvision_history")) || [];

        const newEntry = {
          file: "Profile Analysis (Text Input)",
          size: "-",
          type: "text",

          category: data.prediksi_kategori,
          score: data.confidence_score,

          date: new Date().toLocaleDateString("id-ID"),
          time: new Date().toLocaleTimeString("id-ID"),

          careerInterest: careerInterest,
          education: education,
        };

        localStorage.setItem(
          "cvision_history",
          JSON.stringify([newEntry, ...oldHistory])
        );

      } catch (error) {
        console.error("Error API profile analysis:", error);
      }
    };

    fetchData();
  }, [profileText]);

  const score = result?.confidence_score
    ? result.confidence_score * 100
    : 0;

  return (
    <>
      <div className="profile-analysis-page">

        {/* HEADER */}
        <div className="analysis-header">
          <div className="analysis-header-left">
            <button className="back-button" onClick={() => navigate("/")}>
              ← Back to Dashboard
            </button>

            <h1>Hasil Analisis Profil</h1>
            <p>
              Berikut adalah hasil analisis profil Anda berdasarkan sistem CVision.
            </p>
          </div>

          <div className="analysis-header-actions">
            <button className="header-button" onClick={() => window.print()}>
              ⬇ Download Report (PDF)
            </button>
          </div>
        </div>

        {/* PROFILE CARD */}
        <div className="uploaded-profile-card">

          <div className="profile-left">

            <div className="profile-info-item">
              <span>Profile Description</span>
              <p>{profileText}</p>
            </div>

          </div>

          <div className="profile-right">

            <div className="profile-info-item">
              <span>Education</span>
              <h4>{education}</h4>
            </div>

            <div className="profile-info-item">
              <span>Career Interest</span>
              <h4>{careerInterest}</h4>
            </div>

            <div className="profile-info-item">
              <span>Skills</span>

              <div className="profile-skills">
                {skills.map((skill) => (
                  <div key={skill} className="profile-skill-tag">
                    {skill}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* CATEGORY */}
        <div className="analysis-card">
          <h3>Kategori Profil</h3>

          <p className="card-description">
            Kategori bidang pekerjaan yang paling sesuai dengan profil Anda.
          </p>

          <div className="category-content">

            <div className="category-left">
              <div className="category-icon">💼</div>
            </div>

            <div className="category-divider"></div>

            <div className="category-right">

              <span className="category-badge">
                Kategori Prediksi
              </span>

              <h2>
                {result?.prediksi_kategori || "Menganalisis..."}
              </h2>

              <p>
                Berdasarkan analisis AI terhadap profil, skill, dan minat Anda.
              </p>

            </div>

          </div>
        </div>

        {/* SCORE */}
        <div className="analysis-card">
          <h3>Confidence Score</h3>

          <p className="card-description">
            Tingkat keyakinan sistem terhadap hasil analisis profil Anda.
          </p>

          <div className="score-content">

            <div className="score-circle-wrapper">
              <div className="score-circle-container">

                <svg height="220" width="220" className="progress-ring">

                  {/* Background */}
                  <circle
                    stroke="#dbeafe"
                    fill="transparent"
                    strokeWidth="14"
                    r="103"
                    cx="110"
                    cy="110"
                  />

                  {/* Progress */}
                  <circle
                    stroke="#2563eb"
                    fill="transparent"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 103}
                    strokeDashoffset={
                      2 * Math.PI * 103 -
                      (score / 100) * (2 * Math.PI * 103)
                    }
                    r="103"
                    cx="110"
                    cy="110"
                  />

                </svg>

                <div className="score-inner">
                  <h2>
                    {result
                      ? (result.confidence_score * 100).toFixed(1)
                      : 0}
                    %
                  </h2>

                  <span>
                    {score > 80
                      ? "Sangat Tinggi"
                      : score > 50
                      ? "Sedang"
                      : "Rendah"}
                  </span>

                </div>

              </div>
            </div>

            <div className="score-divider"></div>

            <div className="score-description">
              <p>
                Skor ini menunjukkan seberapa cocok profil Anda dengan kategori pekerjaan.
              </p>

              <div className="score-levels">

                <div className="score-level-item">
                  <span className="dot blue"></span>
                  Tinggi (80-100%)
                </div>

                <div className="score-level-item">
                  <span className="dot green"></span>
                  Sedang (50-79%)
                </div>

                <div className="score-level-item">
                  <span className="dot orange"></span>
                  Rendah (0-49%)
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* RECOMMENDATION */}
        <div className="analysis-card">
          <h3>Rekomendasi Pengembangan Profil</h3>

          <p className="card-description">
            Saran dari AI untuk meningkatkan kualitas profil Anda.
          </p>

          <div className="recommendation-wrapper">

            <div className="recommendation-icon">💡</div>

            <div className="recommendation-content">

              <span className="recommendation-badge">
                Saran dari AI HRD
              </span>

              <div className="recommendation-box">
                {result?.saran_pengembangan_ai ||
                  "Menganalisis profil menggunakan AI..."}
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}