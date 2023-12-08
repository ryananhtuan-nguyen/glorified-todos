import { z } from 'zod'

export const CopyCard = z.object({
  id: z.string(),
  // listId: z.string(),
  boardId: z.string(),
})
