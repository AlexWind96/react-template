import React from 'react'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'
import { registerAction } from '../../slice'
import { RegisterForm, RegisterFormValues } from '../RegisterForm'
import { PATH } from '@/routes/path'

export const RegisterContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: RegisterFormValues) => {
    await dispatch(registerAction.request(values))
    navigate(`${PATH.dashboard}`, { replace: true })
  }

  return <RegisterForm onSubmit={handleSubmit} />
}
