import { getTours } from '@/api/tour.api'

const BASE_URL = process.env.NEXT_PUBLIC_TOUR_API_URL

// tour.endpoint.ts
export const TOUR_ENDPOINT = {
  /** 지역코드조회 */
  areaCode2: 'areaCode2',
  /** 반려동물 동반 여행 정보 한국만 조회 가능*/
  detailPetTour2: 'detailPetTour2',
  /** 서비스 분류 코드 조회 */
  categoryCode2: 'categoryCode2',
  /** 지역기반 관광정보 조회 */
  areaBasedList2: 'areaBasedList2',
  /** 위치기반 관광정보 조회 */
  locationBasedList2: 'locationBasedList2',
  /** 키워드 검색 조회 */
  searchKeyword2: 'searchKeyword2',
  /** 행사 정보 조회 */
  searchFestival2: 'searchFestival2',
  /** 숙박 정보 조회 */
  searchStay2: 'searchStay2',
  /** 공통 정보 조회 */
  detailCommon2: 'detailCommon2',
  /** 소개 정보 조회 */
  detailIntro2: 'detailIntro2',
  /** 반복 정보 조회 */
  detailInfo2: 'detailInfo2',
  /** 이미지 정보 조회 */
  detailImage2: 'detailImage2',
  /** 분류체계 코드 조회 */
  lclsSystmCode2: 'lclsSystmCode2',
  /** 관광정보 동기화 목록 조회 */
  areaBasedSyncList2: 'areaBasedSyncList2',
  /** 법정동 코드 조회 */
  ldongCode2: 'ldongCode2',
} as const

export const BASE_BY_LANG = {
  ko: '/KorService2',
  en: '/EngService2',
  jp: '/JpnService2',
  cn: '/ChsService2',
  tc: '/ChtService2',
  fr: '/FreService2',
  de: '/GerService2',
  es: '/SpnService2',
  ru: '/RusService2',
}

export async function getTourList(
  lang: keyof typeof BASE_BY_LANG,
  endpoint: keyof typeof TOUR_ENDPOINT = 'areaCode2',
  params: Partial<Record<string, string>> = {}
) {
  const serviceKey = process.env.NEXT_PUBLIC_TOUR_API_KEY || ''
  if (!serviceKey) {
    throw new Error('NEXT_PUBLIC_TOUR_API_KEY is not set')
  }
  const fullUrl = `${BASE_URL}${BASE_BY_LANG[lang]}/${TOUR_ENDPOINT[endpoint]}`
  return getTours(fullUrl, {
    serviceKey,
    numOfRows: '10',
    pageNo: '1',
    MobileOS: 'ETC',
    MobileApp: 'TestApp',
    _type: 'json',
    ...params,
  })
}
