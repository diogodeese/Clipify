import { ProfileAvatar } from '@components/Avatar/avatar'
import { Navbar } from '@components/Navbar/navbar'
import { Banner } from '@components/banner'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-screen flex-col items-center justify-center gap-6 py-8">
        <div className="relative h-60 w-[1200px] rounded-lg bg-neutral-700">
          <Banner />
          <div className="absolute left-12 top-40 z-10">
            <ProfileAvatar
              imageUrl="https://staticg.sportskeeda.com/editor/2022/12/9e117-16710278522537-1920.jpg"
              username="Dee Se"
            />
          </div>
          <div className="relative flex h-36 w-[1200px] items-end justify-start rounded-b-lg bg-neutral-800 px-12 py-8">
            <Link
              className="absolute left-52 top-4 rounded border border-violet-300 bg-violet-200 px-2 py-1 text-sm font-medium text-violet-600"
              to={'/account'}
            >
              Edit Profile
            </Link>
            <span>Clips | 231</span>
          </div>
        </div>
      </div>
    </>
  )
}
