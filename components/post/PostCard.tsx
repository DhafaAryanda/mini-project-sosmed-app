import { Check, Ellipsis, Heart, HeartOff, MessageCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
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
import { Badge } from '../ui/badge'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import { Post } from '@/types/post'
import { deletePost, likePost, unlikePost, updatePost } from '@/lib/api/posts'

dayjs.extend(relativeTime)
const formatDate = (date: string) => {
  const now = dayjs()
  const updatedAt = dayjs(date)
  const diffInHours = now.diff(updatedAt, 'hour')

  return diffInHours >= 24
    ? updatedAt.format('MMM D, YYYY') // Format: Apr 20, 2023
    : updatedAt.fromNow() // Format: 22h, 3h, 10m, etc.
}

type PostCardProps = {
  postData: Post
}

export function PostCard({ postData }: PostCardProps) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedDescription] = useState(
    postData.description,
  )

  const handlelikePost = () => {
    likePost(postData.id)
    toast.success('Post liked successfully')
  }

  const handleUnlikePost = () => {
    unlikePost(postData.id)
    toast.success('Post unliked successfully')
  }

  const handleSave = () => {
    setIsEditing(false)

    console.log('Saving:', editedDescription)

    updatePost(postData.id, editedDescription)
    toast.success('Post updated successfully')
  }

  const handleDelete = () => {
    deletePost(postData.id)
    toast.success('Post deleted successfully')
    // console.log('Deleting:', post.id)
  }

  return (
    <Card
      className="cursor-pointer gap-4 flex flex-row px-4 rounded-none"
      onClick={() => !isEditing && router.push(`/post/${postData.id}`)}
    >
      <Avatar className="w-10 h-10">
        <AvatarFallback>
          {postData.user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col gap-4 px-2 ">
        <CardHeader className="flex flex-row gap-2 p-0 ">
          <CardTitle>{postData.user.name} (You)</CardTitle>
          <CardDescription className="flex flex-row items-center gap-2">
            <p className="text-sm">{postData.user.email}</p>
            <span>·</span>
            <p className="text-xs">{formatDate(postData.updated_at)}</p>
          </CardDescription>
          {postData.created_at !== postData.updated_at && (
            <Badge variant="outline">Edited</Badge>
          )}
        </CardHeader>
        <CardContent className="p-0">
          {isEditing ? (
            <Textarea
              // className="w-full p-2 border rounded-md"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              autoFocus
            />
          ) : (
            <p>
              {postData.description.length > 100
                ? postData.description.slice(0, 600) + '...'
                : postData.description}
            </p>
          )}
        </CardContent>

        <CardFooter className="flex justify-between p-0 ">
          <div className="flex w-1/2 gap-8 ">
            <Button
              variant={'ghost'}
              className="flex items-center  gap-2 text-[13px] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Comment Clicked')
              }}
            >
              <MessageCircle className="w-4 h-4" />{' '}
              <span>{postData.replies_count}</span>
            </Button>
            {postData.is_like_post ? (
              <Button
                variant={'ghost'}
                className="flex items-center gap-2 text-[13px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  handleUnlikePost()
                  console.log('Unlike Clicked')
                }}
              >
                <Heart fill="#FF0000" color="#FF0000" />{' '}
                <span className="text-[#FF0000]">{postData.likes_count}</span>
              </Button>
            ) : (
              <Button
                variant={'ghost'}
                className="flex items-center gap-2 text-[13px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  handlelikePost()
                  console.log('Like Clicked')
                }}
              >
                <Heart /> <span>{postData.likes_count}</span>
              </Button>
            )}
          </div>
          <div className="flex w-1/2 justify-end">
            {isEditing ? (
              <div className="flex gap-2">
                <Button
                  variant={'ghost'}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsEditing(false)
                    setEditedDescription(postData.description)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSave()
                  }}
                >
                  Save
                </Button>
              </div>
            ) : (
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
                      setIsEditing(true)
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
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
