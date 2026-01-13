import { TourApiBodyPaged, TourApiResponse } from './common'

type SearchFestivalItem = {
  lclsSystm3: string
  tel: string
  title: string
  addr1: string
  addr2: string
  areacode: string
  cat1: string
  cat2: string
  cat3: string
  contentid: string
  contenttypeid: string
  createdtime: string
  eventstartdate: string
  cpyrhtDivCd: string
  eventenddate: string
  firstimage: string
  firstimage2: string
  mapx: string
  mapy: string
  mlevel: string
  modifiedtime: string
  sigungucode: string
  zipcode: string
  progresstype: string
  festivaltype: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
}

type SearchFestivalBody = TourApiBodyPaged<SearchFestivalItem>

export type SearchFestival = TourApiResponse<SearchFestivalBody>
