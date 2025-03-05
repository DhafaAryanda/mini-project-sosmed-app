import axiosInstance from '@/lib/axiosInstance'
import { handleApiError } from '@/lib/errorHandler'

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/me')
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}
