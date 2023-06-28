import { Navbar } from '@components/Navbar/navbar'
import {
  AvatarSettingSection,
  SettingSection,
} from '@components/Settings/settingSection'
import { TabSelector } from '@components/Settings/tabSelector'
import { User } from '@interfaces/user'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Account = () => {
  const [user, setUser] = useState<User>()

  const id = '26ebd433-b358-4512-bfff-f2bec60e802a'

  useEffect(() => {
    axios.get(`http://localhost:4003/user/${id}`).then((response) => {
      setUser(response.data)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <div className="flex w-screen justify-center gap-6 py-8">
        {user && (
          <>
            <div className="flex w-[200px] flex-col gap-1">
              <TabSelector tabName="General" url="/account" />
              <TabSelector tabName="Login Connections" url="/test" />
            </div>
            <div className="flex flex-col gap-4">
              <SettingSection
                title="Your Username"
                description="This is your profile username."
                inputType="text"
                inputPlaceholder="Username"
                disclaimer="Please use 32 characters at maximum."
              />

              <AvatarSettingSection
                avatar={user.avatar}
                username={user.username}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}
