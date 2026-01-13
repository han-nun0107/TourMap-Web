import { TourApiBodyPaged, TourApiResponse } from './common'

type AreaCodeItem = {
  code: string
  name: string
  rnum: string
}

type AreaCodeBody = TourApiBodyPaged<AreaCodeItem>

export type AreaCode = TourApiResponse<AreaCodeBody>
