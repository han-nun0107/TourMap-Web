import { HeartIcon, MapPin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import { Badge } from '@/components/common'
import { ButtonClient } from '@/components/common/button'
import Card from '@/components/common/Card'

type TrendingCardProps = {
  image: StaticImageData
  title: string
  location: string
  tag: string
  tagIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  id: string | number
  onClick?: () => void
}

export default function TrendingCard({
  image,
  title,
  location,
  tag,
  tagIcon,
  id,
  onClick,
}: TrendingCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <Card
      className="flex h-80 w-79 flex-col rounded-2xl max-sm:w-83 max-sm:items-center max-sm:justify-center"
      onClick={onClick}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          width={316}
          height={236}
        />
        <Badge
          name={tag}
          type="main"
          Icon={tagIcon}
          className="absolute top-52 left-2"
        />
        <ButtonClient
          variant="heart"
          intent="clear"
          onClick={(e) => {
            e.stopPropagation()
            setIsLiked(!isLiked)
          }}
          className="absolute top-2 right-2 z-10 h-9 w-9 rounded-full bg-gray-100/80"
        >
          <HeartIcon
            size={16}
            className={
              isLiked ? 'fill-red-500 text-red-500' : 'fill-none text-gray-500'
            }
          />
        </ButtonClient>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 px-4">
        <p className="text-sm font-bold">{title}</p>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-600" />
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </Card>
  )
}
