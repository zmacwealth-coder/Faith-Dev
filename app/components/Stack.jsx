export default function Stack() {
  const stackItems = [
    {
      name: "Next.js",
      category: "Full-Stack Core",
      desc: "Production-ready SSR, App Router, React Server Components & Edge rendering.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998 0C5.372 0 0 5.373 0 12s5.372 12 11.998 12c6.628 0 12.002-5.373 12.002-12 0-6.627-5.374-12-12.002-12zm5.789 17.585l-7.054-9.155v9.155H9.28V6.415h1.564l7.102 9.219V6.415h1.451v11.17h-1.61z"/>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "Database",
      desc: "Rock-solid relational data modeling, indexing, ACID transactions & Row Level Security.",
      isOrange: true,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
        </svg>
      )
    },
    {
      name: "Python",
      category: "Security & Logic",
      desc: "FastAPI microservices, security scanning scripts, data automation & cryptographic verification.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 0c-1.8 0-3.48.24-4.59.68-3.32 1.33-3.51 4.13-3.51 6.54v2.78h7.26v.93H3.84c-2.4 0-4.47 1.45-5.07 4.2-.69 3.16-.73 5.12 0 8.35.53 2.45 2.15 4.2 4.55 4.2h2.95v-3.72c0-2.73 2.33-5.11 5.11-5.11h7.02c1.7 0 3.09-1.42 3.09-3.13V7.22c0-2.28-.96-3.8-2.7-4.73-1.63-.87-3.98-1.49-6.88-1.49zm-2.09 2.37c.72 0 1.3.59 1.3 1.31 0 .72-.58 1.3-1.3 1.3-.72 0-1.31-.58-1.31-1.3 0-.72.59-1.31 1.31-1.31z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Backend Engine",
      desc: "Event-driven asynchronous APIs, microservices, websockets & secure token authentication.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l10 5.75v11.5L12 25l-10-5.75V7.75L12 2zm0 2.31L4 8.91v8.18L12 21.7l8-4.61V8.91L12 4.31z"/>
        </svg>
      )
    },
    {
      name: "React",
      category: "Frontend Mastery",
      desc: "Reusable design systems, state machines, custom hooks & accessible interfaces.",
      isOrange: false,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-17.93c-3.95.49-7 3.85-7 7.93 0 4.42 3.58 8 8 8 4.08 0 7.44-3.05 7.93-7h-2.02c-.46 2.84-2.92 5-5.91 5-3.31 0-6-2.69-6-6 0-2.99 2.16-5.45 5-5.91V4.07z"/>
        </svg>
      )
    },
    {
      name: "Vercel",
      category: "Cloud & DevOps",
      desc: "Automated CI/CD pipelines, Edge middleware, serverless functions & global CDN caching.",
      isOrange: true,
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="section-container">
        <div className="center-header">
          <span className="section-tag">— Core Arsenal</span>
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
