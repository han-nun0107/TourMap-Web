import { CATEGORY_TO_CONTENT_TYPE_ID } from '@/constants/main/category'
import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main/filterOptions'
import type { AppLocale } from '@/i18n/routing'

type FilterMode = 'region' | 'category'

type FilterParams<TItem> = {
  items: TItem[]
  activeFilter: string
  type?: string
  mode?: FilterMode
  locale?: AppLocale
}

type FilterableTourItem = {
  areacode?: string
  contenttypeid?: string
}

export const filterTourItems = <TItem extends FilterableTourItem>({
  items,
  activeFilter,
  type,
  mode = 'region',
  locale = 'ko',
}: FilterParams<TItem>): TItem[] => {
  if (type === 'trending') return items

  if (mode === 'category') {
    const targetContentTypeId =
      CATEGORY_TO_CONTENT_TYPE_ID[activeFilter]?.[locale]
    if (!targetContentTypeId) return items

    return items.filter((item) => item.contenttypeid === targetContentTypeId)
  }

  if (activeFilter === 'all-regions') return items

  const targetAreaCode = AREA_CODE_BY_FILTER_VALUE[activeFilter] ?? activeFilter

  return items.filter((item) => item.areacode === targetAreaCode)
}
