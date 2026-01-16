'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'

import { TrendingCard } from '@/components/card'
import { FilterBadge, SearchInput } from '@/components/common'
import { LoadingState } from '@/components/detail'
import { FILTER_OPTIONS } from '@/constants/main'
import { useSearchTour } from '@/hooks/tour/useSearchTour'
import { useInfiniteScroll } from '@/hooks/useIntersectionObserver'
import { useLanguageStore } from '@/store/language'
import {
  ProcessSearchTourData,
  type SearchTourCard,
} from '@/utils/searchTourUtils'

export default function SearchPage() {
  const language = useLanguageStore((state) => state.language)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string | null>('seoul')

  const SEARCH_FILTER_OPTIONS = FILTER_OPTIONS.filter(
    (option) => option.value !== 'all-regions'
  )

  const t = useTranslations('Home')

  const INITIAL_KEYWORD = t('search.initialSearchKeyword')
  const isInitialSearch = searchQuery.trim() === ''

  const {
    data: searchKeywordData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
  } = useSearchTour(searchQuery, language, activeFilter, INITIAL_KEYWORD)

  const cards: SearchTourCard[] = useMemo(
    () =>
      ProcessSearchTourData({
        pages: searchKeywordData?.pages,
        language,
        getTranslation: (key: string) => t(key),
      }),
    [searchKeywordData?.pages, language, t]
  )

  const resultCount = cards.length

  const loadMoreRef = useInfiniteScroll({
    enabled: !!hasNextPage && !isFetchingNextPage,
    onLoadMore: fetchNextPage,
    isLoading: isFetchingNextPage,
  })

  if (isLoading) {
    return <LoadingState />
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-black-900 text-2xl font-bold">
            {t('search.Title')}
          </h1>
          <SearchInput
            debounceMs={300}
            onDebouncedChange={setSearchQuery}
            placeholder={t('search.placeholder')}
            ariaHint={t('search.ariaHint')}
          />
        </div>
        <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
          {SEARCH_FILTER_OPTIONS.map((option) => (
            <FilterBadge
              key={option.value}
              type="category"
              name={t(option.name)}
              active={activeFilter === option.value}
              onClick={() => {
                if (activeFilter === option.value) {
                  setActiveFilter(null)
                  return
                }
                setActiveFilter(option.value)
              }}
              className="h-8"
            />
          ))}
        </div>
        <p className="mt-8 flex flex-col gap-2 text-sm font-light text-gray-600">
          {t('search.resultFound', { count: resultCount })}
          {isInitialSearch && (
            <span className="text-gray-600">{t('search.initialSearch')}</span>
          )}
        </p>
      </div>
      <div className="mx-auto mb-6 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card) => (
            <Link href={`/${language}/${card.id}`} key={card.id}>
              <TrendingCard
                image={card.image}
                title={card.title}
                location={card.location}
                tag={card.tag}
                tagIcon={{
                  name: card.tag,
                  icon: card.tagIcon,
                }}
                id={card.id}
              />
            </Link>
          ))}
        </div>
        {hasNextPage && <div ref={loadMoreRef} className="h-20 w-full" />}

        {isFetchingNextPage && (
          <div className="flex justify-center py-4">
            <p className="text-gray-600">{t('search.loading')}</p>
          </div>
        )}
      </div>
    </div>
  )
}
