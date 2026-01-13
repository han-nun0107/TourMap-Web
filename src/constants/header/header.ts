export const NAV_ITEMS = [
  {
    labelKey: 'layout.Home',
    href: '/',
  },
  {
    labelKey: 'layout.Search',
    href: '/search',
  },
  {
    labelKey: 'layout.Map',
    href: '/map',
  },
  {
    labelKey: 'layout.Favorite',
    href: '/favorites',
  },
]

export const LANGUAGE_OPTIONS = [
  { value: 'ko' as const, label: '한국어' },
  { value: 'en' as const, label: 'English' },
  { value: 'ja' as const, label: '日本語' },
  { value: 'zh-CN' as const, label: '中文' },
  { value: 'zh-TW' as const, label: '繁體中文' },
  { value: 'fr' as const, label: 'Français' },
  { value: 'de' as const, label: 'Deutsch' },
  { value: 'es' as const, label: 'Español' },
  { value: 'ru' as const, label: 'Русский' },
] as const
