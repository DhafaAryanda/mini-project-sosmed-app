import { z } from 'zod'

export const createPostFormSchema = z.object({
  description: z.string().min(1).max(255),
})

export type CreatePostFormSchema = z.infer<typeof createPostFormSchema>
