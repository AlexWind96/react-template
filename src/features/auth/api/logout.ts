import axios from 'axios'

export const logOut = () => {
  return axios.post('api/auth/logout')
}
