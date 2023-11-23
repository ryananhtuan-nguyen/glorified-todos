import { deleteBoard } from '@/actions/delete-board'
import { Button } from '@/components/ui/button'

interface BoardProps {
  title: string
  id: string
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board title:{title}</p>
      <Button variant="destructive" size="sm" type="submit">
        Delete
      </Button>
    </form>
  )
}

export default Board
