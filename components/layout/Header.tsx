import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const Header = () => {
  const { setTheme } = useTheme()

  return (
    <header className="h-16 border-b border-border flex items-center justify-between py-4 px-8 gap-4">
      <div>
        <h1 className="text-2xl font-bold">My App</h1>
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
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
