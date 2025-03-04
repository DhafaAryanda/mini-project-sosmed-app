import { Heart } from 'lucide-react'
import { Button } from '../ui/button'

type LikeButtonProps = {
  isLiked: boolean
  likesCount: number
  onToggleLike: () => void
}

export function LikeButton({
  isLiked,
  likesCount,
  onToggleLike,
}: LikeButtonProps) {
  return (
    <Button
      variant={'ghost'}
      className="flex items-center gap-2 text-[13px] cursor-pointer"
      onClick={(e) => {
        e.stopPropagation()
        onToggleLike()
        console.log(isLiked ? 'Unlike Clicked' : 'Like Clicked')
      }}
    >
      <Heart
        fill={isLiked ? '#FF0000' : 'none'}
        color={isLiked ? '#FF0000' : 'currentColor'}
      />
      <span className={isLiked ? 'text-[#FF0000]' : ''}>{likesCount}</span>
    </Button>
  )
}
