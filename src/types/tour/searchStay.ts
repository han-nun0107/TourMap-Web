import { TourApiBodyPaged, TourApiResponse } from './common'

type SearchStayItem = {
  lclsSystm3: string
  addr1: string
  cpyrhtDivCd: string
  mapy: string
  mlevel: string
  modifiedtime: string
  sigungucode: string
  tel: string
  title: string
  contentid: string
  contenttypeid: string
  createdtime: string
  firstimage: string
  firstimage2: string
  mapx: string
  addr2: string
  areacode: string
  cat1: string
  cat2: string
  cat3: string
  zipcode: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
}

type SearchStayBody = TourApiBodyPaged<SearchStayItem>

export type SearchStay = TourApiResponse<SearchStayBody>
