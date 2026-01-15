import type {
  AreaBasedList,
  AreaBasedListItem,
} from '@/types/tour/areaBasedList'
import type { TourApiBodyBase, TourApiResponse } from '@/types/tour/common'
import { unwrapTourApiResponse } from '@/types/tour/common'

export function normalizeToArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  return [value]
}

// Tour API 응답에서 body.items.item을 배열로 추출
export function parseTourApiItemArray<TItem>(
  data: TourApiResponse<TourApiBodyBase<TItem>> | undefined
): TItem[] {
  const inner = unwrapTourApiResponse(data)
  const raw = inner?.body?.items?.item
  return normalizeToArray(raw)
}

// Tour API 응답에서 AreaBasedListItem 배열을 추출하는 유틸리티 함수
export const parseTourApiResponse = (
  data: AreaBasedList | undefined
): AreaBasedListItem[] => {
  const items = parseTourApiItemArray<AreaBasedListItem>(data).filter(
    (item) => item.contentid && !isNaN(Number(item.contentid))
  )

  return items
}
