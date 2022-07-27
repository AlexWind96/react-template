import { yupResolver } from '@hookform/resolvers/yup'
import {
  Anchor,
  Button,
  PasswordInput,
  Text,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useAppDispatch } from '@/store'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '@/features/auth'

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
      })
    ),
    mode: 'onChange',
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function onSubmit(values) {
    try {
      const body = { ...values }
      await dispatch(login({ email: body.email, password: body.password })).unwrap()
      navigate('dashboard', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register('email')}
        label="Email"
        placeholder="you@mantine.dev"
        required
        error={errors.password?.message as React.ReactNode}
      />
      <PasswordInput
        {...register('password')}
        label="Password"
        placeholder="Your password"
        required
        error={errors.password?.message as React.ReactNode}
        mt="md"
      />
      <Button fullWidth mt="xl" type={'submit'} disabled={isSubmitting} loading={isSubmitting}>
        Sign in
      </Button>
      <Text color="dimmed" size="sm" align="center" mt={'sm'}>
        Do not have an account yet?
        <Anchor size={'sm'} component={Link} to={'/auth/register'}>
          Register new account
        </Anchor>
      </Text>
    </form>
  )
}
