import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, getProjectBySlug } from '../../data/projectsData';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://foludev.com';

  if (!project) {
    return {
      title: 'Project Not Found | FOLU Dev',
      description: 'The requested case study could not be found.',
    };
  }

  const pageUrl = `${siteUrl}/projects/${project.slug}`;
  const ogImageUrl = `${siteUrl}/projects/${project.slug}/opengraph-image`;

  return {
    title: `${project.title} | Technical Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Technical Case Study | FOLU Dev`,
      description: project.summary,
      url: pageUrl,
      siteName: 'FOLU Dev Portfolio',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Architecture Preview`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Technical Case Study`,
      description: project.summary,
      site: '@foludev',
      creator: '@foludev',
      images: [ogImageUrl],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="project-detail-page">
      <div className="section-container" style={{ padding: '40px 24px 80px', maxWidth: '960px' }}>
        <nav style={{ marginBottom: '32px' }} aria-label="Breadcrumb">
          <Link
            href="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--primary-coral)',
            }}
          >
            ← Back to All Projects
          </Link>
        </nav>

        <header style={{ marginBottom: '32px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#78716C',
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}
          >
            {project.cat}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-main)',
              marginBottom: '16px',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#52525B',
              lineHeight: 1.6,
            }}
          >
            {project.summary}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  background: '#F4F4F5',
                  border: '1px solid #E4E4E7',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#27272A',
                }}
              >
                {t}
              </span>
            ))}
            <span
              style={{
                marginLeft: 'auto',
                background: 'var(--primary-coral-light)',
                color: 'var(--primary-coral)',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              {project.stat}
            </span>
          </div>
        </header>

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            aspectRatio: '16 / 9',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: 'var(--shadow-float)',
            border: '1px solid var(--light-border)',
          }}
        >
          <Image
            src={project.image}
            alt={`${project.title} Production Architecture Preview`}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 960px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--light-border)',
              borderRadius: '12px',
              padding: '28px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                marginBottom: '10px',
                color: 'var(--text-main)',
              }}
            >
              Problem &amp; Architectural Challenge
            </h2>
            <p style={{ color: '#52525B', lineHeight: 1.7 }}>{project.details.problem}</p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--light-border)',
              borderRadius: '12px',
              padding: '28px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                marginBottom: '10px',
                color: 'var(--text-main)',
              }}
            >
              Engineering &amp; Security Solution
            </h2>
            <p style={{ color: '#52525B', lineHeight: 1.7 }}>{project.details.solution}</p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--light-border)',
              borderRadius: '12px',
              padding: '28px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Key Deliverables &amp; Technical Highlights
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.details.highlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--primary-coral)', fontWeight: 800 }}>✦</span>
                  <span style={{ color: '#3F3F46', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link
              href="/#contact"
              style={{
                background: 'var(--primary-coral)',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Inquire About Similar Architecture →
            </Link>
            <Link
              href="/#projects"
              style={{
                fontWeight: 600,
                color: '#71717A',
              }}
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
