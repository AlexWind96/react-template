import React from 'react'
import { Link } from 'react-router-dom'
import { Group, Title } from '@mantine/core'

export const Models = () => {
  return (
    <>
      <Title>Models</Title>
      <Group>
        {[1, 2, 3].map((id) => {
          return <Link to={`${id}`}>Model 4</Link>
        })}
      </Group>
    </>
  )
}
