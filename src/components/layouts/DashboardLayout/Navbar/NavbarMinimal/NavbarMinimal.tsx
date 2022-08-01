import React from 'react'
import { Logout } from 'tabler-icons-react'
import { Center, Navbar, Stack, Title, UnstyledButton } from '@mantine/core'
import { NavbarLink } from './NavbarLink'
import useStyles from './NavbarMinimal.styles'

export const NavbarMinimal = ({ data, onLogout }) => {
  const { classes } = useStyles()
  const links = data.map((item) => (
    <NavbarLink
      label={item.navigation_label}
      icon={item.navigation_icon}
      path={item.path}
      key={item.navigation_label}
    />
  ))

  return (
    <Navbar height={'100vh'} width={{ base: 80 }} p="md" hiddenBreakpoint={'sm'} hidden={true}>
      <Center>
        <Title order={5}>LOGO</Title>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack align="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack align="center" spacing={0}>
          <UnstyledButton className={classes.link} onClick={onLogout}>
            <Logout />
          </UnstyledButton>
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}
