import type { TourApiBodyPaged, TourApiResponse } from '@/types/tour/common'
import { DetailCommon, DetailCommonItem } from '@/types/tour/detailCommon'

export const getDetailCommonItem = <TItem>(
  data: TourApiResponse<TourApiBodyPaged<TItem>> | undefined
): TItem | undefined => {
  if (!data) return undefined

  const inner = 'response' in data ? data.response : data
  const item = Array.isArray(inner.body?.items?.item)
    ? inner.body?.items?.item[0]
    : inner.body?.items?.item

  return item
}

// contentTypeId만 반환
export const getContentTypeId = (
  data: DetailCommon | undefined
): string | undefined => {
  return getDetailCommonItem<DetailCommonItem>(data)?.contenttypeid
}
