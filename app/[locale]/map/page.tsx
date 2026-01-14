'use client'

import { MousePointer2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk'

import SearchCard from '@/components/card/SearchCard'
import { FilterBadge } from '@/components/common'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { useGeolocation } from '@/hooks/map/useGeolocation'
import { searchCardMock } from '@/mocks'

type Bounds = {
  sw: { latitude: number; longitude: number }
  ne: { latitude: number; longitude: number }
}

type LatLng = {
  latitude: number
  longitude: number
}

export default function MapPage() {
  const mapRef = useRef<kakao.maps.Map | null>(null)
  const [center, setCenter] = useState<LatLng>({
    latitude: 37.5665,
    longitude: 126.978,
  })
  const [bounds, setBounds] = useState<Bounds>({
    sw: { latitude: 37.5665, longitude: 126.978 },
    ne: { latitude: 37.5665, longitude: 126.978 },
  })
  const [activeFilter, setActiveFilter] = useState<string | null>('attraction')
  const t = useTranslations('Home')
  const { coordinates } = useGeolocation()

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
          onBoundsChanged={(map) => {
            const c = map.getCenter()
            const b = map.getBounds()
            const sw = b.getSouthWest()
            const ne = b.getNorthEast()

            setCenter({
              latitude: c.getLat(),
              longitude: c.getLng(),
            })
            setBounds({
              sw: {
                latitude: sw.getLat(),
                longitude: sw.getLng(),
              },
              ne: {
                latitude: ne.getLat(),
                longitude: ne.getLng(),
              },
            })
          }}
        />
        <div className="mx-auto flex flex-col gap-3 pt-4">
          <p className="text-sm font-light text-gray-600">
            {searchCardMock.length} places nearby
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
