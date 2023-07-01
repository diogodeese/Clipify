import { LargeAvatar } from '@components/Avatar/avatar'
import { AvatarCropper } from '@components/Avatar/avatarCropper'

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
