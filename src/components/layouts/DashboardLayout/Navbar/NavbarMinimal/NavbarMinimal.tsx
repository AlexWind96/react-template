import { Center, Group, Navbar, Title } from '@mantine/core'
import React from 'react'

import { NavbarLink } from './NavbarLink'

export const NavbarMinimal = ({ data }) => {
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
        <Group direction="column" align="center" spacing={0}>
          {links}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group direction="column" align="center" spacing={0}></Group>
      </Navbar.Section>
    </Navbar>
  )
}
