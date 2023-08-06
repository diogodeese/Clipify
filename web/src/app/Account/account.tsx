import { NavigationBar } from '@components/Navbar/navigationBar'
import { AvatarSettingSection } from '@components/Settings/avatarSettingSection'
import { Setting } from '@components/Settings/index'
import { TabSelector } from '@components/Settings/tabSelector'
import { User } from '@interfaces/user'
import { userService } from '@services/user'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Account = () => {
  const [user, setUser] = useState<User>()

  const navigate = useNavigate()
  const id = '24f343b5-805f-4513-9d4b-af4328242c72'

  useEffect(() => {
    const getUser = async () => {
      const user = await userService.get(id)
      setUser(user)
    }

    getUser()
  }, [id])

  const settingsData = [
    {
      title: 'Your Username',
      description: 'This is your profile username.',
      input: {
        type: 'text',
        placeholder: 'Username',
        value: user?.username,
        validateInput: (username?: string) => {
          if (!username) return false
          if (username.length < 3) return false
          if (username.length > 32) return false
          return username
        },
      },
      disclaimer: 'Please use 32 characters at maximum.',
      onSave: (username: string) => {
        axios
          .patch(
            `http://localhost:4003/user/username`,
            { username },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          )
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            if (error.response.status === 401) navigate('/signIn')
          })
      },
    },
    {
      title: 'Your Unique Username',
      description: 'This is your unique username.',
      input: {
        type: 'text',
        placeholder: '@Username',
        value: user?.uniqueUsername,
        validateInput: (uniqueUsername?: string) => {
          if (!uniqueUsername) return false
          if (uniqueUsername.length < 3) return false
          if (uniqueUsername.length > 32) return false
          if (uniqueUsername.includes(' ')) return false
          return uniqueUsername
        },
      },
      disclaimer: 'Please use 32 characters at maximum.',
      onSave: (uniqueUsername: string) => {
        axios.patch(
          `http://localhost:4003/user/uniqueUsername`,
          {
            uniqueUsername,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
      },
    },
  ]

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen justify-center gap-6 py-8">
        {user && (
          <>
            <div className="flex w-[200px] flex-col gap-1">
              <TabSelector tabName="Go Back" url={`/u/${user.id}`} />
              <TabSelector tabName="General" url="/account" />
              <TabSelector tabName="Login Connections" url="/test" />
            </div>
            <div className="flex flex-col gap-4">
              {settingsData.map((setting, key) => (
                <Setting.Root key={key}>
                  <Setting.Content
                    title={setting.title}
                    description={setting.description}
                  >
                    <Setting.Input
                      type={setting.input.type}
                      placeholder={setting.input.placeholder}
                      defaultValue={setting.input.value}
                      onChange={(e) => {
                        setting.input.value = e.target.value.trim()
                      }}
                    />
                  </Setting.Content>
                  <Setting.Footer disclaimer={setting.disclaimer}>
                    <Setting.Button
                      onClick={() => {
                        const attribute = setting.input.validateInput(
                          setting.input.value
                        )
                        if (attribute) setting.onSave(attribute)
                      }}
                    />
                  </Setting.Footer>
                </Setting.Root>
              ))}

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
