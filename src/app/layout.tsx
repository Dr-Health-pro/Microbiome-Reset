import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { OrganizationSchema } from '@/components/Schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.microbiome-reset.com'),
  title: 'Microbiome Reset - Transform Your Gut Health in 30 Days',
  description: 'RN-led virtual gut health programs. Personalized protocols, science-backed approach, 30-day guarantee. Serving 40+ U.S. states with evidence-based microbiome optimization.',
  keywords: 'gut health, microbiome, virtual health, digestive wellness, probiotics, IBS, functional medicine, RN-led programs',
  authors: [{ name: 'Dr. Q' }],
  openGraph: {
    title: 'Microbiome Reset - Transform Your Gut Health in 30 Days',
    description: 'RN-led virtual gut health programs. Personalized protocols, science-backed approach, 30-day guarantee.',
    url: 'https://www.microbiome-reset.com',
    siteName: 'Microbiome Reset',
    images: [
      {
        url: '/images/social/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microbiome Reset - Transform Your Gut Health in 30 Days',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microbiome Reset - Transform Your Gut Health',
    description: 'RN-led virtual gut health programs serving 40+ states',
    images: ['/images/social/twitter-card.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationSchema />
        <GoogleAnalytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
