import { BadgeType } from '@/types'

export const badgeVariants: Record<BadgeType, string> = {
  main: 'h-5 w-24 justify-center bg-blue-500 px-2 text-white',
  search: 'h-5 w-40 justify-start bg-gray-200 px-2 text-gray-900',
  region: 'flex-center bg-gray-200 px-3 py-2 text-black-900 text-sm',
  category: 'flex-center px-3 py-2 text-black-900 text-sm',
}

export const activeBadgeVariants: Record<BadgeType, string> = {
  main: 'scale-105 text-white shadow-md',
  search: 'scale-105 text-white shadow-md',
  region: 'scale-105 text-white shadow-md',
  category: ' text-white shadow-md',
}
