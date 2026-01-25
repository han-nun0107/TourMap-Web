import type { AppLocale } from '@/i18n/routing'
import type { DetailCommon, DetailIntro } from '@/types/tour'
import type { DetailCommonItem } from '@/types/tour/detailCommon'
import type { DetailIntroItem } from '@/types/tour/detailIntro'
import { getContentTypeId, getDetailCommonItem } from '@/utils/getContentTypeId'

import { getTourList } from './tour.service'

export type TourDetailData = {
  detailCommonItem: DetailCommonItem
  detailIntroItem: DetailIntroItem | undefined
}

export async function getTourDetailData(
  contentId: string,
  locale: AppLocale
): Promise<TourDetailData> {
  // 공통 정보 조회
  const detailCommonData = await getTourList<DetailCommon>(
    locale,
    'detailCommon2',
    { contentId: contentId },
    '1'
  )

  const detailCommonItem =
    getDetailCommonItem<DetailCommonItem>(detailCommonData)
  const contentTypeId = getContentTypeId(detailCommonData)

  if (!detailCommonItem || !contentTypeId) {
    throw new Error(`Tour detail not found for contentId: ${contentId}`)
  }

  // 소개 정보 조회
  const detailIntroData = await getTourList<DetailIntro>(
    locale,
    'detailIntro2',
    { contentId: contentId, contentTypeId },
    '1'
  )

  const detailIntroItem = getDetailCommonItem<DetailIntroItem>(detailIntroData)

  return {
    detailCommonItem,
    detailIntroItem,
  }
}
