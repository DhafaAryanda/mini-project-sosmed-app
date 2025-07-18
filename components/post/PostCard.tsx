import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { deletePost, likePost, unlikePost, updatePost } from '@/lib/api/posts'
import { Post } from '@/types/post'
import { MessageCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { toast } from 'sonner'
import { ActionMenu } from '../common/ActionMenu'
import { LikeButton } from '../common/LikeButton'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { formatDate } from '@/utils/date'
import { KeyedMutator } from 'swr'

type PostCardProps = {
  postData: Post
  mutate: KeyedMutator<Post[]>
}

export function PostCard({ postData, mutate }: PostCardProps) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedDescription] = useState(postData.content)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleLikeToggle = async () => {
    const prevPostData = { ...postData }

    // const optimisticData = {
    //   ...postData,
    //   is_like_post: !postData.is_like_post,
    //   likes_count: postData.is_like_post
    //     ? postData.likes_count - 1
    //     : postData.likes_count + 1,
    // }

    // mutate(
    //   (currentData) => {
    //     if (!currentData) return currentData

    //     return currentData?.map((post) =>
    //       post.id === postData.id ? optimisticData : post,
    //     )
    //   },
    //   { revalidate: false },
    // )

    // try {
    //   if (postData.is_like_post) {
    //     await unlikePost(postData.id)
    //     toast.success('Post unliked successfully')
    //   } else {
    //     await likePost(postData.id)
    //     toast.success('Post liked successfully')
    //   }
    // } catch (error) {
    //   console.log('🚀 ~ handleLikeToggle ~ error:', error)
    //   toast.error('Failed to update like status')

    //   mutate(
    //     (currentData) => {
    //       if (!currentData) return currentData
    //       return currentData.map((post) =>
    //         post.id === postData.id ? prevPostData : post,
    //       )
    //     },
    //     { revalidate: false },
    //   )
    // }
  }

  const handleSave = async (description: string) => {
    setIsEditing(false)
    const prevPostData = { ...postData }
    const optimisticData = { ...postData, description }

    mutate(
      (currentData) => {
        if (!currentData) return currentData
        return currentData.map((post) =>
          post.id === postData.id ? optimisticData : post,
        )
      },
      { revalidate: false },
    )

    try {
      await updatePost(postData.id, description)
      toast.success('Post updated successfully')
    } catch (error) {
      console.log('🚀 ~ handleSave ~ error:', error)
      toast.error('Failed to update post')
      mutate(
        (currentData) => {
          if (!currentData) return currentData
          return currentData.map((post) =>
            post.id === postData.id ? prevPostData : post,
          )
        },
        { revalidate: false },
      )
    }
  }

  const handleDelete = async () => {
    const prevPostData = { ...postData }

    mutate(
      (currentData) => {
        if (!currentData) return currentData
        return currentData.filter((post) => post.id !== postData.id)
      },
      { revalidate: false },
    )

    try {
      await deletePost(postData.id)
      toast.success('Post deleted successfully')
    } catch (error) {
      console.log('🚀 ~ handleDelete ~ error:', error)
      toast.error('Failed to delete post')

      mutate((currentData) => {
        if (!currentData) return currentData
        return [...currentData, prevPostData]
      })
    }
  }

  return (
    <Card
      className="cursor-pointer gap-4 flex flex-row px-4 rounded-none"
      onClick={() => !isEditing && router.push(`/post/${postData.id}`)}
    >
      <Avatar className="w-10 h-10">
        <AvatarFallback>
          {postData.author.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col gap-4 px-2 ">
        <CardHeader className="flex flex-col md:flex-row gap-2 p-0 ">
          <CardTitle className="flex gap-1 items-center text-sm md:text-base">
            {postData.author.name}

            {/* {postData.is_own_post && (
              <span className="text-xs md:text-base dark:text-zinc-300 text-zinc-600">
                (You)
              </span>
            )} */}
          </CardTitle>
          <CardDescription className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 ">
            {/* <p className="text-sm">{postData.user.email}</p> */}
            <span className="hidden md:block">·</span>
            <p className="text-xs">{formatDate(postData.updated_at)}</p>
          </CardDescription>
          {postData.created_at !== postData.updated_at && (
            <Badge variant="outline">Edited</Badge>
          )}
        </CardHeader>
        <CardContent className="p-0">
          {isEditing ? (
            <Textarea
              ref={textareaRef}
              onFocus={(e) => {
                const length = e.target.value.length
                e.target.setSelectionRange(length, length)
              }}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              autoFocus
            />
          ) : (
            <p className="text-sm md:text-base">
              {postData.content.length > 100
                ? postData.content.slice(0, 600) + '...'
                : postData.content}
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

            {/* <LikeButton
              isLiked={postData.is_like_post}
              likesCount={postData.likes_count}
              onToggleLike={handleLikeToggle}
            /> */}
          </div>
          {/* {postData.is_own_post && (
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
                      handleSave(editedDescription)
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <ActionMenu
                  onDelete={handleDelete}
                  onEdit={() => setIsEditing(true)}
                />
              )}
            </div>
          )} */}
        </CardFooter>
      </div>
    </Card>
  )
}
