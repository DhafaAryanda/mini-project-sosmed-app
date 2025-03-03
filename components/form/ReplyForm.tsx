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
import { z } from 'zod'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useRouter } from 'next/router'
import { replyToPost } from '@/lib/api/replies'
import {
  createReplyFormSchema,
  CreateReplyFormSchema,
} from '@/schemas/posts/createReplyFormSchema'

export function ReplyForm({ mutate }: { mutate: () => void }) {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(false)

  const form = useForm<CreateReplyFormSchema>({
    resolver: zodResolver(createReplyFormSchema),
    defaultValues: {
      description: '',
    },
  })

  async function onSubmit(data: CreateReplyFormSchema) {
    setLoading(true)
    try {
      await replyToPost(Number(id), data.description)
      toast.success('Reply created successfully!')
      form.reset()
      await mutate()
    } catch (error) {
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
            onClick={form.handleSubmit(onSubmit)}
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
