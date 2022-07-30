import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'
import { Layout } from './components'

const { Rating } = lazyImport(() => import('./rating'), 'Rating')
const { General } = lazyImport(() => import('./general'), 'General')

export const Model = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={'general'} replace={true} />} />
        <Route path="general" element={<General />} />
        <Route path="rating" element={<Rating />} />
      </Route>
    </Routes>
  )
}
