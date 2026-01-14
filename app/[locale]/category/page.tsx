'use client'

import { MapPinIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { TrendingCard } from '@/components/card'
import { CONTENT_TYPE_LABEL } from '@/constants/main/contentTypeMapping'
import { useTour } from '@/hooks/tour/useTour'
import { useLanguageStore } from '@/store/language/languageStore'
import type { AreaBasedList } from '@/types/tour/areaBasedList'
import { parseTourApiResponse } from '@/utils/tourApiParser'

export default function CategoryPage() {
  const t = useTranslations('Home')
  const locale = useLocale()
  const language = useLanguageStore((state) => state.language)
  const searchParams = useSearchParams()
  const contentTypeId = searchParams.get('contentTypeId')

  const { data, isLoading } = useTour(
    'areaBasedList2',
    locale as 'ko',
    contentTypeId ? { contentTypeId } : {}
  )

  const cards = useMemo(() => {
    return parseTourApiResponse(data as AreaBasedList | undefined)
  }, [data])

  const categoryName = useMemo(() => {
    if (!contentTypeId) return ''
    return CONTENT_TYPE_LABEL[language][contentTypeId]?.name ?? ''
  }, [contentTypeId, language])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-black-900 text-2xl font-bold">
            {categoryName || t('categories.Title')}
          </h1>
          {categoryName && (
            <p className="text-sm font-light text-gray-600">
              {t('search.resultFound', { count: cards.length })}
            </p>
          )}
        </div>

        {cards.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-gray-600">
              {contentTypeId
                ? t('search.noResults')
                : t('search.selectCategory')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((card) => (
              <TrendingCard
                key={card.contentid}
                title={card.title}
                image={card.firstimage || card.firstimage2}
                location={card.addr1}
                tag={
                  CONTENT_TYPE_LABEL[language][card.contenttypeid]?.name ??
                  '기타'
                }
                tagIcon={
                  CONTENT_TYPE_LABEL[language][card.contenttypeid] ?? {
                    name: '기타',
                    icon: MapPinIcon,
                  }
                }
                id={Number(card.contentid)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
