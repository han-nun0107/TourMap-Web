import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  ContactSidebar,
  DetailInfoSection,
  ErrorState,
  HeroSection,
  OverviewSection,
} from '@/components/detail'
import type { AppLocale } from '@/i18n/routing'
import { getTourDetailData } from '@/service/tour-detail.service'
import type { DetailCommonItem } from '@/types/tour/detailCommon'
import type { DetailIntroItem } from '@/types/tour/detailIntro'
import { isFestivalContentTypeId } from '@/utils/getFestivalContentTypeId'
import {
  generateTourDetailMetadata,
  getDefaultTourDetailMetadata,
} from '@/utils/tour-metadata'

type Props = {
  params: Promise<{ locale: string; id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params
  const appLocale = locale as AppLocale

  try {
    const { detailCommonItem } = await getTourDetailData(id, appLocale)
    return generateTourDetailMetadata(detailCommonItem)
  } catch {
    return getDefaultTourDetailMetadata()
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, id } = await params
  const appLocale = locale as AppLocale

  let detailCommonItem: DetailCommonItem | undefined
  let detailIntroItem: DetailIntroItem | undefined

  try {
    const data = await getTourDetailData(id, appLocale)
    detailCommonItem = data.detailCommonItem
    detailIntroItem = data.detailIntroItem
  } catch {
    return <ErrorState />
  }

  if (!detailCommonItem) {
    notFound()
  }

  const isFestival = isFestivalContentTypeId(
    detailCommonItem.contenttypeid,
    appLocale
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        item={detailCommonItem}
        type={isFestival ? 'festival' : 'default'}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {detailCommonItem.overview && (
              <OverviewSection overview={detailCommonItem.overview} />
            )}
            <DetailInfoSection
              item={
                (detailIntroItem as {
                  infocenter?: string
                  usetime?: string
                  restdate?: string
                  usefee?: string
                  expguide?: string
                }) || null
              }
            />
          </div>

          <ContactSidebar
            item={detailCommonItem}
            detailIntroItem={detailIntroItem || null}
            type={isFestival ? 'festival' : 'default'}
          />
        </div>
      </div>
    </div>
  )
}
