import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Alert, Anchor, Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { PATH } from '@/routes/path'
import { ValidationErrors } from '@/types'
import { ValidationsUtils } from '@/utils'

export type RegisterFormValues = {
  email: string
  password: string
  name: string
}

type RegisterFormProps = {
  onSubmit: (values: RegisterFormValues) => Promise<void>
}

export const RegisterForm = (props: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
        name: Yup.string().required('This field is required'),
      })
    ),
    mode: 'onChange',
  })

  const [alertError, setAlertError] = useState<string | null>(null)
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      await props.onSubmit(data)
      reset()
    } catch (err) {
      const serverError = err as ValidationErrors
      setAlertError(serverError?.message || t('error'))
      ValidationsUtils.setServerSideErrors(serverError?.errors, setError)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {alertError && !isSubmitting && (
        <Alert color="red" mb={'sm'}>
          {alertError}
        </Alert>
      )}
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
          error={errors.email?.message as React.ReactNode}
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
        <Anchor size={'sm'} component={Link} to={`/${PATH.login}`}>
          Log in
        </Anchor>
      </Text>
    </form>
  )
}
