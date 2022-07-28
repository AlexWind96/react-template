import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Anchor, Button, PasswordInput, Text, TextInput } from '@mantine/core'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ValidationsUtils } from '@/utils'
import { useTranslation } from 'react-i18next'
import { ValidationErrors } from '@/types'

export type LoginFormValues = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => Promise<void>
}

export const LoginForm = (props: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
      })
    ),
    mode: 'onChange',
  })

  const [alertError, setAlertError] = useState<string | null>(null)
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
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
      {alertError && (
        <Alert color="red" mb={'sm'}>
          {alertError}
        </Alert>
      )}
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
