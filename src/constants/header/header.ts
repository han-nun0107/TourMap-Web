export const NAV_ITEMS = [
  {
    labelKey: 'layoutHome',
    href: '/',
  },
  {
    labelKey: 'layoutSearch',
    href: '/search',
  },
  {
    labelKey: 'layoutMap',
    href: '/map',
  },
  {
    labelKey: 'layoutFavorite',
    href: '/favorites',
  },
]

export const LANGUAGE_OPTIONS = [
  { value: 'ko' as const, label: '한국어' },
  { value: 'en' as const, label: 'English' },
  { value: 'jp' as const, label: '日本語' },
  { value: 'cn' as const, label: '中文' },
  { value: 'tc' as const, label: '繁體中文' },
  { value: 'fr' as const, label: 'Français' },
  { value: 'de' as const, label: 'Deutsch' },
  { value: 'es' as const, label: 'Español' },
  { value: 'ru' as const, label: 'Русский' },
] as const
