import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

import { Header } from '@/components/layout'
import { routing, type AppLocale } from '@/i18n/routing'
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

function normalizeLocale(locale: string): AppLocale {
  if (routing.locales.includes(locale as AppLocale)) {
    return locale as AppLocale
  }
  return routing.defaultLocale
}

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://tour-map.com'

const LOCALE_MAP: Record<AppLocale, { ogLocale: string; htmlLang: string }> = {
  ko: { ogLocale: 'ko_KR', htmlLang: 'ko-KR' },
  en: { ogLocale: 'en_US', htmlLang: 'en-US' },
  de: { ogLocale: 'de_DE', htmlLang: 'de-DE' },
  es: { ogLocale: 'es_ES', htmlLang: 'es-ES' },
  fr: { ogLocale: 'fr_FR', htmlLang: 'fr-FR' },
  ja: { ogLocale: 'ja_JP', htmlLang: 'ja-JP' },
  ru: { ogLocale: 'ru_RU', htmlLang: 'ru-RU' },
  'zh-CN': { ogLocale: 'zh_CN', htmlLang: 'zh-CN' },
  'zh-TW': { ogLocale: 'zh_TW', htmlLang: 'zh-TW' },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const appLocale = normalizeLocale(locale)
  const localeConfig = LOCALE_MAP[appLocale]

  const pathname = `/${appLocale}`
  const canonicalUrl = new URL(pathname, BASE_URL)

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: 'Tour Map | Interactive Travel Guide & Attractions',
      template: '%s | Tour Map',
    },
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
      'seoul tour',
      'korea travel',
    ],
    authors: [{ name: 'Tour Map Team' }],
    creator: 'Tour Map',
    publisher: 'Tour Map',
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
    alternates: {
      canonical: canonicalUrl.toString(),
      languages: {
        'ko-KR': '/ko',
        'en-US': '/en',
        'de-DE': '/de',
        'es-ES': '/es',
        'fr-FR': '/fr',
        'ja-JP': '/ja',
        'ru-RU': '/ru',
        'zh-CN': '/zh-CN',
        'zh-TW': '/zh-TW',
      },
    },
    openGraph: {
      title: 'Tour Map – Interactive Travel Guide',
      description:
        'An interactive tour map to explore attractions, routes, and must-see destinations.',
      url: canonicalUrl.toString(),
      siteName: 'Tour Map',
      locale: localeConfig.ogLocale,
      alternateLocale: [
        'en_US',
        'de_DE',
        'es_ES',
        'fr_FR',
        'ja_JP',
        'ru_RU',
        'zh_CN',
        'zh_TW',
      ],
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
