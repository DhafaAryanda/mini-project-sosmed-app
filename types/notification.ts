import { Profile } from '@/schemas/profile/profileSchema'

type Posts = {
  id: number
  description: string
  users_id: number
  deleted_at?: string
  created_at: string
  updated_at: string
  is_like_post: boolean
  is_own_post: boolean
  user: Profile
}

export type UserNotification = {
  id: number
  remark: 'like' | 'reply'
  read: boolean
  created_at: string
  updated_at: string
  user: Profile
  posts: Posts
}
