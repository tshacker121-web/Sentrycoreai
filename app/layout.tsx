import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'SentryCore AI - Enterprise Cybersecurity & Threat Defense',
  description: 'Professional cybersecurity audits, penetration testing, SOC2 compliance, and managed endpoint security. Expert threat defense for SMBs and enterprises.',
  keywords: ['cybersecurity', 'penetration testing', 'SOC2 compliance', 'threat defense', 'security audit', 'endpoint security', 'vulnerability assessment'],
  authors: [{ name: 'Muhammad Sameer' }],
  openGraph: {
    title: 'SentryCore AI - Enterprise Cybersecurity Solutions',
    description: 'Professional threat defense and security audits for modern businesses',
    type: 'website',
    locale: 'en_US',
    siteName: 'SentryCore AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SentryCore AI - Cybersecurity Experts',
    description: 'Enterprise-grade threat defense and security compliance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
