import { useQuery } from '@tanstack/react-query'

import type { AppLocale } from '@/i18n/routing'
import { getTourList, TOUR_ENDPOINT } from '@/service/tour.service'

export const useTour = <T = unknown>(
  endpoint: keyof typeof TOUR_ENDPOINT = 'areaCode2',
  lang: AppLocale = 'ko',
  params: Partial<Record<string, string>> = {},
  pageNo: string = '1'
) => {
  return useQuery({
    queryKey: ['tours', endpoint, lang, params],
    queryFn: (): Promise<T> => getTourList<T>(lang, endpoint, params, pageNo),
  })
}
