import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { Textarea } from '../ui/textarea'

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
})

export function PostForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the form!', {
      description:
        'You submitted the form with the following data: ' +
        JSON.stringify(data),
    })
  }

  return (
    <Form {...form}>
      <form className=" w-3/4  flex flex-row gap-4 ">
        <div className="w-full items-center justify-center">
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel className="text-lg">Post</FormLabel> */}
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <div className="flex justify-between">
                  <FormDescription className="text-xs">
                    {(field?.value?.length || 0) > 0 && (
                      <p>
                        {160 - (field?.value?.length || 0)} characters left.
                      </p>
                    )}
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="w-fit flex justify-center items-center">
          <Button
            className="rounded-full flex items-center justify-center p-2"
            onClick={form.handleSubmit(onSubmit)}
            type="submit"
          >
            <Send />
          </Button>
        </div>
      </form>
    </Form>
  )
}
