'use client'

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
  locale,
}: RegionSectionClientProps) {
  const language = locale
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter)
  const areaNumber = AREA_CODE_BY_FILTER_VALUE[activeFilter] ?? null

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
        initialData: activeFilter === initialFilter ? initialData : undefined,
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
