'use client'

import { useProModal } from '@/hooks/use-pro-modal'
import { Dialog, DialogContent } from '../ui/dialog'
import Image from 'next/image'

const ProModal = () => {
  const proModal = useProModal()
  return (
    <Dialog onOpenChange={proModal.onClose} open={proModal.isOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src="/hero.svg" alt="hero" className="object-cover" fill />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
