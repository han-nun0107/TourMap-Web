'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { createQueryClient } from '@/lib'

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = createQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
