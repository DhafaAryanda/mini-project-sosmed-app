import { useState } from 'react'
import Cookies from 'js-cookie'
import { toast } from 'sonner'
import { useRouter } from 'next/router'
import { login } from '@/lib/api/auth'

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (
    email: string,
    password: string,
    resetForm: () => void,
  ) => {
    if (isLoading) return
    setIsLoading(true)

    try {
      const response = await login(email, password)
      const token = response.token
      const expiresAt = new Date(response.expires_at)

      Cookies.set('token', token, { expires: expiresAt })
      toast.success('Login Successful')
      resetForm()
      router.reload()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { handleLogin, isLoading }
}
