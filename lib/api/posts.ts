import axiosInstance from '@/lib/axiosInstance'
import { handleApiError } from '@/lib/errorHandler'

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get('/posts')
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const getPostById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/post/${id}`)
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const createPost = async (description: string) => {
  try {
    const response = await axiosInstance.post('/post', { description })
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const updatePost = async (id: number, description: string) => {
  try {
    const response = await axiosInstance.patch(`/post/update/${id}`, {
      description,
    })
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const deletePost = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/post/delete/${id}`)
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const likePost = async (id: number) => {
  try {
    const response = await axiosInstance.post(`/likes/post/${id}`)
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const unlikePost = async (id: number) => {
  try {
    const response = await axiosInstance.post(`/unlikes/post/${id}`)
    return response.data.data
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}
