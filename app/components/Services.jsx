'use client';

import { useState } from 'react';

const SERVICES_DATA = [
  {
    id: 1,
    num: "01.",
    title: "Full-Stack Web Development",
    tags: ["Next.js App Router", "React Server Components", "TypeScript", "Tailwind & Vanilla CSS", "Responsive UX"],
    description: "Designing and engineering state-of-the-art web applications from conception to production. Leveraging React and Next.js for high SEO scores, instant render times, and delightful user interactions.",
    hasPreview: false,
  },
  {
    id: 2,
    num: "02.",
    title: "Cybersecurity & System Hardening",
    tags: ["Vulnerability Assessment", "Penetration Testing", "OWASP Hardening", "Auth & OAuth2 Protection", "Zero-Trust Architecture"],
    description: "Auditing source code and microservices for OWASP Top 10 vulnerabilities, implementing cryptographic authentication pipelines, role-based access control (RBAC), and defending web applications against automated threats.",
    hasPreview: true,
    previewImg: "/assets/service-preview.jpg",
  },
  {
    id: 3,
    num: "03.",
    title: "PostgreSQL Database Engineering",
    tags: ["Schema Modeling", "Query Optimization", "Connection Pooling (PgBouncer)", "Prisma & Drizzle ORM", "Row Level Security (RLS)"],
    description: "Designing normalized relational database schemas, fine-tuning indexes for millisecond query performance, and implementing Row-Level Security (RLS) policies for multi-tenant applications.",
    hasPreview: false,
  },
  {
    id: 4,
    num: "04.",
    title: "Python & Node.js Backend Systems",
    tags: ["FastAPI & Django", "Express & NestJS", "Security Automation", "Async Workers", "RESTful & GraphQL"],
    description: "Architecting high-throughput RESTful and asynchronous API services. Python scripting for threat intelligence and automated scanners, paired with event-driven Node.js backend services.",
    hasPreview: false,
  },
  {
    id: 5,
    num: "05.",
    title: "DevOps & Vercel Cloud Architecture",
    tags: ["Vercel Edge Functions", "CI/CD Automation", "SSL & CSP Headers", "DDoS Mitigation", "Serverless Scaling"],
    description: "Setting up enterprise deployment pipelines on Vercel with edge caching, automated security headers, strict Content Security Policies (CSP), and instant global rollouts.",
    hasPreview: false,
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(2); // default open 02 as in reference screenshot

  const handleToggle = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        
        <div className="services-header-row">
          <div className="services-header-left">
            <span className="section-tag">— My Specialization</span>
            <h2 className="section-title">
              Services <span className="highlight-text">I Provide</span> <span className="title-sparkle">✦</span>
            </h2>
          </div>
          <div className="services-header-right">
            <p className="section-lead-text">
              I combine robust software engineering with deep security protocols to create web applications that are resilient against attacks, blazing fast, and architected for enterprise growth.
            </p>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="accordion-list">
          {SERVICES_DATA.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                className={`accordion-item ${isActive ? 'is-active' : ''}`}
              >
                {!isActive ? (
                  <button
                    className="accordion-header"
                    onClick={() => handleToggle(service.id)}
                    aria-expanded={isActive}
                  >
                    <span className="accordion-num">{service.num}</span>
                    <span className="accordion-title">{service.title}</span>
                    <span className="accordion-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </button>
                ) : (
                  <div className="service-dark-card">
                    <div className="card-header-bar">
                      <div className="card-header-left">
                        <span className="card-header-num">{service.num}</span>
                        <h3 className="card-header-title">{service.title}</h3>
                      </div>
                      <button
                        onClick={() => handleToggle(service.id)}
                        className="card-action-circle"
                        aria-label="Collapse service"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </button>
                    </div>

                    <div className="card-inner-top">
                      <div className="service-tags-row">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="sub-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="service-description">
                      {service.description}
                    </p>

                    {service.hasPreview && service.previewImg && (
                      <div className="service-preview-box">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.previewImg}
                          alt={`${service.title} Mockup`}
                          className="service-preview-img"
                        />
                        <div className="preview-overlay-info">
                          <span className="badge-mini">Live Architecture</span>
                          <span className="badge-status">Protected & Encrypted</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Bottom Button (Pill matching reference) */}
        <div className="services-footer-action">
          <a href="#contact" className="btn-coral-pill">
            <span>View All Services</span>
            <span className="btn-pill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
