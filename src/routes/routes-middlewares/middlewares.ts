import { PATH } from '../path'

export type MiddlewareType = {
  type: string
  condition: (arg: object) => boolean
  redirectPath: string
}

export const SUBSCRIPTIONS_MIDDLEWARE: MiddlewareType = {
  type: 'SUBSCRIPTIONS',
  condition: (user: object) => !hasSubscriptions(user),
  redirectPath: `${PATH.subscription}`,
}

const hasSubscriptions = (user: object): boolean => {
  //Hard coded
  return false
}
