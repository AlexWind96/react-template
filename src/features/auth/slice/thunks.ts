import { createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI, LoginBody, RegistrationBody } from '@/features/auth'
import { AxiosError } from 'axios'

export const login = createAsyncThunk<
  // Return type of the payload creator
  { user: any },
  // First argument to the payload creator
  LoginBody,
  // Types for ThunkAPI
  {
    rejectValue: AxiosError
  }
>('auth/login', async (data: LoginBody) => {
  await authAPI.login(data)

  const profileResponse = await authAPI.getProfile({
    includes: ['company', 'department', 'settings'],
  })

  return {
    user: profileResponse.data.data,
  }
})

export const logout = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  void,
  // Types for ThunkAPI
  {
    rejectValue: AxiosError
  }
>('auth/logout', async () => {
  await authAPI.logOut()
})

export const register = createAsyncThunk<
  // Return type of the payload creator
  { user: any },
  // First argument to the payload creator
  RegistrationBody,
  // Types for ThunkAPI
  {
    rejectValue: AxiosError
  }
>('auth/register', async (data) => {
  await authAPI.register(data)

  const profileResponse = await authAPI.getProfile({
    includes: ['company', 'department', 'settings'],
  })

  return {
    user: profileResponse.data.data,
  }
})
