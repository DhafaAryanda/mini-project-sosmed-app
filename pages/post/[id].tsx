import { PostForm } from '@/components/form/PostForm'
import { ReplyForm } from '@/components/form/ReplyForm'
import { PostCard } from '@/components/post/PostCard'
import { ReplyCard } from '@/components/post/ReplyCard'
import { getPostById, getRepliesByPostId } from '@/services/PostService'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Post = {
  id: number
  description: string
  user_id: number
  deleted_at?: string
  created_at: string
  updated_at: string
  likes_count: number
  replies_count: number
  is_like_post: boolean
  is_own_post: boolean
  user: User
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

export default function PostPage() {
  const [post, setPost] = useState<Post>()
  const [replyData, setReplyData] = useState<Reply[]>([])
  console.log('🚀 ~ Home ~ posts:', post)
  const router = useRouter()
  const { id } = router.query
  console.log('🚀 ~ PostPage ~ router:', id)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostById(Number(id))
      setPost(data)
    }

    const fetchReplies = async () => {
      const data = await getRepliesByPostId(Number(id))
      setReplyData(data)
    }

    fetchPosts()
    fetchReplies()
  }, [id])
  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-10  ">
        <div className="w-3/4 flex flex-col">
          {post && <PostCard key={post.id} post={post} />}

          <ReplyForm />

          {replyData.length > 0 ? (
            replyData.map((reply) => <ReplyCard key={reply.id} reply={reply} />)
          ) : (
            <p className="text-center text-gray-500">No replies available</p>
          )}
        </div>
      </div>
    </>
  )
}
