import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Heart, Mail, Phone } from 'lucide-react'

export function ProfileCard() {
  return (
    <Card className="w-full h-fit p-6 shadow-lg rounded-2xl">
      <CardHeader className="items-center flex-col">
        <Avatar className="w-24 h-24 border-4 border-primary shadow-md">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold mt-3">Dhafa Aryanda</CardTitle>
      </CardHeader>

      <CardContent className="mt-4 flex flex-row w-full">
        <div className="flex flex-col items-center gap-4 p-3 rounded-lg w-1/4 ">
          <span className="bg-secondary p-4 rounded-full">
            <Mail className="w-5 h-5 " />
          </span>
          <div className="">
            <p className="text-sm text-muted-foreground text-nowrap text-center">
              Email
            </p>
            <p className="text-secondary-foreground font-medium">dhafa@maol</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 p-3 rounded-lg w-1/4">
          <span className="bg-secondary p-4 rounded-full">
            <Calendar className="w-5 h-5 " />
          </span>
          <div>
            <p className="text-sm text-muted-foreground w-1/4 text-nowrap text-center ">
              Tanggal Lahir
            </p>
            <p className="text-secondary-foreground font-medium">
              02 February 2220
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 p-3 rounded-lg w-1/4">
          <span className="bg-secondary p-4 rounded-full">
            <Phone className="w-5 h-5 " />
          </span>

          <div>
            <p className="text-sm text-muted-foreground text-nowrap text-center">
              Telepon
            </p>
            <p className="text-secondary-foreground font-medium">0982382828</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-4 p-3 rounded-lg w-1/4">
          <span className="bg-secondary p-4 rounded-full">
            <Heart className="w-5 h-5 " />
          </span>
          <div>
            <p className="text-sm text-muted-foreground text-nowrap text-center">
              Hobi
            </p>
            <p className="text-secondary-foreground font-medium">Badminton</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
