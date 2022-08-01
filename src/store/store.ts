import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { promiseMiddleware } from 'redux-saga-promise-actions'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(promiseMiddleware, sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

declare global {
  interface Window {
    store: any
  }
}

window.store = store

const fn = () => {
  return { store, persistor }
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default fn
