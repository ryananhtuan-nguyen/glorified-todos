'use client'

import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'

interface FormInputProps {
  id: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, string[] | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = '',
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus()
    return (
      <div className="space-y-2 ">
        <div className="space-y-1">{label ? <div>Label</div> : null}</div>
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
