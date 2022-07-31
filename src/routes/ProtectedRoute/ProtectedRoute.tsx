import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useFromPath } from '@/hooks'
import { MiddlewareType, SUBSCRIPTIONS_MIDDLEWARE } from '../routes-middlewares'

type ProtectedRouteProps = {
  middlewares: MiddlewareType[]
  user: any
}

export const ProtectedRoute = ({ middlewares, user }: ProtectedRouteProps) => {
  const from = useFromPath()

  const withMiddleware = (type: string) => {
    return middlewares.some((middleware) => middleware.type === type)
  }

  if (withMiddleware(SUBSCRIPTIONS_MIDDLEWARE.type) && SUBSCRIPTIONS_MIDDLEWARE.condition(user)) {
    return <Navigate to={SUBSCRIPTIONS_MIDDLEWARE.redirectPath} state={{ from }} />
  }

  return <Outlet />
}
