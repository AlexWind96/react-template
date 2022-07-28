import axios from 'axios'
import { AuthUser } from '../types'

export type getUserDTO = {
  includes?: Array<'department' | 'settings' | 'company'>
}

export const getUser = async (params?: getUserDTO) => {
  return axios.get<{ data: AuthUser }>('api/profile', {
    params,
  })
}
