import { ColorSchemeToggle } from '@/components/elements'
import {
  Anchor,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Space,
  Title,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import React from 'react'
import useStyles from './Header.styles'
import { Link } from 'react-router-dom'

export const Header = ({ links }) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { classes } = useStyles()

  const items = links.map((link) => (
    <Link key={link.label} to={link.to}>
      <Anchor component="a">{link.label}</Anchor>
    </Link>
  ))

  return (
    <MantineHeader height={56} p={0}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Title order={3}>LOGO</Title>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ColorSchemeToggle />
          <Space w={'md'} />
          {/*{!session && (*/}
          {/*  <Link href={'/auth/signin'} passHref>*/}
          {/*    <Button component="a">Log in</Button>*/}
          {/*  </Link>*/}
          {/*)}*/}
          {/*{session && (*/}
          {/*  <Link href={'/dashboard'} passHref>*/}
          {/*    <Button component="a">Dashboard</Button>*/}
          {/*  </Link>*/}
          {/*)}*/}
        </Group>
      </Container>
    </MantineHeader>
  )
}
