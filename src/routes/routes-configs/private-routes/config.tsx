import React from 'react'
import { Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layouts'
import { ProtectedRoute } from '../../ProtectedRoute'
import { PATH } from '../../path'
import { mapNavbarLinks } from './navbar-links'
import { getAllPrivateRoutes, getPrivateRoutesByRole } from './routes'

export const getPrivateRoutes = (isLoggedIn: boolean, user: any) => {
  return [
    {
      element: isLoggedIn ? (
        <DashboardLayout navbarLinks={mapNavbarLinks(user?.role)} />
      ) : (
        <Navigate to={`/${PATH.login}`} replace />
      ),
      children: getPrivateRoutesByRole(user?.role).map((route, index) => {
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
    //When user is not log in, and prevent show 404 page
    ...getAllPrivateRoutes().map((route, index) => {
      return {
        key: `${index}-${route.path}`,
        path: route.path,
        element: <Navigate to={`/${PATH.login}`} replace />,
      }
    }),
  ]
}
