'use client'

import { Button } from '@/components/ui/button'
import { Board } from '@prisma/client'

interface BoardTitleFormProps {
  data: Board
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  console.log(data)
  return (
    <Button className="font-bold text-lg h-auto w-auto p-1 px-2">
      {data.title}
    </Button>
  )
}

export default BoardTitleForm
