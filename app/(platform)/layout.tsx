import React from 'react'
import { Toaster } from 'sonner'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/components/providers/modal-provider'

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster richColors />
      <ModalProvider />
      {children}
    </ClerkProvider>
  )
}

export default PlatformLayout
