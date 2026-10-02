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

export const metadata = {
  title: "FOLU Dev — Full-stack Developer & Cybersecurity Specialist",
  description: "Personal brand portfolio of FOLU Dev. Full-stack Developer & Cybersecurity Specialist proficient in Next.js, PostgreSQL, Python, Node.js, React, and Vercel.",
  keywords: ["FOLU Dev", "Full-stack Developer", "Cybersecurity", "Next.js", "PostgreSQL", "Python", "Node.js", "React", "Vercel"],
  authors: [{ name: "FOLU Dev" }],
  openGraph: {
    title: "FOLU Dev — Full-stack Developer & Cybersecurity Specialist",
    description: "Building resilient full-stack applications and fortified security architectures.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
