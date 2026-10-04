'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Rotating Hire Me Badge (Top Right) */}
        <a href="#contact" className="rotating-badge-wrap" aria-label="Hire Folu Dev">
          <div className="rotating-text-circle">
            <svg viewBox="0 0 100 100" className="circle-svg">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  • HIRE ME • FULL STACK • CYBERSECURITY •
                </textPath>
              </text>
            </svg>
            <div className="badge-center-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </a>

        {/* Hero Header Text */}
        <div className="hero-header-content">
          <div className="section-tag">You're Welcome</div>
          <h1 className="hero-title">
            I&apos;m <span className="highlight-text">Folu Dev<span className="title-sparkle">✦</span></span>
          </h1>
          <p className="hero-subtitle">Full-stack Developer &amp; Cybersecurity Specialist</p>
        </div>

        {/* Hero Grid / Main Content Area */}
        <div className="hero-stage">

          {/* Left Floating Widget: Security & Architecture Focus */}
          <div className="hero-floating-left">
            <div className="badge-status-dot">
              <span className="status-indicator"></span>
              <span className="status-label">Architecture &amp; Defense</span>
            </div>
            <p className="hero-focus-text">
              Engineering resilient web applications and fortified database architectures designed to withstand adversarial threats and scale efficiently.
            </p>
            <div className="hero-spec-list">
              <div className="spec-badge">Next.js App Router</div>
              <div className="spec-badge">PostgreSQL RLS</div>
              <div className="spec-badge">OWASP Hardening</div>
            </div>
          </div>

          {/* Center Stage: Portrait & Action Controls */}
          <div className="hero-center-visual">
            <div className="portrait-arch-bg"></div>
            <div className="portrait-image-wrapper">
              <Image
                src="/assets/folu-cropped-portrait.jpg"
                alt="Portrait of Folu Dev, Full-stack Developer and Cybersecurity Specialist"
                width={380}
                height={500}
                priority
                className="hero-portrait-img"
              />
            </div>

            {/* Overlapping Action Buttons (Sleek Geometric Design) */}
            <div className="floating-cta-bar">
              <a href="#projects" className="cta-btn-dark">
                <span>View Projects</span>
                <span className="btn-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </a>
              <a href="#contact" className="cta-btn-light">Contact Me</a>
            </div>
          </div>

          {/* Right Floating Widget: Stack Badges & Social Links */}
          <div className="hero-floating-right">
            <div className="stack-tags-cloud">
              <div className="tag-row">
                <span className="tech-tag tag-dark">Next.js</span>
                <span className="tech-tag tag-coral">PostgreSQL</span>
              </div>
              <div className="tag-row">
                <span className="tech-tag tag-coral-icon">
                  <span className="icon-dot">✦</span> Python
                </span>
                <span className="tech-tag tag-dark">Node.js</span>
              </div>
              <div className="tag-row">
                <span className="tech-tag tag-coral">Cybersecurity</span>
                <span className="tech-tag tag-dark">React</span>
              </div>
              <div className="tag-row">
                <span className="tech-tag tag-dark tag-full">Vercel Cloud</span>
              </div>
            </div>

            <div className="hero-social-block">
              <span className="social-label">Verified Profiles:</span>
              <div className="social-icon-row">
                {/* GitHub */}
                <a href="https://github.com/zmacwealth-coder" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="GitHub Profile">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/olaoluwafaith" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="LinkedIn Profile">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
                {/* X */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="X Profile">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Email */}
                <a href="mailto:folaoluwa001@gmail.com" className="social-circle-link" aria-label="Direct Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
