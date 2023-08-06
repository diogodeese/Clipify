import { MediumAvatar } from '@components/Avatar/avatar'
import { AuthType } from '@redux/auth/authType'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import linksData from './linksData'
import { NavigationLink } from './navigationLink'

export const NavigationMenu = () => {
  const user = useSelector((state: AuthType) => state.auth.user)

  console.log(user)

  return (
    <div className="flex h-full items-center gap-3 text-base">
      {linksData
        .filter((link) => !(user && !link.displayIfSignedIn))
        .map((link, key) => (
          <NavigationLink
            key={key}
            url={link.url}
            name={link.name}
            displayName={link.displayName}
          />
        ))}
      {user && (
        <Link to={'/u/' + user.id}>
          <MediumAvatar username={user.username} avatar={user.avatar} />
        </Link>
      )}
    </div>
  )
}
