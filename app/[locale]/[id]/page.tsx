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

export default function TourDetailPage() {
  const language = useLanguageStore((state) => state.language)
  const { id } = useParams<{ locale: string; id: string }>()

  const {
    detailCommonItem,
    detailIntroItem,
    isLoading,
    isIntroLoading,
    hasError,
  } = useTourDetail(id, language)

  if (isLoading) {
    return <LoadingState />
  }

  if (hasError || !detailCommonItem) {
    return <ErrorState />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection item={detailCommonItem} />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {detailCommonItem.overview && (
              <OverviewSection overview={detailCommonItem.overview} />
            )}
            <DetailInfoSection
              item={detailIntroItem}
              isLoading={isIntroLoading}
            />
          </div>

          <ContactSidebar item={detailCommonItem} />
        </div>
      </div>
    </div>
  )
}
