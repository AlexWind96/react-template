import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Overlay, Text } from '@mantine/core'
import { PATH } from '@/routes/path'
import useStyles from './home.styles'

export const Home = () => {
  const { classes } = useStyles()
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Text
          component="h1"
          align="center"
          variant="gradient"
          gradient={{ from: 'yellow', to: 'white', deg: 45 }}
          weight={700}
          style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: 56 }}
        >
          React Template
        </Text>
        <Button component={Link} to={`/${PATH.login}`}>
          Get started
        </Button>
      </Container>
    </div>
  )
}
