export enum ROLE {
  Director = 'director',
  Employee = 'employee',
}

export type AuthUser = {
  id: string | number
  email: string
  name: string
  role: ROLE
  created_at: string
  email_verified: boolean
}
