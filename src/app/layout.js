import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Pann Labs — Data Integrity Meets AI Innovation',
    template: '%s | Pann Labs'
  },
  description: 'Pann Labs, founded by Peter Akpan Jr., delivers thorough, transparent, and transformative data solutions. Specializing in data integrity, AI-integrated analytics, and multi-domain expertise across oil & gas, retail, and general analytics.',
  keywords: ['data analytics', 'AI', 'data integrity', 'data quality', 'data governance', 'Peter Akpan', 'Pann Labs', 'consulting', 'oil and gas analytics', 'retail analytics'],
  authors: [{ name: 'Peter Akpan Jr.' }],
  creator: 'Pann Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pannlabs.com',
    siteName: 'Pann Labs',
    title: 'Pann Labs — Data Integrity Meets AI Innovation',
    description: 'Thorough, transparent, and transformative data solutions by Peter Akpan Jr.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pann Labs — Data Integrity Meets AI Innovation',
    description: 'Thorough, transparent, and transformative data solutions by Peter Akpan Jr.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
