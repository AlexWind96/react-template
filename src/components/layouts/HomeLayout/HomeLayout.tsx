import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import { LoadingScreen } from '@/components/elements'
import { Header } from './Header'

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
