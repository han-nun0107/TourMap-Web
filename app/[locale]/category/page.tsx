'use client'

import { MapPinIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Suspense, useEffect, useMemo } from 'react'

import { TrendingCard } from '@/components/card'
import { CONTENT_TYPE_LABEL } from '@/constants/main'
import { useCategoryTours } from '@/hooks/category/useCategoryTours'
import { useInfiniteScroll } from '@/hooks/useIntersectionObserver'
import type { AppLocale } from '@/i18n/routing'
import { useLanguageStore } from '@/store/language'
import { parseTourApiResponse } from '@/utils/tourApiParser'

function CategoryContent() {
  const t = useTranslations('Home')
  const locale = useLocale()
  const language = useLanguageStore((state) => state.language)
  const searchParams = useSearchParams()
  const contentTypeId = searchParams.get('contentTypeId')

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCategoryTours(locale as AppLocale, contentTypeId || undefined)

  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [contentTypeId])

  const loadMoreRef = useInfiniteScroll({
    enabled: !!hasNextPage && !isFetchingNextPage,
    onLoadMore: fetchNextPage,
    isLoading: isFetchingNextPage,
  })

  const cards = useMemo(() => {
    if (!data?.pages) return []
    return data.pages.flatMap((page) => parseTourApiResponse(page))
  }, [data])

  const categoryName = useMemo(() => {
    if (!contentTypeId) return ''
    return CONTENT_TYPE_LABEL[language][contentTypeId]?.name ?? ''
  }, [contentTypeId, language])

  // contentTypeId가 없으면 early return
  if (!contentTypeId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">{t('search.selectCategory')}</p>
      </div>
    )
  }

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
            <p className="text-gray-600">{t('search.noResults')}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cards.map((card) => {
                const contentTypeMeta =
                  CONTENT_TYPE_LABEL[language][card.contenttypeid]
                return (
                  <TrendingCard
                    key={card.contentid}
                    title={card.title}
                    image={card.firstimage || card.firstimage2}
                    location={card.addr1}
                    tag={contentTypeMeta?.name ?? '기타'}
                    tagIcon={
                      contentTypeMeta ?? {
                        name: '기타',
                        icon: MapPinIcon,
                      }
                    }
                    id={Number(card.contentid)}
                  />
                )
              })}
            </div>

            {/* 로딩 트리거 요소 */}
            {hasNextPage && <div ref={loadMoreRef} className="h-20 w-full" />}

            {isFetchingNextPage && (
              <div className="flex justify-center py-4">
                <p className="text-gray-600">Loading more...</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function CategoryPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <CategoryContent />
    </Suspense>
  )
}
