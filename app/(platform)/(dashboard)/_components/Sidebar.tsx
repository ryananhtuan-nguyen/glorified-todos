'use client'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Saparator } from '@/components/ui/separator'
interface SidebarProps {
  storageKey?: string
}

const Sidebar = ({ storageKey }: SidebarProps) => {
  return <div>Sidebar</div>
}

export default Sidebar
