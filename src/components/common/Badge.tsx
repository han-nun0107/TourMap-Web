import { LucideIcon } from 'lucide-react'

import { badgeVariants } from '@/foundation/badge'
import { cn } from '@/lib'
import { BadgeType } from '@/types'

type BadgeProps = {
  type: BadgeType
  name: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | LucideIcon
  className?: string
  iconClassName?: string
  textClassName?: string
}

export default function Badge({
  name,
  type,
  Icon,
  className,
  iconClassName,
  textClassName,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'flex h-8 items-center gap-1 rounded-full',
        badgeVariants[type],
        className
      )}
    >
      {Icon && (
        <Icon aria-hidden="true" className={cn('size-4', iconClassName)} />
      )}
      <p
        className={cn(
          'truncate text-sm font-medium whitespace-nowrap',
          textClassName
        )}
      >
        {name}
      </p>
    </span>
  )
}
