import { Stack, Title } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <Stack>
      <Title>Layout</Title>
      <Outlet />
    </Stack>
  )
}
