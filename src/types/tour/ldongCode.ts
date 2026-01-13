import { TourApiBodyPaged, TourApiResponse } from './common'

type LdongCodeItem = {
  lDongSignguNm: string
  name: string
  rnum: string
  code: string
  lDongRegnCd: string
  lDongRegnNm: string
  lDongSignguCd: string
}

type LdongCodeBody = TourApiBodyPaged<LdongCodeItem>

export type LdongCode = TourApiResponse<LdongCodeBody>
