import { useQuery } from '@tanstack/react-query'

import {
  getTourList,
  TOUR_ENDPOINT,
  BASE_BY_LANG,
} from '@/service/tour.service'

export const useTour = (
  endpoint: keyof typeof TOUR_ENDPOINT = 'areaCode2',
  lang: keyof typeof BASE_BY_LANG = 'ko',
  params: Partial<Record<string, string>> = {}
) => {
  return useQuery({
    queryKey: ['tours', endpoint, lang, params],
    queryFn: () => getTourList(lang, endpoint, params),
  })
}
