import { call, put, takeEvery } from 'redux-saga/effects'
import { login, LoginCredentialsDTO } from '@/features/auth/api/login'
import { getUser } from '@/features/auth/api/getUser'
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

export const loginAction = createPromiseAction(
  'auth/loginRequest',
  loginSuccess.type,
  'auth/loginFailed'
)<LoginCredentialsDTO, { user: AuthUser }, AxiosError<ValidationErrors>>()

function* loginWorker(action: PromiseAction<string, LoginCredentialsDTO, any>) {
  try {
    yield call(login, action.payload)
    const profileResponse = yield call(getUser, {
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
  yield takeEvery(loginAction.request, loginWorker)
}
