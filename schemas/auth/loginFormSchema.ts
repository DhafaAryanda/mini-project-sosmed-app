import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string({ message: 'email wajib diisi' })
    .email({ message: 'Email tidak valid' }),
  password: z.string({ message: 'passowrd wajib diisi' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
