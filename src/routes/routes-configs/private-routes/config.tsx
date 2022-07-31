import React from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from '../../path'
import { ProtectedRoute } from '../../ProtectedRoute'
import { mapPrivateRoutes } from './routes'
import { mapNavbarLinks } from './navbar-links'

import { DashboardLayout } from '@/components/layouts'

export const getPrivateRoutes = (isLoggedIn: boolean, user: any) => {
  return [
    {
      element: isLoggedIn ? (
        <DashboardLayout navbarLinks={mapNavbarLinks(user?.role)} />
      ) : (
        <Navigate to={`/${PATH.login}`} replace />
      ),
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
  ]
}
