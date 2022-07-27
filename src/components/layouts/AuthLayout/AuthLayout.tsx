import { Anchor, Container, Paper, Title } from '@mantine/core'
import * as React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LoadingScreen } from '@/components/elements'

export const AuthLayout = ({ title }) => {
  return (
    <Container size={420} my={20}>
      <Anchor component={Link} to={'/'}>
        <Title sx={{ cursor: 'pointer' }} align="center" order={2}>
          LOGO
        </Title>
      </Anchor>
      <Paper withBorder shadow="md" px={30} pb={30} pt={20} mt={30} radius="md">
        <Title align="center" order={3} mb={'md'}>
          {title}
        </Title>
        <React.Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </React.Suspense>
      </Paper>
    </Container>
  )
}
