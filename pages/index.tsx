import { PostForm } from '@/components/form/PostForm'
import { PostCard } from '@/components/post/PostCard'
import { getAllPosts } from '@/services/PostService'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

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

type PostResponse = {
  success: boolean
  data: Post
  message: string
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [createPost, setCreatePost] = useState<Post>()
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
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-gray-500">No posts available</p>
          )}
        </div>
      </div>
    </>
  )
}
