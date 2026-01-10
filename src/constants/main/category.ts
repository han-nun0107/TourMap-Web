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
    title: 'Attraction',
    Icon: Landmark,
    value: 'attraction',
  },
  {
    title: 'Culture',
    Icon: Theater,
    value: 'culture',
  },
  {
    title: 'Festival',
    Icon: PartyPopper,
    value: 'festival',
  },
  {
    title: 'Tour Course',
    Icon: Route,
    value: 'tour-course',
  },
  {
    title: 'Leisure',
    Icon: Bike,
    value: 'leisure',
  },
  {
    title: 'Stay',
    Icon: Hotel,
    value: 'stay',
  },
  {
    title: 'Shopping',
    Icon: ShoppingBag,
    value: 'shopping',
  },
  {
    title: 'Food',
    Icon: UtensilsCrossed,
    value: 'food',
  },
]
