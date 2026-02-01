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

/** Tour API는 항상 { response: { header, body } } 형태로 반환 */
export type TourApiResponse<TBody> = {
  response: TourApiInner<TBody>
}

export function unwrapTourApiResponse<TBody>(
  data: TourApiResponse<TBody>
): TourApiInner<TBody> {
  return data.response
}
