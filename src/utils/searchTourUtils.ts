import { MapPinIcon } from 'lucide-react'
import type { StaticImageData } from 'next/image'

import { IMAGE_URLS } from '@/constants'
import { CONTENT_TYPE_LABEL } from '@/constants/main'
import type { ContetntTypeMeta } from '@/constants/main'
import type { AppLocale } from '@/i18n/routing'
import type { SearchKeyword } from '@/types/tour/searchKeyword'
import { parseTourApiItemArray } from '@/utils/tourApiParser'
import { filterTourItems } from '@/utils/tourFilter'

export type SearchKeywordListItem = {
  contentid?: string
  title?: string
  addr1?: string
  firstimage?: string
  firstimage2?: string
  contenttypeid?: string
}

export type SearchTourCard = {
  id: number
  title: string
  location: string
  image: string | StaticImageData
  tag: string
  tagIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function getTrimmed(value: string | undefined): string {
  if (!value) return ''
  return value.trim()
}

function getCardImage(item: SearchKeywordListItem): string | StaticImageData {
  const first = getTrimmed(item.firstimage)
  if (first) return first

  const second = getTrimmed(item.firstimage2)
  if (second) return second

  return IMAGE_URLS.map.noImage
}

function getContentTypeMeta(
  locale: AppLocale,
  contentTypeId: string | undefined
): ContetntTypeMeta | undefined {
  if (!contentTypeId) return undefined
  return CONTENT_TYPE_LABEL[locale]?.[contentTypeId]
}

export function convertToTourCard(
  item: SearchKeywordListItem,
  language: AppLocale
): SearchTourCard {
  const meta = getContentTypeMeta(language, item.contenttypeid)

  return {
    id: Number(item.contentid),
    title: getTrimmed(item.title),
    location: getTrimmed(item.addr1),
    image: getCardImage(item),
    tag: meta?.name ?? '기타',
    tagIcon: meta?.icon ?? MapPinIcon,
  }
}

type ProcessSearchTourDataParams = {
  pages: SearchKeyword[] | undefined
  activeFilter: string | null
  language: AppLocale
}

export function processSearchTourData({
  pages,
  activeFilter,
  language,
}: ProcessSearchTourDataParams): SearchTourCard[] {
  if (!pages) return []

  const allItems = pages.flatMap((page) =>
    parseTourApiItemArray<SearchKeywordListItem>(page)
  )

  const filteredItems = activeFilter
    ? filterTourItems({
        items: allItems,
        activeFilter,
        mode: 'category',
        locale: language,
      })
    : allItems

  return filteredItems
    .filter((item) => item.contentid && !isNaN(Number(item.contentid)))
    .map((item) => convertToTourCard(item, language))
}
