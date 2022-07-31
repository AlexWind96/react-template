import React from 'react'
import { Error, NotFound } from '@/pages'
import { PATH } from '../path'

export const getUtilsRoutes = () => {
  return [
    {
      path: `/${PATH.error}`,
      element: <Error />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
}
