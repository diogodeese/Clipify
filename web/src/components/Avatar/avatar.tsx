import * as RadixAvatar from '@radix-ui/react-avatar'
import getUsernameInitials from '@utils/getUsernameInitials'

interface AvatarProps {
  username: string
  imageUrl?: string
}

export const SmallAvatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root className="inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full bg-neutral-700 align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={props.imageUrl}
        alt="Username"
      />
      <RadixAvatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center rounded-full border border-neutral-600 bg-neutral-700 text-sm font-semibold text-violet-500"
        delayMs={600}
      >
        {getUsernameInitials(props.username)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export const MediumAvatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-neutral-700 align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={props.imageUrl}
        alt="Username"
      />
      <RadixAvatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center rounded-full border-2 border-neutral-600 bg-neutral-700 text-base font-semibold text-violet-500"
        delayMs={600}
      >
        {getUsernameInitials(props.username)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export const LargeAvatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root className="inline-flex h-14 w-14 select-none items-center justify-center overflow-hidden rounded-full bg-neutral-700 align-middle">
      <RadixAvatar.Image
        className="h-full w-full select-none rounded-[inherit] object-cover"
        src={props.imageUrl}
        alt="Username"
      />
      <RadixAvatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center rounded-full border-2 border-neutral-600 bg-neutral-700 text-base font-semibold text-violet-500"
        delayMs={600}
      >
        {getUsernameInitials(props.username)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export const ProfileAvatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root className="inline-flex h-36 w-36 select-none items-center justify-center overflow-hidden rounded-full bg-neutral-700 align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={props.imageUrl}
        alt="Username"
      />
      <RadixAvatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center rounded-full border-2 border-neutral-600 bg-neutral-700 text-3xl font-semibold text-violet-500"
        delayMs={600}
      >
        {getUsernameInitials(props.username)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
