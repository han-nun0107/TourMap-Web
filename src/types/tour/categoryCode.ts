import { TourApiBodyPaged, TourApiResponse } from './common'

type CategoryCodeItem = {
  name: string
  rnum: string
  code: string
}

type CategoryCodeBody = TourApiBodyPaged<CategoryCodeItem>

export type CategoryCode = TourApiResponse<CategoryCodeBody>
