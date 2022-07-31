import { call } from 'redux-saga/effects'
import { logOut } from '@/features/auth/api/logout'
import { createPromiseAction } from 'redux-saga-promise-actions'
import { takeEveryPromiseAction } from 'redux-saga-promise-actions/effects'
import { AxiosError } from 'axios'
import { logoutSuccess } from '../slice'

export const logoutAction = createPromiseAction(
  'auth/logoutRequest',
  logoutSuccess.type,
  'auth/logoutFail'
)<undefined, any, AxiosError>()

function* logoutWorker() {
  yield call(logOut)
}

export function* logoutSaga() {
  yield takeEveryPromiseAction(logoutAction, logoutWorker)
}
