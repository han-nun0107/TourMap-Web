'use client'

import { useTranslations } from 'next-intl'

import { LoadingState } from '@/components/detail'
import { Banner, Category, ExploreSection } from '@/components/main'
import { useTour } from '@/hooks/tour/useTour'
import { useLanguageStore } from '@/store/language'
import type { AreaBasedList } from '@/types/tour/areaBasedList'

export default function Home() {
  const language = useLanguageStore((state) => state.language)
  const { data, isLoading } = useTour<AreaBasedList>(
    'areaBasedList2',
    language,
    {
      numOfRows: '20',
      pageNo: '1',
    }
  )

  const t = useTranslations('Home')

  if (isLoading) {
    return <LoadingState />
  }

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
        <ExploreSection
          sectionTitle={t('trending.Title')}
          subtitle={t('trending.Subtitle')}
          type="trending"
          data={data}
        />
        <Category title={t('categories.Title')} />
        <ExploreSection
          sectionTitle={t('regionsName.Title')}
          subtitle={t('regionsName.Subtitle')}
          type="region"
          data={data}
        />
      </div>
    </main>
  )
}
