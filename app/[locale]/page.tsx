'use client'

import { useTranslations } from 'next-intl'

import { Banner, Category, ExploreSection } from '@/components/main'
import { useTour } from '@/hooks/tour/useTour'
import { useLanguageStore } from '@/store/language/languageStore'

export default function Home() {
  const language = useLanguageStore((state) => state.language)
  const { data } = useTour('areaBasedList2', language, {
    numOfRows: '20',
    pageNo: '1',
  })

  const t = useTranslations('Home')

  return (
    <main>
      <Banner
        title={t('bannerTitle')}
        subtitle={t('bannerSubtitle')}
        description={t('bannerDescription')}
        StartButtonText={t('bannerStartButton')}
        ViewMapButtonText={t('bannerMapButton')}
      />
      <div className="flex flex-col bg-gray-100">
        <ExploreSection
          sectionTitle={t('trendingTitle')}
          subtitle={t('trendingSubtitle')}
          type="trending"
          data={data}
        />
        <Category title={t('categoriesTitle')} />
        <ExploreSection
          sectionTitle={t('regionsTitle')}
          subtitle={t('regionsSubtitle')}
          type="region"
          data={data}
        />
      </div>
    </main>
  )
}
