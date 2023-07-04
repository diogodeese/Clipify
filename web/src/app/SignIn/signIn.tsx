import { NavigationBar } from '@components/Navbar/navigationBar'
import { auth } from '@services/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { BsGoogle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(async (result) => {
        localStorage.setItem('token', await result.user.getIdToken())
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <NavigationBar />
      <div className="flex w-screen flex-col items-center justify-center gap-6 py-8">
        <button
          className="flex items-center gap-3 rounded border px-4 py-2"
          onClick={handleGoogleSignIn}
        >
          <BsGoogle />
          Sign in with Google
        </button>
      </div>
    </>
  )
}
