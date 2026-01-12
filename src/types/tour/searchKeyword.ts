import { TourApiBodyPaged, TourApiResponse } from './common'

type SearchKeywordItem = {
  lclsSystm3: string
  cpyrhtDivCd: string
  firstimage: string
  sigungucode: string
  cat1: string
  cat2: string
  cat3: string
  contentid: string
  tel: string
  title: string
  addr1: string
  areacode: string
  mapy: string
  mlevel: string
  modifiedtime: string
  firstimage2: string
  mapx: string
  contenttypeid: string
  addr2: string
  createdtime: string
  zipcode: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
}

type SearchKeywordBody = TourApiBodyPaged<SearchKeywordItem>

export type SearchKeyword = TourApiResponse<SearchKeywordBody>
