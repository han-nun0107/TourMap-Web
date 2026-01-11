'use client'

import { MousePointer2 } from 'lucide-react'
import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

import SearchCard from '@/components/card/SearchCard'
import { FilterBadge } from '@/components/common'
import { CATEGORY_OPTIONS } from '@/constants/main/category'
import { searchCardMock } from '@/mocks'

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>('attraction')
  return (
    <>
      <div className="w-full border-b border-gray-200/50 bg-gray-100">
        <div className="mx-auto flex h-28 w-full max-w-[1400px] flex-col justify-center gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <MousePointer2 size={20} className="rotate-90 text-blue-600" />
            <h1 className="text-black-900 text-xl font-bold">Nearby Places</h1>
          </div>
          <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:gap-3 md:gap-4">
            {CATEGORY_OPTIONS.map((option) => (
              <FilterBadge
                key={option.value}
                type="category"
                name={option.title}
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
          center={{ lat: 37.5665, lng: 126.978 }}
          level={3}
        >
          <MapMarker position={{ lat: 37.5665, lng: 126.978 }}>
            <div>마커</div>
          </MapMarker>
        </Map>
        <div className="mx-auto flex flex-col gap-3 pt-4">
          <p className="text-sm font-light text-gray-600">
            {searchCardMock.length} places nearby
          </p>
          <div className="scrollbar-hide h-[76vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {searchCardMock.map((card) => (
                <SearchCard
                  key={card.id}
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
