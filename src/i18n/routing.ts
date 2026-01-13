import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ko', 'en', 'jp', 'cn', 'tc', 'fr', 'de', 'es', 'ru'] as const,
  defaultLocale: 'ko',
})

export type AppLocale = (typeof routing.locales)[number]
