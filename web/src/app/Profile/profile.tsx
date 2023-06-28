import { ProfileAvatar } from '@components/Avatar/avatar'
import { Navbar } from '@components/Navbar/navbar'
import { Banner } from '@components/banner'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { User } from 'src/interfaces/user'

export const Profile = () => {
  const [user, setUser] = useState<User>()

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4003/user/${id}`).then((response) => {
      setUser(response.data)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <div className="flex w-screen flex-col items-center justify-center gap-6 py-8">
        {user && (
          <div className="relative h-60 w-[1200px] rounded-lg bg-neutral-700">
            <Banner bannerUrl={user?.banner} />
            <div className="absolute left-12 top-36 z-10">
              <ProfileAvatar
                imageUrl={user?.avatar}
                username={user?.username}
              />
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
                <Link
                  className="w-fit rounded border border-violet-300 bg-violet-200 px-2 py-1 text-xs font-semibold text-violet-600"
                  to={'/account'}
                >
                  Edit Profile
                </Link>
              </div>
              <div className="flex h-24 items-center justify-between gap-4">
                <div>132 Posts</div>
                <hr className="w-8 rotate-90" />
                <div>99 Followers</div>
                <hr className="w-8 rotate-90" />
                <div>137 Following</div>
              </div>
              <button className="absolute right-3 top-3 inline-flex h-[30px] w-[30px] appearance-none items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-600 focus:outline-none">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
