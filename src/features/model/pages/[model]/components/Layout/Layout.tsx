import React from 'react'
import { Outlet } from 'react-router-dom'
import { Stack, Title } from '@mantine/core'

export const Layout = () => {
  return (
    <Stack>
      <Title>Layout</Title>
      <Outlet />
    </Stack>
  )
}
