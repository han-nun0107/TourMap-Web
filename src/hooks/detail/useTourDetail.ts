import { useMemo } from 'react'

import { useTour } from '@/hooks/tour/useTour'
import type { AppLocale } from '@/i18n/routing'
import { type DetailCommon, type DetailIntro } from '@/types/tour'
import { getContentTypeId, getDetailCommonItem } from '@/utils/getContentTypeId'

export const useTourDetail = (contentId: string, language: AppLocale) => {
  /* 디테일 공통 데이터 */
  const {
    data: detailCommonData,
    isLoading: detailCommonLoading,
    isError: isDetailCommonError,
  } = useTour<DetailCommon>('detailCommon2', language, {
    contentId,
  })

  /* 디테일 공통 아이템 */
  const detailCommonItem = useMemo(
    () => getDetailCommonItem(detailCommonData),
    [detailCommonData]
  )

  /* 콘텐츠 타입 ID */
  const contentTypeId = useMemo(
    () => getContentTypeId(detailCommonData),
    [detailCommonData]
  )

  /* 디테일 소개 데이터 */
  const {
    data: detailIntroData,
    isLoading: detailIntroLoading,
    isError: isDetailIntroError,
  } = useTour<DetailIntro>('detailIntro2', language, {
    contentId,
    contentTypeId,
  })

  /* 디테일 소개 아이템 */
  const detailIntroItem = useMemo(
    () => getDetailCommonItem(detailIntroData),
    [detailIntroData]
  )

  return {
    detailCommonItem,
    detailIntroItem,
    isLoading: detailCommonLoading || detailIntroLoading,
    hasError: isDetailCommonError || isDetailIntroError,
  }
}
