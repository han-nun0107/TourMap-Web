import { useQuery } from '@tanstack/react-query'

import type { AppLocale } from '@/i18n/routing'
import { getTourList, TOUR_ENDPOINT } from '@/service/tour.service'

export const useTour = (
  endpoint: keyof typeof TOUR_ENDPOINT = 'areaCode2',
  lang: AppLocale = 'ko',
  params: Partial<Record<string, string>> = {}
) => {
  return useQuery({
    queryKey: ['tours', endpoint, lang, params],
    queryFn: () => getTourList(lang, endpoint, params),
  })
}
