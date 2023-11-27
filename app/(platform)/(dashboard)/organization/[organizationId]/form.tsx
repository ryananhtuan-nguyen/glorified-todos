'use client'

import { createBoard } from '@/actions/create-board'
import { useAction } from '@/hooks/use-action'
import FormInput from '@/components/form/FormInput'
import FormSubmit from '@/components/form/FormSubmit'

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'SUCCESS!')
    },
    onError: (error) => {
      console.log(error, 'ERROR!')
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    console.log({ title })

    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <FormInput label="Board Title" id="title" errors={fieldErrors} />
      <FormSubmit>Save</FormSubmit>
    </form>
  )
}
