import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export function NotificationCard() {
  return (
    <Link
      href={'/postingan/1'}
      className="w-full h-10 flex items-center justify-center bg-red-500"
    >
      <Alert className="flex gap-4">
        <Link href={'/account/2'} className="w-fit h-fit group rounded-full">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="transition-opacity group-hover:opacity-75"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="w-full ">
          <AlertTitle>Anto</AlertTitle>
          <AlertDescription className="flex justify-between">
            <span>Like your post</span>
            <span className="text-xs">2 month ago</span>
          </AlertDescription>
        </div>
      </Alert>
    </Link>
  )
}
