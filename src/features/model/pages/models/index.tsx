import { Group, Title } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

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
