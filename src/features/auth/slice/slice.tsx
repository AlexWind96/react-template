import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAction, logoutAction, registerAction } from './thunks'
import { AuthUser } from '../types'

interface AuthState {
  isLoggedIn: boolean
  user: AuthUser | null
}

const initialState: AuthState = {
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
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    })
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.isLoggedIn = false
      state.user = null
    })
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    })
  },
})

export const { setLoginStatus, cleanAuthData } = authSlice.actions

export const selectAuthData = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
