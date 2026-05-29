import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import "../components/sections/HistorySection.css";

import HistorySection from "../components/sections/HistorySection";

export default function HistoryPage() {
  return (
    <>
      <NavBar />

      <div className="history-page">

        {/* HEADER */}
        <div className="history-header">

          <div>
            <h1>History</h1>

            <p>
              Lihat riwayat analisis CV Anda. Pantau perkembangan dan temukan peluang terbaik.
            </p>
          </div>

          <div className="history-header-right">

            <div className="search-box">

              <input
                type="text"
                placeholder="Cari berdasarkan nama file atau posisi..."
              />

              <span className="search-icon">
                🔍
              </span>

            </div>

            <button className="filter-button">
              ☰ Filter
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="history-stats">

          <div className="stats-card">

            <div className="stats-icon blue">
              📄
            </div>

            <div>
              <p>Total Analisis</p>
              <h2>18</h2>
              <span>Semua waktu</span>
            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon green">
              📈
            </div>

            <div>
              <p>Rata-rata Score</p>
              <h2>78%</h2>
              <span>Dari semua analisis</span>
            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon purple">
              💼
            </div>

            <div>
              <p>Kategori Terbanyak</p>
              <h2>Software Developer</h2>
              <span>6 analisis</span>
            </div>

          </div>

        </div>

        {/* TABLE */}
        <HistorySection />

      </div>

      <Footer />
    </>
  );
}