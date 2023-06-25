import { SmallAvatar } from '@components/Avatar/avatar'

export const Post = () => {
  return (
    <div className="flex h-full w-[720px] flex-col rounded-lg border border-neutral-700 bg-neutral-800 ">
      <div className="flex h-14 items-center gap-2 px-4 font-semibold">
        <SmallAvatar username="User Name" />
        User Name
      </div>
      <div className="h-[405px] bg-black"></div>
      <div className="h-32 p-4">Section</div>
    </div>
  )
}
