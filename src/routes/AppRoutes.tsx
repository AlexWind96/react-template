import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useAuth } from '@/features/auth/hooks'
import { getAllRoutes } from './routes-configs'

export const AppRoutes = () => {
  const { isLoggedIn, user } = useAuth()

  return useRoutes(getAllRoutes(isLoggedIn, user))
}
