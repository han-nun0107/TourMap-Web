'use client'

import { useLocale } from 'next-intl'

import { useTour } from '@/hooks/tour/useTour'
import type { AppLocale } from '@/i18n/routing'
import { SearchFestival } from '@/types/tour/searchFestival'
import { getToday } from '@/utils/getToday'

import FestivalSection from './FestivalSection'

type FestivalSectionClientProps = {
  sectionTitle: string
  subtitle: string
  initialData?: SearchFestival
  locale: AppLocale
}

export default function FestivalSectionClient({
  sectionTitle,
  subtitle,
  initialData,
  locale: initialLocale,
}: FestivalSectionClientProps) {
  // URL의 현재 locale을 가져와서 사용 (언어 변경 시 자동으로 업데이트됨)
  const currentLocale = useLocale() as AppLocale
  const language = currentLocale

  // 초기 locale과 현재 locale이 같을 때만 initialData 사용
  const shouldUseInitialData = currentLocale === initialLocale && initialData

  const { data: festivalData, isLoading: isFestivalLoading } =
    useTour<SearchFestival>(
      'searchFestival2',
      language,
      {
        numOfRows: '8',
        pageNo: '1',
        eventStartDate: getToday(),
      },
      '1',
      {
        initialData: shouldUseInitialData ? initialData : undefined,
      }
    )

  return (
    <FestivalSection
      sectionTitle={sectionTitle}
      subtitle={subtitle}
      loading={isFestivalLoading}
      data={festivalData}
    />
  )
}
