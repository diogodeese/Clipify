import { ReactNode } from 'react'

interface SettingContentProps {
  title: string
  description: string
  children: ReactNode
}

export const SettingContent = ({
  title,
  description,
  children,
}: SettingContentProps) => {
  return (
    <div className="flex flex-grow justify-between px-4">
      <div>
        <div className="mt-3">
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <div className="mt-3">
          <p>{description}</p>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
