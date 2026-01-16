'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { TrendingCard } from '@/components/card'
import { LoadingState } from '@/components/detail'
import { useLanguageStore } from '@/store/language'
import { useLikeStore } from '@/store/like'
import { getIconByTag } from '@/utils/iconMapper'

export default function FavoritesPage() {
  const { likes, hasHydrated } = useLikeStore()
  const language = useLanguageStore((state) => state.language)
  const t = useTranslations('Home')
  if (!hasHydrated) {
    return <LoadingState />
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-black-900 text-2xl font-bold">
            {t('favorites.favorites')}
          </h1>
        </div>
        <p className="text-sm font-light text-gray-600">
          {t('favorites.savedPlaces', { count: likes.length })}
        </p>
      </div>
      <div className="mx-auto mb-6 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {likes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium text-gray-600">
              {t('favorites.noFavorites')}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {t('favorites.startAdding')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {likes.map((like) => (
              <Link href={`/${language}/${like.id}`} key={like.id}>
                <TrendingCard
                  image={like.image}
                  title={like.title}
                  location={like.location}
                  tag={like.tag}
                  tagIcon={{
                    name: like.tag,
                    icon: getIconByTag(like.tag),
                  }}
                  id={like.id}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
