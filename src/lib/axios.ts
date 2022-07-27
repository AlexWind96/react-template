import axios from 'axios'
import qs from 'qs'
import { auth } from '@/features/auth'

const BASE_URL = process.env.REACT_APP_BASE_URL

axios.interceptors.request.use(
  (config) => {
    return {
      ...config,
      baseURL: BASE_URL,
      withCredentials: true,
      paramsSerializer: (params: object) => qs.stringify(params, { encode: false }),
      headers: { 'Content-Type': 'application/json', ...config.headers },
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.message === 'Network Error') {
      console.log('Network Error')
    }
    if (error.response?.status) {
      switch (error.response?.status) {
        case 401:
          console.log('Error - 401')

          if (window.store.getState().auth.isLoggedIn) {
            window.store.dispatch(auth.cleanAuthData())
          }

          break
        case 400:
          console.log('Error - 400')
          break
        case 419:
          console.log('Error - 419')

          window.store.dispatch(auth.cleanAuthData())

          window.location.href = '/'

          break
        default:
          console.log('Server Error')
          break
      }
    }
    return Promise.reject(error)
  }
)
