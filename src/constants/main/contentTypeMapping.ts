/* TODO: 추후 i18n으로 변환 */

import {
  MapPinIcon,
  BuildingIcon,
  CalendarIcon,
  MapIcon,
  ActivityIcon,
  HotelIcon,
  ShoppingCartIcon,
  UtensilsIcon,
  LucideIcon,
} from 'lucide-react'

import type { AppLocale } from '@/i18n/routing'

type Lang = AppLocale
type ContentType = string

export type ContetntTypeMeta = {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | LucideIcon
}

export const CONTENT_TYPE_LABEL: Record<
  Lang,
  Record<ContentType, ContetntTypeMeta>
> = {
  /* 한글 */
  ko: {
    '12': { name: '관광지', icon: MapPinIcon },
    '14': { name: '문화시설', icon: BuildingIcon },
    '15': { name: '축제/공연/행사', icon: CalendarIcon },
    '25': { name: '여행코스', icon: MapIcon },
    '28': { name: '레포츠', icon: ActivityIcon },
    '32': { name: '숙박', icon: HotelIcon },
    '38': { name: '쇼핑', icon: ShoppingCartIcon },
    '39': { name: '음식점', icon: UtensilsIcon },
  },

  /* 일본어 */
  ja: {
    '76': { name: '観光', icon: MapPinIcon },
    '78': { name: '文化', icon: BuildingIcon },
    '85': { name: 'イベント', icon: CalendarIcon },
    '75': { name: 'レジャー', icon: ActivityIcon },
    '80': { name: '宿泊', icon: HotelIcon },
    '79': { name: '買い物', icon: ShoppingCartIcon },
    '82': { name: '飲食', icon: UtensilsIcon },
    '77': { name: '交通', icon: MapIcon },
  },

  /* 영어 */
  en: {
    '76': { name: 'Attractions', icon: MapPinIcon },
    '78': { name: 'Culture', icon: BuildingIcon },
    '85': { name: 'Events', icon: CalendarIcon },
    '75': { name: 'Leisure', icon: ActivityIcon },
    '80': { name: 'Stay', icon: HotelIcon },
    '79': { name: 'Shopping', icon: ShoppingCartIcon },
    '82': { name: 'Food', icon: UtensilsIcon },
    '77': { name: 'Transport', icon: MapIcon },
  },

  /* 중국어 간체 */
  'zh-CN': {
    '76': { name: '景点', icon: MapPinIcon },
    '78': { name: '文化', icon: BuildingIcon },
    '85': { name: '活动', icon: CalendarIcon },
    '75': { name: '休闲', icon: ActivityIcon },
    '80': { name: '住宿', icon: HotelIcon },
    '79': { name: '购物', icon: ShoppingCartIcon },
    '82': { name: '餐饮', icon: UtensilsIcon },
    '77': { name: '交通', icon: MapIcon },
  },

  /* 중문 번체 */
  'zh-TW': {
    '76': { name: '景點', icon: MapPinIcon },
    '78': { name: '文化', icon: BuildingIcon },
    '85': { name: '活動', icon: CalendarIcon },
    '75': { name: '休閒', icon: ActivityIcon },
    '80': { name: '住宿', icon: HotelIcon },
    '79': { name: '購物', icon: ShoppingCartIcon },
    '82': { name: '餐飲', icon: UtensilsIcon },
    '77': { name: '交通', icon: MapIcon },
  },

  /* 프랑스어 */
  fr: {
    '76': { name: 'Sites', icon: MapPinIcon },
    '78': { name: 'Culture', icon: BuildingIcon },
    '85': { name: 'Événements', icon: CalendarIcon },
    '75': { name: 'Loisirs', icon: ActivityIcon },
    '80': { name: 'Séjour', icon: HotelIcon },
    '79': { name: 'Shopping', icon: ShoppingCartIcon },
    '82': { name: 'Restaurants', icon: UtensilsIcon },
    '77': { name: 'Transport', icon: MapIcon },
  },

  /* 독일어 */
  de: {
    '76': { name: 'Sehensw.', icon: MapPinIcon },
    '78': { name: 'Kultur', icon: BuildingIcon },
    '85': { name: 'Events', icon: CalendarIcon },
    '75': { name: 'Freizeit', icon: ActivityIcon },
    '80': { name: 'Übernachtung', icon: HotelIcon },
    '79': { name: 'Shopping', icon: ShoppingCartIcon },
    '82': { name: 'Essen', icon: UtensilsIcon },
    '77': { name: 'Transport', icon: MapIcon },
  },

  /* 스페인어 */
  es: {
    '76': { name: 'Atracciones', icon: MapPinIcon },
    '78': { name: 'Cultura', icon: BuildingIcon },
    '85': { name: 'Eventos', icon: CalendarIcon },
    '75': { name: 'Ocio', icon: ActivityIcon },
    '80': { name: 'Alojamiento', icon: HotelIcon },
    '79': { name: 'Compras', icon: ShoppingCartIcon },
    '82': { name: 'Comida', icon: UtensilsIcon },
    '77': { name: 'Transporte', icon: MapIcon },
  },

  /* 러시아어 */
  ru: {
    '76': { name: 'Места', icon: MapPinIcon },
    '78': { name: 'Культура', icon: BuildingIcon },
    '85': { name: 'События', icon: CalendarIcon },
    '75': { name: 'Досуг', icon: ActivityIcon },
    '80': { name: 'Отели', icon: HotelIcon },
    '79': { name: 'Покупки', icon: ShoppingCartIcon },
    '82': { name: 'Еда', icon: UtensilsIcon },
    '77': { name: 'Транспорт', icon: MapIcon },
  },
}
