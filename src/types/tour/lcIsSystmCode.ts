import { TourApiBodyPaged, TourApiResponse } from './common'

type LcIsSystmCodeItem = {
  lclsSystm3Nm: string
  name: string
  rnum: string
  code: string
  lclsSystm1Cd: string
  lclsSystm1Nm: string
  lclsSystm2Cd: string
  lclsSystm2Nm: string
  lclsSystm3Cd: string
}

type LcIsSystmCodeBody = TourApiBodyPaged<LcIsSystmCodeItem>

export type LcIsSystmCode = TourApiResponse<LcIsSystmCodeBody>
