'use client'
import Image from 'next/image'
import React from 'react'
import { Activity, CreditCard, Layout, Settings } from 'lucide-react'

import { cn } from '@/lib/utils'
import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export type Organization = {
  id: string
  slug: string
  imageUrl: string
  name: string
}

interface NavItemProps {
  isActive: boolean
  isExpanded: boolean
  organization: Organization
  onExpand: (id: string) => void
}

const NavItem = ({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) => {
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
  ]

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          {
            'bg-sky-500/10 text-sky-70': isActive && !isExpanded,
          }
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="organization"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  )
}

export default NavItem
