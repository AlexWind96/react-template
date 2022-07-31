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
import { registerSuccess } from '../slice'
import { authAPI, RegisterCredentialsDTO } from '../../api'

export const registerAction = createPromiseAction(
  'auth/registerRequest',
  registerSuccess.type,
  'auth/registerFailed'
)<RegisterCredentialsDTO, { user: AuthUser }, AxiosError<ValidationErrors>>()

function* register(action: PromiseAction<string, RegisterCredentialsDTO, any>) {
  try {
    yield call(authAPI.register, action.payload)
    const profileResponse = yield call(authAPI.getUser, {
      includes: ['company', 'department', 'settings'],
    })

    yield put(registerAction.success({ user: profileResponse.data.data }))
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

export function* registerSaga() {
  yield takeEvery(registerAction.request, register)
}
