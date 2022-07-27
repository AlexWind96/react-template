import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from '@/features/auth'

const authDataPersistConfig = {
  key: 'auth',
  storage,
}

const rootReducer = combineReducers({
  auth: persistReducer(authDataPersistConfig, authReducer),
})

export default rootReducer
