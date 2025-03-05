import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatDate = (date: string) => {
  const now = dayjs()
  const updatedAt = dayjs(date)
  const diffInHours = now.diff(updatedAt, 'hour')

  return diffInHours >= 24
    ? updatedAt.format('MMM D, YYYY')
    : updatedAt.fromNow()
}
