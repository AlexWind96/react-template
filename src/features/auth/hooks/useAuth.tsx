import React from 'react'
import { selectAuthData } from '@/features/auth'
import { useTypedSelector } from '@/store'

export const useAuth = () => {
  return useTypedSelector(selectAuthData)
}
