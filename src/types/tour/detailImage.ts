import { TourApiBodyPaged, TourApiResponse } from './common'

type DetailImageItem = {
  cpyrhtDivCd: string
  contentid: string
  imgname: string
  originimgurl: string
  serialnum: string
  smallimageurl: string
}

type DetailImageBody = TourApiBodyPaged<DetailImageItem>

export type DetailImage = TourApiResponse<DetailImageBody>
