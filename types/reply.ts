import { User } from './user'

export type Reply = {
  id: number
  description: string
  posts_id: number
  users_id: number
  deleted_at?: string
  created_at: string
  updated_at: string
  is_own_reply: boolean
  user: User
}
