import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Group, Title } from '@mantine/core'
import useStyles from './error.styles'

export const Error = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>Network error</div>
      <Title className={classes.title}>Something went wrong(</Title>
      <Group position="center">
        <Button component={Link} to={'/home'} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
