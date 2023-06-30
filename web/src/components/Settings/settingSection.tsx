import { LargeAvatar } from '@components/Avatar/avatar'
import { AvatarCropper } from '@components/Avatar/avatarCropper'
import { useState } from 'react'

interface SettingSectionProps {
  title: string
  description: string
  inputType: string
  defaultValue?: string
  inputPlaceholder: string
  disclaimer: string
  userAttribute: string
  onSave: (attribute: string) => void
}

export const SettingSection = (props: SettingSectionProps) => {
  const [attribute, setAttribute] = useState<string>('')
  const [error, setError] = useState<string>()

  return (
    <div className="flex h-48 w-full flex-col rounded border border-neutral-700">
      <div className="flex flex-grow justify-between px-4">
        <div>
          <div className="mt-3">
            <h4 className="text-xl font-semibold">{props.title}</h4>
          </div>
          <div className="mt-3">
            <p>{props.description}</p>
          </div>
          <div className="mt-4">
            {error && <p className="text-xs text-red-400">{error}</p>}
            <input
              className="h-8 w-64 rounded border border-transparent px-2 py-1 text-sm caret-violet-500 transition-colors focus:border-violet-500 focus:outline-none"
              type="text"
              defaultValue={props.defaultValue ? props.defaultValue : ''}
              placeholder={props.inputPlaceholder}
              onChange={(e) => setAttribute(e.target.value.trim())}
            />
          </div>
        </div>
      </div>

      <div className="flex h-[44px] w-full items-center justify-between rounded-b border-t border-neutral-700 bg-neutral-800 px-4">
        <span className="text-neutral-400">{props.disclaimer}</span>
        <div>
          <button
            className="rounded border border-neutral-600 bg-neutral-50 px-2 py-1 text-sm font-medium text-zinc-950 transition-colors hover:bg-neutral-300"
            onClick={() => {
              props.onSave(attribute)
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

interface AvatarSettingSectionProps {
  avatar?: string
  username: string
}

export const AvatarSettingSection = (props: AvatarSettingSectionProps) => {
  return (
    <div className="flex h-36 w-[800px] flex-grow flex-col rounded border border-neutral-700">
      <div className="flex flex-grow justify-between px-4">
        <div className="mt-3">
          <h4 className="text-xl font-semibold">Your Avatar</h4>
          <p className="mt-2">
            Click on the avatar to upload a custom one from your files.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <AvatarCropper>
            <LargeAvatar avatar={props.avatar} username={props.username} />
          </AvatarCropper>
        </div>
      </div>

      <div className="flex h-[44px] w-full items-center rounded-b border-t border-neutral-700 bg-neutral-800 px-4 text-neutral-400">
        Users will recognize you more easily if you have a personalized avatar.
      </div>
    </div>
  )
}
