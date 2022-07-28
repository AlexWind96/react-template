import * as React from 'react'
import { Loader } from '@mantine/core'

export const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <Loader size="lg" variant="dots" />
    </div>
  )
}
