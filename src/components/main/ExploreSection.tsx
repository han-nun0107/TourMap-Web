'use client'

import { ArrowRightIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'

import { TrendingCard } from '@/components/card'
import { FilterBadge } from '@/components/common'
import { CONTENT_TYPE_LABEL, FILTER_OPTIONS } from '@/constants/main'
import { useLanguageStore } from '@/store/language'
import type { AreaBasedList } from '@/types/tour/areaBasedList'
import { parseTourApiResponse } from '@/utils/tourApiParser'
import { filterTourItems } from '@/utils/tourFilter'
type ExploreSectionProps = {
  type: 'trending' | 'region'
  sectionTitle: string
  subtitle: string
  data?: AreaBasedList
}

export default function ExploreSection({
  sectionTitle,
  subtitle,
  type,
  data,
}: ExploreSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all-regions')
  const language = useLanguageStore((state) => state.language)

  const cards = useMemo(() => {
    if (!data) return []
    const items = parseTourApiResponse(data)
    return filterTourItems({ items, activeFilter, type })
  }, [activeFilter, data, type])

  const t = useTranslations('Home')

  return (
    <div className="flex-center mx-auto w-full max-w-[332px] flex-col gap-6 py-12 md:max-w-[689px] lg:max-w-[1009px] xl:max-w-[1440px]">
      <div className="flex w-full max-w-[1320px] items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-black-900 text-2xl font-bold">{sectionTitle}</h1>
          <p className="text-sm font-light text-gray-600">{subtitle}</p>
        </div>
        {type === 'trending' && (
          <Link
            href="/search"
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
          >
            {t('trending.SeeAll')} <ArrowRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
      {type === 'region' && (
        <div className="flex w-full max-w-[1320px] flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
          {FILTER_OPTIONS.map((option) => (
            <FilterBadge
              key={option.value}
              type="category"
              name={t(option.name)}
              active={activeFilter === option.value}
              onClick={() => setActiveFilter(option.value)}
            />
          ))}
        </div>
      )}
      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {type === 'trending'
          ? cards.slice(0, 8).map((card) => (
              <Link
                href={`/${language}/${card.contentid}`}
                key={card.contentid}
              >
                <TrendingCard
                  key={card.contentid}
                  title={card.title}
                  image={card.firstimage || card.firstimage2}
                  location={card.addr1}
                  tag={
                    CONTENT_TYPE_LABEL[language][card.contenttypeid]?.name ??
                    t('search.etc')
                  }
                  tagIcon={
                    CONTENT_TYPE_LABEL[language][card.contenttypeid] ?? {
                      name: t('search.etc'),
                      icon: MapPinIcon,
                    }
                  }
                  id={Number(card.contentid)}
                  onClick={() => {}}
                />
              </Link>
            ))
          : cards.map((card) => (
              <Link
                href={`/${language}/${card.contentid}`}
                key={card.contentid}
              >
                <TrendingCard
                  key={card.contentid}
                  title={card.title}
                  image={card.firstimage}
                  location={card.addr1}
                  tag={
                    CONTENT_TYPE_LABEL[language][card.contenttypeid]?.name ??
                    t('search.etc')
                  }
                  tagIcon={
                    CONTENT_TYPE_LABEL[language][card.contenttypeid] ?? {
                      name: t('search.etc'),
                      icon: MapPinIcon,
                    }
                  }
                  id={Number(card.contentid)}
                  onClick={() => {}}
                />
              </Link>
            ))}
      </div>
    </div>
  )
}
