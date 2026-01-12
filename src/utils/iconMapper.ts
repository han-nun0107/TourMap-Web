import {
  BookIcon,
  CalendarIcon,
  LucideIcon,
  MapPinIcon,
  TrendingUpIcon,
  UtensilsIcon,
} from 'lucide-react'

/* tag 값에 따라 아이콘을 매핑 */
export const getIconByTag = (
  tag: string
): React.ComponentType<React.SVGProps<SVGSVGElement>> | LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    Trending: TrendingUpIcon,
    Culture: BookIcon,
    Festival: CalendarIcon,
    Food: UtensilsIcon,
    Attraction: MapPinIcon,
    Leisure: TrendingUpIcon,
    Shopping: TrendingUpIcon,
    Stay: TrendingUpIcon,
    TourCourse: TrendingUpIcon,
  }

  return iconMap[tag] || TrendingUpIcon
}
