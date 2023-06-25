import { Navbar } from '@components/Navbar/navbar'
import {
  AvatarSettingSection,
  SettingSection,
} from '@components/Settings/settingSection'
import { TabSelector } from '@components/Settings/tabSelector'

export const Account = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-screen justify-center gap-6 py-8">
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

          <AvatarSettingSection />
        </div>
      </div>
    </>
  )
}
