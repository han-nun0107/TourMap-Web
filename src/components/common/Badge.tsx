import { badgeVariants } from '@/foundation/badge'
import { cn } from '@/lib/cn'
import { BadgeType } from '@/types'

type BadgeProps = {
  type: BadgeType
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  className?: string
}

export default function Badge({ name, type, Icon, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-full',
        className,
        badgeVariants[type]
      )}
    >
      <Icon aria-hidden="true" className="size-4" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  )
}
