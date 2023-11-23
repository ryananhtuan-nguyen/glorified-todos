'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import z from 'zod'

import { db } from '@/lib/db'

export type State = {
  errors?: {
    title?: string[]
  }
  message?: string | null
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Minimum length of 3 letters required',
  }),
})

// server actions
export async function create(prevState: State, formData: FormData) {
  console.log('PREVSTATE', prevState)
  console.log('FORMDATA', formData)
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields',
    }
  }
  const { title } = validatedFields.data

  try {
    await db.board.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      message: 'Database error',
    }
  }

  revalidatePath('/organization/org_2YTLXOCYWhdSyPcWySSsUGR8Ev2')
  redirect('/organization/org_2YTLXOCYWhdSyPcWySSsUGR8Ev2')
}
