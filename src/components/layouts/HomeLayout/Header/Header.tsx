import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Container, Group, Header as MantineHeader, Space, Title } from '@mantine/core'
import { ColorSchemeToggle } from '@/components/elements'
import useStyles from './Header.styles'

export const Header = ({ links }) => {
  const { classes } = useStyles()

  const items = links.map((link) => (
    <Link key={link.label} to={link.to}>
      <Anchor component="a">{link.label}</Anchor>
    </Link>
  ))

  return (
    <MantineHeader height={56} p={0}>
      <Container className={classes.inner}>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Title order={3}>LOGO</Title>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ColorSchemeToggle />
          <Space w={'md'} />
        </Group>
      </Container>
    </MantineHeader>
  )
}
