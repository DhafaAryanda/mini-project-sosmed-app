import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { UserNotification } from '@/types/notification'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'

dayjs.extend(relativeTime)
const formatDate = (date: string) => {
  const now = dayjs()
  const updatedAt = dayjs(date)
  const diffInHours = now.diff(updatedAt, 'hour')

  return diffInHours >= 24
    ? updatedAt.format('MMM D, YYYY')
    : updatedAt.fromNow()
}

type NotificationCardProps = {
  notification: UserNotification
}

export function NotificationCard({ notification }: NotificationCardProps) {
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
