import React from 'react'

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 srhink-0 hidden md:block">
          {/* Side bar */}
          {/*  */}
        </div>
        {children}
      </div>
    </main>
  )
}

export default OrganizationLayout
