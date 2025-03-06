import { Button } from '@/components/ui/button'
import { Bell, Home, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Sidebar = () => {
  const { pathname } = useRouter()
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/notifications', label: 'Notifications', icon: Bell },
  ]

  return (
    <nav className="hidden md:flex flex-col items-center w-1/12  lg:w-1/4  border-r border-border pt-6   ">
      <ul className="space-y-3 w-full xl:w-3/4 flex flex-col items-center">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href} className="w-3/4 ">
            <Link href={href} className="w-full">
              <Button
                variant={'ghost'}
                className={`h-auto items-center w-fit flex  gap-5  text-xl font-normal cursor-pointer ${
                  pathname === href ? 'font-bold' : ''
                }`}
              >
                <Icon
                  stroke={pathname === href ? 'currentColor' : 'gray'}
                  strokeWidth={pathname === href ? 2 : 1}
                  className="min-h-6 min-w-6 lg:min-h-7 lg:min-w-7 shrink-0"
                />

                <span className="flex-1 text-start hidden lg:block ">
                  {label}
                </span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
