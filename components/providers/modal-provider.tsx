'use client'

import { useEffect, useState } from 'react'
import CardModal from '../modals/card-modal'
import ProModal from '../modals/ProModal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  //Hydration

  if (!isMounted) return null

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  )
}
