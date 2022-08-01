import axios from 'axios'
import { AuthUser } from '@/features/auth'
import { LoginCredentialsDTO, RegisterCredentialsDTO, getUserDTO } from './dto'

class AuthAPI {
  login = async (data: LoginCredentialsDTO) => {
    return axios.post('api/auth/login', data)
  }
  register = async (data: RegisterCredentialsDTO) => {
    return axios.post('api/auth/register', data)
  }
  logOut = () => {
    return axios.post('api/auth/logout')
  }
  getUser = async (params?: getUserDTO) => {
    return axios.get<{ data: AuthUser }>('api/profile', {
      params,
    })
  }
}

export const authAPI = new AuthAPI()
