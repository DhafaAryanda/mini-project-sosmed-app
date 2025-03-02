import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import axiosInstance from '@/lib/axiosInstance'
import { loginFormSchema, LoginFormSchema } from '@/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Cookies from 'js-cookie'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (data: LoginFormSchema) => {
    setIsLoading(true)

    try {
      const response = await axiosInstance.post('/login', data)
      const token = response.data.data.token
      const expiresAt = new Date(response.data.data.expires_at)
      console.log('🚀 ~ onSubmit ~ expiresAt:', expiresAt)
      Cookies.set('token', token, { expires: expiresAt })

      toast.success('Login Successful')
      form.reset()
      router.reload()
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
      toast.error('Login Failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-full  flex items-center justify-center ">
      <Card className="w-1/4">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
          <p className="text-muted-foreground">Login to your account</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-1"
            >
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative w-full ">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          {...field}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2  hover:bg-transparent "
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Eye className="w-5 h-5" />
                          ) : (
                            <EyeOff className="w-5 h-5" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} className="mt-4 w-full">
                Login
              </Button>
            </form>
          </Form>

          {/* Continue With google */}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-[13px]">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-blue-500">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
