export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="brand-logo footer-logo" aria-label="FOLU Dev Home">
            <span className="logo-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </span>
            <span className="logo-text">FOLU<span className="dot">.</span></span>
          </a>
          <p className="footer-copy">
            © 2026 FOLU Dev. All rights reserved. Full-stack Developer &amp; Cybersecurity Specialist.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#standards">Standards</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
