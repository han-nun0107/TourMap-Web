import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main/filterOptions'
import type { AreaBasedListItem } from '@/types/tour/areaBasedList'

type FilterParams = {
  items: AreaBasedListItem[]
  activeFilter: string
  type?: string
}

export const filterTourItems = ({
  items,
  activeFilter,
  type,
}: FilterParams): AreaBasedListItem[] => {
  if (type === 'trending') return items
  if (activeFilter === 'all-regions') return items

  const targetAreaCode = AREA_CODE_BY_FILTER_VALUE[activeFilter] ?? activeFilter

  return items.filter((item) => item.areacode === targetAreaCode)
}
