import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title').slice(0, 100)
      : 'FOLU Dev | Full-stack Developer & Cybersecurity Specialist';

    const category = searchParams.get('category') || 'Production Architecture';
    const metric = searchParams.get('metric') || 'Zero-Trust Hardened';

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
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 87, 34, 0.18) 0%, transparent 60%)',
            padding: '70px',
            fontFamily: 'sans-serif',
            color: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: '#FF5722',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '22px',
                  color: '#FFFFFF',
                }}
              >
                F
              </div>
              <span style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px' }}>
                Folu Dev
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 87, 34, 0.15)',
                border: '1px solid rgba(255, 87, 34, 0.4)',
                color: '#FF7043',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              {metric}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#A1A1AA',
              }}
            >
              {category}
            </span>
            <div
              style={{
                fontSize: '52px',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-1px',
                color: '#F4F3EF',
                maxWidth: '1020px',
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            {['Next.js', 'PostgreSQL', 'Wazuh & Splunk', 'Linux Security', 'Python'].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: '#18181B',
                  border: '1px solid #27272A',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '16px',
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
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    });
  }
}
