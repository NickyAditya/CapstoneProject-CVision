import "./HowItWorksSection.css";

import cvIcon from "../../assets/cv.png";
import analysis from "../../assets/exploration.png";
import target from "../../assets/target.png";

const steps = [
  { num: 1, icon: <img src={cvIcon} alt="CV Upload" className="step-custom-icon" />, title: "Upload Your CV", desc: "Upload your resume in PDF or DOCX format.", color: "#3b82f6" },
  { num: 2, icon: <img src={analysis} alt="CV Analysis" className="step-custom-icon" />, title: "Automated CV Analysis", desc: "System will analyze your CV to identify skills, experience, and competencies.", color: "#8b5cf6" },
  { num: 3, icon: <img src={target} alt="Target Jobs" className="step-custom-icon" />, title: "Find Target Jobs", desc: "Discover job opportunities that match your profile and preferences.", color: "#4822c5" },
];

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section">
      {/* Section Header */}
      <div className="how-it-works-header">
        <div className="how-it-works-badge">HOW IT WORKS</div>
        <h2 className="how-it-works-title">3 Steps to Get Your Best Career Match</h2>
      </div>

      {/* Steps Container */}
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={step.num} style={{ display: "contents" }}>
            {/* Step Item */}
            <div className="step-item">
              <div className="step-icon-container">
                <div className="step-icon-box">{step.icon}</div>
                <div
                  className="step-number-badge"
                  style={{
                    background: `linear-gradient(145deg, ${step.color}, ${step.color}cc)`,
                    boxShadow: `3px 3px 0px ${step.color}88`,
                  }}
                >
                  {step.num}
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.desc}</p>
            </div>

            {/* Step Separator */}
            {index < steps.length - 1 && (
              <div className="step-separator">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
