'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { AuditLog } from '@prisma/client'
import React from 'react'

interface ActivityProps {
  items: AuditLog[]
}

const Activity = ({ items }: ActivityProps) => {
  return <div>Activity</div>
}

export default Activity

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="bg-neutral-200 h-6 w-6" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 bg-neutral-200 mb-2" />
        <Skeleton className="w-full h-10 bg-neutral-200" />
      </div>
    </div>
  )
}
