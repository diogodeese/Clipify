import { Navbar } from '@components/Navbar/navbar'
import { Header } from '@components/Profile/header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        {user && <Header user={user} />}
      </div>
    </>
  )
}
