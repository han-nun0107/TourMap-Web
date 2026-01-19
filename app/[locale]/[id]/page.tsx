'use client'

import { useParams } from 'next/navigation'

import {
  ContactSidebar,
  DetailInfoSection,
  ErrorState,
  HeroSection,
  LoadingState,
  OverviewSection,
} from '@/components/detail'
import { useTourDetail } from '@/hooks/tour'
import { useLanguageStore } from '@/store/language'
import { isFestivalContentTypeId } from '@/utils/getFestivalContentTypeId'

export default function TourDetailPage() {
  const language = useLanguageStore((state) => state.language)
  const { id } = useParams<{ locale: string; id: string }>()

  const { detailCommonItem, detailIntroItem, isLoading, hasError } =
    useTourDetail(id, language)

  if (isLoading) {
    return <LoadingState />
  }

  if (hasError || !detailCommonItem) {
    return <ErrorState />
  }

  const isFestival = isFestivalContentTypeId(
    detailCommonItem.contenttypeid,
    language
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection item={detailCommonItem} type={isFestival ? 'festival' : 'default'} />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {detailCommonItem.overview && (
              <OverviewSection overview={detailCommonItem.overview} />
            )}
            <DetailInfoSection item={detailIntroItem} />
          </div>

          <ContactSidebar
            item={detailCommonItem}
            detailIntroItem={detailIntroItem}
            type={isFestival ? 'festival' : 'default'}
          />
        </div>
      </div>
    </div>
  )
}
