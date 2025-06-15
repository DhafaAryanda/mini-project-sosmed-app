import { User } from './user'

export type Post = {
  id: number
  content: string
  author_id: number
  deleted_at?: string
  created_at: string
  updated_at: string
  likes_count: number
  replies_count: number
  // is_like_post: boolean
  // is_own_post: boolean
  author: User
}
