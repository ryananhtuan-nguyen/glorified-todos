'use client'
import { createCard } from '@/actions/create-card'
import FormSubmit from '@/components/form/FormSubmit'
import FormTextarea from '@/components/form/FormTextarea'
import { Button } from '@/components/ui/button'
import { useAction } from '@/hooks/use-action'
import { Plus, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, {
  ElementRef,
  KeyboardEventHandler,
  forwardRef,
  useRef,
} from 'react'
import { toast } from 'sonner'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'

interface CardFormProps {
  listId: string
  enableEditing: () => void
  disableEditing: () => void
  isEditing: boolean
}

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, enableEditing, disableEditing, isEditing }, ref) => {
    const params = useParams()
    const boardId = params.boardId
    const formRef = useRef<ElementRef<'form'>>(null)

    const { execute, fieldErrors } = useAction(createCard, {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" created!`)
        formRef.current?.reset()
      },
      onError: (error) => {
        toast.error(error)
      },
    })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        disableEditing()
      }
    }

    useOnClickOutside(formRef, disableEditing)
    useEventListener('keydown', onKeyDown)

    const onTextareakeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
      e
    ) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        formRef.current?.requestSubmit()
      }
    }

    const onSubmit = (formData: FormData) => {
      const title = formData.get('title') as string
      const listId = formData.get('listId') as string
      const boardId = formData.get('boardId') as string

      execute({
        title,
        listId,
        boardId,
      })
    }

    if (isEditing) {
      return (
        <form
          className="m-1 py-0.5 px-1 space-y-4"
          ref={formRef}
          action={onSubmit}
        >
          <FormTextarea
            id="title"
            onKeyDown={onTextareakeyDown}
            errors={fieldErrors}
            ref={ref}
            placeholder="Enter a title for this card..."
          />
          <input hidden id="listId" name="listId" value={listId} />
          <input hidden id="boardId" name="boardId" value={boardId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add card</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      )
    }

    return (
      <div className="pt-2 px-2">
        <Button
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
          onClick={enableEditing}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    )
  }
)

CardForm.displayName = 'CardForm'

export default CardForm
