'use client'

import { MapIcon, MapPinIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ButtonClient } from '@/components/common/button'
import { IMAGE_URLS } from '@/constants/imageUrls'

export default function Banner() {
  const router = useRouter()
  const handleStartExploring = () => {
    router.push('/search')
  }
  const handleViewMap = () => {
    router.push('/map')
  }
  return (
    <div className="relative h-122 w-full max-sm:h-124 md:h-104 lg:h-122 xl:h-122 2xl:h-122">
      <Image
        src={IMAGE_URLS.background}
        alt="background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center px-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-sm text-blue-600">
            <MapPinIcon className="h-4 w-4" /> Discover Korea
          </span>
          <h1 className="text-black-900 mt-6 text-center text-6xl font-bold">
            Explore the Beauty of Korea
          </h1>
          <p className="mt-12 text-center text-lg font-light text-gray-600">
            From ancient palaces to vibrant street food, discover the best
            destinations across the Korean peninsula.
          </p>
          <div className="mt-12 flex gap-4 max-sm:w-74 max-sm:flex-col">
            <ButtonClient
              variant="main"
              intent="main"
              className="gap-2"
              onClick={handleStartExploring}
            >
              <SearchIcon className="h-4 w-4" />
              Start Exploring
            </ButtonClient>
            <ButtonClient
              variant="main"
              intent="main"
              className="group text-black-900 gap-2 border border-gray-200 bg-gray-100 hover:bg-orange-600 hover:text-gray-100"
              onClick={handleViewMap}
            >
              <MapIcon className="text-black-900 h-4 w-4 duration-200 group-hover:text-gray-100" />
              View Map
            </ButtonClient>
          </div>
        </div>
      </div>
    </div>
  )
}
