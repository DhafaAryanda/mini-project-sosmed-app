import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import { register } from '@/lib/api/auth'
import { RegisterFormSchema } from '@/schemas/auth/registerFormSchema'

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (
    data: RegisterFormSchema,
    resetForm: () => void,
  ) => {
    if (isLoading) return
    setIsLoading(true)

    try {
      await register(data)
      toast.success('Account Created Successfully')
      resetForm()
      router.push('/login')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { handleRegister, isLoading }
}
