import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { login, LoginCredentialsDTO } from '../api/login'
import { getUser } from '@/features/auth/api/getUser'
import { logOut } from '@/features/auth/api/logout'
import { register, RegisterCredentialsDTO } from '../api/register'
import { AuthUser } from '../types'
import { ValidationErrors } from '@/types'

export const loginAction = createAsyncThunk<
  // Return type of the payload creator
  { user: AuthUser },
  // First argument to the payload creator
  LoginCredentialsDTO,
  // Types for ThunkAPI
  {
    rejectValue: ValidationErrors
  }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    await login(data)

    const profileResponse = await getUser({
      includes: ['company', 'department', 'settings'],
    })
    return {
      user: profileResponse.data.data,
    }
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const logoutAction = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  void,
  // Types for ThunkAPI
  {
    rejectValue: AxiosError
  }
>('auth/logout', async () => {
  await logOut()
})

export const registerAction = createAsyncThunk<
  // Return type of the payload creator
  { user: AuthUser },
  // First argument to the payload creator
  RegisterCredentialsDTO,
  // Types for ThunkAPI
  {
    rejectValue: ValidationErrors
  }
>('auth/register', async (data, { rejectWithValue }) => {
  try {
    await register(data)

    const profileResponse = await getUser({
      includes: ['company', 'department', 'settings'],
    })

    return {
      user: profileResponse.data.data,
    }
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})
