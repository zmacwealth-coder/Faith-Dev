'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" id="siteHeader">
      <div className="header-container">
        <a href="#home" className="brand-logo" aria-label="FOLU Dev Home">
          <span className="logo-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="logo-text">Folu<span className="dot">.</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#stack" className="nav-link">Tech Stack</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#standards" className="nav-link">Standards</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-black">Contact Me</a>
          <button
            className="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#home" onClick={closeMobileMenu} className="mobile-nav-link">Home</a></li>
          <li><a href="#services" onClick={closeMobileMenu} className="mobile-nav-link">Services</a></li>
          <li><a href="#stack" onClick={closeMobileMenu} className="mobile-nav-link">Tech Stack</a></li>
          <li><a href="#projects" onClick={closeMobileMenu} className="mobile-nav-link">Projects</a></li>
          <li><a href="#standards" onClick={closeMobileMenu} className="mobile-nav-link">Standards</a></li>
          <li><a href="#contact" onClick={closeMobileMenu} className="mobile-nav-link mobile-contact-btn">Contact Me</a></li>
        </ul>
      </div>
    </header>
  );
}
