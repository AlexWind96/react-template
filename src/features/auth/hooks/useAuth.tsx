import React from 'react'
import { useTypedSelector } from '@/store'
import { selectAuthData } from '../store'

export const useAuth = () => {
  return useTypedSelector(selectAuthData)
}
