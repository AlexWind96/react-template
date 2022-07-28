import React from 'react'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'
import { registerAction } from '../../slice'
import { RegisterForm, RegisterFormValues } from '../RegisterForm'

export const RegisterContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: RegisterFormValues) => {
    await dispatch(registerAction(values)).unwrap()
    navigate('dashboard', { replace: true })
  }

  return <RegisterForm onSubmit={handleSubmit} />
}
