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
              <TabSelector tabName="Go Back" url={`/u/${user.id}`} />
              <TabSelector tabName="General" url="/account" />
              <TabSelector tabName="Login Connections" url="/test" />
            </div>
            <div className="flex flex-col gap-4">
              {test.map((t, key) => (
                <SettingSection
                  key={key}
                  title={t.title}
                  description={t.description}
                  inputType={t.inputType}
                  defaultValue={t.defaultValue}
                  inputPlaceholder={t.inputPlaceholder}
                  disclaimer={t.disclaimer}
                  userAttribute={t.userAttribute}
                  onSave={t.onSave}
                />
              ))}

              {/* <SettingSection
                title="Your Username"
                description="This is your profile username."
                inputType="text"
                defaultValue={user.username}
                inputPlaceholder="Username"
                disclaimer="Please use 32 characters at maximum."
                userAttribute={'username'}
                user={user}
                onSave={(username: string) => {
                  axios.patch(
                    `http://localhost:4003/user/username/${id}`,
                    username
                  )
                }}
              />

              <SettingSection
                title="Your Unique Username"
                description="This is your unique username."
                inputType="text"
                defaultValue={user.unique_username}
                inputPlaceholder="@Username"
                disclaimer="Please use 32 characters at maximum."
                userAttribute={'unique_username'}
                user={user}
                onSave={onSave}
              /> */}

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
