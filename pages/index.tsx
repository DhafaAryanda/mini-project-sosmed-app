import { PostForm } from '@/components/form/PostForm'
import { PostCard } from '@/components/post/PostCard'
import { getAllPosts } from '@/lib/api/posts'
import useSWR from 'swr'

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR('/posts', getAllPosts)

  if (isLoading)
    return <p className="text-center text-gray-500">Loading posts...</p>
  if (error)
    return <p className="text-center text-red-500">Failed to load posts</p>

  return (
    <>
      <div className="w-full h-full flex flex-col items-center   ">
        <div className="w-3/4 flex flex-col gap-2">
          <PostForm mutate={mutate} />

          {posts.length > 0 ? (
            posts.map((post: any) => (
              <PostCard key={post.id} postData={post} mutate={mutate} />
            ))
          ) : (
            <p className="text-center text-gray-500">No posts available</p>
          )}
        </div>
      </div>
    </>
  )
}
