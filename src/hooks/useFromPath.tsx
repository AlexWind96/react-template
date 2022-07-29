import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

type useFromPathArgs = {
  defaultPath?: string
}

export const useFromPath = ({ defaultPath = '/' }: useFromPathArgs = {}) => {
  const location = useLocation()

  return useMemo(() => {
    const state = location.state as { from: string }

    if (state && state.from) {
      return state.from
    }

    return defaultPath
  }, [location, defaultPath])
}
