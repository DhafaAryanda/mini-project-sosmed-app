import axiosInstance from '@/lib/axiosInstance'
import { handleApiError } from '@/lib/errorHandler'

export const getRepliesByPostId = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/replies/post/${id}`)
    return response.data.data
  } catch (error) {
    handleApiError(error)
    return null
  }
}

export const replyToPost = async (postId: number, description: string) => {
  try {
    const response = await axiosInstance.post(`/replies/post/${postId}`, {
      description,
    })
    return response.data.data
  } catch (error) {
    handleApiError(error)
    return null
  }
}

export const deleteReply = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/replies/delete/${id}`)
    return response.data.data
  } catch (error) {
    handleApiError(error)
    return null
  }
}
