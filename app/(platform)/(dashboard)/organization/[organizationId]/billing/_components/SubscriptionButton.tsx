'use client'
import { stripeRedirect } from '@/actions/stripe-redirect'
import { Button } from '@/components/ui/button'
import { useAction } from '@/hooks/use-action'
import { useProModal } from '@/hooks/use-pro-modal'
import React from 'react'
import { toast } from 'sonner'

interface SubscriptionButtonProps {
  isPro: boolean
}

const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal()

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data
    },
    onError: (error) => {
      toast.error(error)
    },
  })

  const onClick = () => {
    if (isPro) {
      execute({})
    } else {
      proModal.onOpen()
    }
  }

  return (
    <Button onClick={onClick} variant="primary" disabled={isLoading}>
      {isPro ? 'Manage Subscription' : 'Upgrade to Pro'}
    </Button>
  )
}

export default SubscriptionButton
