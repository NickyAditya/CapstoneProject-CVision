import { useEffect, useState } from "react";
import "./HistorySection.css";

export default function HistorySection() {

  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cvision_history")) || [];
    setHistoryData(saved);
  }, []);

  const getScoreColor = (score) => {
    if (score >= 80) return "#22c55e";
    if (score >= 50) return "#2563eb";
    return "#f59e0b";
  };

  return (
    <div className="history-table-card">

      <div className="history-table-header">
        <h2>Riwayat Analisis</h2>

        <select className="sort-select">
          <option>Terbaru</option>
          <option>Terlama</option>
          <option>Score Tertinggi</option>
        </select>
      </div>

      <div className="history-table">

        {/* HEADER */}
        <div className="table-row table-head">
          <div>File / Input</div>
          <div>Kategori CV</div>
          <div>Score</div>
          <div>Tanggal Analisis</div>
          <div>Aksi</div>
        </div>

        {/* DATA */}
        {historyData.length === 0 ? (
          <div style={{ padding: "20px", opacity: 0.6 }}>
            Belum ada riwayat analisis
          </div>
        ) : (
          historyData.map((item, index) => (
            <div className="table-row" key={index}>

              {/* FILE / INPUT */}
              <div className="file-column">
                <div
                  className={`file-icon ${
                    item.type === "pdf" ? "pdf" : "text"
                  }`}
                >
                  {item.type === "pdf"
                    ? "PDF"
                    : item.type === "text"
                    ? "TXT"
                    : "CV"}
                </div>

                <div>
                  <h4>{item.file}</h4>
                  <span>{item.type}</span>
                </div>
              </div>

              {/* CATEGORY */}
              <div>
                <span className="category-tag">
                  {item.category || "Unknown"}
                </span>
              </div>

              {/* SCORE */}
              <div className="score-column">
                <h4>{(item.score * 100).toFixed(1)}%</h4>

                <div className="score-bar">
                  <div
                    className="score-fill"
                    style={{
                      width: `${item.score * 100}%`,
                      background: getScoreColor(item.score * 100),
                    }}
                  ></div>
                </div>
              </div>

              {/* DATE */}
              <div>
                <h4>{item.date}</h4>
                <span>{item.time}</span>
              </div>

              {/* ACTION */}
              <div className="action-column">

                <button
                  className="view-button"
                  onClick={() => {
                    alert(JSON.stringify(item, null, 2));
                  }}
                >
                  👁 Lihat
                </button>

                <button className="more-button">
                  ⋮
                </button>

              </div>

            </div>
          ))
        )}

      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{">"}</button>
      </div>

    </div>
  );
}