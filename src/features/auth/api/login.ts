import axios from 'axios'

export type LoginCredentialsDTO = {
  email: string
  password: string
}

export const login = async (data: LoginCredentialsDTO) => {
  return axios.post('api/auth/login', data)
}
