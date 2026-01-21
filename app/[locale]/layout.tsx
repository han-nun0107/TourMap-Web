import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { Header } from '@/components/layout'
import { routing } from '@/i18n/routing'
import { ReactQueryProvider } from '@/providers/react-query-provider'

import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tour Map | Interactive Travel Guide & Attractions',
  icons: {
    icon: '/og/logo.png',
    shortcut: '/og/logo.png',
    apple: '/og/logo.png',
  },
  description:
    'Explore popular tourist attractions with an interactive tour map. Discover destinations, routes, and travel tips all in one place.',
  keywords: [
    'tour map',
    'travel map',
    'interactive map',
    'tourist attractions',
    'city tour',
    'travel guide',
  ],
  openGraph: {
    title: 'Tour Map – Interactive Travel Guide',
    description:
      'An interactive tour map to explore attractions, routes, and must-see destinations.',
    url: '/tour-map',
    siteName: 'Tour Map',
    images: [
      {
        url: '/og/logo.png',
        width: 1200,
        height: 630,
        alt: 'Interactive Tour Map',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tour Map – Interactive Travel Guide',
    description:
      'Discover destinations and attractions with our interactive tour map.',
    images: ['/og/logo.png'],
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=clusterer,services&autoload=false`}
          strategy="beforeInteractive"
        />
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <Header />
            {children}
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
