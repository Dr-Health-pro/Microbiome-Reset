import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Microbiome Reset - Transform Your Gut Health',
  description: 'Virtual gut microbiome optimization program. Science-backed interventions to restore your digestive health and overall wellness.',
  keywords: 'gut health, microbiome, virtual health, digestive wellness, probiotics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
