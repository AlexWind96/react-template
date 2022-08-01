import React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/react-query'

export function QueryProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
