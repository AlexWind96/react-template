import { Burger, Header as MantineHeader, MediaQuery } from '@mantine/core'
import React from 'react'

import useStyles from './Header.styles'
import { ColorSchemeToggle } from '@/components/elements'

type HeaderProps = {}

export const Header = ({ toggleOpen, opened }) => {
  const { classes } = useStyles()

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <div>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={toggleOpen} size="sm" mr="xl" />
          </MediaQuery>
          <ColorSchemeToggle />
        </div>
        <div />
      </div>
    </MantineHeader>
  )
}
