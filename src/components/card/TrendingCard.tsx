import { MapPin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import Card from '@/components/common/Card'

import { Badge } from '../common'

type TrendingCardProps = {
  image: StaticImageData
  title: string
  location: string
  tag: string
  tagIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function TrendingCard({
  image,
  title,
  location,
  tag,
  tagIcon,
}: TrendingCardProps) {
  return (
    <Card className="flex h-80 w-full flex-col rounded-2xl">
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
