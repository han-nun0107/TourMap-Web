import { badgeVariants } from '@/foundation/badge'
import { cn } from '@/lib/cn'
import { BadgeType } from '@/types'

type BadgeProps = {
  type: BadgeType
  name: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
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
        'flex items-center gap-1 rounded-full',
        badgeVariants[type],
        className
      )}
    >
      {Icon && (
        <Icon aria-hidden="true" className={cn('size-4', iconClassName)} />
      )}
      <p className={cn('text-sm font-medium', textClassName)}>{name}</p>
    </span>
  )
}
