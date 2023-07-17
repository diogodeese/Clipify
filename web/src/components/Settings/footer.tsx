import { ReactNode } from 'react'

interface FooterProps {
  disclaimer: string
  children: ReactNode
}

export const Footer = ({ disclaimer, children }: FooterProps) => {
  return (
    <div className="flex h-[44px] w-full items-center justify-between rounded-b border-t border-neutral-700 bg-neutral-800 px-4">
      <span className="text-neutral-400">{disclaimer}</span>
      {children}
    </div>
  )
}
