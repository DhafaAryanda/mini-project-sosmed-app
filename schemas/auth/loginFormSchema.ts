import { z } from 'zod'

export const loginFormSchema = z.object({
  username: z.string({ message: 'username wajib diisi' }),
  password: z.string({ message: 'password wajib diisi' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
