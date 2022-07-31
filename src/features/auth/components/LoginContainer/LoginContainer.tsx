import React from 'react'
import { LoginForm, LoginFormValues } from '../LoginForm'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'
import { PATH } from '@/routes/path'
import { login } from '../../store'

export const LoginContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: LoginFormValues) => {
    await dispatch(login.request({ email: values.email, password: values.password }))
    navigate(`${PATH.dashboard}`, { replace: true })
  }

  return <LoginForm onSubmit={handleSubmit} />
}
