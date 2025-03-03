import { PostForm } from '@/components/form/PostForm'
import { PostCard } from '@/components/post/PostCard'
import { getAllPosts } from '@/lib/api/posts'
import { CreatePostFormSchema } from '@/schemas/posts/createPostFormSchema'

import { Post } from '@/types/post'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  console.log('🚀 ~ Home ~ posts:', posts)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <div className="w-full h-full flex flex-col items-center   ">
        <div className="w-3/4 flex flex-col gap-2">
          <PostForm />

          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} postData={post} />)
          ) : (
            <p className="text-center text-gray-500">No posts available</p>
          )}
        </div>
      </div>
    </>
  )
}
