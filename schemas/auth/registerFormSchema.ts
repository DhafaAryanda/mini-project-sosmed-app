import { z } from 'zod'

export const registerFormSchema = z.object({
  name: z
    .string({ message: 'Nama wajib diisi' })
    .min(3, { message: 'Nama minimal 3 karakter' })
    .max(100),
  phone: z.string().min(10).max(15).optional(),
  dob: z.string().optional(),
  hobby: z.string().min(3).max(100).optional(),
  username: z
    .string({ message: 'Username wajib diisi' })
    .min(3, { message: 'Username minimal 3 karakter' })
    .max(50),
  email: z.string({ message: 'email wajib diisi' }).email(),
  password: z.string({ message: 'password wajib diisi' }).min(8),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
