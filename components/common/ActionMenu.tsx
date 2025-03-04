import { Ellipsis } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

type ActionMenuProps = {
  onEdit: () => void
  onDelete: () => void
}

export function ActionMenu({ onEdit, onDelete }: ActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Ellipsis Clicked')
          }}
        >
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(e) => e.preventDefault()}
          onClick={(e) => {
            e.stopPropagation()
            // setIsEditing(true)
            onEdit()
            console.log('Edit Clicked')
          }}
        >
          Edit
        </DropdownMenuItem>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                className="cursor-pointer"
                variant="destructive"
                onSelect={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Delete Clicked')
                }}
              >
                Delete
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log('Cancel Clicked')
                  }}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.stopPropagation()
                    console.log('Continue Clicked')
                    // handleDelete()
                    onDelete()
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
