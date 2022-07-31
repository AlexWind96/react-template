import * as React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Anchor, Container, Title } from '@mantine/core'
import { LoadingScreen } from '@/components/elements'

export const AuthLayout = () => {
  return (
    <Container size={420} my={20}>
      <Anchor component={Link} to={'/'}>
        <Title sx={{ cursor: 'pointer' }} align="center" order={2}>
          LOGO
        </Title>
      </Anchor>
      <React.Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </React.Suspense>
    </Container>
  )
}
