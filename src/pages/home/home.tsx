import * as React from 'react'
import { Container, Overlay, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
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
        <Title className={classes.title}>A fully featured React components library</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Link to={'/auth'}>Get started</Link>
      </Container>
    </div>
  )
}
