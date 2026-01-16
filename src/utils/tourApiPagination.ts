import {
  TourApiBodyPaged,
  TourApiResponse,
  unwrapTourApiResponse,
} from '@/types/tour/common'

/**
 * Tour API 응답(body에 numOfRows/pageNo/totalCount가 있는 형태)에서
 * 다음 페이지 번호를 계산
 *
 * - 다음 페이지가 있으면: pageNo + 1
 * - 없으면: undefined
 */
export const getNextPageParamFromTourApi = (
  lastPage: TourApiResponse<TourApiBodyPaged<unknown>>
): number | undefined => {
  const inner = unwrapTourApiResponse(lastPage)
  const body = inner?.body

  if (
    !body ||
    typeof body.numOfRows !== 'number' ||
    typeof body.pageNo !== 'number' ||
    typeof body.totalCount !== 'number'
  ) {
    return undefined
  }

  const hasNext = body.pageNo * body.numOfRows < body.totalCount
  return hasNext ? body.pageNo + 1 : undefined
}
