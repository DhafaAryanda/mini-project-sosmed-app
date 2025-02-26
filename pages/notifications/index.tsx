import { NotificationCard } from '@/components/notifications/NotificationCard'

export default function NotificationsPage() {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  )
}
