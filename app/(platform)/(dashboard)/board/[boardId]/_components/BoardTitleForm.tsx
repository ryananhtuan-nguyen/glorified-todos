'use client'

import { ElementRef, useRef, useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Board } from '@prisma/client'
import FormInput from '@/components/form/FormInput'
import { useAction } from '@/hooks/use-action'
import { updateBoard } from '@/actions/update-board'

interface BoardTitleFormProps {
  data: Board
}

const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" updated! `)
      setTitle(data.title)
      disableEditing()
    },
    onError: (error) => {
      toast.error(error)
    },
  })

  const formRef = useRef<ElementRef<'form'>>(null)
  const inputRef = useRef<ElementRef<'input'>>(null)

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(data.title)

  const disableEditing = () => {
    setIsEditing(false)
  }

  const onBlur = () => {
    formRef.current?.requestSubmit()
  }

  const enableEditing = () => {
    //TODO: FOCUS INPUT
    setIsEditing(true)

    setTimeout(() => {
      inputRef?.current?.focus()
      inputRef.current?.select()
    })
  }

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({
      title,
      id: data.id,
    })
  }

  if (isEditing) {
    return (
      <form
        className="flex items-center gap-x-2"
        ref={formRef}
        action={onSubmit}
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    )
  }

  return (
    <Button
      className="font-bold text-lg h-auto w-auto p-1 px-2"
      variant="transparent"
      onClick={enableEditing}
    >
      {title}
    </Button>
  )
}

export default BoardTitleForm
