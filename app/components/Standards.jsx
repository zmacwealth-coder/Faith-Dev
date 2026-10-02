export default function Standards() {
  const principles = [
    {
      step: "01",
      title: "Zero-Trust Architecture",
      desc: "Every network request, server action, and database query is authenticated, authorized, and validated with strict schema boundaries.",
    },
    {
      step: "02",
      title: "Deterministic Performance",
      desc: "Leveraging Next.js Server Components, Edge caching, and optimized PostgreSQL indexes to maintain sub-50ms core rendering times.",
    },
    {
      step: "03",
      title: "Defensive Code Quality",
      desc: "Continuous automated scanning for OWASP Top 10 vulnerabilities, type-safe data pipelines, and audit trails for compliance.",
    },
  ];

  return (
    <section className="standards-section" id="standards">
      <div className="section-container">
        <div className="standards-header">
          <span className="section-tag">Quality &amp; Defense</span>
          <h2 className="section-title">Engineering <span className="highlight-text">Standards</span></h2>
          <p className="section-lead-text">
            Core principles applied across every full-stack deployment and security engagement.
          </p>
        </div>

        <div className="standards-grid">
          {principles.map((item) => (
            <div key={item.step} className="standard-card">
              <span className="standard-step">{item.step}</span>
              <h3 className="standard-title">{item.title}</h3>
              <p className="standard-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
