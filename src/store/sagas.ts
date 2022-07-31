import { all, fork } from 'redux-saga/effects'
import { authSaga } from '@/features/auth/slice'

export default function* rootSaga() {
  yield all([fork(authSaga)])
}
