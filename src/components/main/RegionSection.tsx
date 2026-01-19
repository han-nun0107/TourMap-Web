'use client'

import { MapPinIcon } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'

import { TrendingCard } from '@/components/card'
import { FilterBadge } from '@/components/common'
import { CONTENT_TYPE_LABEL, FILTER_OPTIONS } from '@/constants/main'
import { useLanguageStore } from '@/store/language'
import type { TourApiBodyBase, TourApiResponse } from '@/types/tour/common'
import { parseTourApiResponse } from '@/utils/tourApiParser'
import { filterTourItems } from '@/utils/tourFilter'

type TourItemCommon = {
  contentid: string
  contenttypeid: string
  title: string
  addr1: string
  firstimage?: string
  firstimage2?: string
  areacode?: string
}

type RegionSectionProps<TItem extends TourItemCommon> = {
  sectionTitle: string
  subtitle: string
  data?: TourApiResponse<TourApiBodyBase<TItem>>
}

export default function RegionSection<TItem extends TourItemCommon>({
  sectionTitle,
  subtitle,
    data,
  
}: RegionSectionProps<TItem>) {
  const [activeFilter, setActiveFilter] = useState<string>('all-regions')
  const language = useLanguageStore((state) => state.language)

  const cards = useMemo(() => {
    if (!data) return []
    const items = parseTourApiResponse<TItem>(data)
    return filterTourItems({ items, activeFilter, type: 'region' })
  }, [activeFilter, data])

  const t = useTranslations('Home')

  return (
    <div className="flex-center mx-auto w-full max-w-[332px] flex-col gap-6 py-12 md:max-w-[689px] lg:max-w-[1009px] xl:max-w-[1440px]">
      <div className="flex w-full max-w-[1320px] items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-black-900 text-2xl font-bold">{sectionTitle}</h1>
          <p className="text-sm font-light text-gray-600">{subtitle}</p>
        </div>
      </div>
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
      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {cards.map((card: TItem) => (
          <Link href={`/${language}/${card.contentid}`} key={card.contentid}>
            <TrendingCard
              title={card.title}
              image={card.firstimage || ''}
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
