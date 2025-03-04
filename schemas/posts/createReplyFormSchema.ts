import { z } from 'zod'

export const createReplyFormSchema = z.object({
  description: z.string().min(1).max(255),
})

export type CreateReplyFormSchema = z.infer<typeof createReplyFormSchema>
