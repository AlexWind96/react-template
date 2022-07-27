import axios from 'axios'

export type LoginBody = {
  email: string
  password: string
}

export type RegistrationBody = {
  email: string
  password: string
  name: string
}

class AuthAPI {
  getCookie = async () => {
    return axios.get('sanctum/csrf-cookie')
  }

  login = async (data: LoginBody) => {
    await this.getCookie()

    return axios.post('api/auth/login', data)
  }

  logOut = () => {
    return axios.post('api/auth/logout')
  }

  register = async (data: RegistrationBody) => {
    await this.getCookie()
    return axios.post('api/auth/register', data)
  }

  forgotPassword = async (data: object) => {
    await this.getCookie()
    return axios.post('api/auth/forgot-password', data)
  }

  resetPassword = async (data: object) => {
    await this.getCookie()
    return axios.post('api/auth/reset-password', data)
  }

  sendVerifyEmail = async (data: object) => {
    await this.getCookie()
    return axios.post('api/auth/email/verification-notification', data)
  }

  getProfile = async (params?: { includes: string[] }) => {
    return axios.get('api/profile', {
      params,
    })
  }
}

export const authAPI = new AuthAPI()
