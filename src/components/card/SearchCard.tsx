'use client'

import { HeartIcon, LucideIcon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/common'
import { ButtonClient } from '@/components/common/button'
import Card from '@/components/common/Card'
import { IMAGE_URLS } from '@/constants/imageUrls'
import { useLikeStore } from '@/store/like/likeStore'

type SearchCardProps = {
  image?: string
  title: string
  location: string
  tag: string
  tagIcon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
  id: string
}

export default function SearchCard({
  image,
  title,
  location,
  tag,
  tagIcon,
  id,
}: SearchCardProps) {
  const { hasHydrated, isLiked, toggleLike } = useLikeStore()

  const liked = hasHydrated ? isLiked(Number(id)) : false

  return (
    <Card className="h-auto w-88 rounded-2xl py-2">
      <div className="flex-center h-full w-full gap-4 px-2">
        <Image
          src={image || IMAGE_URLS.map.noImage}
          alt={title}
          width={96}
          height={96}
          className="rounded-xl object-cover"
        />
        <div className="flex flex-col gap-1">
          <Badge name={tag} type="search" Icon={tagIcon} />
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
            onClick={() =>
              toggleLike({
                id: Number(id),
                title,
                image: image || IMAGE_URLS.map.noImage,
                location,
                tag,
                tagIcon,
              })
            }
          >
            <HeartIcon
              size={24}
              className={
                liked ? 'fill-red-500 text-red-500' : 'fill-none text-gray-500'
              }
            />
          </ButtonClient>
        </div>
      </div>
    </Card>
  )
}
