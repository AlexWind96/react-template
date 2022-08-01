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
import { RegisterCredentialsDTO } from '../../api/dto'
import { AuthUser } from '../../types'
import { AUTH_REGISTER_FAILED, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from './actionTypes'

export const register = createPromiseAction(
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED
)<RegisterCredentialsDTO, { user: AuthUser }, AxiosError<ValidationErrors>>()

function* worker(action: PromiseAction<string, RegisterCredentialsDTO, any>) {
  try {
    yield call(authAPI.register, action.payload)
    const profileResponse = yield call(authAPI.getUser, {
      includes: ['company', 'department', 'settings'],
    })

    yield put(register.success({ user: profileResponse.data.data }))
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

export function* registerSaga() {
  yield takeEvery(register.request, worker)
}
