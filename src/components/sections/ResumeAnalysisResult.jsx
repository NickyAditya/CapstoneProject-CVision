import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ResumeAnalysisResult.css";

export default function ResumeAnalysisResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileName = location.state?.fileName || "Unknown_File.pdf";
  const fileSize = location.state?.fileSize || "0";
  const file = location.state?.file;

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      if (!file) return;

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://127.0.0.1:8000/predict_pdf", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setResult(data);

        // =========================================
        // 💾 SAVE TO HISTORY (LOCAL STORAGE)
        // =========================================
        const oldHistory =
          JSON.parse(localStorage.getItem("cvision_history")) || [];

        const newEntry = {
          file: fileName,
          size: fileSize,
          type: "pdf",

          category: data.prediksi_kategori,
          score: data.confidence_score,

          date: new Date().toLocaleDateString("id-ID"),
          time: new Date().toLocaleTimeString("id-ID"),

          careerInterest: "-",
          education: "-",
        };

        localStorage.setItem(
          "cvision_history",
          JSON.stringify([newEntry, ...oldHistory])
        );

      } catch (error) {
        console.error("Gagal mengambil hasil API:", error);
      }
    };

    fetchResult();
  }, [file]);

  const score = result?.confidence_score
    ? result.confidence_score * 100
    : 0;

  return (
    <>
      <div className="resume-analysis-page">

        {/* HEADER */}
        <div className="analysis-header">
          <div className="analysis-header-left">
            <button className="back-button" onClick={() => navigate("/")}>
              ← Back to Dashboard
            </button>

            <h1>Hasil Analisis CV</h1>
            <p>
              Berikut adalah hasil analisis CV Anda berdasarkan sistem CVision.
            </p>
          </div>

          <div className="analysis-header-actions">
            <button className="header-button" onClick={() => window.print()}>
              ⬇ Download Report (PDF)
            </button>
          </div>
        </div>

        {/* FILE CARD */}
        <div className="uploaded-file-card">
          <div className="uploaded-file-left">
            <div className="uploaded-file-icon">📄</div>

            <div>
              <h4>{fileName}</h4>
              <span>{fileSize} KB</span>
            </div>
          </div>

          <div className="uploaded-file-status">
            Uploaded Successfully
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
                Berdasarkan pengalaman, keterampilan, dan konten CV Anda.
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
                    className="progress-ring-circle"
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
                Skor ini menunjukkan seberapa yakin sistem terhadap kategori CV Anda.
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
            Saran dari AI dan HRD untuk meningkatkan kualitas CV Anda.
          </p>

          <div className="recommendation-wrapper">
            <div className="recommendation-icon">💡</div>

            <div className="recommendation-content">
              <span className="recommendation-badge">
                Saran dari AI HRD
              </span>

              <div className="recommendation-box">
                {result?.saran_pengembangan_ai ||
                  "Menganalisis CV menggunakan AI..."}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}