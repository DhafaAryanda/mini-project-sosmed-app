import { NotificationCard } from '@/components/notifications/NotificationCard'
import { getAllNotifications } from '@/services/PostService'
import { useEffect, useState } from 'react'

type Notifications = {
  id: number
  name: string
  email: string
  dob: string
  phone: string
  hobby: string
  deleted_at?: string
  created_at: string
  updated_at: string
}

type User = {
  id: number
  name: string
  email: string
  dob?: string
  phone?: string
  hobby?: string
  deleted_at?: string
  created_at: string
  updated_at: string
}

type Posts = {
  id: 306
  description: 'halow'
  users_id: 2
  deleted_at: null
  created_at: '2025-03-01T09:35:51.000000Z'
  updated_at: '2025-03-01T09:35:51.000000Z'
  is_like_post: false
  is_own_post: true
  user: User
}

type NotificationCardProps = {
  id: number
  remark: 'like' | 'reply'
  read: boolean
  created_at: string
  updated_at: string
  user: User
  posts: Posts
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationCardProps[]>(
    [],
  )
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getAllNotifications()
      setNotifications(data)
    }

    fetchProfile()
  }, [])
  return (
    <div className="w-full h-full flex flex-col gap-10">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationCard notification={notification} />
        ))
      ) : (
        <p className="text-center">No Notifications</p>
      )}
    </div>
  )
}
