import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Plise Perde Temizliği Profesyonel Hizmet Hemen Alın Şimdi!',
  description:
    'Plise Perde Temizliği ile perdeleriniz ilk günkü gibi olsun. Profesyonel ekip, hızlı servis, garantili temizlik hemen randevu alın.',
  keywords: [
    'plise perde temizliği',
    'plise perde',
    'pliseli perde',
    'gece gündüz plise perde',
    'perde temizliği',
    'honeycomb perde',
    'plise perde fiyat',
    'perde yıkama',
    'profesyonel perde temizliği',
  ],
  authors: [{ name: 'Plise Perde Temizliği', url: 'https://www.fenetresystems.com' }],
  creator: 'Plise Perde Temizliği',
  publisher: 'Plise Perde Temizliği',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://pliseperdetemizligi.com.tr',
    siteName: 'Plise Perde Temizliği',
    title: 'Plise Perde Temizliği Profesyonel Hizmet',
    description:
      'Plise Perde Temizliği ile perdeleriniz ilk günkü gibi olsun. Profesyonel ekip, hızlı servis, garantili temizlik.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plise Perde Temizliği Profesyonel Hizmet',
    description: 'Plise Perde Temizliği ile perdeleriniz ilk günkü gibi olsun. Profesyonel ekip, hızlı servis, garantili temizlik.',
    creator: '@pliseperde',
  },
  alternates: {
    canonical: 'https://pliseperdetemizligi.com.tr',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#83bd81" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Plise Perde Temizliği',
              description: 'Profesyonel plise perde temizliği hizmetleri.',
              url: 'https://pliseperdetemizligi.com.tr',
              telephone: '+905403363873',
              email: 'info@fenetresystems.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
                addressLocality: 'Gebze',
                addressRegion: 'Kocaeli',
                addressCountry: 'TR',
              },
              sameAs: [
                'https://www.facebook.com/FenetreSystems/',
                'https://www.instagram.com/fenetresystems/',
                'https://x.com/FenetreSystems',
                'https://www.linkedin.com/company/fenetresystems/',
                'https://tr.pinterest.com/fenetresystems/',
                'https://www.youtube.com/@FenetreSystems',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Plise Perde Sistemleri',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plise Perde Montajı' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gece Gündüz Plise Perde' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Honeycomb Plise Perde' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
