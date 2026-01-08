'use client'

import {
  BookIcon,
  CalendarIcon,
  HeartIcon,
  MapPinIcon,
  TrendingUpIcon,
  UtensilsIcon,
} from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import { Badge } from '@/components/common'
import { ButtonClient } from '@/components/common/button'
import Card from '@/components/common/Card'

const iconMap = {
  BookIcon,
  CalendarIcon,
  MapPinIcon,
  TrendingUpIcon,
  UtensilsIcon,
} as const

type IconName = keyof typeof iconMap

type SearchCardProps = {
  image: StaticImageData
  title: string
  location: string
  tag: string
  tagIcon: IconName
  distance: string
}

export default function SearchCard({
  image,
  title,
  location,
  tag,
  tagIcon,
  distance,
}: SearchCardProps) {
  return (
    <Card className="h-30 w-88 rounded-2xl">
      <div className="flex-center h-full w-full gap-4">
        <Image
          src={image}
          alt={title}
          width={96}
          height={96}
          className="rounded-xl object-cover"
        />
        <div className="flex flex-col gap-1">
          <Badge name={tag} type="search" Icon={iconMap[tagIcon]} />
          <p className="text-black-900 text-lg-bold">{title}</p>
          <div className="flex items-center gap-1">
            <MapPinIcon size={12} className="text-gray-600" />
            <p className="text-sm font-medium text-gray-600">{location}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <ButtonClient
            variant="heart"
            intent="heart"
            aria-label="좋아요"
            onClick={() => {
              console.log('좋아요')
            }}
          >
            <HeartIcon size={24} />
          </ButtonClient>
          <p className="text-sm font-medium text-gray-600">{distance}</p>
        </div>
      </div>
    </Card>
  )
}
