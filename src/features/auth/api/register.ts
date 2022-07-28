import axios from 'axios'

export type RegisterCredentialsDTO = {
  email: string
  password: string
  name: string
}

export const register = async (data: RegisterCredentialsDTO) => {
  return axios.post('api/auth/register', data)
}
