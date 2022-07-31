import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthLayout } from '@/components/layouts'
import { lazyImport } from '@/utils/lazyImport'
import { PATH } from '../path'

//pages
const { Login } = lazyImport(() => import('@/pages'), 'Login')
const { Register } = lazyImport(() => import('@/pages'), 'Register')

//config
export const getAuthRoutes = (isLoggedIn: boolean) => {
  return [
    {
      element: !isLoggedIn ? <AuthLayout /> : <Navigate to={`/${PATH.dashboard}`} replace />,
      children: [
        {
          path: `/${PATH.login}`,
          element: <Login />,
        },
        {
          path: `/${PATH.register}`,
          element: <Register />,
        },
      ],
    },
  ]
}
