'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useCardModal } from '@/hooks/use-card-modal'
import React from 'react'

const CardModal = () => {
  const id = useCardModal((state) => state.id)
  const isOpen = useCardModal((state) => state.isOpen)
  const onClose = useCardModal((state) => state.onClose)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>I am A Modal</DialogContent>
    </Dialog>
  )
}

export default CardModal
