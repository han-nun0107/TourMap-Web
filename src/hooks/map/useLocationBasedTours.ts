import { useMemo } from 'react'

import { useTour } from '@/hooks/tour/useTour'
import type { AppLocale } from '@/i18n/routing'
import type {
  LocationBasedList,
  LocationBasedListItem,
} from '@/types/tour/locationBasedList'
import { parseTourApiItemArray } from '@/utils/tourApiParser'
import { filterTourItems } from '@/utils/tourFilter'

type Center = {
  latitude: number
  longitude: number
}

type Overlay = {
  key: string
  position: { lat: number; lng: number }
  title: string
}

function toValidNumber(value: string): number | null {
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

function getItemPosition(item: LocationBasedListItem) {
  const lat = toValidNumber(item.mapy)
  const lng = toValidNumber(item.mapx)
  if (lat === null || lng === null) return null
  return { lat, lng }
}

export const useLocationBasedTours = ({
  language,
  center,
  radius = 2000,
  activeCategory = 'attraction',
}: {
  language: AppLocale
  center: Center
  radius?: number
  activeCategory?: string
}) => {
  const { data } = useTour<LocationBasedList>('locationBasedList2', language, {
    numOfRows: '20',
    pageNo: '1',
    mapX: center.longitude.toString(),
    mapY: center.latitude.toString(),
    radius: String(radius),
  })

  const items = useMemo(
    () => parseTourApiItemArray<LocationBasedListItem>(data),
    [data]
  )

  const filteredItems = useMemo(() => {
    return filterTourItems<LocationBasedListItem>({
      items,
      activeFilter: activeCategory,
      mode: 'category',
      locale: language,
    })
  }, [activeCategory, items, language])

  const overlays: Overlay[] = useMemo(() => {
    return filteredItems
      .map((item) => {
        const position = getItemPosition(item)
        if (!position) return null
        return { key: item.contentid, position, title: item.title }
      })
      .filter((v): v is NonNullable<typeof v> => v !== null)
  }, [filteredItems])

  return { data, items, filteredItems, overlays }
}
