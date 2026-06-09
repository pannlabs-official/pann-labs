import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    default: 'Peter Akpan — Data Analyst & Builder',
    template: '%s | Peter Akpan'
  },
  description: 'Peter Akpan is a data analyst based in Uyo, Nigeria. Working at Start Innovation Hub, building Pann Labs, and sharing real analytics work — from EDA to dashboards to data integrity frameworks.',
  keywords: [
    'data analyst', 'Power BI', 'Python', 'SQL', 'Excel',
    'data analytics Nigeria', 'Peter Akpan', 'Pann Labs',
    'data integrity', 'data cleaning', 'HR analytics',
    'sales analytics', 'supply chain analytics', 'Uyo Nigeria'
  ],
  authors: [{ name: 'Peter Akpan' }],
  creator: 'Peter Akpan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pann-labs.vercel.app',
    siteName: 'Peter Akpan | Pann Labs',
    title: 'Peter Akpan — Data Analyst & Builder',
    description: 'Real analytics work. Documented. Shared. Built in public.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Akpan — Data Analyst & Builder',
    description: 'Real analytics work. Documented. Shared. Built in public.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-h)' }}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
