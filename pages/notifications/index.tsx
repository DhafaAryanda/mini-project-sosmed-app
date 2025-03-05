import { NotificationCard } from '@/components/notifications/NotificationCard'
import { getAllNotifications } from '@/lib/api/notifications'
import { UserNotification } from '@/types/notification'
import useSWR from 'swr'

export default function NotificationsPage() {
  const {
    data: notifications,
    error,
    isLoading,
  } = useSWR('/notifications', getAllNotifications)

  if (isLoading)
    return <p className="text-center text-gray-500">Loading notifications...</p>
  if (error)
    return (
      <p className="text-center text-red-500">Failed to load notifications</p>
    )

  return (
    <div className="w-full h-full flex flex-col gap-10">
      {notifications.length > 0 ? (
        notifications.map((notification: UserNotification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))
      ) : (
        <p className="text-center">No Notifications</p>
      )}
    </div>
  )
}
