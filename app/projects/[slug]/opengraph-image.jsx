import { ImageResponse } from 'next/og';
import { getProjectBySlug, PROJECTS_DATA } from '../../data/projectsData';

export const runtime = 'edge';
export const alt = 'Technical Case Study | FOLU Dev';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateImageMetadata() {
  return PROJECTS_DATA.map((p) => ({
    id: p.slug,
    alt: `${p.title} Case Study Preview`,
    size,
    contentType,
  }));
}

export default async function Image({ params }) {
  const project = getProjectBySlug(params.slug) || {
    title: 'Featured Technical Case Study',
    cat: 'Full-stack & Cybersecurity',
    tags: ['Next.js', 'PostgreSQL', 'Security'],
    stat: 'Production Architecture',
  };

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
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(255, 87, 34, 0.2) 0%, transparent 60%)',
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
              Folu Dev | Case Study
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
            {project.stat}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#A1A1AA',
            }}
          >
            {project.cat}
          </span>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-1px',
              color: '#F4F3EF',
              maxWidth: '1050px',
            }}
          >
            {project.title}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {project.tags.map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: '#18181B',
                border: '1px solid #27272A',
                borderRadius: '6px',
                padding: '10px 18px',
                fontSize: '17px',
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
