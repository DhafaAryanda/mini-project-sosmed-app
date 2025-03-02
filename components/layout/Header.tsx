import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useEffect } from 'react'
import { postLogout } from '@/services/PostService'

type HeaderProps = {
  showAvatar?: boolean
}

export const Header = ({ showAvatar = true }: HeaderProps) => {
  const { setTheme } = useTheme()

  // useEffect(() => {
  //   const fetchLogout = async () => {
  //     const data = await postLogout()
  //     console.log('🚀 ~ fetchProfile ~ data', data)
  //   }

  //   fetchLogout()
  // }, [])

  // const handleLogout = async () => {
  //   const data = await postLogout()
  //   console.log('🚀 ~ fetchProfile ~ data', data)
  // }

  const router = useRouter()

  return (
    <header className="h-16 border-b border-border flex items-center justify-between py-4 px-8 gap-4">
      <div>
        <h1 className="text-2xl font-bold">Cosmed</h1>
      </div>
      {/* <div className="w-10 h-10 rounded-full border-2 border-red-300"></div> */}
      <div className="flex items-center gap-4">
        <Button
          className="cursor-pointer "
          variant="outline"
          size="icon"
          onClick={() =>
            setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
          }
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
            // align="end"
            >
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Light</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

        {showAvatar && (
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="cursor-pointer p-0 rounded-full h-fit w-fit"
            >
              <Button
                variant={'ghost'}
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Ellipsis Clicked')
                }}
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push('/profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
