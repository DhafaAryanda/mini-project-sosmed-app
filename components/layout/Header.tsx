import { Menu, Moon, Sun, Bell, Home, User, LogOut } from 'lucide-react'
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
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'

type HeaderProps = {
  showAvatar?: boolean
}

export const Header = ({ showAvatar = true }: HeaderProps) => {
  const { setTheme } = useTheme()

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/notifications', label: 'Notifications', icon: Bell },
  ]

  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    Cookies.remove('token')
    router.reload()
  }

  return (
    <header className="h-16 border-b border-border flex items-center justify-between py-4 px-8 gap-4">
      <Link href={'/'}>
        <h1 className="text-2xl font-bold">Cosmed</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Button
          className="cursor-pointer hidden md:flex"
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
          <div className="hidden md:flex">
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
          </div>
        )}

        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-2">
              <ul className="space-y-3">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link href={href}>
                      <Button
                        variant={'ghost'}
                        className={`w-full justify-start flex items-center gap-4 text-base ${
                          router.pathname === href ? 'font-bold' : ''
                        }`}
                      >
                        <Icon
                          stroke={
                            router.pathname === href ? 'currentColor' : 'gray'
                          }
                          strokeWidth={router.pathname === href ? 2 : 1}
                          className="w-6 h-6"
                        />
                        {label}
                      </Button>
                    </Link>
                  </li>
                ))}

                <Button
                  variant={'ghost'}
                  className="w-full justify-start flex items-center gap-4 text-base"
                  onClick={() =>
                    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
                  }
                >
                  <Sun className="w-6 h-6" />
                  Toggle Theme
                </Button>
                <Button
                  variant={'ghost'}
                  className="w-full justify-start flex items-center gap-4 text-base"
                  onClick={handleLogout}
                >
                  <LogOut className="w-6 h-6" />
                  Logout
                </Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
