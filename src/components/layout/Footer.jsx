import "./Footer.css";

const socialIcons = ["in", "𝕏", "📷", "f"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

        {/* Left */}
        <div className="footer-left">

          <div className="footer-brand">
            <div className="footer-brand-icon">✓</div>

            <div>
              <div className="footer-brand-name">
                CVision
              </div>

              <div className="footer-description">
                CVision helps you analyze your CV and discover the career path that best matches your skills and experience.
              </div>
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="footer-social">
          {socialIcons.map((icon) => (
            <div
              key={icon}
              className="footer-social-icon"
            >
              {icon}
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}