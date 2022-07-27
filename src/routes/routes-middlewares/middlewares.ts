export const ROUTE_MIDDLEWARE = {
  SUBSCRIPTIONS: {
    type: 'SUBSCRIPTIONS',
    condition: (user: object) => !hasSubscriptions(user),
    redirectPath: 'subscription',
  },
}

export type MiddlewareType = typeof ROUTE_MIDDLEWARE.SUBSCRIPTIONS

const hasSubscriptions = (user: any): boolean => {
  //Hard coded
  return false
}
