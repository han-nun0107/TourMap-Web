import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import type { DetailCommonItem } from '@/types/tour/detailCommon'

type HeroSectionProps = {
  item: DetailCommonItem
}

export default function HeroSection({ item }: HeroSectionProps) {
  const address = [item.addr1, item.addr2].filter(Boolean).join(' ')
  const t = useTranslations('Home')

  return (
    <div className="relative h-[450px] w-full overflow-hidden bg-gray-200 sm:h-[550px] lg:h-[600px]">
      {item.firstimage ? (
        <Image
          src={item.firstimage}
          alt={item.title || t('detail.imagesOfTouristAttractions')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-300 to-gray-400">
          <span className="text-gray-500">{t('detail.noImage')}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-6 text-white sm:p-8 lg:p-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-3 text-3xl leading-tight font-bold drop-shadow-lg sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>
          {address && (
            <div className="flex items-center gap-2 text-base sm:text-lg">
              <MapPin size={22} className="shrink-0" />
              <span className="drop-shadow-md">{address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
