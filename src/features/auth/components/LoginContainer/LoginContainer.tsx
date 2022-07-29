import React from 'react'
import { LoginForm, LoginFormValues } from '../LoginForm'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '@/features/auth'
import { PATH } from '@/routes/path'

export const LoginContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: LoginFormValues) => {
    await dispatch(loginAction(values)).unwrap()
    navigate(`${PATH.dashboard}`, { replace: true })
  }

  return <LoginForm onSubmit={handleSubmit} />
}
