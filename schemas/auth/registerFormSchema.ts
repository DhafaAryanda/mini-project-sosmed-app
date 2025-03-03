import { z } from 'zod'

export const registerFormSchema = z.object({
  name: z
    .string({ message: 'Nama wajib diisi' })
    .min(3, { message: 'Nama minimal 3 karakter' })
    .max(100),
  phone: z.string().min(10).max(15).optional(),
  dob: z.string().optional(),
  hobby: z.string().min(3).max(100).optional(),
  email: z.string({ message: 'email wajib diisi' }).email(),
  password: z.string({ message: 'password wajib diisi' }).min(5),
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
