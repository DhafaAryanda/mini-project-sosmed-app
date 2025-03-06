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
import { useLogin } from '@/hooks/useLogin'
import {
  loginFormSchema,
  LoginFormSchema,
} from '@/schemas/auth/loginFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { handleLogin, isLoading } = useLogin()

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = async (data: LoginFormSchema) => {
    await handleLogin(data.email, data.password, form.reset)
  }

  return (
    <div className="w-full h-full  flex items-center justify-center ">
      <Card className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Login to your account
          </p>
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
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-[13px]">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-blue-500">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
