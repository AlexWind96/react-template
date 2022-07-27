import React from 'react'
import { lazyImport } from '@/utils/lazyImport'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthLayout } from '@/components/layouts'

//Layout

//pages
const { Login } = lazyImport(() => import('@/pages'), 'Login')
const { Register } = lazyImport(() => import('@/pages'), 'Register')
const { NotFound } = lazyImport(() => import('@/pages'), 'NotFound')
//config
export const getAuthRoutes = (isLoggedIn: boolean) => {
  return [
    {
      path: '/auth/*',
      element: !isLoggedIn ? <Outlet /> : <Navigate to={'/app'} replace />,
      children: [
        {
          index: true,
          element: <Navigate to={'login'} replace />,
        },
        {
          element: <AuthLayout title={'Log in'} />,
          children: [
            {
              path: 'login',
              element: <Login />,
            },
          ],
        },
        {
          element: <AuthLayout title={'Sign up'} />,
          children: [
            {
              path: 'register',
              element: <Register />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]
}
