'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PROJECTS_DATA = [
  {
    id: 'school-management',
    cat: "EdTech / Cybersecurity / RBAC",
    title: "SecureAuth Guard School Management System",
    summary: "Enterprise-grade multi-tenant educational platform featuring fine-grained role-based access control (RBAC), biometric student and faculty authentication, encrypted student records, and automated attendance pipelines.",
    tags: ["Next.js", "PostgreSQL RLS", "TypeScript", "Node.js"],
    stat: "Zero Data Leaks / 50k+ Active Records",
    featured: false,
    image: "/assets/projects/project-auth.jpg",
    details: {
      problem: "Educational institutions handle sensitive minor records and financial transactions while facing frequent credential sharing and unauthorized privilege escalation.",
      solution: "Implemented Next.js Server Components with strict PostgreSQL Row-Level Security (RLS) isolating student and grade records per tenant, combined with time-based OTP and cryptographic audit trails.",
      highlights: [
        "Role-based access matrix separating Admin, Faculty, Student, and Parent tiers",
        "PostgreSQL Row-Level Security ensuring 100% data partition isolation",
        "Biometric and passkey attendance tracking via WebAuthn",
        "Real-time fee payment gateway with encrypted receipt verification"
      ]
    }
  },
  {
    id: 'siem-threat-analysis',
    cat: "Cybersecurity / SecOps / Threat Intel",
    title: "Cloud SIEM, Log Forensics & Threat Engine",
    summary: "Defensive security telemetry platform streaming real-time event logs, automating CVE correlation, and visualizing attack vectors with machine-speed incident response playbooks.",
    tags: ["Python", "Docker", "PostgreSQL", "React"],
    stat: "10k+ Events/sec / Automated Containment",
    featured: true,
    image: "/assets/projects/project-vulnscan.jpg",
    details: {
      problem: "High-volume distributed microservices generate disparate log streams that overwhelm security teams, leading to delayed detection of brute-force attacks and privilege misuse.",
      solution: "Built an asynchronous Python ingestion pipeline parsing syslog and JSON audit streams, cross-referencing MITRE ATT&CK patterns and triggering automated IP quarantine webhooks.",
      highlights: [
        "Sub-second log ingestion pipeline handling over 10,000 events per second",
        "Automated CVE vulnerability matching against NIST NVD feeds",
        "Interactive threat radar charts and geo-IP anomaly mapping",
        "Automated incident response webhooks for Slack and Discord alerts"
      ]
    }
  },
  {
    id: 'hospital-management',
    cat: "HealthTech / Cloud / HIPAA Compliance",
    title: "Hospital Management & Clinical Operations Dashboard",
    summary: "Mission-critical healthcare operations suite coordinating real-time patient triage, electronic health records (EHR), automated bed allocation, and encrypted clinician messaging.",
    tags: ["Next.js", "PostgreSQL", "Tailwind & CSS", "Vercel"],
    stat: "HIPAA Compliant / < 35ms Query Speed",
    featured: false,
    image: "/assets/projects/project-hms.jpg",
    details: {
      problem: "Hospital departments suffer from fragmented scheduling, delayed patient bed assignments, and non-compliant access to protected health information (PHI).",
      solution: "Engineered an end-to-end encrypted clinical dashboard powered by Next.js Server Components, real-time WebSocket state synchronization, and audit-logged medical history retrieval.",
      highlights: [
        "End-to-end encryption for all Patient Health Information (PHI)",
        "Dynamic triage queue and automated inpatient bed allocation",
        "Sub-35ms query latency on high-concurrency electronic health records",
        "Granular emergency-override audit trails compliant with HIPAA standards"
      ]
    }
  },
  {
    id: 'real-estate-platform',
    cat: "PropTech / Architecture / Dynamic Web",
    title: "Dynamic Premium Real Estate Web App",
    summary: "Luxury architectural property portal featuring interactive neighborhood mapping, 360-degree virtual property tours, real-time mortgage estimation, and high-conversion client inquiry portals.",
    tags: ["Next.js", "React", "PostgreSQL", "Edge Functions"],
    stat: "4K Virtual Tours / Sub-second Search",
    featured: false,
    image: "/assets/projects/project-realestate.jpg",
    details: {
      problem: "High-end real estate buyers require photorealistic visual immersion and instant property filtering without suffering sluggish page speeds or cumbersome consultation forms.",
      solution: "Developed a dynamic, editorial property showcase leveraging Next.js streaming SSR, geospatial PostgreSQL queries for neighborhood insights, and GPU-accelerated interactive 360 virtual tours.",
      highlights: [
        "Dynamic filter engine for luxury estates with sub-second geospatial queries",
        "Interactive 360-degree virtual walkthrough viewer and floor plan explorer",
        "Integrated real-time mortgage amortizer and financial scenario modeler",
        "Secure client inquiry portal with encrypted buyer documentation exchange"
      ]
    }
  },
  {
    id: 'car-sales-rentals-pwa',
    cat: "Automotive / E-Commerce / PWA",
    title: "Car Sales & Fleet Rentals Cross-Platform PWA",
    summary: "High-performance Progressive Web App delivering cross-platform vehicle reservations, real-time inventory synchronization, offline booking queues, and digital lease contracts.",
    tags: ["Next.js", "PWA", "PostgreSQL", "Node.js"],
    stat: "Installable PWA / 99.8% Offline Resiliency",
    featured: false,
    image: "/assets/projects/project-carrental.jpg",
    details: {
      problem: "Car dealerships and rental agencies face high customer drop-off on slow mobile web pages and require separate native apps for offline showroom inspections.",
      solution: "Built an installable Progressive Web Application (PWA) with service worker background sync, dynamic vehicle search filters, and instant booking payment pipelines that run seamlessly across iOS, Android, and desktop.",
      highlights: [
        "Installable PWA with offline-first caching for vehicle showroom tours",
        "Cross-platform responsive UX with native-like gestures and push notifications",
        "Automated vehicle availability calendar with real-time double-booking prevention",
        "Integrated digital signature capture and automated PDF contract generation"
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
