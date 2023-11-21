import { OrganizationSwitcher, auth } from '@clerk/nextjs'
import React from 'react'

const OrganizationIdPage = () => {
  const { userId, orgId } = auth()
  return <div>Organization Page</div>
}

export default OrganizationIdPage
