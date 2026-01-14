import type {
  AreaBasedList,
  AreaBasedListItem,
} from '@/types/tour/areaBasedList'
import { unwrapTourApiResponse } from '@/types/tour/common'

/**
 * Tour API 응답에서 AreaBasedListItem 배열을 추출하는 유틸리티 함수
 */
export const parseTourApiResponse = (
  data: AreaBasedList | undefined
): AreaBasedListItem[] => {
  const inner = unwrapTourApiResponse(data)
  const raw = inner?.body?.items?.item

  if (!raw) return []

  const items: AreaBasedListItem[] = (Array.isArray(raw) ? raw : [raw]).filter(
    (item) => item.contentid && !isNaN(Number(item.contentid))
  )

  return items
}
