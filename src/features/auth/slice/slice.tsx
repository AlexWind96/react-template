import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    cleanAuthData() {
      return initialState
    },
    loginSuccess(state, action: PayloadAction<{ user: AuthUser }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    registerSuccess(state, action: PayloadAction<{ user: AuthUser }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    logoutSuccess(state) {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { cleanAuthData, loginSuccess, logoutSuccess, registerSuccess } = authSlice.actions

export const selectAuthData = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
