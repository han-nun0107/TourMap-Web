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
    id: 1,
  },
  {
    image: gyeongbokgungPalace,
    title: 'Trending Card2',
    location: 'Trending location2',
    tag: 'Culture',
    tagIcon: BookIcon,
    id: 2,
  },
  {
    image: nationalMuseum,
    title: 'Trending Card3',
    location: 'Trending location3',
    tag: 'Festival',
    tagIcon: CalendarIcon,
    id: 3,
  },
  {
    image: seoulLanternFestival,
    title: 'Trending Card4',
    location: 'Trending location4',
    tag: 'Food',
    tagIcon: UtensilsIcon,
    id: 4,
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
    tag: 'Attraction',
    tagIcon: TrendingUpIcon,
    distance: '100m',
    id: 1,
  },
  {
    image: gyeongbokgungPalace,
    title: 'Search Card2',
    location: 'Search location2',
    tag: 'Culture',
    tagIcon: TrendingUpIcon,
    distance: '200m',
    id: 2,
  },
  {
    image: nationalMuseum,
    title: 'Search Card3',
    location: 'Search location3',
    tag: 'Festival',
    tagIcon: TrendingUpIcon,
    distance: '300m',
    id: 3,
  },
  {
    image: seoulLanternFestival,
    title: 'Search Card4',
    location: 'Search location4',
    tag: 'Food',
    tagIcon: TrendingUpIcon,
    distance: '400m',
    id: 4,
  },
  {
    image: gwangjangMarket,
    title: 'Search Card5',
    location: 'Search location1',
    tag: 'Leisure',
    tagIcon: TrendingUpIcon,
    distance: '100m',
    id: 5,
  },
  {
    image: gyeongbokgungPalace,
    title: 'Search Card6',
    location: 'Search location2',
    tag: 'Shopping',
    tagIcon: TrendingUpIcon,
    distance: '200m',
    id: 6,
  },
  {
    image: nationalMuseum,
    title: 'Search Card7',
    location: 'Search location3',
    tag: 'Stay',
    tagIcon: TrendingUpIcon,
    distance: '300m',
    id: 7,
  },
  {
    image: seoulLanternFestival,
    title: 'Search Card8',
    location: 'Search location4',
    tag: 'TourCourse',
    tagIcon: TrendingUpIcon,
    distance: '400m',
    id: 8,
  },
]
