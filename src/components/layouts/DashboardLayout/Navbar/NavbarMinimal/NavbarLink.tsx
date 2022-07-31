import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { Icon as TablerIcon } from 'tabler-icons-react'
import { Tooltip, UnstyledButton } from '@mantine/core'
import useStyles from './NavbarMinimal.styles'

interface NavbarLinkProps {
  icon: TablerIcon
  label: string
  path: string
}

export function NavbarLink({ icon: Icon, label, path }: NavbarLinkProps) {
  const { classes, cx } = useStyles()

  const match = useMatch(`/${path}/*`)

  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <Link to={path} key={label}>
        <UnstyledButton className={cx(classes.link, { [classes.active]: !!match })}>
          <Icon />
        </UnstyledButton>
      </Link>
    </Tooltip>
  )
}
