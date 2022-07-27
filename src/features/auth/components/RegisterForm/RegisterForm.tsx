import { yupResolver } from '@hookform/resolvers/yup'
import { Anchor, Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { register as registerAction } from '@/features/auth'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
        name: Yup.string().required('This field is required'),
      })
    ),
    mode: 'onChange',
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function onSubmit(values) {
    try {
      const body = { ...values }
      await dispatch(
        registerAction({ email: body.email, password: body.password, name: body.name })
      ).unwrap()
      navigate('dashboard', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          {...register('name')}
          label="Name"
          placeholder="Name"
          required
          error={errors.name?.message as React.ReactNode}
        />
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
        />
      </Stack>
      <Button fullWidth type={'submit'} mt={'md'} loading={isSubmitting}>
        Sign in
      </Button>
      <Text color="dimmed" size="sm" align="center" mt={'sm'}>
        Have an account yet?{' '}
        <Anchor size={'sm'} component={Link} to={'/auth/login'}>
          Log in
        </Anchor>
      </Text>
    </form>
  )
}
