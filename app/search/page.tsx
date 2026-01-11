'use client'

import { LucideIcon } from 'lucide-react'

import { TrendingCard } from '@/components/card'
import { SearchInput } from '@/components/common'
import { FilterBadge } from '@/components/common/FilterBadge'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { useSearchFilter } from '@/hooks/search'
import { searchCardMock } from '@/mocks'

export default function SearchPage() {
  const {
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    filteredItems: filteredCards,
    resultCount,
  } = useSearchFilter(searchCardMock)

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-black-900 text-2xl font-bold">Search Page</h1>
          <SearchInput debounceMs={300} onDebouncedChange={setSearchQuery} />
        </div>
        <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
          {CATEGORY_OPTIONS.map((option) => (
            <FilterBadge
              key={option.value}
              type="region"
              name={option.title}
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
          {resultCount} results found
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
              tagIcon={
                card.tagIcon as
                  | React.ComponentType<React.SVGProps<SVGSVGElement>>
                  | LucideIcon
              }
              id={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
