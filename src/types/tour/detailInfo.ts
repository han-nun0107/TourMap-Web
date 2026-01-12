import { TourApiBodyPaged, TourApiResponse } from './common'

type DetailInfoItem = {
  roomoffseasonminfee1: string
  roomimg4: string
  roomtoiletries: string
  roomsofa: string
  roomcook: string
  roomtable: string
  roomimg5alt: string
  contentid: string
  contenttypeid: string
  fldgubun: string
  infoname: string
  infotext: string
  serialnum: string
  subcontentid: string
  subdetailalt: string
  subdetailimg: string
  subdetailoverview: string
  subname: string
  subnum: string
  roomcode: string
  roomtitle: string
  roomsize1: string
  roomcount: string
  roombasecount: string
  roommaxcount: string
  roomoffseasonminfee2: string
  roompeakseasonminfee1: string
  roompeakseasonminfee2: string
  roomintro: string
  roombathfacility: string
  roombath: string
  roomhometheater: string
  roomaircondition: string
  roomtv: string
  roompc: string
  roomcable: string
  roominternet: string
  roomrefrigerator: string
  roomimg5: string
  roomimg3: string
  roomimg4alt: string
  roomimg3alt: string
  roomhairdryer: string
  roomsize2: string
  roomimg2alt: string
  roomimg1: string
  roomimg1alt: string
  roomimg2: string
  cpyrhtDivCd1: string
  cpyrhtDivCd2: string
  cpyrhtDivCd3: string
  cpyrhtDivCd4: string
  cpyrhtDivCd5: string
}

type DetailInfoBody = TourApiBodyPaged<DetailInfoItem>

export type DetailInfo = TourApiResponse<DetailInfoBody>
