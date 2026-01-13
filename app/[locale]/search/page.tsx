'use client'

import { useTranslations } from 'next-intl'

import { TrendingCard } from '@/components/card'
import { SearchInput } from '@/components/common'
import { FilterBadge } from '@/components/common/FilterBadge'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { useSearchFilter } from '@/hooks/search'
import { searchCardMock } from '@/mocks'
import { getIconByTag } from '@/utils/iconMapper'

export default function SearchPage() {
  const {
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    filteredItems: filteredCards,
    resultCount,
  } = useSearchFilter(searchCardMock)

  const t = useTranslations('Home')

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
          {CATEGORY_OPTIONS.map((option) => (
            <FilterBadge
              key={option.value}
              type="category"
              name={t(option.title)}
              active={activeFilter === option.value}
              onClick={() =>
                setActiveFilter(
                  activeFilter === option.value ? null : option.value
                )
              }
              className="h-8"
            />
          ))}
        </div>
        <p className="mt-8 text-sm font-light text-gray-600">
          {t('search.resultFound', { count: resultCount })}
        </p>
      </div>
      <div className="mx-auto mb-6 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCards.map((card) => (
            <TrendingCard
              key={card.id}
              image={card.image}
              title={card.title}
              location={card.location}
              tag={card.tag}
              tagIcon={{
                name: card.tag,
                icon: getIconByTag(card.tag),
              }}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
