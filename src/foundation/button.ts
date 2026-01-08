import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        main: 'bg-purple-600 text-white hover:opacity-90 rounded-xl',
        heart: 'text-gray-600 hover:opacity-90 rounded-full',
        region: 'text-black-900 hover:opacity-90 rounded-full',
      },
      intent: {
        main: 'px-8 py-3',
        heart: 'h-9 w-9',
        region: 'px-3 py-2',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'main',
      intent: 'main',
      fullWidth: false,
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
