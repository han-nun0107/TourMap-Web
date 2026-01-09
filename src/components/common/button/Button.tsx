import { buttonVariants, type ButtonVariants } from '@/foundation/button'
import { cn } from '@/lib/cn'

type ButtonBaseProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> &
  ButtonVariants & {
    className?: string
    children?: React.ReactNode
  }

export default function Button({
  variant,
  intent,
  active,
  fullWidth,
  className,
  type = 'button',
  disabled,
  children,
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, intent, fullWidth, active }),
        className
      )}
    >
      {children}
    </button>
  )
}
