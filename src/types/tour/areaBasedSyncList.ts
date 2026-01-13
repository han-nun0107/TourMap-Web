import { TourApiBodyBase, TourApiPaging, TourApiResponse } from './common'

type AreaBasedSyncListItem = {
  lclsSystm3: string
  mapx: string
  mapy: string
  mlevel: string
  modifiedtime: string
  showflag: string
  sigungucode: string
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
  cpyrhtDivCd: string
  firstimage: string
  firstimage2: string
  zipcode: string
  lDongRegnCd: string
  lDongSignguCd: string
  lclsSystm1: string
  lclsSystm2: string
  oldContentid: string
}

type AreaBasedSyncListBody = TourApiBodyBase<AreaBasedSyncListItem> &
  Partial<TourApiPaging> & { totalCount: number; pageNo: number }

export type AreaBasedSyncList = TourApiResponse<AreaBasedSyncListBody>
