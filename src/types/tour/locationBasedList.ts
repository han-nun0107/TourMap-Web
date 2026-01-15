import { TourApiBodyBase, TourApiPaging, TourApiResponse } from './common'

export type LocationBasedListItem = {
  zipcode: string
  lclsSystm3: string
  contentid: string
  addr2: string
  firstimage2: string
  cpyrhtDivCd: string
  addr1: string
  contenttypeid: string
  createdtime: string
  dist: string
  firstimage: string
  areacode: string
  mapx: string
  mapy: string
  mlevel: string
  modifiedtime: string
  sigungucode: string
  tel: string
  title: string
  cat1: string
  cat2: string
  cat3: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
  radius: string
}

type LocationBasedListBody = TourApiBodyBase<LocationBasedListItem> &
  Partial<TourApiPaging> & { numOfRows: number }

export type LocationBasedList = TourApiResponse<LocationBasedListBody>
