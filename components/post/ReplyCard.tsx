import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Ellipsis } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'

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
}

type Reply = {
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

export function ReplyCard({ reply }: { reply: Reply }) {
  return (
    <Card
      className=" gap-4 flex flex-row px-4 rounded-none"
      //   onClick={() => setIsModalOpen(true)}
    >
      <div className="w-fit h-fit group rounded-full">
        <Avatar className="w-10 h-10">
          <AvatarFallback>
            {reply.user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full flex flex-col gap-4 px-2 ">
        <CardHeader className="flex flex-row gap-2 p-0">
          <CardTitle className="flex gap-2 items-center">
            {reply.user.name}
            {reply.is_own_reply && <span className="">(You)</span>}
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-2">
            <p className="text-sm">{reply.user.email}</p>
            <span>·</span>
            <p className="text-xs">{formatDate(reply.updated_at)}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p className="flex justify-between">
            {reply.description}{' '}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log('Ellipsis Clicked')
                  }}
                >
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.stopPropagation()
                    // setIsEditing(true)
                    console.log('Edit Clicked')
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        variant="destructive"
                        onSelect={(e) => e.preventDefault()}
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log('Delete Clicked')
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          onClick={(e) => {
                            e.stopPropagation()
                            console.log('Cancel Clicked')
                          }}
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={(e) => {
                            e.stopPropagation()
                            console.log('Continue Clicked')
                            // handleDelete()
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
