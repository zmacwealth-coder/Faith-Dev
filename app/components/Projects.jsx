'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PROJECTS_DATA = [
  {
    id: 'secureauth',
    cat: "Full-Stack SaaS / Cybersecurity",
    title: "SecureAuth Guard & IAM Platform",
    summary: "Enterprise Identity & Access Management system with biometric OAuth2, PostgreSQL Row-Level Security, and automated brute-force defense built with Next.js and Node.js.",
    tags: ["Next.js", "PostgreSQL", "Node.js", "Vercel"],
    stat: "99.99% Uptime / Zero Breaches",
    featured: false,
    image: "/assets/projects/project-auth.jpg",
    details: {
      problem: "Organizations needed a zero-trust authentication gateway that handles high-concurrency OAuth2 logins while actively detecting credential stuffing and token tampering.",
      solution: "Engineered a Next.js Server Components architecture coupled with PostgreSQL Row-Level Security (RLS) and cryptographic JWT rotation. Added real-time IP rate-limiting and biometric WebAuthn verification.",
      highlights: [
        "Biometric passkey and hardware token support (WebAuthn)",
        "PostgreSQL connection pooling via PgBouncer for sub-30ms session checks",
        "Automated rate-limiting on Vercel Edge Middleware",
        "Comprehensive audit logging with AES-256 encrypted storage"
      ]
    }
  },
  {
    id: 'vulnscan',
    cat: "Cybersecurity / Automation",
    title: "VulnScan: Python Automated Security Engine",
    summary: "Continuous penetration testing and dependency scanner detecting CVEs across microservices in real time, integrated with automated alert webhooks and compliance reports.",
    tags: ["Python", "PostgreSQL", "React", "Docker"],
    stat: "Over 1,200 Audits Completed",
    featured: true,
    image: "/assets/projects/project-vulnscan.jpg",
    details: {
      problem: "Modern CI/CD pipelines often miss ephemeral runtime vulnerabilities and outdated dependencies until production security audits.",
      solution: "Developed an asynchronous Python microservice that triggers non-intrusive penetration checks, CVE database lookups, and code-level vulnerability radar mapping with instant Slack/Discord webhooks.",
      highlights: [
        "Real-time CVE-2024 database synchronizer with NIST feed",
        "Automated Docker container vulnerability scanning",
        "Interactive vulnerability radar charts built in React",
        "Exportable ISO/IEC 27001 compliance audit reports"
      ]
    }
  },
  {
    id: 'payflow',
    cat: "Fintech Platform / Cloud",
    title: "PayFlow High-Throughput Relational Engine",
    summary: "Ultra-low latency financial transaction ledger powered by PostgreSQL connection pooling, Next.js server actions, and end-to-end encrypted payload validation.",
    tags: ["React", "Next.js", "PostgreSQL", "Vercel"],
    stat: "< 45ms Query Latency",
    featured: false,
    image: "/assets/projects/project-payflow.jpg",
    details: {
      problem: "Fintech payment processing demands deterministic ACID compliance without compromising checkout responsiveness or security verification.",
      solution: "Architected a double-entry relational ledger on PostgreSQL with pessimistic row locking and idempotent Next.js Server Actions, deployed globally across Vercel Edge networks.",
      highlights: [
        "P95 query latency kept under 45ms across 10,000+ daily transactions",
        "Idempotency keys preventing double charging on network drops",
        "Automated reconciliation workers written in Node.js",
        "Strict Content Security Policy (CSP) and encrypted request bodies"
      ]
    }
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  // Close modal on Escape key and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header-flex">
          <div>
            <span className="section-tag">Proven Track Record</span>
            <h2 className="section-title">Featured <span className="highlight-text">Works</span></h2>
          </div>
          <p className="section-lead-text">
            A curated selection of production applications and hardened architectures delivered for high-growth clients.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((proj) => (
            <article key={proj.id} className={`project-card ${proj.featured ? 'featured-project' : ''}`}>
              <div className="project-card-header">
                <span className="project-cat">{proj.cat}</span>
                <h3 className="project-title">{proj.title}</h3>
              </div>
              <p className="project-summary">{proj.summary}</p>
              
              <div className="project-tech-tags">
                {proj.tags.map((t, tidx) => (
                  <span key={tidx}>{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-stat">{proj.stat}</span>
                <div className="project-btn-group">
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="project-details-btn"
                    aria-label={`Open detailed info for ${proj.title}`}
                  >
                    <span>View Details</span>
                  </button>
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="project-link-btn"
                    aria-label={`Open case study popup for ${proj.title}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pop-up Modal with Next.js Image Optimization */}
      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-text">
                <span className="modal-cat">{activeProject.cat}</span>
                <h3 id="modal-title" className="modal-title">{activeProject.title}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Optimized Next.js Image */}
            <div className="modal-image-container">
              <Image
                src={activeProject.image}
                alt={`Technical architecture and production dashboard preview for ${activeProject.title}`}
                width={1200}
                height={675}
                priority
                sizes="(max-width: 768px) 100vw, 750px"
                className="modal-project-img"
              />
            </div>

            {/* Modal Body Info */}
            <div className="modal-body-content">
              <div className="modal-info-block">
                <h4 className="modal-subheading">Architecture &amp; Problem</h4>
                <p className="modal-desc">{activeProject.details.problem}</p>
              </div>

              <div className="modal-info-block">
                <h4 className="modal-subheading">Engineering Solution</h4>
                <p className="modal-desc">{activeProject.details.solution}</p>
              </div>

              <div className="modal-info-block">
                <h4 className="modal-subheading">Key Highlights</h4>
                <ul className="modal-highlights-list">
                  {activeProject.details.highlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="hl-bullet">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Performance Metric */}
              <div className="modal-footer-stats">
                <div className="modal-tags">
                  {activeProject.tags.map((t, idx) => (
                    <span key={idx} className="modal-tag">{t}</span>
                  ))}
                </div>
                <div className="modal-metric-badge">
                  {activeProject.stat}
                </div>
              </div>

              {/* Action Button */}
              <div className="modal-actions">
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="btn btn-coral modal-cta-btn"
                >
                  <span>Inquire About This Solution</span>
                  <span className="btn-icon">➔</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
