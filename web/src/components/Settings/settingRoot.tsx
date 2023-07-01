import { ReactNode } from 'react'

interface SettingRootProps {
  children: ReactNode
}

export const SettingRoot = ({ children }: SettingRootProps) => {
  return (
    <div className="flex h-48 w-full flex-col rounded border border-neutral-700">
      {children}
    </div>
  )
}
