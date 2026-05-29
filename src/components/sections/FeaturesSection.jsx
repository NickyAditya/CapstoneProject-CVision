import { getIconBoxStyle } from "../../utils/theme";
import "./FeaturesSection.css";

const features = [
  { icon: "📊", title: "AI-Powered Analysis", desc: "Uses advanced AI Technology for accurate and in-depth analysis.", color: "#3b82f6" },
  { icon: "🔑", title: "Accurate Recommendations", desc: "Provide job recommendations that best suit your profile.", color: "#8b5cf6" },
  { icon: "💡", title: "In-Depth Analysis", desc: "Analyze skills, experience, and competencies comprehensively.", color: "#0ea5e9" },
  { icon: "👁️", title: "Guaranteed Privacy", desc: "Your CV data is safe and protected with high-level encryption.", color: "#06b6d4" },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {/* Section Header */}
      <div className="features-header">
        <div className="features-badge">OUR FEATURES</div>
        <h2 className="features-title">Powerful Features to Improve Your Resume</h2>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div className="feature-icon" style={getIconBoxStyle(feature.color)}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
