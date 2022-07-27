import React from 'react'
import { lazyImport } from '@/utils/lazyImport'
import { Navigate } from 'react-router-dom'

//Layout
import { HomeLayout } from '@/components/layouts'

//pages
const { Home } = lazyImport(() => import('@/pages'), 'Home')
const { Contacts } = lazyImport(() => import('@/pages'), 'Contacts')
const { About } = lazyImport(() => import('@/pages'), 'About')
const { NotFound } = lazyImport(() => import('@/pages'), 'NotFound')
const { Error } = lazyImport(() => import('@/pages'), 'Error')

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
        {
          path: '/contacts',
          element: <Contacts />,
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
