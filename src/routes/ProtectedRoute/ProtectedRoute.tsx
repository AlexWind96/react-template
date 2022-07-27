import * as React from 'react'
import { useFromPath } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { MiddlewareType, ROUTE_MIDDLEWARE } from '../routes-middlewares'

const { SUBSCRIPTIONS } = ROUTE_MIDDLEWARE

type ProtectedRouteProps = {
  middlewares: MiddlewareType[]
  user: any
}

export const ProtectedRoute = ({ middlewares, user }: ProtectedRouteProps) => {
  const from = useFromPath({})

  const withMiddleware = (type: string) => {
    return middlewares.some((middleware) => middleware.type === type)
  }

  if (withMiddleware(SUBSCRIPTIONS.type) && SUBSCRIPTIONS.condition(user)) {
    return <Navigate to={SUBSCRIPTIONS.redirectPath} state={{ from }} />
  }

  return <Outlet />
}
