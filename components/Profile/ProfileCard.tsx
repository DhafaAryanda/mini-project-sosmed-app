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

      <CardContent className="mt-4 flex flex-row justify-between">
        <div className="flex items-center gap-4 p-3 rounded-lg ">
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-secondary-foreground font-medium">dhafa@maol</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg ">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Tanggal Lahir</p>
            <p className="text-secondary-foreground font-medium">
              02 February 2220
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg ">
          <Phone className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Telepon</p>
            <p className="text-secondary-foreground font-medium">0982382828</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-lg ">
          <Heart className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Hobi</p>
            <p className="text-secondary-foreground font-medium">Berenang</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
