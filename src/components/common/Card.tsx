import { cn } from '@/lib/cn'

type CardProps = {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function Card({ className, onClick, children }: CardProps) {
  return (
    <div
      className={cn(
        'transform cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-md',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
