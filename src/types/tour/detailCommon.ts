import { TourApiBodyPaged, TourApiResponse } from './common'

export type DetailCommonItem = {
  overview: string
  contentid: string
  sigungucode: string
  cat1: string
  cat2: string
  cat3: string
  addr1: string
  addr2: string
  zipcode: string
  mapx: string
  mapy: string
  mlevel: string
  cpyrhtDivCd: string
  contenttypeid: string
  createdtime: string
  homepage: string
  modifiedtime: string
  tel: string
  telname: string
  title: string
  firstimage: string
  firstimage2: string
  areacode: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
  lclsSystm3: string
}

type DetailCommonBody = TourApiBodyPaged<DetailCommonItem>

export type DetailCommon = TourApiResponse<DetailCommonBody>
