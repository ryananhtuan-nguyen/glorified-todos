'use client'

import { State, create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'
import FormInput from './FormInput'

export const Form = () => {
  const initialState = { message: null, errors: {} } as State
  const [state, dispatch] = useFormState(create, initialState)
  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
