'use client'

import { createBoard } from '@/actions/create-board'
import { useFormState } from 'react-dom'
import FormButton from './FormButton'
import FormInput from './FormInput'
import { useAction } from '@/hooks/use-action'

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

    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
      <FormButton />
    </form>
  )
}
