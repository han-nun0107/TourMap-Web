export type TourApiResponseHeader = {
  resultCode: string
  resultMsg: string
}

export type TourApiPaging = {
  numOfRows: number
  pageNo: number
  totalCount: number
}

export type TourApiItems<TItem> = {
  item: TItem | TItem[]
}

export type TourApiBodyBase<TItem> = {
  items: TourApiItems<TItem>
}

export type TourApiBodyPaged<TItem> = TourApiBodyBase<TItem> & TourApiPaging

export type TourApiInner<TBody> = {
  header: TourApiResponseHeader
  body: TBody
}

/**
 * 실제 API는 보통 response로 한 겹 래핑되지만,
 * 문서/예제(200 example value)는 header/body만 보여주는 경우가 있어 둘 다 허용
 */
export type TourApiResponse<TBody> =
  | TourApiInner<TBody>
  | { response: TourApiInner<TBody> }

export function unwrapTourApiResponse<TBody>(
  data: TourApiResponse<TBody> | undefined
): TourApiInner<TBody> | undefined {
  if (!data) return undefined
  return 'response' in data ? data.response : data
}
