import { LucideIcon } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LikeItem = {
  id: number
  title: string
  image: StaticImageData | string
  location: string
  tag: string
  tagIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | LucideIcon
}

export type LikeState = {
  likes: LikeItem[]
  hasHydrated: boolean
  setHasHydrated: (v: boolean) => void

  isLiked: (id: number) => boolean
  addLike: (like: LikeItem) => void
  removeLike: (id: number) => void
  toggleLike: (like: LikeItem) => void
}

export const useLikeStore = create<LikeState>()(
  persist(
    (set, get) => ({
      likes: [],

      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),

      isLiked: (id) => get().likes.some((like) => like.id === id),

      addLike: (like) => {
        set((state) => {
          if (state.likes.some((l) => l.id === like.id)) return state
          return { likes: [...state.likes, like] }
        })
      },

      removeLike: (id) => {
        set((state) => ({
          likes: state.likes.filter((like) => like.id !== id),
        }))
      },

      toggleLike: (like) => {
        set((state) => {
          const exists = state.likes.some((l) => l.id === like.id)
          return exists
            ? { likes: state.likes.filter((l) => l.id !== like.id) }
            : { likes: [...state.likes, like] }
        })
      },
    }),
    {
      name: 'like-storage',
      partialize: (state) => ({
        likes: state.likes.map(({ tagIcon: _tagIcon, image, ...rest }) => {
          const imagePath =
            typeof image === 'string'
              ? image
              : (image as StaticImageData)?.src || ''
          return {
            ...rest,
            image: imagePath,
          }
        }),
        hasHydrated: state.hasHydrated,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (!error && state) {
          state.setHasHydrated(true)
        }
      },
    }
  )
)
