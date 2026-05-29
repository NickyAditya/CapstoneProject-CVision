import NavBar from "../components/layout/NavBar";
import UploadSection from "../components/sections/UploadSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import Footer from "../components/layout/Footer";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <NavBar />
      <div style={{ padding: "40px 40px 0" }}>
        <UploadSection />
      </div>
      <div style={{ padding: "0 40px" }}>
        <FeaturesSection />
        <HowItWorksSection />
      </div>
      <Footer />
    </div>
  );
}
