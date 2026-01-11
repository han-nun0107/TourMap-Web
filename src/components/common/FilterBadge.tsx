'use client'

import { activeBadgeVariants } from '@/foundation/badge'
import { cn } from '@/lib/cn'
import { BadgeType } from '@/types'

import Badge from './Badge'
import { ButtonClient } from './button'

type FilterBadgeProps = {
  type: BadgeType
  name: string
  className?: string
  active: boolean
  onClick: () => void
  disabled?: boolean
}

export function FilterBadge({
  type,
  name,
  className,
  active,
  onClick,
  disabled,
}: FilterBadgeProps) {
  return (
    <ButtonClient
      variant="region"
      intent="region"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      active={active}
      className={cn(
        'inline-flex w-fit cursor-pointer rounded-full transition-all duration-200',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <Badge
        type={type}
        name={name}
        className={cn(
          'transition-all duration-200',
          active && activeBadgeVariants[type],
          !disabled && 'hover:opacity-90'
        )}
      />
    </ButtonClient>
  )
}
