import './globals.css';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://foludev.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FOLU Dev | Full-stack Developer & Cybersecurity Specialist',
    template: '%s | FOLU Dev',
  },
  description: 'Portfolio of FOLU Dev. Full-stack Developer and Cybersecurity Specialist engineering scalable web applications with Next.js, PostgreSQL, Node.js, Python, and zero-trust security architecture.',
  keywords: [
    'FOLU Dev',
    'Full-stack Developer',
    'Cybersecurity Specialist',
    'Wazuh SIEM',
    'Splunk Log Analysis',
    'Linux Security',
    'Next.js Developer',
    'PostgreSQL Specialist',
    'Python Security Scripting',
    'Node.js Security',
    'Web Application Security',
    'Penetration Testing',
    'Vercel Deployment'
  ],
  authors: [{ name: 'FOLU Dev', url: siteUrl }],
  creator: 'FOLU Dev',
  publisher: 'FOLU Dev',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'FOLU Dev | Full-stack Developer & Cybersecurity Specialist',
    description: 'Engineering resilient full-stack applications and fortified zero-trust security architectures.',
    url: siteUrl,
    siteName: 'FOLU Dev Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOLU Dev | Full-stack Developer & Cybersecurity Specialist',
    description: 'Engineering resilient full-stack applications and fortified zero-trust security architectures.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'FOLU Dev',
        jobTitle: 'Full-stack Developer & Cybersecurity Specialist',
        url: siteUrl,
        sameAs: [
          'https://github.com',
          'https://linkedin.com',
          'https://x.com'
        ],
        knowsAbout: [
          'Full-Stack Web Development',
          'Next.js',
          'React',
          'PostgreSQL',
          'Node.js',
          'Python',
          'Cybersecurity Hardening',
          'Wazuh SIEM Management',
          'Splunk SOC and Log Analysis',
          'Linux Kernel Security and auditd',
          'Python Security Automation',
          'SIEM and Threat Forensics',
          'School Management Systems and RBAC',
          'Hospital Management Systems and EHR',
          'Dynamic Real Estate Applications',
          'Progressive Web Applications (PWA)',
          'Penetration Testing',
          'OWASP Vulnerability Mitigation',
          'Cloud Architecture'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'FOLU Dev Portfolio',
        description: 'Personal portfolio and technical services of FOLU Dev, Full-stack Developer & Cybersecurity Specialist.',
        publisher: {
          '@id': `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
