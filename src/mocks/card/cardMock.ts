import {
  BookIcon,
  CalendarIcon,
  MapPinIcon,
  TrendingUpIcon,
  UtensilsIcon,
} from 'lucide-react'

import gwangjangMarket from '@/assets/images/card/Gwangjang Market.png'
import gyeongbokgungPalace from '@/assets/images/card/Gyeongbokgung Palace.png'
import nationalMuseum from '@/assets/images/card/National Museum of Korea.png'
import seoulLanternFestival from '@/assets/images/card/Seoul Lantern Festival.png'

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
