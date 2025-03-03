import axiosInstance from '@/lib/axiosInstance'
import { handleApiError } from '@/lib/errorHandler'

export const getAllNotifications = async () => {
  try {
    const response = await axiosInstance.get('/notifications')
    return response.data.data
  } catch (error) {
    handleApiError(error)
    return null
  }
}
