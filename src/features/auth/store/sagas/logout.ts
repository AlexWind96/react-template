import { AxiosError } from 'axios'
import { createPromiseAction } from 'redux-saga-promise-actions'
import { takeEveryPromiseAction } from 'redux-saga-promise-actions/effects'
import { call } from 'redux-saga/effects'
import { authAPI } from '../../api'
import { AUTH_LOGOUT_FAILED, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS } from './actionTypes'

export const logout = createPromiseAction(
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED
)<undefined, any, AxiosError>()

function* worker() {
  yield call(authAPI.logOut)
}

export function* logoutSaga() {
  yield takeEveryPromiseAction(logout, worker)
}
