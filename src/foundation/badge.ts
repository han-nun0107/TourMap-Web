import { BadgeType } from '@/types'

export const badgeVariants: Record<BadgeType, string> = {
  main: 'h-5 w-24 justify-center bg-blue-500 px-2 text-white',
  search: 'h-5 w-40 justify-start bg-gray-200 px-2 text-gray-900',
  info: 'h-5 w-28 justify-center bg-green-500 px-2 text-white',
  warning: 'h-5 w-32 justify-center bg-yellow-500 px-2 text-black',
  filter: 'flex-center bg-gray-200 px-3 py-2 text-black-900 text-sm',
}

export const activeBadgeVariants: Record<BadgeType, string> = {
  main: 'scale-105 bg-purple-600 text-white shadow-md',
  search: 'scale-105 bg-purple-600 text-white shadow-md',
  info: 'scale-105 bg-purple-600 text-white shadow-md',
  warning: 'scale-105 bg-purple-600 text-white shadow-md',
  filter: 'scale-105 bg-purple-600 text-white shadow-md',
}
