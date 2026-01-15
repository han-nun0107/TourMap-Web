'use client'

import { MousePointer2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'

import SearchCard from '@/components/card/SearchCard'
import { FilterBadge } from '@/components/common'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { useDebounceCallback } from '@/hooks/map/useDebounceCallback'
import { useGeolocation } from '@/hooks/map/useGeolocation'
import { useTour } from '@/hooks/tour/useTour'
import { searchCardMock } from '@/mocks'
import { useLanguageStore } from '@/store/language/languageStore'
import { unwrapTourApiResponse } from '@/types/tour/common'
import type {
  LocationBasedList,
  LocationBasedListItem,
} from '@/types/tour/locationBasedList'
import { filterTourItems } from '@/utils/tourFilter'

type Bounds = {
  sw: { latitude: number; longitude: number }
  ne: { latitude: number; longitude: number }
}

type LatLng = {
  latitude: number
  longitude: number
}

export default function MapPage() {
  const language = useLanguageStore((state) => state.language)
  const mapRef = useRef<kakao.maps.Map | null>(null)
  const [center, setCenter] = useState<LatLng>({
    latitude: 37.5665,
    longitude: 126.978,
  })
  const [_bounds, setBounds] = useState<Bounds>({
    sw: { latitude: 37.5665, longitude: 126.978 },
    ne: { latitude: 37.5665, longitude: 126.978 },
  })
  const [activeFilter, setActiveFilter] = useState<string | null>('attraction')
  const t = useTranslations('Home')
  const { coordinates } = useGeolocation()

  const handleBoundsChanged = useDebounceCallback((map: kakao.maps.Map) => {
    setCenter({
      latitude: map.getCenter().getLat(),
      longitude: map.getCenter().getLng(),
    })
    setBounds({
      sw: {
        latitude: map.getBounds().getSouthWest().getLat(),
        longitude: map.getBounds().getSouthWest().getLng(),
      },
      ne: {
        latitude: map.getBounds().getNorthEast().getLat(),
        longitude: map.getBounds().getNorthEast().getLng(),
      },
    })
  }, 500)

  const { data } = useTour<LocationBasedList>('locationBasedList2', language, {
    numOfRows: '20',
    pageNo: '1',
    mapX: center.longitude.toString(),
    mapY: center.latitude.toString(),
    radius: '2000',
  })

  const inner = unwrapTourApiResponse(data)
  const rawItems = inner?.body?.items?.item
  let items: LocationBasedListItem[] = []
  if (Array.isArray(rawItems)) {
    items = rawItems
  } else if (rawItems) {
    items = [rawItems]
  }

  const filteredItems = filterTourItems<LocationBasedListItem>({
    items,
    activeFilter: activeFilter ?? 'attraction',
    mode: 'category',
    locale: language,
  })

  return (
    <>
      <div className="w-full border-b border-gray-200/50 bg-gray-100">
        <div className="mx-auto flex h-28 w-full max-w-[1400px] flex-col justify-center gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <MousePointer2 size={20} className="rotate-90 text-blue-600" />
            <h1 className="text-black-900 text-xl font-bold">
              {t('map.title')}
            </h1>
          </div>
          <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
            {CATEGORY_OPTIONS.map((option) => (
              <FilterBadge
                key={option.value}
                type="category"
                name={t(option.title)}
                active={activeFilter === option.value}
                onClick={() => setActiveFilter(option.value)}
                className="h-8"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full border border-gray-200 bg-gray-100">
        <Map
          id="map"
          style={{ width: '80%', height: '81vh' }}
          center={{
            lat: coordinates?.lat ?? 37.5665,
            lng: coordinates?.lng ?? 126.978,
          }}
          level={3}
          onCreate={(map) => {
            mapRef.current = map
          }}
          onBoundsChanged={handleBoundsChanged}
        >
          <CustomOverlayMap
            position={{
              lat: coordinates?.lat ?? 37.5665,
              lng: coordinates?.lng ?? 126.978,
            }}
          >
            <div className="relative -translate-y-2">
              <div className="rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/30 backdrop-blur">
                내 위치
              </div>
              <div className="mx-auto h-2 w-2 rotate-45 bg-black/75 shadow-lg ring-1 ring-white/30" />
            </div>
          </CustomOverlayMap>
          {filteredItems.map((item) => (
            <CustomOverlayMap
              key={item.contentid}
              position={{
                lat: Number(item.mapy),
                lng: Number(item.mapx),
              }}
            >
              <div className="relative -translate-y-2">
                <div className="rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/30 backdrop-blur">
                  {item.title}
                </div>
                <div className="mx-auto h-2 w-2 rotate-45 bg-black/75 shadow-lg ring-1 ring-white/30" />
              </div>
            </CustomOverlayMap>
          ))}
        </Map>
        <div className="mx-auto flex flex-col gap-3 pt-4">
          <p className="text-sm font-light text-gray-600">
            {filteredItems.length} places nearby
          </p>
          <div className="scrollbar-hide h-[76vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {searchCardMock.map((card) => (
                <SearchCard
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  location={card.location}
                  tag={card.tag}
                  tagIcon={card.tagIcon}
                  distance={card.distance}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
