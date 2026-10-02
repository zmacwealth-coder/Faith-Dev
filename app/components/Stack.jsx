export default function Stack() {
  const stackItems = [
    {
      name: "Next.js",
      category: "Full-Stack Core",
      desc: "Production-ready SSR, App Router, React Server Components, and Edge rendering pipelines.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998 0C5.372 0 0 5.373 0 12s5.372 12 11.998 12c6.628 0 12.002-5.373 12.002-12 0-6.627-5.374-12-12.002-12zm5.789 17.585l-7.054-9.155v9.155H9.28V6.415h1.564l7.102 9.219V6.415h1.451v11.17h-1.61z"/>
        </svg>
      )
    },
    {
      name: "Wazuh SIEM",
      category: "SIEM & EDR Security",
      desc: "Endpoint telemetry, custom XML decoders, active response scripts, and File Integrity Monitoring (FIM).",
      isOrange: true,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      name: "Splunk",
      category: "Log Analytics & SOC",
      desc: "Search Processing Language (SPL), correlation search rules, SOC alert dashboards, and audit forensics.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <path d="m7 15 3-3-3-3"/>
          <path d="M13 15h4"/>
        </svg>
      )
    },
    {
      name: "Linux Security",
      category: "Host Defense & Kernel",
      desc: "Linux kernel auditing (auditd), system hardening, PAM authentication, and automated bash security orchestration.",
      isOrange: true,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <polyline points="7 8 10 10 7 12"/>
          <line x1="12" y1="12" x2="15" y2="12"/>
        </svg>
      )
    },
    {
      name: "Python",
      category: "Security Automation",
      desc: "Threat intelligence scrapers, automated vulnerability scanners, custom SIEM log parsers, and API microservices.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 0c-1.8 0-3.48.24-4.59.68-3.32 1.33-3.51 4.13-3.51 6.54v2.78h7.26v.93H3.84c-2.4 0-4.47 1.45-5.07 4.2-.69 3.16-.73 5.12 0 8.35.53 2.45 2.15 4.2 4.55 4.2h2.95v-3.72c0-2.73 2.33-5.11 5.11-5.11h7.02c1.7 0 3.09-1.42 3.09-3.13V7.22c0-2.28-.96-3.8-2.7-4.73-1.63-.87-3.98-1.49-6.88-1.49zm-2.09 2.37c.72 0 1.3.59 1.3 1.31 0 .72-.58 1.3-1.3 1.3-.72 0-1.31-.58-1.31-1.3 0-.72.59-1.31 1.31-1.31z"/>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "Database & RLS",
      desc: "Rock-solid relational data modeling, indexing, ACID transactions, and Row Level Security (RLS) policies.",
      isOrange: true,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend Engine",
      desc: "Event-driven asynchronous APIs, microservices, encrypted WebSockets, and secure JWT rotation pipelines.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l10 5.75v11.5L12 25l-10-5.75V7.75L12 2zm0 2.31L4 8.91v8.18L12 21.7l8-4.61V8.91L12 4.31z"/>
        </svg>
      )
    },
    {
      name: "OWASP & Defense",
      category: "Application Hardening",
      desc: "Penetration testing, vulnerability assessments, Nmap network audits, and mitigation against OWASP Top 10 exploits.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="section-container">
        <div className="center-header">
          <span className="section-tag">Core Arsenal</span>
          <h2 className="section-title">Built with <span className="highlight-text">Proven Technologies</span></h2>
          <p className="section-lead-text centered">
            A battle-tested stack combining modern web frameworks, resilient databases, and defensive security tooling.
          </p>
        </div>

        <div className="tech-grid">
          {stackItems.map((tech, idx) => (
            <div key={idx} className={`tech-card ${tech.isOrange ? 'active-border' : ''}`}>
              <div className="tech-icon-box">
                {tech.svg}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-desc">{tech.desc}</p>
              <span className={`tech-badge ${tech.isOrange ? 'badge-orange' : ''}`}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
