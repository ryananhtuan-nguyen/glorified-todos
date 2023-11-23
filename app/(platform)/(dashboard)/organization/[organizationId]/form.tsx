'use client'

import {  create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'

export const Form = () => {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState(create, initialState)
  return (
    <form action={dispatch}>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter board title"
          className="border-black
        border p-1"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title?.map((error: string) => (
              <p key={error} className=" text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}