import { ReplyForm } from '@/components/form/ReplyForm'
import { PostDetailCard } from '@/components/post/PostDetailCard'
import { ReplyCard } from '@/components/post/ReplyCard'
import { getPostById } from '@/lib/api/posts'
import { getRepliesByPostId } from '@/lib/api/replies'

import { Reply } from '@/types/reply'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  const {
    data: post,
    error: postError,
    isLoading: isPostLoading,
    mutate: mutatePost,
  } = useSWR(id ? `/post/${id}` : null, () => getPostById(Number(id)))

  const {
    data: replies,
    error: repliesError,
    isLoading: isRepliesLoading,
    mutate: mutateReplies,
  } = useSWR(id ? `/replies/post/${id}` : null, () =>
    getRepliesByPostId(Number(id)),
  )

  if (!id) return <p className="text-center text-gray-500">Loading...</p>

  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-10  ">
        <div className="w-3/4 flex flex-col">
          {isPostLoading ? (
            <p className="text-center text-gray-500">Loading post...</p>
          ) : post ? (
            <PostDetailCard key={post.id} postData={post} mutate={mutatePost} />
          ) : (
            <p className="text-center text-red-500">Failed to load post</p>
          )}

          <ReplyForm mutate={mutateReplies} />

          {isRepliesLoading ? (
            <p className="text-center text-gray-500">Loading replies...</p>
          ) : replies && replies.length > 0 ? (
            replies.map((reply: Reply) => (
              <ReplyCard
                key={reply.id}
                replyData={reply}
                mutate={mutateReplies}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No replies available</p>
          )}
        </div>
      </div>
    </>
  )
}
