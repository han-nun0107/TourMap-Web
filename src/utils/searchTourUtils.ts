import { MapPinIcon } from 'lucide-react'
import type { StaticImageData } from 'next/image'

import { IMAGE_URLS } from '@/constants'
import { CONTENT_TYPE_LABEL } from '@/constants/main'
import type { ContetntTypeMeta } from '@/constants/main'
import type { AppLocale } from '@/i18n/routing'
import type { SearchKeyword } from '@/types/tour/searchKeyword'
import { parseTourApiItemArray } from '@/utils/tourApiParser'

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

export function ConvertToTourCard(
  item: SearchKeywordListItem,
  language: AppLocale,
  getTranslation: (key: string) => string
): SearchTourCard {
  const meta = getContentTypeMeta(language, item.contenttypeid)
  return {
    id: Number(item.contentid),
    title: getTrimmed(item.title),
    location: getTrimmed(item.addr1),
    image: getCardImage(item),
    tag: meta?.name ?? getTranslation('search.etc'),
    tagIcon: meta?.icon ?? MapPinIcon,
  }
}

type ProcessSearchTourDataParams = {
  pages: SearchKeyword[] | undefined
  language: AppLocale
  getTranslation: (key: string) => string
}

export function processSearchTourData({
  pages,
  language,
  getTranslation,
}: ProcessSearchTourDataParams): SearchTourCard[] {
  if (!pages) return []

  const allItems = pages.flatMap((page) =>
    parseTourApiItemArray<SearchKeywordListItem>(page)
  )

  return allItems
    .filter((item) => item.contentid && !isNaN(Number(item.contentid)))
    .map((item) => ConvertToTourCard(item, language, getTranslation))
}
