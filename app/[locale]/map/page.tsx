'use client'

import { MousePointer2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk'

import SearchCard from '@/components/card/SearchCard'
import { FilterBadge } from '@/components/common'
import OverlayBubble from '@/components/map/OverlayBubble'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { CONTENT_TYPE_LABEL } from '@/constants/main/contentTypeMapping'
import { useDebounceCallback } from '@/hooks/map/useDebounceCallback'
import { useGeolocation } from '@/hooks/map/useGeolocation'
import { useLocationBasedTours } from '@/hooks/map/useLocationBasedTours'
import { useLanguageStore } from '@/store/language/languageStore'

type LatLng = {
  lat: number
  lng: number
}
type Bounds = {
  sw: LatLng
  ne: LatLng
}

export default function MapPage() {
  const language = useLanguageStore((state) => state.language)
  const mapRef = useRef<kakao.maps.Map | null>(null)
  const [center, setCenter] = useState<LatLng>({
    lat: 37.5665,
    lng: 126.978,
  })
  const [_bounds, setBounds] = useState<Bounds>({
    sw: { lat: 37.5665, lng: 126.978 },
    ne: { lat: 37.5665, lng: 126.978 },
  })
  const [activeFilter, setActiveFilter] = useState<string | null>('attraction')
  const t = useTranslations('Home')
  const { coordinates } = useGeolocation()

  const handleBoundsChanged = useDebounceCallback((map: kakao.maps.Map) => {
    setCenter({
      lat: map.getCenter().getLat(),
      lng: map.getCenter().getLng(),
    })
    setBounds({
      sw: {
        lat: map.getBounds().getSouthWest().getLat(),
        lng: map.getBounds().getSouthWest().getLng(),
      },
      ne: {
        lat: map.getBounds().getNorthEast().getLat(),
        lng: map.getBounds().getNorthEast().getLng(),
      },
    })
  }, 500)

  const { filteredItems, overlays } = useLocationBasedTours({
    language,
    center: {
      latitude: center.lat,
      longitude: center.lng,
    },
    radius: 1500,
    activeCategory: activeFilter ?? 'attraction',
  })

  useEffect(() => {
    if (coordinates) {
      setTimeout(() => {
        setCenter({ lat: coordinates.lat, lng: coordinates.lng })
      }, 0)
    }
  }, [coordinates])

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
            <OverlayBubble label="내 위치" />
          </CustomOverlayMap>
          {overlays.map((overlay) => (
            <CustomOverlayMap key={overlay.key} position={overlay.position}>
              <OverlayBubble label={overlay.title} />
            </CustomOverlayMap>
          ))}
        </Map>
        <div className="mx-auto flex flex-col gap-3 px-2 pt-4">
          <p className="text-sm font-light text-gray-600">
            {filteredItems.length} places nearby
          </p>
          <div className="scrollbar-hide h-[76vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {filteredItems.map((card) => (
                <SearchCard
                  key={`${card.mapx}-${card.mapy}`}
                  id={card.contentid}
                  image={card.firstimage}
                  title={card.title}
                  location={card.addr1}
                  tag={
                    CONTENT_TYPE_LABEL[language][card.contenttypeid]?.name ??
                    '기타'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
