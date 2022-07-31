import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { AuthUser } from '../types'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS, AUTH_REGISTER_SUCCESS } from './sagas'

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
  },
  extraReducers: {
    [AUTH_LOGIN_SUCCESS]: (state, action: PayloadAction<{ user: AuthUser }>) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    [AUTH_LOGOUT_SUCCESS]: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
    [AUTH_REGISTER_SUCCESS]: (state, action: PayloadAction<{ user: AuthUser }>) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
  },
})

export const { cleanAuthData } = authSlice.actions

export const selectAuthData = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
