'use client'

import { useLocale } from 'next-intl'
import { useState } from 'react'

import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main/filterOptions'
import { useTour } from '@/hooks/tour/useTour'
import type { AppLocale } from '@/i18n/routing'
import type { AreaBasedList } from '@/types/tour/areaBasedList'

import RegionSection from './RegionSection'

type RegionSectionClientProps = {
  sectionTitle: string
  subtitle: string
  initialData?: AreaBasedList
  initialFilter?: string
  locale: AppLocale
}

export default function RegionSectionClient({
  sectionTitle,
  subtitle,
  initialData,
  initialFilter = 'seoul',
  locale: initialLocale,
}: RegionSectionClientProps) {
  // URL의 현재 locale을 가져와서 사용 (언어 변경 시 자동으로 업데이트됨)
  const currentLocale = useLocale() as AppLocale
  const language = currentLocale
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter)
  const areaNumber = AREA_CODE_BY_FILTER_VALUE[activeFilter] ?? null

  // 초기 locale과 현재 locale이 같고, 필터가 초기 필터와 같을 때만 initialData 사용
  const shouldUseInitialData =
    currentLocale === initialLocale &&
    activeFilter === initialFilter &&
    initialData

  const { data: areaBasedListData, isLoading: isAreaBasedListLoading } =
    useTour<AreaBasedList>(
      'areaBasedList2',
      language,
      {
        numOfRows: '20',
        pageNo: '1',
        ...(areaNumber && { areaCode: areaNumber }),
      },
      '1',
      {
        initialData: shouldUseInitialData ? initialData : undefined,
      }
    )

  return (
    <RegionSection
      sectionTitle={sectionTitle}
      subtitle={subtitle}
      loading={isAreaBasedListLoading}
      data={areaBasedListData}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />
  )
}
