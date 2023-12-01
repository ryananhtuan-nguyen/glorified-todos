import { PropsWithChildren } from 'react'

const ListWrapper = ({ children }: PropsWithChildren) => {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>
}

export default ListWrapper
