'use client';

import { useState } from 'react';

// Configurable WhatsApp recipient number (e.g., country code + number with no spaces)
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '2348000000000';

const SERVICE_LABELS = {
  fullstack: 'Full-Stack Web App (Next.js / React / Node)',
  security: 'Cybersecurity Audit & Penetration Testing',
  database: 'PostgreSQL Database Design & Tuning',
  python: 'Python Automation & Backend API',
  consulting: 'DevOps & Vercel Cloud Deployment'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'fullstack',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // 1. Compile formatted WhatsApp message (Zero Em Dashes)
      const serviceLabel = SERVICE_LABELS[formData.service] || formData.service;
      const compiledMessage =
        `*New Project Inquiry: FOLU Dev*

Client Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Service Required: ${serviceLabel}

Project Details:
${formData.message.trim()}

Sent from FOLU Dev Portfolio`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(compiledMessage)}`;

      // 2. Asynchronously save/log inquiry via backend API
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(err => console.warn('Background logging notice:', err));

      // 3. Open WhatsApp DM directly with prefilled message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', service: 'fullstack', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 7000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || 'Error occurred.' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-box-card">
          <div className="contact-left">
            <span className="section-tag">Let&apos;s Collaborate</span>
            <h2 className="contact-title">Have a project or security audit in mind?</h2>
            <p className="contact-description">
              Whether you need a high-performance Next.js application, resilient PostgreSQL database design, or comprehensive cybersecurity evaluation, let&apos;s talk.
            </p>

            <div className="contact-badges-row">
              <div className="c-badge">
                <span className="c-badge-dot"></span> Available for Contract &amp; Full-time
              </div>
              <div className="c-badge">
                <span className="c-badge-dot"></span> Fast 24-hr Response Time
              </div>
            </div>

            <div className="contact-methods">
              <div className="c-method-item">
                <span className="c-method-label">Direct Email</span>
                <a href="mailto:folaoluwa001@gmail.com" className="c-method-val">folaoluwa001@gmail.com</a>
              </div>
              <div className="c-method-item">
                <span className="c-method-label">Role Focus</span>
                <span className="c-method-val">Full-stack &amp; Cybersecurity</span>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="senderName">Your Name</label>
                <input
                  type="text"
                  id="senderName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="senderEmail">Email Address</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="serviceNeeded">Service Required</label>
                <select
                  id="serviceNeeded"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="fullstack">Full-Stack Web App (Next.js / React / Node)</option>
                  <option value="security">Cybersecurity Audit &amp; Penetration Testing</option>
                  <option value="database">PostgreSQL Database Design &amp; Tuning</option>
                  <option value="python">Python Automation &amp; Backend API</option>
                  <option value="consulting">DevOps &amp; Vercel Cloud Deployment</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="senderMsg">Project Details</label>
                <textarea
                  id="senderMsg"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-coral-submit"
                disabled={status.loading}
              >
                <span>{status.loading ? 'Opening WhatsApp...' : 'Send via WhatsApp'}</span>
                <span className="submit-arrow">➔</span>
              </button>

              {status.success && (
                <div className="form-success-note">
                  ✓ Opening WhatsApp with your message compiled! Simply press &quot;Send&quot; in your chat.
                </div>
              )}

              {status.error && (
                <div style={{ color: '#EF4444', fontSize: '0.85rem', fontWeight: 600 }}>
                  ⚠️ {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
