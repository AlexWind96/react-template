import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useAuth } from '@/features/auth/hooks'
import { getAuthRoutes, getPrivateRoutes, getPublicRoutes } from './routes-configs'

export const AppRoutes = () => {
  const { isLoggedIn, user } = useAuth()

  const routes = useRoutes([
    ...getPublicRoutes(),
    ...getAuthRoutes(isLoggedIn),
    ...getPrivateRoutes(isLoggedIn, user),
  ])

  return <>{routes}</>
}
