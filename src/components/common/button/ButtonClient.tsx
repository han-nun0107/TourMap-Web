'use client'

import { buttonVariants, type ButtonVariants } from '@/foundation/button'
import { cn } from '@/lib/cn'

type ButtonClientProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    isLoading?: boolean
    active?: boolean
  }

export function ButtonClient({
  variant,
  intent,
  fullWidth,
  className,
  disabled,
  isLoading,
  active,
  children,
  ...props
}: ButtonClientProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      disabled={isDisabled}
      className={cn(
        buttonVariants({ variant, intent, fullWidth }),
        active ? 'bg-purple-600 text-white' : 'text-black-900 bg-gray-200',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
