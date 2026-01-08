import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        main: 'bg-purple-600 text-white hover:opacity-90 rounded-xl',
        heart: 'text-gray-600 hover:opacity-90 rounded-full',
        region: 'bg-gray-200 text-black-900 hover:opacity-90 rounded-full',
      },
      intent: {
        main: 'px-8 py-3',
        heart: 'h-9 w-9',
        region: 'px-3 py-2',
      },
      active: {
        true: '',
        false: '',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'region',
        active: true,
        className: 'bg-purple-600 text-white',
      },
    ],
    defaultVariants: {
      variant: 'main',
      intent: 'main',
      active: false,
      fullWidth: false,
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
