import { AxiosError } from 'axios'
import {
  PromiseAction,
  createPromiseAction,
  rejectPromiseAction,
  resolvePromiseAction,
} from 'redux-saga-promise-actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { ValidationErrors } from '@/types'
import { authAPI } from '../../api'
import { LoginCredentialsDTO } from '../../api/dto'
import { AuthUser } from '../../types'
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from './actionTypes'

export const login = createPromiseAction(AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED)<
  LoginCredentialsDTO,
  { user: AuthUser },
  AxiosError<ValidationErrors>
>()

function* worker(action: PromiseAction<string, LoginCredentialsDTO, any>) {
  try {
    yield call(authAPI.login, action.payload)
    const profileResponse = yield call(authAPI.getUser, {
      includes: ['company', 'department', 'settings'],
    })

    yield put(login.success({ user: profileResponse.data.data }))
    resolvePromiseAction(action, {
      user: profileResponse.data.data,
    })
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>
    if (!error.response) {
      throw error
    }
    rejectPromiseAction(action, error.response.data)
  }
}

export function* loginSaga() {
  yield takeEvery(login.request, worker)
}
