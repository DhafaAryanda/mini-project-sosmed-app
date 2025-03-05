import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { deleteReply } from '@/lib/api/replies'
import { formatDate } from '@/utils/date'
import { Ellipsis } from 'lucide-react'
import { toast } from 'sonner'
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
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Reply } from '@/types/reply'
import { KeyedMutator } from 'swr'

type ReplyCardProps = {
  replyData: Reply
  mutate: KeyedMutator<Reply[]>
}

export function ReplyCard({ replyData, mutate }: ReplyCardProps) {
  const handleDelete = async () => {
    const prevReplyData = { ...replyData }

    mutate(
      (currentData) => {
        if (!currentData) return currentData
        return currentData.filter((reply) => reply.id !== replyData.id)
      },
      { revalidate: false },
    )

    try {
      await deleteReply(replyData.id)
      toast.success('Reply deleted successfully')
    } catch (error) {
      toast.error('Failed to delete reply')

      mutate((currentData) => {
        if (!currentData) return currentData
        return [...currentData, prevReplyData]
      })
    }
  }

  return (
    <Card className=" gap-4 flex flex-row px-4 rounded-none">
      <div className="w-fit h-fit group rounded-full">
        <Avatar className="w-10 h-10">
          <AvatarFallback>
            {replyData.user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full flex flex-col gap-4 px-2 ">
        <CardHeader className="flex flex-row gap-2 p-0">
          <CardTitle className="flex gap-2 items-center">
            {replyData.user.name}
            {replyData.is_own_reply && <span className="">(You)</span>}
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-2">
            <p className="text-sm">{replyData.user.email}</p>
            <span>·</span>
            <p className="text-xs">{formatDate(replyData.updated_at)}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p className="flex justify-between">
            {replyData.description}{' '}
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
                            handleDelete()
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
