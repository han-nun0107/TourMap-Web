import { TourApiBodyBase, TourApiPaging, TourApiResponse } from './common'

type DetailPetTourItem = {
  contentid: string
  acmpyPsblCpam: string
  relaRntlPrdlst: string
  acmpyNeedMtr: string
  relaFrnshPrdlst: string
  etcAcmpyInfo: string
  relaPurcPrdlst: string
  relaAcdntRiskMtr: string
  acmpyTypeCd: string
  relaPosesFclty: string
}

type DetailPetTourBody = TourApiBodyBase<DetailPetTourItem> &
  Partial<TourApiPaging> & { totalCount: number }

export type DetailPetTour = TourApiResponse<DetailPetTourBody>
