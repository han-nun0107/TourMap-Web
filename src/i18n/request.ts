import { getRequestConfig } from 'next-intl/server'

import { routing, type AppLocale } from './routing'

const messagesMap = {
  ko: () => import('../../messages/ko.json'),
  en: () => import('../../messages/en.json'),
  ja: () => import('../../messages/ja.json'),
  'zh-CN': () => import('../../messages/zh-CN.json'),
  'zh-TW': () => import('../../messages/zh-TW.json'),
  fr: () => import('../../messages/fr.json'),
  de: () => import('../../messages/de.json'),
  es: () => import('../../messages/es.json'),
  ru: () => import('../../messages/ru.json'),
} as const

function isAppLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale)
}

function normalizeLocale(input: string | undefined): AppLocale {
  if (!input) return routing.defaultLocale

  const lower = input.toLowerCase()

  if (lower === 'zh-cn' || lower.startsWith('zh-cn')) return 'zh-CN'
  if (lower === 'zh-tw' || lower.startsWith('zh-tw')) return 'zh-TW'
  if (lower === 'zh-hans') return 'zh-CN'
  if (lower === 'zh-hant') return 'zh-TW'

  const base = input.split('-')[0]

  if (isAppLocale(base)) {
    return base
  }

  return routing.defaultLocale
}

export default getRequestConfig(async ({ requestLocale }) => {
  const rawLocale = await requestLocale
  const resolvedLocale = normalizeLocale(rawLocale)

  const loader =
    messagesMap[resolvedLocale] ?? messagesMap[routing.defaultLocale]

  return {
    locale: resolvedLocale,
    messages: (await loader()).default,
  }
})
