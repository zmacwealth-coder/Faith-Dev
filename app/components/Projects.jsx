'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_DATA } from '../data/projectsData';

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
