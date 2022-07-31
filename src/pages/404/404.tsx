import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Group, Text, Title } from '@mantine/core'
import useStyles from './404.styles'

export const NotFound = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group position="center">
        <Button component={Link} to={'/home'} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
