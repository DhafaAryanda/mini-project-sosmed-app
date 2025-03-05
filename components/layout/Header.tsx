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
import { logout } from '@/lib/api/auth'
import Cookies from 'js-cookie'

type HeaderProps = {
  showAvatar?: boolean
}

export const Header = ({ showAvatar = true }: HeaderProps) => {
  const { setTheme } = useTheme()

  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    Cookies.remove('token')
    router.reload()
  }

  return (
    <header className="h-16 border-b border-border flex items-center justify-between py-4 px-8 gap-4">
      <div>
        <h1 className="text-2xl font-bold">Cosmed</h1>
      </div>

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
                  <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Liliana" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push('/profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
