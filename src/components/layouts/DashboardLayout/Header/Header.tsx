import React from 'react'
import { Burger, Group, Header as MantineHeader, MediaQuery } from '@mantine/core'
import { ColorSchemeToggle } from '@/components/elements'
import useStyles from './Header.styles'

export const Header = ({ toggleOpen, opened }) => {
  const { classes } = useStyles()

  return (
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={toggleOpen} size="sm" mr="xl" />
          </MediaQuery>
          <ColorSchemeToggle />
        </Group>
        <div />
      </div>
    </MantineHeader>
  )
}
