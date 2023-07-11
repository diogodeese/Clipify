import { NavigationBar } from '@components/Navbar/navigationBar'
import { BsGoogle } from 'react-icons/bs'

export const SignIn = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-6 py-8">
        <button className="flex items-center gap-3 rounded border px-4 py-2">
          <BsGoogle />
          Sign in with Google
        </button>
      </div>
    </>
  )
}
