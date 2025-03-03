import { NotificationCard } from '@/components/notifications/NotificationCard'
import { getAllNotifications } from '@/lib/api/notifications'
import { Profile } from '@/schemas/profile/profileSchema'
import { UserNotification } from '@/types/notification'
import { useEffect, useState } from 'react'

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<UserNotification[]>([])
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
