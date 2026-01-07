import {
  BookIcon,
  CalendarIcon,
  MapPinIcon,
  TrendingUpIcon,
  UtensilsIcon,
} from 'lucide-react'

import {
  gwangjangMarket,
  gyeongbokgungPalace,
  nationalMuseum,
  seoulLanternFestival,
} from '@/assets/images/card'

export const trendingCardMock = [
  {
    image: gwangjangMarket,
    title: 'Trending Card1',
    location: 'Trending location1',
    tag: 'Trending',
    tagIcon: TrendingUpIcon,
  },
  {
    image: gyeongbokgungPalace,
    title: 'Trending Card2',
    location: 'Trending location2',
    tag: 'Culture',
    tagIcon: BookIcon,
  },
  {
    image: nationalMuseum,
    title: 'Trending Card3',
    location: 'Trending location3',
    tag: 'Festival',
    tagIcon: CalendarIcon,
  },
  {
    image: seoulLanternFestival,
    title: 'Trending Card4',
    location: 'Trending location4',
    tag: 'Food',
    tagIcon: UtensilsIcon,
  },
]

export const categoryCardMock = [
  {
    Icon: BookIcon,
    title: 'Category Card1',
  },
  {
    Icon: CalendarIcon,
    title: 'Category Card2',
  },
  {
    Icon: UtensilsIcon,
    title: 'Category Card3',
  },
  {
    Icon: MapPinIcon,
    title: 'Category Card4',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Category Card5',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Category Card6',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Category Card7',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Category Card8',
  },
]

export const searchCardMock = [
  {
    image: gwangjangMarket,
    title: 'Search Card1',
    location: 'Search location1',
    tag: 'Search',
    tagIcon: 'TrendingUpIcon' as const,
    distance: '100m',
  },
  {
    image: gyeongbokgungPalace,
    title: 'Search Card2',
    location: 'Search location2',
    tag: 'Search',
    tagIcon: 'TrendingUpIcon' as const,
    distance: '200m',
  },
  {
    image: nationalMuseum,
    title: 'Search Card3',
    location: 'Search location3',
    tag: 'Search',
    tagIcon: 'TrendingUpIcon' as const,
    distance: '300m',
  },
  {
    image: seoulLanternFestival,
    title: 'Search Card4',
    location: 'Search location4',
    tag: 'Search',
    tagIcon: 'TrendingUpIcon' as const,
    distance: '400m',
  },
]
