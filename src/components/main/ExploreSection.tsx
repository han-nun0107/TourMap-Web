'use client'

import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { TrendingCard } from '@/components/card'
import { FilterBadge } from '@/components/common'
import { FILTER_OPTIONS } from '@/constants/main/filterOptions'
import { trendingCardMock } from '@/mocks'

type ExploreSectionProps = {
  type: 'trending' | 'region'
  sectionTitle: string
  subtitle: string
}

export default function ExploreSection({
  sectionTitle,
  subtitle,
  type,
}: ExploreSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all-regions')

  return (
    <div className="mx-auto flex w-full max-w-[332px] flex-col gap-6 py-12 md:max-w-[689px] lg:max-w-[1009px] xl:max-w-[1440px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-black-900 text-2xl font-bold">{sectionTitle}</h1>
          <p className="text-sm font-light text-gray-600">{subtitle}</p>
        </div>
        {type === 'trending' && (
          <Link
            href="/search"
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
          >
            See all <ArrowRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
      {type === 'region' && (
        <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
          {FILTER_OPTIONS.map((option) => (
            <FilterBadge
              key={option.value}
              type="region"
              name={option.name}
              active={activeFilter === option.value}
              onClick={() => setActiveFilter(option.value)}
            />
          ))}
        </div>
      )}
      <div className="grid w-full grid-cols-1 gap-1 max-sm:place-items-center max-sm:gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {trendingCardMock.map((card) => (
          <TrendingCard
            key={card.id}
            title={card.title}
            image={card.image}
            location={card.location}
            tag={card.tag}
            tagIcon={card.tagIcon}
            id={card.id}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  )
}
