import { ProfileAvatar } from '@components/Avatar/avatar'
import { Banner } from '@components/banner'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { User } from 'src/interfaces/user'

interface HeaderProps {
  user: User
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <div className="relative h-60 w-[1200px] rounded-lg bg-neutral-700">
      <Banner banner={user.banner} />
      <div className="absolute left-12 top-36 z-10">
        <ProfileAvatar avatar={user.avatar} username={user.username} />
      </div>
      <div className="relative flex h-48 w-[1200px] items-end justify-start gap-8 rounded-b-lg bg-neutral-800 px-12 py-8">
        <div className="flex h-24 w-56 flex-col gap-4 px-2">
          <div className="flex flex-col">
            <span className="text-lg">{user.username}</span>
            <span className="text-sm">
              <span className="text-xs tracking-widest">@</span>
              {user.unique_username}
            </span>
          </div>
        </div>
        <div className="flex h-24 items-center justify-between gap-4">
          <div>132 Posts</div>
          <hr className="w-8 rotate-90" />
          <div>99 Followers</div>
          <hr className="w-8 rotate-90" />
          <div>137 Following</div>
        </div>
        <Link
          className="absolute right-12 top-3 inline-flex h-[30px] w-[30px] appearance-none items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-600 focus:outline-none"
          to={'/account'}
        >
          <MdOutlineEdit />
        </Link>
        <button className="absolute right-3 top-3 inline-flex h-[30px] w-[30px] appearance-none items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-600 focus:outline-none">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  )
}
