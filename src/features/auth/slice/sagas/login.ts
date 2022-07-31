import { call, put, takeEvery } from 'redux-saga/effects'
import { AxiosError } from 'axios'
import { ValidationErrors } from '@/types'
import {
  createPromiseAction,
  PromiseAction,
  rejectPromiseAction,
  resolvePromiseAction,
} from 'redux-saga-promise-actions'
import { AuthUser } from '@/features/auth'
import { loginSuccess } from '../slice'
import { authAPI, LoginCredentialsDTO } from '../../api'

export const loginAction = createPromiseAction(
  'auth/loginRequest',
  loginSuccess.type,
  'auth/loginFailed'
)<LoginCredentialsDTO, { user: AuthUser }, AxiosError<ValidationErrors>>()

function* login(action: PromiseAction<string, LoginCredentialsDTO, any>) {
  try {
    yield call(authAPI.login, action.payload)
    const profileResponse = yield call(authAPI.getUser, {
      includes: ['company', 'department', 'settings'],
    })

    yield put(loginAction.success({ user: profileResponse.data.data }))
    resolvePromiseAction<string, unknown, { user: AuthUser }>(action, {
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
  yield takeEvery(loginAction.request, login)
}
