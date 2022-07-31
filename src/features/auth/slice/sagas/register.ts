import { call, put, takeEvery } from 'redux-saga/effects'
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
import { registerSuccess } from '../slice'
import { register, RegisterCredentialsDTO } from '@/features/auth/api/register'

export const registerAction = createPromiseAction(
  'auth/registerRequest',
  registerSuccess.type,
  'auth/registerFailed'
)<RegisterCredentialsDTO, { user: AuthUser }, AxiosError<ValidationErrors>>()

function* registerWorker(action: PromiseAction<string, RegisterCredentialsDTO, any>) {
  try {
    yield call(register, action.payload)
    const profileResponse = yield call(getUser, {
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
  yield takeEvery(registerAction.request, registerWorker)
}
