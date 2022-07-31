import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Title } from '@mantine/core'
import { PATH } from '@/routes/path'
import { useAppDispatch } from '@/store'
import { login } from '../../store'
import { LoginForm, LoginFormValues } from '../LoginForm'

export const LoginContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: LoginFormValues) => {
    await dispatch(login.request({ email: values.email, password: values.password }))
    navigate(`/${PATH.dashboard}`, { replace: true })
  }
  return (
    <Paper withBorder shadow="md" px={30} pb={30} pt={20} mt={30} radius="md">
      <Title align="center" order={3} mb={'md'}>
        Log in
      </Title>
      <LoginForm onSubmit={handleSubmit} />
    </Paper>
  )
}
