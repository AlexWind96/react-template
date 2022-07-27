export type MiddlewareType = {
  type: string
  condition: (arg: object) => boolean
  redirectPath: string
}

export const ROUTE_MIDDLEWARE = {
  SUBSCRIPTIONS: {
    type: 'SUBSCRIPTIONS',
    condition: (user: object) => !hasSubscriptions(user),
    redirectPath: 'subscription',
  },
}

const hasSubscriptions = (user: object): boolean => {
  //Hard coded
  return false
}
