import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="flex h-48 w-full flex-col rounded border border-neutral-700">
      {children}
    </div>
  )
}
