import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { logout, ROLE } from '@/features/auth'
import { login, register } from './thunks'
import i18n from 'i18next'

interface User {
  id: string | number
  role: ROLE
  name: string
}

interface AuthState {
  isLoggedIn: boolean
  user: User | null
  isLoading: boolean
  isError: boolean
  error: string | null
}

const initialState: AuthState = {
  error: null,
  isError: false,
  isLoading: false,
  isLoggedIn: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },
    cleanAuthData() {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.isLoading = false
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message || i18n.t('error')
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false
      state.user = null
      state.isLoading = false
    })
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error.message || i18n.t('error')
    })
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.isLoading = false
    })
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message || i18n.t('error')
    })
  },
})

export const auth = authSlice.actions

export const selectAuthData = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
