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

type CategoryOption = {
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  value: string
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
