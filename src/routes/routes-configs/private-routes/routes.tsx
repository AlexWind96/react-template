import React from 'react'
import { ROLE } from '@/features/auth'
import { Model } from '@/features/model/pages'
import { PATH } from '@/routes/path'
import { lazyImport } from '@/utils/lazyImport'
import { MiddlewareType, SUBSCRIPTIONS_MIDDLEWARE } from '../../routes-middlewares'

const { Dashboard } = lazyImport(() => import('@/pages'), 'Dashboard')
const { Director } = lazyImport(() => import('@/pages'), 'Director')
const { Protected } = lazyImport(() => import('@/pages'), 'Protected')
const { Employee } = lazyImport(() => import('@/pages'), 'Employee')
const { Subscription } = lazyImport(() => import('@/pages'), 'Subscription')
const { Profile } = lazyImport(() => import('@/pages'), 'Profile')
const { Models } = lazyImport(() => import('@/features/model/pages'), 'Models')

type PrivateRouteType = {
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

export const getPrivateRoutesByRole = (role: ROLE) => {
  return privateRoutes.filter((route) => route.roles.includes(role))
}

export const getAllPrivateRoutes = () => {
  return privateRoutes
}
