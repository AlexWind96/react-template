import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logout } from 'tabler-icons-react'
import { Anchor, Code, Group, Navbar, ScrollArea, Title } from '@mantine/core'
import useStyles from './NavbarBase.styles'

export const NavbarBase = ({ data, onLogout }) => {
  const { classes, cx } = useStyles()

  const links = data.map((item) => (
    <NavLink
      to={item.path}
      key={item.navigation_label}
      className={({ isActive }) =>
        isActive ? cx(classes.link, classes.linkActive) : cx(classes.link)
      }
    >
      <item.navigation_icon className={classes.linkIcon} />
      <span>{item.navigation_label}</span>
    </NavLink>
  ))

  return (
    <Navbar height={'100vh'} width={{ base: 250 }} p="sm" hiddenBreakpoint={'sm'} hidden={true}>
      <Navbar.Section>
        <Group className={classes.header} position="apart">
          <Title order={3}>LOGO</Title>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
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
