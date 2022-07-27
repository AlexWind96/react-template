import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

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
