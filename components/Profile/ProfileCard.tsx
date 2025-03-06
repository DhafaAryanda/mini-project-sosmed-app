import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Profile } from '@/schemas/profile/profileSchema'
import dayjs from 'dayjs'
import { Calendar, Heart, Mail, Phone } from 'lucide-react'

type ProfileCardProps = {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="w-full h-fit p-6 shadow-lg rounded-2xl">
      <CardHeader className="items-center flex-col">
        <Avatar className="w-24 h-24 border-4 border-primary shadow-md">
          {/* <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Liliana" /> */}
          <AvatarFallback>
            {profile.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl md:text-2xl font-bold mt-3">
          {profile.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-4 flex flex-col md:flex-row w-full ">
        <div className="flex flex-row md:flex-col items-center gap-4 p-3 rounded-lg md:w-1/4 w-3/4 mx-auto   ">
          <span className="bg-secondary p-4 rounded-full">
            <Mail className="w-5 h-5 " />
          </span>
          <div className="w-full ">
            <p className=" text-sm text-muted-foreground text-nowrap text-start md:text-center">
              Email
            </p>
            <p className="text-secondary-foreground text-sm lg:text-base font-medium md:text-center ">
              {profile.email}
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center gap-4 p-3 rounded-lg md:w-1/4 w-3/4 mx-auto ">
          <span className="bg-secondary p-4 rounded-full">
            <Calendar className="w-5 h-5 " />
          </span>
          <div className="w-full">
            <p className="text-sm text-muted-foreground text-nowrap text-start md:text-center ">
              Tanggal Lahir
            </p>
            <p className="text-secondary-foreground font-medium md:text-center text-sm lg:text-base">
              {profile.dob ? dayjs(profile.dob).format('DD MMMM YYYY') : 'N/A'}
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center gap-4 p-3 rounded-lg md:w-1/4 w-3/4 mx-auto ">
          <span className="bg-secondary p-4 rounded-full">
            <Phone className="w-5 h-5 " />
          </span>

          <div className="w-full">
            <p className="text-sm text-muted-foreground text-nowrap text-start md:text-center">
              Telepon
            </p>
            <p className="text-secondary-foreground font-medium md:text-center text-sm lg:text-base">
              {profile.phone ? profile.phone : 'N/A'}
            </p>
          </div>
        </div>
        <div className=" flex flex-row md:flex-col items-center gap-4 p-3 rounded-lg md:w-1/4 w-3/4 mx-auto ">
          <span className="bg-secondary p-4 rounded-full">
            <Heart className="w-5 h-5 " />
          </span>
          <div className="w-full">
            <p className="text-sm text-muted-foreground text-nowrap text-start md:text-center">
              Hobi
            </p>
            <p className="text-secondary-foreground font-medium md:text-center text-sm lg:text-base">
              {profile.hobby ? profile.hobby : 'N/A'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
