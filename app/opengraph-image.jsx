import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FOLU Dev | Full-stack Developer & Cybersecurity Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0D0D0E',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 87, 34, 0.15) 0%, transparent 60%)',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#FF5722',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '24px',
              color: '#FFFFFF',
            }}
          >
            F
          </div>
          <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Folu Dev
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#F4F3EF',
              maxWidth: '950px',
            }}
          >
            Full-stack Developer &amp; Cybersecurity Specialist
          </div>
          <p
            style={{
              fontSize: '26px',
              color: '#94A3B8',
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Building resilient full-stack applications with Next.js, PostgreSQL, Node.js, and fortified zero-trust architectures.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {['Next.js', 'PostgreSQL', 'Python', 'Node.js', 'Cybersecurity'].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid #27272A',
                borderRadius: '6px',
                padding: '10px 20px',
                fontSize: '18px',
                fontWeight: 600,
                color: '#E8E6E0',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
