import React from 'react'
import { Plus } from 'lucide-react'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import MobileSidebar from './MobileSidebar'
import FormPopover from '@/components/form/FormPopover'

const Navbar = () => {
  return (
    <nav className="fixed px-4 z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          >
            Create
          </Button>
        </FormPopover>
        <FormPopover>
          <Button
            size="sm"
            className=" rounded-sm block md:hidden"
            variant="primary"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
