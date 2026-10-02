export default function Marquee() {
  const items = [
    "Full-Stack Development",
    "Cybersecurity Hardening",
    "Next.js & React",
    "PostgreSQL Optimization",
    "Python Backend & Scripting",
    "Node.js Microservices",
    "Vercel Cloud Deployments",
    "Penetration Testing"
  ];

  return (
    <div className="marquee-ticker-bar" aria-hidden="true">
      <div className="ticker-track">
        <div className="ticker-content">
          {items.map((item, index) => (
            <span key={`first-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '32px' }}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
        <div className="ticker-content">
          {items.map((item, index) => (
            <span key={`second-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '32px' }}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
