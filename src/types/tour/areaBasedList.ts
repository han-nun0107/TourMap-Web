import { TourApiBodyPaged, TourApiResponse } from './common'

type AreaBasedListItem = {
  lclsSystm3: string
  firstimage: string
  firstimage2: string
  mapx: string
  mapy: string
  mlevel: string
  addr2: string
  areacode: string
  modifiedtime: string
  cpyrhtDivCd: string
  cat1: string
  sigungucode: string
  tel: string
  title: string
  addr1: string
  cat2: string
  cat3: string
  contentid: string
  contenttypeid: string
  createdtime: string
  zipcode: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
}

type AreaBasedListBody = TourApiBodyPaged<AreaBasedListItem>

export type AreaBasedList = TourApiResponse<AreaBasedListBody>
