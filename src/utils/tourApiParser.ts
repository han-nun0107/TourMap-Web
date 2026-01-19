import type { TourApiBodyBase, TourApiResponse } from '@/types/tour/common'
import { unwrapTourApiResponse } from '@/types/tour/common'

export const normalizeToArray = <T>(value: T | T[] | undefined): T[] => {
  if (!value) return []
  if (Array.isArray(value)) return value
  return [value]
}

// Tour API 응답에서 body.items.item을 배열로 추출
export const parseTourApiItemArray = <TItem>(
  data: TourApiResponse<TourApiBodyBase<TItem>> | undefined
): TItem[] => {
  const inner = unwrapTourApiResponse(data)
  const raw = inner?.body?.items?.item
  return normalizeToArray(raw)
}

// Tour API 응답에서 아이템 배열을 추출하는 유틸리티 함수 (제네릭)
export const parseTourApiResponse = <TItem extends { contentid: string }>(
  data: TourApiResponse<TourApiBodyBase<TItem>> | undefined
): TItem[] => {
  const items = parseTourApiItemArray<TItem>(data).filter(
    (item) => item.contentid && !isNaN(Number(item.contentid))
  )

  return items
}
