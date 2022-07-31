import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Title } from '@mantine/core'
import { PATH } from '@/routes/path'
import { useAppDispatch } from '@/store'
import { register } from '../../store'
import { RegisterForm, RegisterFormValues } from '../RegisterForm'

export const RegisterContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values: RegisterFormValues) => {
    await dispatch(register.request(values))
    navigate(`/${PATH.dashboard}`, { replace: true })
  }

  return (
    <Paper withBorder shadow="md" px={30} pb={30} pt={20} mt={30} radius="md">
      <Title align="center" order={3} mb={'md'}>
        Sign up
      </Title>
      <RegisterForm onSubmit={handleSubmit} />
    </Paper>
  )
}
