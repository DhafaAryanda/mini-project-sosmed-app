import { PostForm } from '@/components/form/PostForm'
import { PostCard } from '@/components/post/PostCard'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-10  ">
        <PostForm />

        <div className="w-3/4 flex flex-col gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </>
  )
}
