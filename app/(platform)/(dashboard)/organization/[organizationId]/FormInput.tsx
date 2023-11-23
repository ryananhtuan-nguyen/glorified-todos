'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}

const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus()

  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        required
        disabled={pending}
        placeholder="Enter board title"
        className="border-black
  border p-1"
      />
      {errors?.title ? (
        <div>
          {errors.title?.map((error: string) => (
            <p key={error} className=" text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FormInput
