import { AppShell } from '@mantine/core'
import React from 'react'

import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { LoadingScreen } from '@/components/elements'

export function HomeLayout() {
  return (
    <AppShell
      padding={0}
      header={<Header links={[]} />}
      styles={() => ({
        main: {
          minHeight: '100vh',
        },
      })}
    >
      <React.Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </React.Suspense>
    </AppShell>
  )
}
