import { cn } from '@/lib/cn'
import { BadgeType } from '@/types'

type BadgeProps = {
  type: BadgeType
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const badgeStyles: Record<BadgeType, string> = {
  main: 'h-5 w-24 justify-center bg-blue-500 px-2 text-white',
  search: 'h-5 w-40 justify-start bg-gray-200 px-2 text-gray-900',
  info: 'h-5 w-28 justify-center bg-green-500 px-2 text-white',
  warning: 'h-5 w-32 justify-center bg-yellow-500 px-2 text-black',
}

export default function Badge({ name, type, Icon }: BadgeProps) {
  return (
    <div
      className={cn('flex items-center gap-1 rounded-full', badgeStyles[type])}
    >
      <Icon aria-label={name} className="size-4" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  )
}
