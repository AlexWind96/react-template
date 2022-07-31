import { AuthUser } from '@/features/auth'
import { getAuthRoutes } from './auth-routes-config'
import { getPublicRoutes } from './public-routes-config'
import { getPrivateRoutes } from './private-routes'
import { getUtilsRoutes } from './utils-routes-config'

export const getAllRoutes = (isLoggedIn: boolean, user: AuthUser | null): any => {
  return [
    ...getPublicRoutes(),
    ...getAuthRoutes(isLoggedIn),
    ...getPrivateRoutes(isLoggedIn, user),
    ...getUtilsRoutes(),
  ]
}
