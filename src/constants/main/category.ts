import {
  Landmark,
  PartyPopper,
  Route,
  Theater,
  Bike,
  Hotel,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react'

import type { AppLocale } from '@/i18n/routing'

type CategoryOption = {
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  value: string
}

// 카테고리 value와 언어별 contentTypeId 매핑
export const CATEGORY_TO_CONTENT_TYPE_ID: Record<
  string,
  Record<AppLocale, string>
> = {
  attraction: {
    ko: '12',
    en: '76',
    ja: '76',
    'zh-CN': '76',
    'zh-TW': '76',
    fr: '76',
    de: '76',
    es: '76',
    ru: '76',
  },
  culture: {
    ko: '14',
    en: '78',
    ja: '78',
    'zh-CN': '78',
    'zh-TW': '78',
    fr: '78',
    de: '78',
    es: '78',
    ru: '78',
  },
  festival: {
    ko: '15',
    en: '85',
    ja: '85',
    'zh-CN': '85',
    'zh-TW': '85',
    fr: '85',
    de: '85',
    es: '85',
    ru: '85',
  },
  'tour-course': {
    ko: '25',
    en: '77',
    ja: '77',
    'zh-CN': '77',
    'zh-TW': '77',
    fr: '77',
    de: '77',
    es: '77',
    ru: '77',
  },
  leisure: {
    ko: '28',
    en: '75',
    ja: '75',
    'zh-CN': '75',
    'zh-TW': '75',
    fr: '75',
    de: '75',
    es: '75',
    ru: '75',
  },
  stay: {
    ko: '32',
    en: '80',
    ja: '80',
    'zh-CN': '80',
    'zh-TW': '80',
    fr: '80',
    de: '80',
    es: '80',
    ru: '80',
  },
  shopping: {
    ko: '38',
    en: '79',
    ja: '79',
    'zh-CN': '79',
    'zh-TW': '79',
    fr: '79',
    de: '79',
    es: '79',
    ru: '79',
  },
  food: {
    ko: '39',
    en: '82',
    ja: '82',
    'zh-CN': '82',
    'zh-TW': '82',
    fr: '82',
    de: '82',
    es: '82',
    ru: '82',
  },
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  {
    title: 'categories.Attractions',
    Icon: Landmark,
    value: 'attraction',
  },
  {
    title: 'categories.Culture',
    Icon: Theater,
    value: 'culture',
  },
  {
    title: 'categories.Festival',
    Icon: PartyPopper,
    value: 'festival',
  },
  {
    title: 'categories.TourCourse',
    Icon: Route,
    value: 'tour-course',
  },
  {
    title: 'categories.Leisure',
    Icon: Bike,
    value: 'leisure',
  },
  {
    title: 'categories.Stay',
    Icon: Hotel,
    value: 'stay',
  },
  {
    title: 'categories.Shopping',
    Icon: ShoppingBag,
    value: 'shopping',
  },
  {
    title: 'categories.Food',
    Icon: UtensilsCrossed,
    value: 'food',
  },
]
