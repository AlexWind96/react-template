import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Icon, Receipt2, Settings, SwitchHorizontal, User } from 'tabler-icons-react'

import { ProtectedRoute } from '../ProtectedRoute'
import { MiddlewareType, SUBSCRIPTIONS_MIDDLEWARE } from '../routes-middlewares'

import { lazyImport } from '@/utils/lazyImport'
import { ROLE } from '@/features/auth'
import { DashboardLayout } from '@/components/layouts'
import { NotFound } from '@/pages'
import { PATH } from '../path'

const { Dashboard } = lazyImport(() => import('@/pages'), 'Dashboard')
const { Director } = lazyImport(() => import('@/pages'), 'Director')
const { Protected } = lazyImport(() => import('@/pages'), 'Protected')
const { Employee } = lazyImport(() => import('@/pages'), 'Employee')
const { Subscription } = lazyImport(() => import('@/pages'), 'Subscription')
const { Profile } = lazyImport(() => import('@/pages'), 'Profile')
const { Models } = lazyImport(() => import('@/features/model/pages'), 'Models')
import { Model } from '@/features/model/pages'

export const getPrivateRoutes = (isLoggedIn: boolean, user: any) => {
  return [
    {
      path: `/${PATH.app}/*`,
      element: isLoggedIn ? <Outlet /> : <Navigate to={`/${PATH.auth}`} replace />,
      children: [
        {
          index: true,
          element: <Navigate to={`${PATH.dashboard}`} replace />,
        },
        {
          element: <DashboardLayout navbarLinks={mapNavbarLinks(user?.role)} />,
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
}

const privateRoutes: PrivateRouteType[] = [
  {
    path: `${PATH.dashboard}`,
    element: <Dashboard />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
  },
  {
    path: `${PATH.director}`,
    element: <Director />,
    roles: [ROLE.Director],
    middlewares: [],
  },
  {
    path: `${PATH.employee}`,
    element: <Employee />,
    roles: [ROLE.Employee],
    middlewares: [],
  },
  {
    path: `${PATH.protected}`,
    element: <Protected />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [SUBSCRIPTIONS_MIDDLEWARE],
  },
  {
    path: `${PATH.subscription}`,
    element: <Subscription />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
  },
  {
    path: `${PATH.profile}`,
    element: <Profile />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
  },
  {
    path: `${PATH.models}`,
    element: <Models />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
  },
  {
    path: `${PATH.models}/:id/*`,
    element: <Model />,
    roles: [ROLE.Director, ROLE.Employee],
    middlewares: [],
  },
]

export type NavbarLink = {
  path: string
  roles: ROLE[]
  navigation_label: string
  navigation_icon: Icon
}

const navbarLinks: NavbarLink[] = [
  {
    path: `${PATH.dashboard}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Dashboard',
    navigation_icon: Settings,
  },
  {
    path: `${PATH.director}`,
    roles: [ROLE.Director],
    navigation_label: 'Director',
    navigation_icon: Receipt2,
  },
  {
    path: `${PATH.employee}`,
    roles: [ROLE.Employee],
    navigation_label: 'Employee',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.protected}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Protected',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.subscription}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Subscription',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.profile}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Profile',
    navigation_icon: User,
  },
  {
    path: `${PATH.models}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Models',
    navigation_icon: User,
  },
]

export const mapPrivateRoutes = (role: ROLE) => {
  return privateRoutes.filter((route) => route.roles.includes(role))
}

export const mapNavbarLinks = (role: ROLE) => {
  return navbarLinks.filter((route) => route.roles.includes(role))
}
