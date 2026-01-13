import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: [
    'ko',
    'en',
    'ja',
    'zh-CN',
    'zh-TW',
    'fr',
    'de',
    'es',
    'ru',
  ] as const,
  defaultLocale: 'ko',
})

export type AppLocale = (typeof routing.locales)[number]
