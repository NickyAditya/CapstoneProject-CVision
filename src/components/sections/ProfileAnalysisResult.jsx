import { useNavigate, useLocation } from "react-router-dom";
import "./ProfileAnalysisResult.css";

export default function ProfileAnalysisResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const profileText =
    location.state?.profileText || "-";

  const education =
    location.state?.education || "-";

  const careerInterest =
    location.state?.careerInterest || "-";

  const skills =
    location.state?.skills || []; 

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
            <button
              className="header-button"
              onClick={() => window.print()}
            >
              ⬇ Download Report (PDF)
            </button>
          </div>
        </div>

        <div className="uploaded-profile-card">

          {/* LEFT */}
          <div className="profile-left">

            <div className="profile-info-item">

              <span>Profile Description</span>

              <p>{profileText}</p>

            </div>

          </div>

          {/* RIGHT */}
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
                  <div
                    key={skill}
                    className="profile-skill-tag"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* CATEGORY CARD */}
        <div className="analysis-card">
          <h3>Kategori CV</h3>
          <p className="card-description">
            Kategori bidang pekerjaan yang paling sesuai dengan profil Anda.
          </p>

          <div className="category-content">
            <div className="category-left">
              <div className="category-icon">
                💼
              </div>
            </div>
            <div className="category-divider"></div>
            <div className="category-right">
              <span className="category-badge">
                Kategori Prediksi
              </span>
              <h2>IT & ENGINEERING</h2>
              <p>
                Berdasarkan pengalaman, keterampilan, dan konten yang ditemukan
                dalam CV Anda.
              </p>
            </div>
          </div>
        </div>

        {/* SCORE CARD */}
        <div className="analysis-card">
          <h3>Confidence Score</h3>

        <p className="card-description">
          Tingkat keyakinan sistem terhadap hasil prediksi kategori CV Anda.
        </p>

        <div className="score-content">
          <div className="score-circle-wrapper">
            <div className="score-circle-container">
              <svg
                height="220"
                width="220"
                className="progress-ring"
              >

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
                className="progress-ring-circle"
                stroke="#2563eb"
                fill="transparent"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 103}
                strokeDashoffset={
                  2 * Math.PI * 103 -
                  (95.5 / 100) * (2 * Math.PI * 103)
                }
                r="103"
                cx="110"
                cy="110"
              />
              </svg>

              <div className="score-inner">
                <h2>95.5%</h2>

                <span>Sangat Tinggi</span>
              </div>
            </div>
          </div>

          <div className="score-divider"></div>

          <div className="score-description">
            <p>
              Skor ini menunjukkan seberapa yakin sistem bahwa kategori tersebut
              paling sesuai dengan profil Anda.
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
          <h3>Rekomendasi Pengembangan CV</h3>
          <p className="card-description">
            Saran dari AI dan HRD untuk membantu meningkatkan kualitas CV Anda.
          </p>

          <div className="recommendation-wrapper">
            <div className="recommendation-icon">
              💡
            </div>

            <div className="recommendation-content">
              <span className="recommendation-badge">
                Saran dari HRD
              </span>

              <div className="recommendation-box">
                CV Anda sudah sangat kuat di bidang IT.
                Saran dari HRD: Tambahkan metrik pencapaian
                pada pengalaman kerja sebelumnya
                (misal: "Meningkatkan kecepatan loading website hingga 40%").
                Ini akan membuat CV Anda lebih menonjol di mata recruiter.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}