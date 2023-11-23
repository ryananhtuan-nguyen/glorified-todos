'use client'

import { State, create } from '@/actions/create-board'
import { useFormState } from 'react-dom'
import FormButton from './FormButton'
import FormInput from './FormInput'

export const Form = () => {
  const initialState = { message: null, errors: {} } as State
  const [state, dispatch] = useFormState(create, initialState)
  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <FormButton />
    </form>
  )
}
