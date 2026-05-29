import "./HistorySection.css";
export default function HistorySection() {

  const historyData = [
    {
      file: "John_Doe_CV.pdf",
      size: "512 KB",
      position: "Frontend Developer",
      category: "Software Developer",
      score: 82,
      date: "20 Mei 2025",
      time: "10:30 WIB",
      type: "pdf",
    },
    {
      file: "Sarah_Amelia_CV.docx",
      size: "423 KB",
      position: "UI/UX Designer",
      category: "UI/UX Designer",
      score: 75,
      date: "19 Mei 2025",
      time: "15:45 WIB",
      type: "docx",
    },
    {
      file: "Andi_Pratama_CV.pdf",
      size: "678 KB",
      position: "Backend Developer",
      category: "Software Developer",
      score: 90,
      date: "18 Mei 2025",
      time: "09:15 WIB",
      type: "pdf",
    },
    {
      file: "Dewi_Lestari_CV.docx",
      size: "356 KB",
      position: "Data Analyst",
      category: "Data Analyst",
      score: 68,
      date: "17 Mei 2025",
      time: "14:20 WIB",
      type: "docx",
    },
  ];

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
          <div>File CV</div>
          <div>Target Posisi</div>
          <div>Kategori CV</div>
          <div>Score</div>
          <div>Tanggal Analisis</div>
          <div>Aksi</div>
        </div>

        {/* DATA */}
        {historyData.map((item, index) => (
          <div className="table-row" key={index}>

            {/* FILE */}
            <div className="file-column">
              <div
                className={`file-icon ${
                  item.type === "pdf"
                    ? "pdf"
                    : "docx"
                }`}
              >
                {item.type.toUpperCase()}
              </div>

              <div>
                <h4>{item.file}</h4>
                <span>{item.size}</span>
              </div>
            </div>

            {/* POSITION */}
            <div>
              <h4>{item.position}</h4>
              <span>{item.company}</span>
            </div>

            {/* CATEGORY */}
            <div>
              <span className="category-tag">
                {item.category}
              </span>
            </div>

            {/* SCORE */}
            <div className="score-column">
              <h4>{item.score}%</h4>

              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${item.score}%`,
                    background:
                      getScoreColor(item.score),
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

              <button className="view-button">
                👁 Lihat
              </button>

              <button className="more-button">
                ⋮
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* PAGINATION */}
      <div className="pagination">

        <button>{"<"}</button>

        <button className="active">
          1
        </button>

        <button>2</button>

        <button>3</button>

        <button>{">"}</button>

      </div>

    </div>
  );
}