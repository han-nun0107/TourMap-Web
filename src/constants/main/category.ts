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
    title: 'categoriesAttractions',
    Icon: Landmark,
    value: 'attraction',
  },
  {
    title: 'categoriesCulture',
    Icon: Theater,
    value: 'culture',
  },
  {
    title: 'categoriesFestival',
    Icon: PartyPopper,
    value: 'festival',
  },
  {
    title: 'categoriesTourCourse',
    Icon: Route,
    value: 'tour-course',
  },
  {
    title: 'categoriesLeisure',
    Icon: Bike,
    value: 'leisure',
  },
  {
    title: 'categoriesStay',
    Icon: Hotel,
    value: 'stay',
  },
  {
    title: 'categoriesShopping',
    Icon: ShoppingBag,
    value: 'shopping',
  },
  {
    title: 'categoriesFood',
    Icon: UtensilsCrossed,
    value: 'food',
  },
]
