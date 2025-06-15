import { RegisterFormSchema } from '@/schemas/auth/registerFormSchema'
import axiosInstance from '../axiosInstance'
import { handleApiError } from '../errorHandler'

export const login = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('/users/sign-in', {
      username,
      password,
    })
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const register = async (data: RegisterFormSchema) => {
  try {
    const response = await axiosInstance.post('/users/register', data)
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const logout = async () => {
  try {
    const response = await axiosInstance.post('/logout')
    return response.data.data
  } catch (error) {
    handleApiError(error)
    throw new Error(handleApiError(error))
  }
}
