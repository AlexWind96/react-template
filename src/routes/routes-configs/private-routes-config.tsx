import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Icon, Receipt2, Settings, SwitchHorizontal, User } from 'tabler-icons-react'

import { ProtectedRoute } from '../ProtectedRoute'
import { MiddlewareType, SUBSCRIPTIONS_MIDDLEWARE } from '../routes-middlewares'

import { lazyImport } from '@/utils/lazyImport'
import { ROLE } from '@/features/auth'
import { DashboardLayout } from '@/components/layouts'
import { NotFound } from '@/pages'

const { Dashboard } = lazyImport(() => import('@/pages'), 'Dashboard')
const { Director } = lazyImport(() => import('@/pages'), 'Director')
const { Protected } = lazyImport(() => import('@/pages'), 'Protected')
const { Employee } = lazyImport(() => import('@/pages'), 'Employee')
const { Subscription } = lazyImport(() => import('@/pages'), 'Subscription')
const { Profile } = lazyImport(() => import('@/pages'), 'Profile')

export const getPrivateRoutes = (isLoggedIn: boolean, user: any) => {
  return [
    {
      path: '/app/*',
      element: isLoggedIn ? <Outlet /> : <Navigate to={'/auth'} replace />,
      children: [
        {
          index: true,
          element: <Navigate to={'dashboard'} replace />,
        },
        {
          element: <DashboardLayout navbarLinks={mapPrivateRoutes(user?.role)} />,
          children: mapPrivateRoutes(user?.role).map((route, index) => {
            return {
              key: `${index}-${route.path}`,
              element: <ProtectedRoute user={user} middlewares={route.middlewares} />,
              children: [
                {
                  path: route.path,
                  element: route.element,
                },
              ],
            }
          }),
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]
}

export type PrivateRouteType = {
  index?: boolean
  path: string
  element: React.ReactNode
  roles: ROLE[]
  middlewares: MiddlewareType[]
  navigation_label: string
  navigation_icon: Icon
}

const privateRoutes: PrivateRouteType[] = [
  {
    path: 'dashboard',
    element: <Dashboard />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
    navigation_label: 'Dashboard',
    navigation_icon: Settings,
  },
  {
    path: 'director',
    element: <Director />,
    roles: [ROLE.Director],
    middlewares: [],
    navigation_label: 'Director',
    navigation_icon: Receipt2,
  },
  {
    path: 'employee',
    element: <Employee />,
    roles: [ROLE.Employee],
    middlewares: [],
    navigation_label: 'Employee',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: 'protected',
    element: <Protected />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [SUBSCRIPTIONS_MIDDLEWARE],
    navigation_label: 'Protected',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: 'subscription',
    element: <Subscription />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
    navigation_label: 'Subscription',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: 'profile',
    element: <Profile />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
    navigation_label: 'Profile',
    navigation_icon: User,
  },
]

export const mapPrivateRoutes = (role: ROLE) => {
  return privateRoutes.filter((route) => route.roles.includes(role))
}
