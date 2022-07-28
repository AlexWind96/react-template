import React from 'react'
import { lazyImport } from '@/utils/lazyImport'
import { Navigate } from 'react-router-dom'

//Layout
import { HomeLayout } from '@/components/layouts'
import { NotFound, Error } from '@/pages'

//pages
const { Home } = lazyImport(() => import('@/pages'), 'Home')
const { About } = lazyImport(() => import('@/pages'), 'About')

//config
export const getPublicRoutes = () => {
  return [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={'/home'} replace />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
    {
      path: '/error',
      element: <Error />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
}
