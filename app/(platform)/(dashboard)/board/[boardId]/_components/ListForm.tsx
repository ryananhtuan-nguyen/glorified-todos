'use client'

import React from 'react'
import ListWrapper from './ListWrapper'
import { Plus } from 'lucide-react'

const ListForm = () => {
  return (
    <ListWrapper>
      <button className="w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm">
        <Plus className="h-4 w-4 mr-2" />
        Add a list
      </button>
    </ListWrapper>
  )
}

export default ListForm
