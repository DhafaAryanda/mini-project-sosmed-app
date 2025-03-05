import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import {
  createPostFormSchema,
  CreatePostFormSchema,
} from '@/schemas/posts/createPostFormSchema'
import { createPost } from '@/lib/api/posts'

export function PostForm({ mutate }: { mutate: () => void }) {
  const [loading, setLoading] = useState(false)

  const form = useForm<CreatePostFormSchema>({
    resolver: zodResolver(createPostFormSchema),
    defaultValues: {
      description: '',
    },
  })

  async function onSubmit(data: CreatePostFormSchema) {
    setLoading(true)
    try {
      await createPost(data.description)
      toast.success('Post created successfully!')
      form.reset()
      await mutate()
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
      toast.error('Failed to create post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full  flex flex-row  relative "
      >
        <div className=" w-full items-center justify-center">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind?"
                    className="resize-none rounded-none "
                    {...field}
                  />
                </FormControl>
                <div className="flex justify-between">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="w-fit flex justify-center items-center absolute bottom-5 -right-16">
          <Button
            className="rounded-full flex items-center justify-center p-2"
            type="submit"
            disabled={loading}
          >
            <Send />
          </Button>
        </div>
      </form>
    </Form>
  )
}
