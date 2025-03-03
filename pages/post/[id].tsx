import { ReplyForm } from '@/components/form/ReplyForm'
import { PostCard } from '@/components/post/PostCard'
import { ReplyCard } from '@/components/post/ReplyCard'
import { getPostById } from '@/lib/api/posts'
import { getRepliesByPostId } from '@/lib/api/replies'

import { Post } from '@/types/post'
import { Reply } from '@/types/reply'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PostPage() {
  const [post, setPost] = useState<Post>()
  const [replyData, setReplyData] = useState<Reply[]>([])
  console.log('🚀 ~ Home ~ posts:', post)
  const router = useRouter()
  const { id } = router.query
  console.log('🚀 ~ PostPage ~ router:', id)

  useEffect(() => {
    if (!id) return

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
          {post && <PostCard key={post.id} postData={post} />}

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
