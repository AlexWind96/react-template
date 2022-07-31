import { call } from 'redux-saga/effects'
import { createPromiseAction } from 'redux-saga-promise-actions'
import { takeEveryPromiseAction } from 'redux-saga-promise-actions/effects'
import { AxiosError } from 'axios'
import { logoutSuccess } from '../slice'
import { authAPI } from '@/features/auth/api'

export const logoutAction = createPromiseAction(
  'auth/logoutRequest',
  logoutSuccess.type,
  'auth/logoutFail'
)<undefined, any, AxiosError>()

function* logout() {
  yield call(authAPI.logOut)
}

export function* logoutSaga() {
  yield takeEveryPromiseAction(logoutAction, logout)
}
