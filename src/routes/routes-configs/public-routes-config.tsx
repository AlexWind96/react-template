import React from 'react'
import { lazyImport } from '@/utils/lazyImport'
import { Navigate } from 'react-router-dom'

//Layout
import { HomeLayout } from '@/components/layouts'
import { PATH } from '../path'

//pages
const { Home } = lazyImport(() => import('@/pages'), 'Home')
const { About } = lazyImport(() => import('@/pages'), 'About')

//config
export const getPublicRoutes = () => {
  return [
    {
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={`/${PATH.home}`} replace />,
        },
        {
          path: `/${PATH.home}`,
          element: <Home />,
        },
        {
          path: `/${PATH.about}`,
          element: <About />,
        },
      ],
    },
  ]
}
