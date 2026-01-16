import { useInfiniteQuery } from '@tanstack/react-query'

import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main'
import { AppLocale } from '@/i18n/routing'
import { getTourList } from '@/service/tour.service'
import { SearchKeyword } from '@/types/tour/searchKeyword'
import { getNextPageParamFromTourApi } from '@/utils/tourApiPagination'

export const useSearchTour = (
  searchQuery: string,
  lang: AppLocale = 'ko',
  activeFilter: string | null
) => {
  const keyword = searchQuery.trim() || '공원'
  const areaNumber = activeFilter
    ? AREA_CODE_BY_FILTER_VALUE[activeFilter]
    : '1'

  return useInfiniteQuery({
    queryKey: ['search-tour', lang, keyword, areaNumber],
    queryFn: ({ pageParam = 1 }) =>
      getTourList<SearchKeyword>(
        lang,
        'searchKeyword2',
        {
          numOfRows: '20',
          keyword,
          areaCode: areaNumber,
        },
        String(pageParam)
      ),
    getNextPageParam: getNextPageParamFromTourApi,
    initialPageParam: 1,
    enabled: !!activeFilter,
  })
}
