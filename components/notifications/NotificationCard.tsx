import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import dayjs from 'dayjs'
import Link from 'next/link'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
const formatDate = (date: string) => {
  const now = dayjs()
  const updatedAt = dayjs(date)
  const diffInHours = now.diff(updatedAt, 'hour')

  return diffInHours >= 24
    ? updatedAt.format('MMM D, YYYY') // Format: Apr 20, 2023
    : updatedAt.fromNow() // Format: 22h, 3h, 10m, etc.
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

export function NotificationCard({
  notification,
}: {
  notification: NotificationCardProps
}) {
  return (
    <Link
      href={`/post/${notification.posts.id}`}
      className="w-full h-10 flex items-center justify-center bg-red-500"
    >
      <Alert className="flex gap-4">
        <Link href={'/account/2'} className="w-fit h-fit group rounded-full">
          <Avatar className="w-10 h-10">
            <AvatarFallback>
              {notification.user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Link>
        <div className="w-full ">
          <AlertTitle>{notification.user.name}</AlertTitle>
          <AlertDescription className="flex justify-between">
            <span>{notification.remark} your post</span>
            <span className="text-xs">
              {formatDate(notification.updated_at)}
            </span>
          </AlertDescription>
        </div>
      </Alert>
    </Link>
  )
}
