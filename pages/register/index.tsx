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
import { useRegister } from '@/hooks/useRegister'
import {
  registerFormSchema,
  RegisterFormSchema,
} from '@/schemas/auth/registerFormSchema'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { handleRegister, isLoading } = useRegister()

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: RegisterFormSchema) => {
    handleRegister(data, form.reset)
  }

  return (
    <div className="w-full h-full  flex items-center justify-center ">
      <Card className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            Create an Account
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Join the Community
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-1"
            >
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />
              <FormField
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />
              <FormField
                name="hobby"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hobby</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />
              <FormField
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl className="">
                      <Input
                        type="date"
                        className="w-full flex justify-between"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                    <FormDescription />
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
                          disabled={isLoading}
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
                    <FormMessage className="text-xs" />
                    <FormDescription />
                  </FormItem>
                )}
              />

              <Button className="mt-4 w-full" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Create Account'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-[13px]">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-blue-500">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
