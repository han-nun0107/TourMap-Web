import { unwrapTourApiResponse } from '@/types/tour/common'

/**
 * Tour API 응답(body에 numOfRows/pageNo/totalCount가 있는 형태)에서
 * 다음 페이지 번호를 계산
 *
 * - 다음 페이지가 있으면: pageNo + 1
 * - 없으면: undefined
 */
export function getNextPageParamFromTourApi(
  lastPage: unknown
): number | undefined {
  const inner = unwrapTourApiResponse(lastPage as never)
  const body = (inner as { body?: unknown } | undefined)?.body as
    | { numOfRows?: unknown; pageNo?: unknown; totalCount?: unknown }
    | undefined

  const numOfRows = body?.numOfRows
  const pageNo = body?.pageNo
  const totalCount = body?.totalCount

  if (
    typeof numOfRows !== 'number' ||
    typeof pageNo !== 'number' ||
    typeof totalCount !== 'number'
  ) {
    return undefined
  }

  const hasNext = pageNo * numOfRows < totalCount
  return hasNext ? pageNo + 1 : undefined
}
