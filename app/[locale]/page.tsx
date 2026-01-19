'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Banner, Category, FestivalSection, RegionSection } from '@/components/main'
import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main/filterOptions'
import { useTour } from '@/hooks/tour/useTour'
import { useLanguageStore } from '@/store/language'
import type { AreaBasedList } from '@/types/tour/areaBasedList'
import { SearchFestival } from '@/types/tour/searchFestival'
import { getToday } from '@/utils/getToday'

export default function Home() {
  const language = useLanguageStore((state) => state.language)
  const [activeFilter, setActiveFilter] = useState<string>('seoul')
  const areaNumber = AREA_CODE_BY_FILTER_VALUE[activeFilter] ?? null

  const { data: areaBasedListData, isLoading: isAreaBasedListLoading } = useTour<AreaBasedList>(
    'areaBasedList2',
    language,
    {
      numOfRows: '20',
      pageNo: '1',
      ...(areaNumber && { areaCode: areaNumber }),
    }
  )
  const { data: festivalData, isLoading: isFestivalLoading } = useTour<SearchFestival>(
    'searchFestival2',
    language,
    {
      numOfRows: '8',
      pageNo: '1',
      eventStartDate: getToday(),
    }
  )

  const t = useTranslations('Home')

  return (
    <main>
      <Banner
        title={t('banner.Title')}
        subtitle={t('banner.Subtitle')}
        description={t('banner.Description')}
        StartButtonText={t('banner.StartButton')}
        ViewMapButtonText={t('banner.MapButton')}
      />
      <div className="flex flex-col bg-gray-100">
        <FestivalSection
          sectionTitle={t('festival.Title')}
          subtitle={t('festival.Subtitle')}
          loading={isFestivalLoading}
          data={festivalData}
        />
        <Category title={t('categories.Title')} />
        <RegionSection
          sectionTitle={t('regionsName.Title')}
          subtitle={t('regionsName.Subtitle')}
          loading={isAreaBasedListLoading}
          data={areaBasedListData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </main>
  )
}
