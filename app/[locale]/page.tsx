import { getTranslations } from 'next-intl/server'

import { Banner, Category, FestivalSection } from '@/components/main'
import RegionSectionClient from '@/components/main/RegionSectionClient'
import { AREA_CODE_BY_FILTER_VALUE } from '@/constants/main/filterOptions'
import type { AppLocale } from '@/i18n/routing'
import { getTourList } from '@/service/tour.service'
import type { AreaBasedList } from '@/types/tour/areaBasedList'
import { SearchFestival } from '@/types/tour/searchFestival'
import { getToday } from '@/utils/getToday'

type Props = {
  params: Promise<{ locale: string }>
}

async function getHomeData(locale: AppLocale) {
  const defaultAreaCode = AREA_CODE_BY_FILTER_VALUE['seoul'] ?? null

  const [areaBasedListData, festivalData] = await Promise.all([
    getTourList<AreaBasedList>(
      locale,
      'areaBasedList2',
      {
        numOfRows: '20',
        pageNo: '1',
        ...(defaultAreaCode && { areaCode: defaultAreaCode }),
      },
      '1'
    ),
    getTourList<SearchFestival>(
      locale,
      'searchFestival2',
      {
        numOfRows: '8',
        pageNo: '1',
        eventStartDate: getToday(),
      },
      '1'
    ),
  ])

  return {
    areaBasedListData,
    festivalData,
  }
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const appLocale = locale as AppLocale
  const t = await getTranslations('Home')

  const { areaBasedListData, festivalData } = await getHomeData(appLocale)

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
          loading={false}
          data={festivalData}
        />
        <Category title={t('categories.Title')} />
        <RegionSectionClient
          sectionTitle={t('regionsName.Title')}
          subtitle={t('regionsName.Subtitle')}
          initialData={areaBasedListData}
          initialFilter="seoul"
        />
      </div>
    </main>
  )
}
