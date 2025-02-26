import { Ellipsis, Heart, MessageCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export function PostCard() {
  return (
    <Card
      className="cursor-pointer gap-4 flex flex-row px-4"
      //   onClick={() => setIsModalOpen(true)}
    >
      <Link href={'/profile'} className="w-fit h-fit group rounded-full">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="transition-opacity group-hover:opacity-75"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>

      <div className="w-full flex flex-col gap-2 ">
        <CardHeader className="flex flex-row gap-2 p-0">
          <CardTitle>Dhafa Aryanda (You)</CardTitle>
          <CardDescription className="flex flex-row items-center gap-2">
            <p className="text-sm">dhafa@gmail.com</p>
            <span>·</span>
            <p className="text-xs">Apr 20, 2023 / 22h</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p>
            Halolo ini adalah contoh desc postingan Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat laboriosam aspernatur ipsa
            omnis, assumenda quidem ab ad corporis veniam fugit fuga possimus
            commodi? Placeat repellendus fuga ab impedit dolore architecto,
            distinctio dolorem quas quam repellat libero necessitatibus tenetur
            asperiores magnam ipsum cumque iusto repudiandae. Facere fugiat, ex
            non labore, explicabo alias quos fugit expedita voluptatum velit
            molestiae! Modi amet voluptatem voluptatum, velit doloremque
            doloribus dicta excepturi libero ea, nesciunt perferendis ad
            inventore hic reprehenderit quidem nobis ipsa laudantium maxime
            dolorum, cum quae dolor! Consectetur, maiores dolore totam suscipit
            vero itaque atque minus temporibus aliquam perspiciatis laboriosam,
            provident ipsa. Omnis, eveniet?
          </p>
        </CardContent>
        <CardFooter className="flex justify-between p-0 ">
          <div className="flex w-1/2 gap-8 ">
            <Button
              variant={'ghost'}
              className="flex items-center  gap-2 text-[13px] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Comment Clicked')
              }}
            >
              <MessageCircle className="w-4 h-4" /> <span>23</span>
            </Button>
            <Button
              variant={'ghost'}
              className="flex items-center gap-2 text-[13px] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Like Clicked')
              }}
            >
              <Heart /> <span>89</span>
            </Button>
          </div>
          <div className="flex w-1/2 justify-end">
            <Button
              variant={'ghost'}
              onClick={(e) => {
                e.stopPropagation()
                console.log('Ellipsis Clicked')
              }}
            >
              <Ellipsis />
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
