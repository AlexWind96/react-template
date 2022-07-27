import { Container, Footer as MantineFooter, Group, Title } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './Footer.styles'

export const Footer = ({ links }) => {
  const { classes } = useStyles()
  const items = links.map((link) => (
    <Link key={link.label} to={link.to}>
      {link.label}
    </Link>
  ))

  return (
    <MantineFooter height={60} position={{ bottom: 0 }}>
      <Container className={classes.inner}>
        <Title order={3}>LOGO</Title>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </MantineFooter>
  )
}
