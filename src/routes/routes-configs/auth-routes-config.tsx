import React from 'react'
import { lazyImport } from '@/utils/lazyImport'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthLayout } from '@/components/layouts'
import { NotFound } from '@/pages'
import { PATH } from '../path'

//pages
const { Login } = lazyImport(() => import('@/pages'), 'Login')
const { Register } = lazyImport(() => import('@/pages'), 'Register')

//config
export const getAuthRoutes = (isLoggedIn: boolean) => {
  return [
    {
      path: `/${PATH.auth}/*`,
      element: !isLoggedIn ? <Outlet /> : <Navigate to={`/${PATH.app}`} replace />,
      children: [
        {
          index: true,
          element: <Navigate to={`${PATH.login}`} replace />,
        },
        {
          element: <AuthLayout title={'Log in'} />,
          children: [
            {
              path: `${PATH.login}`,
              element: <Login />,
            },
          ],
        },
        {
          element: <AuthLayout title={'Sign up'} />,
          children: [
            {
              path: `${PATH.register}`,
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
