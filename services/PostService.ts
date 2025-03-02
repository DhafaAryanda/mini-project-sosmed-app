import axiosInstance from '@/lib/axiosInstance'

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get('/posts')
    console.log('🚀 ~ getAllPosts ~ response:', response)

    return response.data.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export const getPostById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/post/${id}`)

    console.log('🚀 ~ UWAWgetPostById ~ response:', response)
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ getPostById ~ error:', error)
  }
}

export const getRepliesByPostId = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/replies/post/${id}`)
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ getRepliesByPostId ~ error:', error)
  }
}

export const replyToPost = async (postId: number, description: string) => {
  try {
    const response = await axiosInstance.post(`/replies/post/${postId}`, {
      description,
    })
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ replyToPost ~ error:', error)
  }
}

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/me')
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ getProfile ~ error:', error)
  }
}

export const getAllNotifications = async () => {
  try {
    const response = await axiosInstance.get('/notifications')
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ getAllNotifications ~ error:', error)
  }
}

export const createPost = async (description: string) => {
  try {
    const response = await axiosInstance.post('/post', { description })
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ createPost ~ error:', error)
  }
}

export const updatePost = async (id: number, description: string) => {
  try {
    const response = await axiosInstance.patch(`/post/update/${id}`, {
      description,
    })
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ updatePost ~ error:', error)
  }
}

export const deletePost = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/post/delete/${id}`)
    return response.data.data
  } catch (error) {
    console.log('🚀 ~ deletePost ~ error:', error)
  }
}

// export const postLogout = async () => {
//   try {
//     const response = await axiosInstance.post('/logout')
//     return response.data
//   } catch (error) {
//     console.log('🚀 ~ postLogout ~ error:', error)
//   }
// }
