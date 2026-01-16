import { useInfiniteQuery } from '@tanstack/react-query'

import type { AppLocale } from '@/i18n/routing'
import { getTourList } from '@/service/tour.service'
import type { AreaBasedList } from '@/types/tour/areaBasedList'
import { getNextPageParamFromTourApi } from '@/utils/tourApiPagination'

export const useCategoryTours = (lang: AppLocale, contentTypeId?: string) => {
  return useInfiniteQuery({
    queryKey: ['categoryTours', lang, contentTypeId],
    queryFn: ({ pageParam = 1 }) =>
      getTourList(
        lang,
        'areaBasedList2',
        contentTypeId ? { contentTypeId } : {},
        String(pageParam)
      ) as Promise<AreaBasedList>,
    getNextPageParam: getNextPageParamFromTourApi,
    initialPageParam: 1,
    enabled: !!contentTypeId, // contentTypeId가 있을 때만 실행
  })
}
