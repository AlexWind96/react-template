import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logout, X } from 'tabler-icons-react'
import { ActionIcon, Anchor, Group, Navbar, ScrollArea, Title } from '@mantine/core'
import useStyles from './NavbarDrawer.styles'

export const NavbarDrawer = ({ data, closeDrawer, onLogout }) => {
  const { classes, cx } = useStyles()

  const links = data.map((item) => (
    <NavLink
      to={item.path}
      key={item.navigation_label}
      className={({ isActive }) =>
        isActive ? cx(classes.link, classes.linkActive) : cx(classes.link)
      }
      onClick={closeDrawer}
    >
      <item.navigation_icon className={classes.linkIcon} />
      <span>{item.navigation_label}</span>
    </NavLink>
  ))

  return (
    <Navbar className={classes.nav} p="sm">
      <Navbar.Section>
        <Group className={classes.header} position="apart">
          <Title order={3}>LOGO</Title>
          <ActionIcon onClick={closeDrawer} size="sm" mr="xl">
            <X />
          </ActionIcon>
        </Group>
      </Navbar.Section>
      <Navbar.Section component={ScrollArea} grow>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Anchor<'button'> className={classes.link} onClick={onLogout}>
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </Anchor>
      </Navbar.Section>
    </Navbar>
  )
}
