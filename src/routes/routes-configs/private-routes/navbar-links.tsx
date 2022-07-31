import { Icon, Receipt2, Settings, SwitchHorizontal, User } from 'tabler-icons-react'
import { ROLE } from '@/features/auth'
import { PATH } from '../../path'

export type NavbarLink = {
  path: string
  roles: ROLE[]
  navigation_label: string
  navigation_icon: Icon
}

const navbarLinks: NavbarLink[] = [
  {
    path: `${PATH.dashboard}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Dashboard',
    navigation_icon: Settings,
  },
  {
    path: `${PATH.director}`,
    roles: [ROLE.Director],
    navigation_label: 'Director',
    navigation_icon: Receipt2,
  },
  {
    path: `${PATH.employee}`,
    roles: [ROLE.Employee],
    navigation_label: 'Employee',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.protected}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Protected',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.subscription}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Subscription',
    navigation_icon: SwitchHorizontal,
  },
  {
    path: `${PATH.profile}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Profile',
    navigation_icon: User,
  },
  {
    path: `${PATH.models}`,
    roles: [ROLE.Director, ROLE.Employee],
    navigation_label: 'Models',
    navigation_icon: User,
  },
]

export const mapNavbarLinks = (role: ROLE) => {
  return navbarLinks.filter((route) => route.roles.includes(role))
}
