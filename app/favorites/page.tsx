'use client'

import { TrendingCard } from '@/components/card'
import { useLikeStore } from '@/store/like/likeStore'
import { getIconByTag } from '@/utils/iconMapper'

export default function FavoritesPage() {
  const { likes, hasHydrated } = useLikeStore()

  if (!hasHydrated) {
    return (
      <div className="min-h-screen w-full bg-gray-100">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-black-900 text-2xl font-bold">Favorites</h1>
          <p className="text-sm font-light text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-black-900 text-2xl font-bold">Favorites</h1>
        </div>
        <p className="text-sm font-light text-gray-600">
          {likes.length} saved places
        </p>
      </div>
      <div className="mx-auto mb-6 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {likes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg font-medium text-gray-600">
              No favorites yet
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Start adding places to your favorites!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {likes.map((like) => (
              <TrendingCard
                key={like.id}
                image={like.image}
                title={like.title}
                location={like.location}
                tag={like.tag}
                tagIcon={getIconByTag(like.tag)}
                id={like.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
